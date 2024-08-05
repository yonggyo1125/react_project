export default function apiRequest(url, method = 'GET', data, headers) {
  // url - http://naver.com https://naver.com

  if (!/^http[s]?:/i.test(url)) {
    // API 서버로 요청 보내는 주소인 경우
    url = process.env.REACT_APP_API_URL + url;
    // /account  -> http://localhost:3000/api/v1/account
  }

  const options = {
    method,
  };

  // BODY가 있는 요청인 경우
  if (['POST', 'PUT', 'PATCH'].includes(method.toUpperCase()) && data) {
    headers = headers ?? {};
    headers['Content-Type'] = 'application/json; charset=UTF-8';
    options.headers = headers;
    options.body = JSON.stringify(data); // 요청 데이터
  }

  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => resolve(json))
      .catch((err) => reject(err));
  });
}
