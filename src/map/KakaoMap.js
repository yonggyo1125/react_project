/* eslint-disable no-undef */
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const MapArea = styled.div`
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? '38.5rem'};
`;

const KakaoMap = ({ width, height, center, zoom, marker, markerImage }) => {
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
        const { lat, lng, image, info } = m;
        const options = {
          position: new kakao.maps.LatLng(lat, lng),
        };

        // 마커 이미지 처리 S
        const mi = image ? image : markerImage;
        if (mi) {
          const mIcon = new kakao.maps.MarkerImage(
            mi,
            new kakao.maps.Size(64, 69),
            { offset: new kakao.maps.Point(27, 69) },
          );

          options.image = mIcon;
        }
        // 마커 이미지 처리 E

        const _marker = new kakao.maps.Marker(options);

        // 인포 윈도우 처리 S
        if (info?.content?.trim()) {
          const { content, clickable, removable } = info;

          const infoWindow = new kakao.maps.InfoWindow({
            content,
            removable: Boolean(removable),
          });

          if (clickable) {
            kakao.maps.event.addListener(_marker, 'click', function () {
              if (_marker.isInfoWindowOpen) {
                // 미노출
                infoWindow.close();

                _marker.isInfoWindowOpen = false;
              } else {
                // 노출
                infoWindow.open(map, _marker);
                _marker.isInfoWindowOpen = true;
              }
            });
          } else {
            infoWindow.open(map, _marker);
          }
        }
        // 인포 윈도우 처리 E

        _marker.setMap(map);

        return _marker;
      });
    }
    // 마커 출력 E
  }, [mapRef, center, zoom, marker, markerImage]);

  return <MapArea ref={mapRef} width={width} height={height} />;
};

export default React.memo(KakaoMap);
