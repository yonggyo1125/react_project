import requestData from '../../../commons/libs/requestData';

export const apiGet = (seq) => requestData(`/activity/info/${seq}`);
