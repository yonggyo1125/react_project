import apiRequest from '../../commons/libs/apiRequest';

export const apiJoin = (form) =>
  new Promise((resolve, reject) => {
    apiRequest('/account', 'POST', form)
      .then((data) => console.log(data))
      .catch((err) => reject(err));
  });
