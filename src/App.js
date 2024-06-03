import React from "react";
import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import MainPage from "./pages/MainPage";
import TodolistPage from "./pages/TodolistPage";
import CalendarPage from "./pages/CalendarPage";
import NotfoundPage from "./pages/NotfoundPage";
import RegistModal from "./components/common/RegistModal";

function App() {
  return (
    <BrowserRouter>
      <div className="warp">
        <Header></Header>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>

          <Route path="/todolist">
            <Route index element={<TodolistPage />}></Route>
          </Route>

          <Route path="/calendar">
            <Route index element={<CalendarPage />}></Route>
          </Route>

          {/* 임시 */}
          <Route path="/modal">
            <Route index element={<RegistModal />}></Route>
          </Route>

          <Route path="*" element={<NotfoundPage />}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
