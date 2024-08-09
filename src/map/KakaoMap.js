/* eslint-disable no-undef */
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const MapArea = styled.div`
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? '38.5rem'};
`;

const KakaoMap = ({ width, height, center, zoom, marker }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const mapEl = mapRef.current;

    // 지도 가운데 배치 S
    const position = new kakao.maps.LatLng(
      center?.lat ?? 37.557756188912954,
      center?.lng ?? 126.94062742683245,
    );
    const map = new kakao.maps.Map(mapEl, {
      center: position,
      level: zoom || 3,
    });
    // 지도 가운데 배치 E

    // 마커 출력 S
    if (marker) {
      let _markers = marker;
      if (!Array.isArray(marker)) _markers = [marker];

      const markers = _markers.map((m) => {
        const { lat, lng } = m;
        const options = {
          position: new kakao.maps.LatLng(lat, lng),
        };

        const _marker = new kakao.maps.Marker(options);
        _marker.setMap(map);

        return _marker;
      });
    }
    // 마커 출력 E
  }, [mapRef, center, zoom, marker]);

  return <MapArea ref={mapRef} width={width} height={height} />;
};

export default React.memo(KakaoMap);
