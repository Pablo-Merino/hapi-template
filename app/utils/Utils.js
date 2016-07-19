var log = (type, message) => {
  console.log(`[${type.toUpperCase()}] ${message}`);
}

exports.log = log;