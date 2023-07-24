import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SelectBoardList from "../board/SelectBoardList";

function Layout(props) {

  return (
    <div className={"mt-4"}>
      <Header />
      {/* 중첩 Route 사용 시 자식 Route 의 컴포넌트를 표시해주는 컴포넌트 */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
