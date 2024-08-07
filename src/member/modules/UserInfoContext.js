import { createContext, useState } from 'react';
import cookies from 'react-cookies';
import { apiUser } from '../apis/apiLogin';

const UserInfoContext = createContext({
  states: {
    // 상태 값
    userInfo: null,
    isLogin: false,
    isAdmin: false, // 관리자 여부
  },
  actions: {
    // 상태 변경 함수
    setUserInfo: null,
    setIsLogin: null,
    setIsAdmin: null,
  },
});

const UserInfoProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [isLogin, setIsLogin] = useState(null);
  const [isAdmin, setIsAdmin] = useState(null);

  const value = {
    states: { userInfo, isLogin, isAdmin },
    actions: { setUserInfo, setIsLogin, setIsAdmin },
  };

  const token = cookies.load('token');
  if (!isLogin && token && token.trim()) {
    (async () => {
      try {
        const user = await apiUser();

        setUserInfo(user);
        setIsLogin(true);

        const _isAdmin = user.authorities.some((a) => a.authority === 'ADMIN');
        setIsAdmin(_isAdmin);
        
      } catch (err) {
        // 토큰 만료, 토큰이 잘못된 경우
        cookies.remove('token', { path: '/' });
      }
    })();
  }

  return (
    <UserInfoContext.Provider value={value}>
      {children}
    </UserInfoContext.Provider>
  );
};

const { Consumer: UserInfoConsumer } = UserInfoContext;

export { UserInfoConsumer, UserInfoProvider };

export default UserInfoContext;
