const moment = require("moment");

const formatMessage = (id, username, msg) => {
  return {
    id,
    username,
    msg,
    time: moment().format("h:mm A"),
  };
};

module.exports = formatMessage;
