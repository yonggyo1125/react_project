import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

const Wrapper = styled.ul``;

const ListItem = ({ item, className }) => {
  const {
    seq,
    notice,
    subject,
    poster,
    member,
    viewCount,
    commentCount,
    createdAt,
  } = item;

  return (
    <li className={className}>
      <Link to={'/board/view/' + seq} className="subject">
        {notice && `[${t('공지')}]`}
        {subject}
        {commentCount > 0 && `(${commentCount.toLocaleString()})`}
      </Link>
      <div className="post-info">
        <span className="poster">
          {poster}
          {member !== null && `(${member.email})`}
        </span>
        {viewCount > 0 && (
          <span className="view-count">
            {t('조회수')}: {viewCount.toLocaleString()}
          </span>
        )}
        <span className="datetime">{createdAt}</span>
      </div>
    </li>
  );
};

const StyledListItem = styled(ListItem)`
  display: flex;
  border-bottom: 1px solid #ccc;
  padding: 0 10px;
  height: 45px;
  align-items: center;

  .subject {
    flex-grow: 1;
    height: 44px;
    line-height: 44px;
  }

  .post-info {
    width: 300px;
    text-align: right;
  }
`;

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
