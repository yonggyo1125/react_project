import requestData from '../../commons/libs/requestData';

export const apiList = (search) => {
  search = search ?? {};

  const qs = [];
  for (const [k, v] of Object.entries(search)) {
    qs.push(`${k}=${v}`);
  }

  let url = '/restaurant/list';
  if (qs.length > 0) url += `?${qs}`;

  return requestData(url);
};

export const apiGet = (rstrId) => requestData(`/restaurant/info/${rstrId}`);
