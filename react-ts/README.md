# React + Typescript

## 기본 세팅

### tempalte

> npm create vite@latest . -- --template react-ts
> npm install

### install tawildins css

> npm install -D tailwindcss postcss autoprefixer
> npx tailwindcss init -p

- tailwind.config.js 교체

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### index.css 교체

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### App.css, asset 삭제, public 하위 파일 삭제

## 함수형 컴포넌트

```typescript
// App.tsx

import { FC } from "react";

const App: FC = () => {
  return <div className="bg-red-100">Hello, ReactTS!</div>;
};

export default App;
```

함수형 컴포넌트는(Functional Component) React 컴포넌트를 정의하는 함수로, 간단하고 상태 관리가 필요 없는 컴포넌트를 작성할 때 주로 사용됩니다.
