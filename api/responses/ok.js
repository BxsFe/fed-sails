module.exports = function(data) {

  const res = this.res;

  let result = {};
  result.code = 200;
  result.data = data;
  if (typeof data === 'string') {
    result.message = data;
  } else {
    result.message = 'success';
  }

  return res.status(200).json(result);
}
