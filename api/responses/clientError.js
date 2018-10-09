module.exports = function(data) {

  const res = this.res;

  let result = {};
  result.code = 400;
  result.data = data;
  if (typeof data === 'string') {
    result.message = data;
  } else {
    result.message = 'client error';
  }

  return res.status(200).json(result);
}
