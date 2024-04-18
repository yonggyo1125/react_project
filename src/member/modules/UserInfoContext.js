import { createContext } from 'react';

const UserInfoContext = createContext({
  userInfo: {
    email: 'user01@test.org',
    name: '사용자01',
  },
});

export default UserInfoContext;
