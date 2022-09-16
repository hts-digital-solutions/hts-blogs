const website_config = require("../website.json");

export function getMeta(url, callback) {
  var img = new Image();
  img.src = url;
  img.onload = function () {
    callback(this.width, this.height);
  };
}

export function _config(key) {
  return website_config[key] ?? "";
}
