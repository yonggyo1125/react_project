import apiRequest from '../../commons/libs/apiRequest';

export default function apiApply(form) {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const res = await apiRequest('/activity/reservation', 'POST', form);
        console.log(res);
      } catch (err) {
        console.log('err', err);
        reject(err);
      }
    })();
  });
}
