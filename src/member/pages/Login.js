import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import LoginContainer from '../containers/LoginContainer';
import fontSize from '../../styles/fontSize';
import { UserInfoConsumer } from '../modules/UserInfoContext';
const { medium } = fontSize;

const OuterBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    text-align: center;
    font-size: ${medium};
    margin: 0 0 10px;
    padding: 0;
    line-height: 1;
  }
`;

const Login = () => {
  const { t } = useTranslation();

  const loginProcess = ({ setIsLogin, setUserInfo }) => {
    setIsLogin(true);
    setUserInfo({ email: 'user01@test.org', name: '사용자01' });
  };

  return (
    <UserInfoConsumer>
      {({ states: { userInfo, isLogin }, actions }) => (
        <>
          {isLogin && (
            <div>
              {userInfo.email} / {userInfo.name}
            </div>
          )}
          <button type="button" onClick={() => loginProcess(actions)}>
            로그인
          </button>
        </>
      )}
    </UserInfoConsumer>
  );

  /*
  return (
    <>
      <Helmet>
        <title>{t('로그인')}</title>
      </Helmet>
      <OuterBox>
        <h1>{t('로그인')}</h1>
        <LoginContainer />
      </OuterBox>
    </>
  ); */
};

export default React.memo(Login);
