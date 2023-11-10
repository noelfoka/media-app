# Crating of meadia-app using vite and Tailwind

## Front End part

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

    **Sign_up Form**
To build this part, we need to setup it with `Shadcn`. To make it, let go to `tsconfig.json` and past this dependency below `Linting`:

```json
"baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
```

After that, run this comand:

```bash 
npm i -D @types/node
```

After that, let go to the `vite.config.ts` and replace his code by:

```typescript
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
 
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```
Then, run this comand to setup: 
```bash
npx shadcn-ui@latest init
```
then, run this comand:

```bash	
npx shadcn-ui@latest add button
```
then import this button to `SignupForm.tsx`. After that, let setup our route good in `AuthLayout.tsx`. It looking like this:

```tsx
import { Outlet, Navigate } from 'react-router-dom'

const AuthLayout = () => {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section>
            <Outlet />
          </section>
        </>
      )
    }
    </>
  )
}
export default AuthLayout
```
Now this route working good.

    **Sign_in Form**

