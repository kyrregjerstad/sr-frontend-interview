# HiPeople - Senior Frontent Developer Interview 2

## Features to implement
- HTTP requests should be sent directly from the tab content component (which is empty)
- Response data should be shown inside the Tab content component
- No tab is selected by default
- Clicking away from the currently selected tab deselects it
- Write as idiomatic React code as possible

# About this repo

## Structure

- TypeScript
- ESLint
- Prettier
- Vite
- HMR

## Getting Started

Install dependencies:

```bash
yarn install
```

Run the development server:

```bash
yarn run dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.


## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
