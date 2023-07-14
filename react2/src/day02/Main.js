import React from "react";
import Side from "./Side";
import MainContent from "./MainContent";

const styles = {
  fakeImg: {
    height: 200,
    backgroundColor: '#aaa',
  }
}

function Main(props) {
  return (
    <div className="container mt-5">
      <div className="row">
        <Side styles={styles.fakeImg} />
        <MainContent styles={styles.fakeImg} data={100} />
      </div>
    </div>
  )
}

export default Main;
