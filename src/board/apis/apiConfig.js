import requestData from '../../commons/libs/requestData';

export default function apiConfig(bid) {
  return requestData(`/board/config/${bid}`);
}
