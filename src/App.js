import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const MainLayout = loadable(() => import('./layouts/MainLayout'));
const NotFound = loadable(() => import('./commons/pages/NotFound'));
const Main = loadable(() => import('./main/pages/Main')); // 메인페이지

/* 회원 페이지 S */
const Join = loadable(() => import('./member/pages/Join'));
const Login = loadable(() => import('./member/pages/Login'));

/* 회원 페이지 E */

/* 마이페이지 S */
const MypageMain = loadable(() => import('./mypage/pages/MypageMain'));
/* 마이페이지 E */

/* 뉴스 페이지 S */
const News = loadable(() => import('./news/pages/News'));
/* 뉴스 페이지 E */

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Main />} /> {/* 메인 페이지 */}
        {/* 회원 페이지 S */}
        <Route path="member">
          <Route path="join" element={<Join />} />
          <Route path="login" element={<Login />} />
        </Route>
        {/* 회원 페이지 E */}
        {/* 마이페이지 S */}
        <Route path="mypage">
          <Route index element={<MypageMain />} />
        </Route>
        {/* 마이페이지 E */}
        {/* 뉴스 페이지  */}
        <Route path="news">
          <Route path=":category?" element={<News />} />
        </Route>
        <Route path="*" element={<NotFound />} /> {/* 없는 페이지 */}
      </Route>
    </Routes>
  );
};

export default App;
