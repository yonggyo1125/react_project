import React, { useEffect, useState } from 'react';
import loadable from '@loadable/component';
const KakaoSdk = loadable(() => import('../components/KakaoSdk'));

const MapContainer = () => {
  const [kakao, setKakao] = useState(window.kakao);
  useEffect(() => {
    setKakao(kakao);
  }, [window.kakao]);

  console.log(kakao);

  return <KakaoSdk />;
};

export default React.memo(MapContainer);
