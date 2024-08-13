import { Routes, Route, useLocation } from 'react-router-dom';
import loadable from '@loadable/component';

const MainLayout = loadable(() => import('./layouts/MainLayout'));
const NotFound = loadable(() => import('./commons/pages/NotFound'));
const Main = loadable(() => import('./main/pages/Main')); // 메인페이지

// 회원 페이지
const Member = loadable(() => import('./routes/Member'));

// 마이 페이지
const Mypage = loadable(() => import('./routes/Mypage'));

// 식당 페이지
const Restaurant = loadable(() => import('./routes/Restaurant'));

const routeUrlPaths = ['member', 'mypage', 'restaurant', 'festival'];

const App = () => {
  const location = useLocation();
  return routeUrlPaths.includes(location.pathname.split('/')[1]) ? (
    <>
      <Member />
      <Mypage />
      <Restaurant />
    </>
  ) : (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Main />} /> {/* 메인 페이지 */}
        <Route path="*" element={<NotFound />} /> {/* 없는 페이지 */}
      </Route>
    </Routes>
  );
};

export default App;
