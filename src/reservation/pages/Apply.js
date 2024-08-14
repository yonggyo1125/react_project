import React from 'react';
import MemberOnlyContainer from '../../member/containers/MemberOnlyContainer';
const Apply = () => {
  return (
    <MemberOnlyContainer>
      <h1>예약 신청</h1>
    </MemberOnlyContainer>
  );
};

export default React.memo(Apply);
