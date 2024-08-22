import requestData from '../../commons/libs/requestData';

export const apiGet = (seq) => requestData(`/activity/reservation/info/${seq}`);

export const apiList = (search) => {
  search = search ?? {};

  const qs = [];
  for (const [k, v] of Object.entries(search)) {
    qs.push(`${k}=${v}`);
  }

  let url = '/activity/reservation';
  if (qs.length > 0) url += `?${qs}`;

  return requestData(url);
};
