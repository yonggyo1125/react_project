import axios from 'axios';
import cookies from 'react-cookies';

export default function apiRequest(url, method = 'GET', data, headers) {
  /**
   * url - http://jsonplaceholder.. https://
   */
  if (!/^http[s]?/i.test(url)) {
    // 외부 URL이 아닌 경우 - http://localhost:4000/api/v1/account
    url = process.env.REACT_APP_API_URL + url;
  }

  /**
   * axios 응답 코드가 2xx ~ 3xx 만 정상 응답 판단
   *       그외의 응답 코드는 예외 발생 -> 4xx 역시 오류로 판단 -> 정상 응답의 범위를 변경
   */

  const options = {
    method,
    url,
    validateStatus: (status) => status < 500, // 500 미만의 응답 코드는 정상 응답
  };

  if (['POST', 'PUT', 'PATCH'].includes(method.toUpperCase()) && data) {
    options.data = data;
  }

  const token = cookies.load('token');
  if (token && token.trim()) {
    headers = headers ?? {};
    headers.Authorization = `Bearer ${token}`;
  }

  if (headers) options.headers = headers;

  return axios(options);
}
