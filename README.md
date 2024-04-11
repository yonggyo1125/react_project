# 설정

- .prettierrc 설정

```json
{
  "singleQuote": true,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all"
}
```

- 의존성 : 필요 라이브러리

  - react-router-dom : 라우터
  - sass, styled-components, classnames : 스타일링 목적
  - immer : 불변성 관리
  - react-icons : 리액트에서 제공하는 아이콘 라이브러리
  - @loadable/component : 지연로딩
  - react-helmet-async : head 태그 내의 특정태그의 내용을 변경시

- 의존성 설치

```
yarn add react-router-dom sass styled-components classnames immer react-icons @loadable/component
yarn add react-helmet-async
```

## react-helmet-async 설정

- src/index.js
