import React from 'react';
import WelcomeDialog from "./day06/WelcomeDialog";
import SplitPane from "./day06/SplitPane";
import Contacts from "./day06/Contacts";
import Chat from "./day06/Chat";
import WelcomeDialog2 from "./day06/WelcomeDialog2";
import SignUpDialog from "./day06/SignUpDialog";
import ProfileCard from "./day06/ProfileCard";
import Toolbar from "./day06/Toolbar";

function App07(props) {

  return (
    <div className={'container'}>
      <WelcomeDialog />
      <br />

      {/*부모 컴포넌트인 App07에서 자식 컴포넌트인 SplitPane을 호출 */}
      {/* 자식 컴포넌트 호출 시 속성 left, right에 다른 자식 컴포넌트를 전달함 */}
      <SplitPane
        left={
          <Contacts />
        }
        right={
          <Chat />
        }
      />

      <hr />

      <WelcomeDialog2 />

      <hr />

      <SignUpDialog />

      <hr />

      <ProfileCard />

      <hr />

      {/*부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하면서 호출*/}
      <Toolbar theme={'info'} />


      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  );
}

export default App07;
