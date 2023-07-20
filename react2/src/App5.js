import React from "react";
import Accommodate from "./day04/Accommodate";
import ToggleClass from "./day04/ToggleClass";
import ToggleFunction from "./day04/ToggleFunction";
import MyButton from "./day04/MyButton";
import ConfirmButtonClass from "./day04/ConfirmButtonClass";
import ConfirmButtonFunction from "./day04/ConfirmButtonFunction";
import Greeting from "./day04/Greeting";
import LoginControl from "./day04/LoginControl";
import Mailbox from "./day04/Mailbox";
import Counter from "./day04/Counter";
import LoginControl2 from "./day04/LoginControl2";
import MainPage from "./day04/MainPage";
import LandingPage from "./day04/LandingPage";

function App5() {
  return (
    <div className={'container mt-4'}>
      <Accommodate />

      <hr />

      <ToggleClass />
      <br />
      <ToggleFunction />
      <br />
      <MyButton />

      <hr />

      <ConfirmButtonClass />
      <br /><br />
      <ConfirmButtonFunction />

      <hr />

      <Greeting isLoggedIn={true}/>
      <hr />
      <LoginControl />

      <hr />

      <Mailbox unreadMessages={0} />
      <br /><br />
      <Mailbox unreadMessages={10} />
      <br /><br />
      <Counter />

        <hr />

        <LoginControl2 />

        <hr />

        <MainPage />

      <hr />

      <LandingPage />

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  );
}

export default App5;
