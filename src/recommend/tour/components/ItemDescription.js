import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const Wrapper = styled.div``;

const ItemDescription = ({ item }) => {
  const { t } = useTranslation();
  const { period, title, address, tel, course, description } = item;
  return (
    <Wrapper>
      {period && (
        <dl>
          <dt>{t('행사기간')}</dt>
          <dd>{period}</dd>
        </dl>
      )}
      <dl>
        <dt>{t('행사명')}</dt>
        <dd>{title}</dd>
      </dl>
      <dl>
        <dt>{t('행사장소')}</dt>
        <dd>{address}</dd>
      </dl>
      <dl>
        <dt>{t('문의처')}</dt>
        <dd>{tel}</dd>
      </dl>
      {course && (
        <dl>
          <dt>{t('여행코스')}</dt>
          <dd>{course}</dd>
        </dl>
      )}
      {description && (
        <dl>
          <dt>{t('행사내용')}</dt>
          <dd>{description}</dd>
        </dl>
      )}
    </Wrapper>
  );
};

export default React.memo(ItemDescription);
