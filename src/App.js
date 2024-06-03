import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import MainPage from "./pages/MainPage";
import TodolistPage from "./pages/TodolistPage";
import CalendarPage from "./pages/CalendarPage";
import NotfoundPage from "./pages/NotfoundPage";

function App() {
  return (
    <BrowserRouter>
      <div className="wrap">
        <Header>
          {/* {isLogin ? (
            <div>회원수정/로그아웃</div>
          ) : (
            <div>회원가입/회원로그인</div>
          )} */}
        </Header>

        <Routes>
          <Route path="/" element={<MainPage></MainPage>}></Route>

          <Route path="/todolist">
            <Route index element={<TodolistPage />}></Route>
          </Route>

          <Route path="/calendar">
            <Route index element={<CalendarPage />}></Route>
          </Route>

          <Route path="*" element={<NotfoundPage></NotfoundPage>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
