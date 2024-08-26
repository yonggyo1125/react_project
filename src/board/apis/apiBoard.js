import apiRequest from '../../commons/libs/apiRequest';
import requestData from '../../commons/libs/requestData';

export const write = (form) => new Promise((resolve, reject) => {});

export const update = (form) => new Promise((resolve, reject) => {});

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
