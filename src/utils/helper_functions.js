export function getMeta(url, callback) {
  var img = new Image();
  img.src = url;
  img.onload = function () {
    callback(this.width, this.height);
  };
}
