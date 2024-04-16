import React from 'react';
import ReactDOM, { Root as ReactRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

let root: ReactRoot | undefined;

// eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/no-unused-vars, @typescript-eslint/no-unused-vars,@typescript-eslint/no-unsafe-member-access
(window as any).renderAdvertising = (
  containerId: string,
  _history: any,
  _keepAlive: any,
  _user: any
) => {
  root = ReactDOM.createRoot(document.getElementById(containerId)!);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/no-unused-vars, @typescript-eslint/no-unused-vars,@typescript-eslint/no-unsafe-member-access
(window as any).unmountAdvertising = (_containerId: string) => {
  document.body.className = 'hideScroll';
  root?.unmount();
};
