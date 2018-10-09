module.exports = function(data) {

  const res = this.res;

  let result = {};
  result.code = 500;
  result.data = data;
  if (typeof data === 'string') {
    result.message = data;
  } else {
    result.message = 'serve error';
  }

  return res.status(200).json(result);
}
