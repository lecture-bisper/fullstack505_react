import React from "react";

// 컴포넌트 파일명은 반드시 첫글자가 대문자이어야 함
// 리액트에서는 컴포넌트를 사용하여 화면을 생성함
// 리액트에서 <> 안에 영문 소문자로 되어 있으면 html 태그로 인식
// <> 안에 영문 대문자로 시작하면 컴포넌트로 인식함
function Book(props) {
  return (
    <div>
      <h1>{`이 책의 이름은 ${props.name} 입니다.`}</h1>
      <h2>{`이 책의 가격은 ${props.price}원 입니다.`}</h2>
    </div>
  )
}

export default Book;
