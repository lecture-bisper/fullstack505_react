import React from 'react';
import WelcomeFunc from "./day02/WelcomeFunc";
import WelcomeClass from "./day02/WelcomeClass";
import Comment from "./day02/Comment";
import Comment2 from "./day02/Comment2";
import ReplyList from "./day02/ReplyList";
import BootstrapCDN from "./day02/BootstrapCDN";
import BootstrapReact from "./day02/BootstrapReact";

// 자바스크립트 object 타입 변수
const data = {
  avatarUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMUeRbK59j84P2g9d6ndzMZhej5zFqs_TziA&usqp=CAU',
  name: '아이유',
}

function App2() {
  return (
    <div>
      {/* 컴포넌트 합성 */}
      <h1>함수 컴포넌트 사용</h1>
      <WelcomeFunc name={'리액트'}/>
      <hr/>
      <h1>클래스 컴포넌트 사용</h1>
      <WelcomeClass name={'리액트'}/>

      <hr />
      {/*자식 컴포넌트 Comment 호출*/}
      {/* 속성 author, text, date 를 전달*/}
      <Comment author={data} text={'아이유 이미지 사용'} date={new Date()} />
      <br />
      <Comment2 author={data} text={'컴포넌트 추출 해보기'} date={new Date()} />

      <br />
      <hr />
      <br />

      <ReplyList />

      <hr />

      <BootstrapCDN />
      <br />
      <BootstrapReact />

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  )
}

export default App2;
