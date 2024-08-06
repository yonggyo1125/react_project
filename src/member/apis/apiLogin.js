import apiRequest from '../../commons/libs/apiRequest';

// 로그인 처리
export const apiLogin = (form) =>
  new Promise((resolve, reject) => {
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
