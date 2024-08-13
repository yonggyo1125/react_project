/* eslint-disable no-undef */
import apiRequest from '../../commons/libs/apiRequest';

export const apiList = (search) => {
  search = search ?? {};

  const qs = [];
  for ([k, v] of Object.entries(search)) {
    qs.push(`${k}=${v}`);
  }

  let url = '/restaurant/list';
  if (qs.length > 0) url += `?${qs}`;

  return new Promise((resolve, reject) => {
    apiRequest(url)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  });
};
