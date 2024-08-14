import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../apis/apiInfo';
import Loading from '../../../commons/components/Loading';

const ViewContainer = ({ setPageTitle }) => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);

  const { seq } = useParams();

  useEffect(() => {
    setLoading(true);

    apiGet(seq).then((item) => {
      setPageTitle(item.title);
      setItem(item);
    });

    setLoading(false);
  }, [seq, setPageTitle]);

  if (loading) {
    return <Loading />;
  }

  return <></>;
};

export default React.memo(ViewContainer);
