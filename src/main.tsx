import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'src/App.tsx'
import 'src/index.css'
import {BrowserRouter} from 'react-router-dom';
import {ConfigProvider} from "antd";
import customConfig from './antd.config.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider {...customConfig}>
        <App/>
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
