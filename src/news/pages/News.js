import React, { useEffect, useState } from 'react';

const News = () => {
  const [items, setItems] = useState([
    {
      title: '제목',
      description: '내용',
      urlToImage: 'https://www.imdak.com/web/upload/wp/167417/logo.toppc.png',
      url: 'https://www.naver.com',
    },
    {
      title: '제목',
      description: '내용',
      urlToImage: 'https://www.imdak.com/web/upload/wp/167417/logo.toppc.png',
      url: 'https://www.naver.com',
    },
    {
      title: '제목',
      description: '내용',
      urlToImage: 'https://www.imdak.com/web/upload/wp/167417/logo.toppc.png',
      url: 'https://www.naver.com',
    },
    {
      title: '제목',
      description: '내용',
      urlToImage: 'https://www.imdak.com/web/upload/wp/167417/logo.toppc.png',
      url: 'https://www.naver.com',
    },
  ]);

  useEffect(() => {
    /*
    const url =
      'https://newsapi.org/v2/top-headlines?country=kr&apiKey=6593897e9b3d40178104e2cb158f2866';

    fetch(url)
      .then((res) => res.json())
      .then((json) => console.log(json));
      */
  }, []);

  return <h1>뉴스</h1>;
};

export default React.memo(News);
