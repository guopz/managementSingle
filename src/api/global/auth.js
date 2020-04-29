import Request from '@/config/request/http';

export const getAuth = function(params) {
  return Request({
    url: '/getAuth',
    method: 'post',
    data: params
  });
}
