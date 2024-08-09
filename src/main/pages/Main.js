import React from 'react';
import KakaoMap from '../../map/KakaoMap';

const markers = [
  {lat: 37.51201947476104, lng: 127.52778145250696},
  {lat: 37.29167346824914, lng: 127.20660743958962},
  {lat: 37.28911099541946, lng:  127.1981311776425},
];

const Main = () => {
   
  return (
    <KakaoMap
      center={{ lat: 37.51201947476104, lng: 127.52778145250696 }}
      zoom={4}
      marker={markers}
    />
  );
};

export default React.memo(Main);
