import apiRequest from '../../../commons/libs/apiRequest';

export const apiList = (search) => {
  search = search ?? {};
  const qs = [];
  for (const [k, v] of Object.entries(search)) {
    qs.push(`${k}=${v}`);
  }

  let url = '/tour/list';
  if (qs.length > 0) url += `?${qs.join('&')}`;
};
