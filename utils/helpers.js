const dayjs = require('dayjs')
module.exports = {
    format_date: date => {
      const formatDate = `${new Date(date).getMonth() + 1}-${new Date(date).getDate()}-${new Date(
        date
      ).getFullYear()}`;
      return dayjs(formatDate).format('MM/DD/YYYY')
    },
    format_url: url => {
      return url
        .replace('http://', '')
        .replace('https://', '')
        .replace('www.', '')
        .split('/')[0]
        .split('?')[0];
    },
  };
  