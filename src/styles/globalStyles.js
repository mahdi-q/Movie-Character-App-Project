import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  --slate-900: #0f172a;
  --slate-800: #1e293b;
  --slate-700: #334155;
  --slate-600: #475569;
  --slate-500: rgb(100, 116, 139);
  --slate-400: #94a3b8;
  --slate-300: #cbd5e1;
  --slate-200: #e2e8f0;
  --slate-100: #f1f5f9;
  --slate-50: #f8fafc;
  --rose-600: #e11d48;
  --rose-500: #f43f5e;
  --green-600: #22c55e;
}

body {
  max-width: 100vw;
  min-height: 100vh;
  background-color: var(--slate-900);
}
body::-webkit-scrollbar {
  width: 5px;
}
body::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #9ca3af;
}

button {
  background-color: transparent;
  cursor: pointer;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
  border: none;
  outline: none;
}

#root {
  margin: 0 auto;
  max-width: 1280px;
  min-height: 100vh;
  position: relative;
  padding: 2rem;
}
`;

export default GlobalStyles;
