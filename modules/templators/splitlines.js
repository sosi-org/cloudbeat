'use strict';

class split_lines {
  static project(str) {
      const str = str.replace('\r\n', '\n').replace('\n\r', '\n');
      // while (str.startsWith(' ')) str = str[1];
      return str;
  }
  resolve(str) {
      return project(str).split('\n');
  }
  generate(lines) {
      return lines.join('\n');
  }
}

require('../templatore-store.js').register_templator(
  split_lines, ['string'], ['[]'] /* ? */
);

module.exports = {
  util: {
  },
  split_lines,
};
