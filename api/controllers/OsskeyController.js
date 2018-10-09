/**
 * OsskeyController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  // 隐藏osskey中的 accessKeySecret
  index: async function(req, res) {
    const result = await Osskey.find()
    res.ok(result.map((key) => {
      key.accessKeySecret = '******';
      return key;
    }))
  }

};

