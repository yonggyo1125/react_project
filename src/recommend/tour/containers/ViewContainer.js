import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { apiGet } from '../apis/apiInfo';
import Loading from '../../../commons/components/Loading';
import KakaoMap from '../../../kakaoapi/KakaoMap';
import ItemImage from '../components/ItemImage';
import ItemDescription from '../components/ItemDescription';

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const ViewContainer = ({ setPageTitle }) => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mapOptions, setMapOptions] = useState({ height: '400px', zoom: 3 });

  const { seq } = useParams();

  useEffect(() => {
    setLoading(true);

    apiGet(seq).then((item) => {
      setPageTitle(item.title);
      setItem(item);
      const position = { lat: item.latitude, lng: item.longitude };
      setMapOptions((opt) => {
        const options = item.latitude
          ? { ...opt, center: position, marker: position }
          : { ...opt, address: item.address };

        return options;
      });
    });

    setLoading(false);
  }, [seq, setPageTitle]);

  if (loading || !item) {
    return <Loading />;
  }

  return (
    <>
      <Wrapper>
        {item.photoUrl && <ItemImage images={item.photoUrl} />}
        <ItemDescription />
      </Wrapper>
      <KakaoMap {...mapOptions} />
    </>
  );
};

export default React.memo(ViewContainer);
