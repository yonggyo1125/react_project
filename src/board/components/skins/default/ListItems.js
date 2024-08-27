import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Wrapper = styled.ul``;

const ListItem = ({ item, className }) => {
  const { seq, subject, poster, member, viewCount, commentCount, createdAt } =
    item;
  console.log(item);
  return (
    <li className={className}>
      <Link to={'/board/view/' + item.seq} className="subject">
        {item.subject}
      </Link>
      <div className="post-info">
        <span className="poster">{item.poster}</span>
      </div>
    </li>
  );
};

const StyledListItem = styled(ListItem)``;

const NoData = styled.li``;

const ListItems = ({ items }) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      {items && items.length > 0 ? (
        items.map((item) => <StyledListItem key={item.seq} item={item} />)
      ) : (
        <NoData>{t('조회된_게시글이_없습니다.')}</NoData>
      )}
    </Wrapper>
  );
};

export default React.memo(ListItems);
