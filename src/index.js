import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import Members from "./Members";
import MemberDetail from "./MemberDetail";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router >
          <Routes>
                <Route path={'/'} element={<App />}>
                    <Route index={true} element={< Members />} />
                    <Route path="/member-detail/:id" element={< MemberDetail />} />
                </Route>
          </Routes>
      </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
