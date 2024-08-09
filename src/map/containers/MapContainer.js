/* eslint-disable no-undef */
import React, { useEffect, useCallback, useRef } from 'react';

const MapContainer = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const mapEl = mapRef.current;
    const lat = 37.557756188912954;
    const lng = 126.94062742683245;
    mapEl.style.width = 1000 + 'px';
    mapEl.style.height = 500 + 'px';
    const position = new kakao.maps.LatLng(lat, lng);
    const map = new kakao.maps.Map(mapEl, {
      center: position,
      level: 3,
    });
  }, [mapRef]);

  return <div ref={mapRef}></div>;
};

export default React.memo(MapContainer);
