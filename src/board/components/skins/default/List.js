import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ListItems from './ListItems';
import ListSearchForm from './ListSearchForm';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const List = ({ board, items, search, onChange }) => {
  const { t } = useTranslation();
  return (
    <>
      <ListItems items={items} />
      <Wrapper>
        <Link to={'/board/write/' + board.bid}>{t('글쓰기')}</Link>
        <ListSearchForm search={search} onChange={onChange} />
      </Wrapper>
    </>
  );
};

export default React.memo(List);
