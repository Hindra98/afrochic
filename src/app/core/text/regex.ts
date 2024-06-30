export const isEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const extractParamsUrl = (url: string) => {
  url = url.replace("?", "");
  const urls = url.split("&");
  let result = {};

  urls.forEach(function (el) {
    var param = el.split("=");
    result[param[0]] = param[1];
  });

  return result;
};
