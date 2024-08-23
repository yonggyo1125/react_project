import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import ErrorPage from './commons/pages/Error';
import { UserInfoProvider } from './member/modules/UserInfoContext';
import { WishListProvider } from './commons/contexts/WishListContext';

import 'react-calendar/dist/Calendar.css';

import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserInfoProvider>
      <WishListProvider>
        <ErrorPage>
          <HelmetProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </HelmetProvider>
        </ErrorPage>
      </WishListProvider>
    </UserInfoProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
