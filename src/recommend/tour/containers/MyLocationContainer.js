/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { apiList } from '../apis/apiInfo';

const MyLocationContainer = () => {
  const [search, setSearch] = useState({
    sido: '',
    sigungu: '',
    limit: 100000,
  });

  /* 현재 위치의 시도, 시군구 찾기 S */
  useEffect(() => {
    const geocoder = new kakao.maps.services.Geocoder();

    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      geocoder.coord2RegionCode(longitude, latitude, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          for (const r of result) {
            if (r.region_type === 'H') {
              setSearch((search) => ({
                ...search,
                sido: r.region_1depth_name,
                sigungu: r.region_2depth_name,
              }));
              break;
            }
          }
        }
      });
    });
  }, [setSearch]);
  /* 현재 위치의 시도, 시군구 찾기 E */

  useEffect(() => {
    const { sido } = search;
    if (!sido?.trim()) {
      return;
    }

    (async () => {
      try {
        const res = await apiList(search);
        console.log(search, res);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [search]);

  return <></>;
};

export default React.memo(MyLocationContainer);
