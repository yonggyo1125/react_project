import apiRequest from '../../commons/libs/apiRequest';
import cookies from 'react-cookies';
import requestData from '../../commons/libs/requestData';

export const apiJoin = (form) =>
  new Promise((resolve, reject) => {
    cookies.remove('token', { path: '/' });

    apiRequest('/account', 'POST', form)
      .then((res) => {
        if (res.status !== 201) {
          // 검증 실패
          reject(res.data);
          return;
        }

        resolve(res.data); // 성공
      })
      .catch((err) => {
        reject(err);
      });
  });

// 이메일 인증 메일 보내기
export const apiEmailAuth = (email) =>
  requestData(`/email/verify?email=${email}`);

// 인증 메일 코드 검증 처리
export const apiEmailAuthCheck = (authNum) =>
  requestData(`/email/auth_check?authNum=${authNum}`);
