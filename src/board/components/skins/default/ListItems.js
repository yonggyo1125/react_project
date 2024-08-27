import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const Wrapper = styled.ul``;

const ListItem = ({ item, className }) => {
  return <li className={className}></li>;
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
