import apiRequest from '../../commons/libs/apiRequest';
import requestData from '../../commons/libs/requestData';

export const write = (bid, form) =>
  saveProcess(`/board/write/${bid}`, 'POST', form);

export const update = (seq, form) =>
  saveProcess(`/board/update/${seq}`, 'PATCH', form);

function saveProcess(url, method, form) {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const res = await apiRequest(url, method, form);
        if (res.status === 201) {
          resolve(res.data.data);
          return;
        }

        reject(res.data);
      } catch (err) {
        console.error(err);
        reject(err);
      }
    })();
  });
}

// 게시글 하나 조회
export const getInfo = (seq) => requestData(`/board/info/${seq}`);

// 게시글 목록 조회
export const getList = (bid, search) => {
  search = search ?? {};
  let qs = Object.entries(search)
    .map(([k, v]) => `${k}=${v}`)
    .join('&');

  qs = qs ? `?${qs}` : qs;

  const url = `/board/list/${bid}${qs}`;

  return requestData(url);
};

export const deleteData = (seq) =>
  requestData(`/board/delete/${seq}`, 'DELETE');
