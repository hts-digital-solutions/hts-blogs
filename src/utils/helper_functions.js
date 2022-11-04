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

export function getCookie(cname, cookies) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(cookies);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return null;
}

export function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export function notify(data, router) {
  navigator.serviceWorker.ready.then(function (registration) {
    registration.showNotification('Notification', {
      ...data,
      vibrate: [300, 100, 400],
      silent: false
    });

    // self.addEventListener('click', function () {
    //   data?.url && router.push(data?.url)
    // })

  });
}