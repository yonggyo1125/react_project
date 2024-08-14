import apiRequest from '../../commons/libs/apiRequest';
import cookies from 'react-cookies';

// 로그인 처리
export const apiLogin = (form) =>
  new Promise((resolve, reject) => {
    cookies.remove('token', { path: '/' });
    apiRequest('/account/token', 'POST', form)
      .then((res) => {
        if (!res.data.success) {
          // 검증 실패, 로그인 실패
          reject(res.data);
          return;
        }

        // 로그인 성공시 - 토큰 데이터
        resolve(res.data);
      })
      .catch((err) => reject(err));
  });

// 로그인한 회원정보 조회
export const apiUser = () =>
  new Promise((resolve, reject) => {
    apiRequest('/account')
      .then((res) => {
        if (res.status !== 200) {
          reject(res.data);
          cookies.remove('token', { path: '/' });
          return;
        }

        resolve(res.data.data);
      })
      .catch((err) => {
        cookies.remove('token', { path: '/' });
        reject(err);
      });
  });
