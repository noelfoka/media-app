## Crating of meadia-app using vite and Tailwind

### getting started

```bash
nmp create vite@latest ./
```
- After installing vite, run these commands:
```sh
npm install
```
to install all dependencies

```sh
npm run dev
```
- Install tailwind for vite

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
After installing the tailwind, you should see `tailwind.config.js` file; and inside this file we have this code:
```js
/** @type {import('tailwindcss').Config} */

export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
Change the `content: []` by: 
```javascript
content: [
    "./index.html",
    "./src/**/*.{js, ts, jsx, tsx}"
  ]
```
- **Router**

  - Installation
  ```bash
  npm install react-router-dom
  ```
  - In `main.js` file, wrap `<App />` with `<BrowserRouter></BrowserRouter>`
  - In `App.js` file, we:
  ```typescript
  import { Routes, Route } from 'react-router-dom';
  ```
  and crete the diferents routes.

### Forms
   We creted `_auth` folder and `forms` folder inside the `_auth` folder and then created a `SigninForm.tsx` and `SignupForm.tsx to implement. And inside the `_auth` folder, we created `AuthLayout.tsx` to wrap `SigninForm.tsx` and `SignupForm.tsx`.
    **Sign_in Form**
    **Sign_up Form**

