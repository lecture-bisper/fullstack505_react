import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ErrorPage from "./components/layout/ErrorPage";
import Layout from "./components/layout/Layout";
import SelectBoardDetail from "./components/board/SelectBoardDetail";
import SelectBoardList from "./components/board/SelectBoardList";
import InsertBoard from "./components/board/InsertBoard";

function App2(props) {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<SelectBoardList />} />
          <Route path={"board/:boardIdx"} element={<SelectBoardDetail />} />
          <Route path={"write"} element={<InsertBoard />} />
          <Route path={"*"} element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App2;
