import React from 'react';
import KakaoMap from '../../kakaoapi/KakaoMap';

const markers = [
  {
    lat: 37.557756188912954,
    lng: 126.94062742683245,
    info: { content: '<h1>출력</h1>', removable: true },
  },
  {
    lat: 37.557287959390024,
    lng: 126.94120499658828,
    image:
      'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png',
    info: { content: '<h1>출력2</h1>', clickable: true }, // 클릭시 토글 형태로 인포윈도우 노출
  },
  { lat: 37.561184514897825, lng: 126.94069261563956 },
];

const options = {
  //currentLocation: true, // 현재 위치 기반
  address: '경기도 용인시 에버랜드로 199',
  center: {
    lat: 33.450701,
    lng: 126.570667,
  },
  zoom: 3,
  //marker: markers,
  markerImage:
    'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png',
};

const Main = () => {
  return <KakaoMap {...options} />;
};

export default React.memo(Main);
