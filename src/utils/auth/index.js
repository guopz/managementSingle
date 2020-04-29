const PEOKEY = 'Managment';

export function getToken() {
  return JSON.parse(sessionStorage.getItem(PEOKEY)) && JSON.parse(sessionStorage.getItem(PEOKEY)).token;
}

export function setToken(token) {
  return sessionStorage.setItem(PEOKEY, JSON.stringify({ token }));
}
