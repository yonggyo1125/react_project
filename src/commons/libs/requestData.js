import apiRequest from './apiRequest';

const requestData = (url) =>
  new Promise((resolve, reject) => {
    (async () => {
      try {
        const res = await apiRequest(url);
        if (res.status < 200 || res.status >= 400) {
          reject(res.data);
          return;
        }

        resolve(res.data.data);
      } catch (err) {
        reject(err);
      }
    })();
  });

export default requestData;
