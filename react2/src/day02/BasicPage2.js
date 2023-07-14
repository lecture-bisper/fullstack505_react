import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Navi from "./Navi";

function BasicPage2(props) {
  return (
    <div>
      {/* 컴포넌트 추출을 사용하여 기존 소스를 각각의 파일로 추출함 */}
      <Header title={'리액트로 만든 부트스트랩 페이지'}/>

      <Navi />

      <Main />

      <Footer />
    </div>
  )
}

export default BasicPage2;
