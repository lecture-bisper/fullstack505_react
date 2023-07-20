import React from "react";

// 자식 컴포넌트
function UserGreeting(props) {
  return <h1>방문해 주셔서 감사합니다.</h1>;
}

// 자식 컴포넌트
function GuestGreeting(props) {
  return <h1>회원 가입이 필요합니다.</h1>
}

// 함수 컴포넌트 (부모)
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  // 조건부 렌더링
  if (isLoggedIn) {
    return <UserGreeting />;
  }

  return <GuestGreeting />;
}

export default Greeting;
