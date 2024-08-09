/* eslint-disable no-undef */
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const MapArea = styled.div`
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? '38.5rem'};
`;

const KakaoMap = ({ width, height, center }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const mapEl = mapRef.current;

    const position = new kakao.maps.LatLng(
      center?.lat ?? 37.557756188912954,
      center?.lng ?? 126.94062742683245,
    );
    const map = new kakao.maps.Map(mapEl, {
      center: position,
      level: 3,
    });
  }, [mapRef, center]);

  return <MapArea ref={mapRef} width={width} height={height} />;
};

export default React.memo(KakaoMap);
