import React from 'react';
import { useTranslation } from 'react-i18next';
import { BigButton, ButtonGroup } from '../../commons/components/Buttons';

const JoinForm = () => {
  const { t } = useTranslation();
  return (
    <form autoComplete="off">
      <ButtonGroup width={450}>
        <BigButton type="reset" color="light">
          {t('다시입력')}
        </BigButton>
        <BigButton type="submit" color="dark">
          {t('가입하기')}
        </BigButton>
      </ButtonGroup>
    </form>
  );
};

export default React.memo(JoinForm);
