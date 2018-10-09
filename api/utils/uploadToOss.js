const OSS = require('ali-oss');
const url = require('url')

module.exports = async function(osskey, filepath, prefix) {
  const client = new OSS({
    region: osskey.region,
    accessKeyId: osskey.accessKeyId,
    accessKeySecret: osskey.accessKeySecret,
    bucket: osskey.bucket
  })


  let result = await client.put(prefix, filepath);
  if (osskey.cdn) {
    return url.resolve(osskey.cdn, prefix)
  } else {
    return result.url
  }
}