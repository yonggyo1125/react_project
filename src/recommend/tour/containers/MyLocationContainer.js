/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { apiList } from '../apis/apiInfo';
import Loading from '../../../commons/components/Loading';
import KakaoMap from '../../../kakaoapi/KakaoMap';

const MyLocationContainer = () => {
  const [search, setSearch] = useState({
    sido: '',
    sigungu: '',
    limit: 100000,
  });
  const [center, setCenter] = useState([]); // 지도 중심 좌표(현재 위치)
  const [locations, setLocations] = useState([]); // 마커 표기할 위도, 경도 정보

  /* 현재 위치의 시도, 시군구 찾기 S */
  useEffect(() => {
    const geocoder = new kakao.maps.services.Geocoder();

    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      setCenter({ lat: latitude, lng: longitude });
      geocoder.coord2RegionCode(longitude, latitude, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          for (const r of result) {
            if (r.region_type === 'H') {
              setSearch((search) => ({
                ...search,
                //sido: r.region_1depth_name,
                sido: '경기도',
                //sigungu: r.region_2depth_name,
                //sigungu: '연천군',
              }));
              break;
            }
          }
        }
      });
    });
  }, [setSearch, setCenter]);
  /* 현재 위치의 시도, 시군구 찾기 E */

  useEffect(() => {
    const { sido } = search;
    if (!sido?.trim()) {
      return;
    }

    (async () => {
      try {
        const res = await apiList(search);

        // 마커 표기 좌표 가공 처리 S
        if (!res?.items || res?.items?.length === 0) {
          return;
        }

        const _locations = res.items
          .filter((item) => item.latitude && item.longitude)
          .map((item) => ({
            lat: item.latitude,
            lng: item.longitude,
          }));

        setLocations(_locations);
        // 마커 표기 좌표 가공 처리 E
      } catch (err) {
        console.error(err);
      }
    })();
  }, [search]);

  if (center?.length === 0 || locations?.length === 0) {
    return <Loading />;
  }

  return <KakaoMap center={center} marker={locations} />;
};

export default React.memo(MyLocationContainer);
