import apiRequest from '../apiRequest';

export const apiFileDelete = (seq) =>
  new Promise((resolve, reject) => {
    (async () => {
      try {
        const res = await apiRequest(`/file/delete/${seq}`, 'DELETE');
        if (res.status === 200) {
          resolve(res.data.data);
          return;
        }

        reject(res.data);
      } catch (err) {
        reject(err);
      }
    })();
  });
