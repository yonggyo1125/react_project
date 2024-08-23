import requestData from '../requestData';

// 찜하기 
export const addWish = (seq, type) => requestData(`/wish/${type}/${seq}`);

// 찜하기 해제 
export const removeWish = (seq, type) => requestData(`/wish/${type}/${seq}`, 'DELETE');


// 찜한 목록 컨텐츠 번호(seq, contentId, rstrId)
export const getWishList = (type) => requestData(`/wish/${type}`);
