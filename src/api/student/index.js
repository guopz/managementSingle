import Request from '@/config/request/http';

export const getStudentList = function(params) {
  return Request({
    url: '/getStudentList',
    method: 'post',
    data: params
  });
}
