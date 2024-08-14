import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const FormBox = styled.form``;

const SearchBox = ({ search, onChange, onSubmit }) => {
  const { t } = useTranslation();

  return (
    <FormBox onSubmit={onSubmit} autoComplete="off">
      <div>
        <select name="sopt" onChange={onChange}>
          <option value="ALL">{t('통합검색')}</option>
          <option value="TITLE">{t('여행지')}</option>
          <option value="TEL">{t('연락처')}</option>
          <option value="ADDRESS">{t('주소')}</option>
          <option value="DESCRIPTION">{t('여행지_설명')}</option>
        </select>
        <input
          type="text"
          name="skey"
          value={search.skey}
          onChange={onChange}
        />
      </div>
      <div>
        <select name="sido" onChange={onChange}>
          <option>- {t('시도_선택')} -</option>
        </select>
        <select name="sigungu" onChange={onChange}>
          <option>- {t('시군구_선택')} -</option>
        </select>
      </div>
      
    </FormBox>
  );
};

export default React.memo(SearchBox);
