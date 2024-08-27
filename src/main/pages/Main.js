import React from 'react';
import SlideBanner from '../../commons/components/SlideBanner';

const options = {
  loop: true,
  speed: 1000,
};

const Main = () => {
  return <SlideBanner width={600} options={options} />;
};

export default React.memo(Main);
