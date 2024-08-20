import React, { useCallback, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import map from '../../images/map/map.png';
import kangwon from '../../images/map/kangwon.png';
import seoul from '../../images/map/seoul.png';
import gyeonggi from '../../images/map/gyeonggi.png';
import choongnam from '../../images/map/choongnam.png';
import choongbuk from '../../images/map/choongbuk.png';
import styled from 'styled-components';
const Wrapper = styled.div``;

function getImage(location) {
  switch (location) {
    case '강원':
      return kangwon;
    case '서울':
      return seoul;
    case '경기':
      return gyeonggi;
    case '충남':
      return choongnam;
    case '충북':
      return choongbuk;
    default:
      return map;
  }
}

const SearchMap = () => {
  const [searchParams] = useSearchParams();
  const sido = searchParams.get('sido');

  const [image, setImage] = useState(() => getImage(sido));
  const onChange = useCallback((location) => {
    setImage(() => getImage(location));
  }, []);
  return (
    <>
      <Wrapper>
        <img src={image} alt="지도" width="500" useMap="#imgmap" />
      </Wrapper>
      <map id="imgmap" name="imgmap">
        <area
          onMouseOver={() => onChange('강원')}
          shape="poly"
          alt="강원도"
          coords="149,93,162,109,168,103,182,103,190,117,203,114,209,128,219,133,224,140,227,149,211,157,216,175,219,190,227,190,243,200,253,200,251,211,252,227,246,236,244,255,249,269,267,268,274,256,288,263,304,256,318,258,316,269,333,272,353,278,375,288,382,274,384,269,394,281,420,279,440,285,453,268,451,249,437,226,417,196,413,182,386,143,355,106,324,30,316,58,292,78,255,78,218,78,183,77,157,85,147,93,147,94,147,94,151,91,254,49"
          href="/recommend/tour?sido=강원"
          target=""
        />
        <area
          onMouseOver={() => onChange('서울')}
          shape="poly"
          alt="서울"
          title=""
          coords="118,197,128,196,137,192,147,183,153,178,158,183,157,195,165,203,169,211,161,217,152,219,142,215,139,221,133,221,128,218,120,202"
          href="/recommend/tour?sido=서울"
          target=""
        />
        <area
          onMouseOver={() => onChange('경기')}
          shape="poly"
          alt="경기,인천"
          coords="60,168,79,161,101,173,106,135,119,132,133,112,145,93,145,89,162,112,170,104,181,104,192,116,203,113,208,130,218,138,226,152,214,174,219,191,159,199,158,183,151,177,133,193,118,197,94,206,74,229,60,218,61,193"
          href="/recommend/tour?sido=경기"
        />
        <area
          onMouseOver={() => onChange('경기')}
          shape="poly"
          alt="경기,인천"
          coords="94,216,123,208,133,223,146,220,157,221,171,207,158,196,225,179,218,190,231,191,243,202,256,201,248,208,250,227,243,248,242,260,238,269,225,266,226,281,190,301,180,307,163,294,144,303,121,296,113,281,118,263,104,274,95,255,77,255,95,245,108,246,91,227"
          href="/recommend/tour?sido=경기"
        />
        <area
          onMouseOver={() => onChange('충남')}
          shape="poly"
          alt="충청남도"
          coords="32,332,43,301,57,294,55,322,70,312,57,290,68,285,80,294,82,279,101,294,122,300,124,319,132,306,170,299,203,331,188,333,183,357,193,367,199,379,213,387,221,382,212,406,220,421,229,426,231,444,206,454,188,434,185,430,173,439,154,425,138,429,120,445,107,452,100,444,91,428,78,426,85,417,85,405,78,398,84,391,79,379,73,349,73,342,71,359,57,340,72,386,61,388,53,356,49,349,46,335,39,345"
          href="/recommend/tour?sido=충남"
        />
        <area
          onMouseOver={() => onChange('충북')}
          shape="poly"
          alt="충북"
          coords="181,309,187,298,190,288,194,299,205,290,216,282,234,262,242,265,254,269,267,266,275,251,287,261,307,255,318,257,314,269,342,274,359,281,358,285,335,307,332,319,322,325,311,313,296,319,286,326,288,341,274,339,256,356,254,358,262,368,258,407,277,411,282,413,283,419,278,422,273,444,262,449,241,447,230,443,224,434,222,415,211,408,213,384,217,386,201,379,192,374,190,360,181,355,185,333,202,334,198,325,183,307"
          href="/recommend/tour?sido=충북"
        />
      </map>
    </>
  );
};

export default React.memo(SearchMap);
