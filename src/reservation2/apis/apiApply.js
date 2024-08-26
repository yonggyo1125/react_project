import apiRequest from '../../commons/libs/apiRequest';

export default function apiApply(form) {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const res = await apiRequest('/reservation/apply', 'POST', form);
        if (res.status >= 200 && res.status < 300) {
          resolve(res.data.data);
          return;
        }

        reject(res.data);
      } catch (err) {
        reject(err);
      }
    })();
  });
}
