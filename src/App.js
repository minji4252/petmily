import React, { useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import MainPage from "./pages/MainPage";
import TodolistPage from "./pages/TodolistPage";
import CalendarPage from "./pages/CalendarPage";
import PetAdminPage from "./pages/PetAdminPage";
import NotfoundPage from "./pages/NotfoundPage";
import JoinPage from "./pages/member/JoinPage";
import LoginPage from "./pages/member/LoginPage";

function App() {
  const [isUser, setIsUser] = useState("");

  return (
    <BrowserRouter>
      <div className="wrap">
        <Header isUser={isUser} setIsUser={setIsUser}></Header>

        <Routes>
          <Route path="/" element={<MainPage></MainPage>}></Route>

          <Route path="/todolist">
            <Route index element={<TodolistPage />}></Route>
          </Route>

          <Route path="/calendar">
            <Route index element={<CalendarPage />}></Route>
          </Route>

          <Route path="/petadmin">
            <Route index element={<PetAdminPage />}></Route>
          </Route>

          <Route path="/join">
            <Route index element={<JoinPage />}></Route>
          </Route>

          <Route path="/login">
            <Route index element={<LoginPage setIsUser={setIsUser} />}></Route>
          </Route>

          <Route path="*" element={<NotfoundPage></NotfoundPage>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
