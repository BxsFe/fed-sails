const uploadToOss = require('../../utils/uploadToOss');
const path = require('path');
const baseOssPath = 'autoUpload'

module.exports = {

  friendlyName: 'Upload',

  description: 'Upload something.',

  files: ['file'],

  inputs: {
  	file: {
      example: '===',
      required: true
    },
    path: {
      type: 'string',
      required: true
    }
  },

  fn: async function (inputs, exits) {
    const res = this.res;
    const oss_key = await Osskey.findOne({type: 'assets'});
    if (!oss_key) {
      return res.serveError('no [assets] osskey found')
    }
    const oss_path = await OssPath.findOne({path: inputs.path});
    if (!oss_path) {
      return res.serveError('no OssPath found')
    }

    inputs.file.upload(function (err, uploadedFiles){
      if (err) {
        return exits.error(err);
      }
      if (!uploadedFiles[0]) {
        return res.clientError('file not found');
      }
      const file = uploadedFiles[0];
      const filename = path.basename(file.fd);
      const prefix = path.join(baseOssPath, oss_path.path, filename);
      
      uploadToOss(oss_key, file.fd, prefix).then(result => {
        res.ok(result)
      }).catch(e => {
        res.serveError(e)
      })
    });
  }

};
