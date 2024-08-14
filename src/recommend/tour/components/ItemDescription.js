import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MidButton } from '../../../commons/components/Buttons';

const Wrapper = styled.div`
  width: 350px;
  word-break: break-all;

  dl {
    display: flex;

    padding: 10px 15px;

    dt {
      width: 100px;
    }

    dd {
      width: calc(100% - 100px);
    }
  }

  dl + dl {
    border-top: 1px dashed #818181;
  }
`;

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

      <Link to="/reservation/1">
        <MidButton color="primary">{t('예약하기')}</MidButton>
      </Link>
    </Wrapper>
  );
};

export default React.memo(ItemDescription);
