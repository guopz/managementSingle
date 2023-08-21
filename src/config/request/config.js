// let USERID = '5b67fc334c6dae523be515f3';
// export let baseURL = `https://www.easy-mock.com/mock/${USERID}/Admt`;

let USERID;
let BASEAD;
let BASE;

let { NODE_ENV } = process.env;
if (NODE_ENV === "development") {
  USERID = '251297';
  BASEAD = 'http://rap2api.taobao.org';
  BASE = `${BASEAD}/app/mock/${USERID}`;
}
else {
  USERID = '5b67fc334c6dae523be515f3';
  BASEAD = 'https://www.easy-mock.com';
  BASE = `${BASEAD}/mock/${USERID}/Admt`;
}

export let baseURL = BASE;
