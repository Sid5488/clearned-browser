const args = () => {
  let url;

  process.argv.forEach((val, index) => {
    url = val;
  });

  return url;
};

module.exports = { args };
