import React from 'react';
import MemberOnlyContainer from '../../member/containers/MemberOnlyContainer';

const MypageMain = () => {
  return (
    <MemberOnlyContainer>
      <h1>마이페이지</h1>
    </MemberOnlyContainer>
  );
};

export default React.memo(MypageMain);
