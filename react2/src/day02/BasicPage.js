import React from "react";

// 문제1) https://www.w3schools.com/bootstrap5/trybs_template1.htm 의 UI를 컴포넌트로 생성하여 작성하세요

const styles = {
  fakeImg: {
    height: 200,
    backgroundColor: '#aaaaaa',
  }
}

// 컴포넌트 추출을 하지 않은 페이지
function BasicPage(props) {
  return (
    <div>
      {/* header 로 추출할 부분*/}
      <div className="p-5 bg-primary text-white text-center">
        <h1>My First Bootstrap 5 Page</h1>
        <p>Resize this responsive page to see the effect!</p>
      </div>

      {/* 네비게이션바 로 추출할 부분 */}
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="#">Active</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* main 으로 추출할 부분*/}
      <div className="container mt-5">
        <div className="row">
          {/* Side 로 추출할 부분 */}
          <div className="col-sm-4">
            <h2>About Me</h2>
            <h5>Photo of me:</h5>
            <div style={styles.fakeImg}>Fake Image</div>
            <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
            <h3 className="mt-4">Some Links</h3>
            <p>Lorem ipsum dolor sit ame.</p>
            {/* SideMenu 로 추출할 부분 */}
            <ul className="nav nav-pills flex-column">
              {/* SideMenuItem 으로 추출할 부분 */}
              <li className="nav-item">
                <a className="nav-link active" href="#">Active</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>
            <hr className="d-sm-none" />
          </div>
          {/* MainContent 로 추출할 부분 */}
          <div className="col-sm-8">
            <h2>TITLE HEADING</h2>
            <h5>Title description, Dec 7, 2020</h5>
            <div style={styles.fakeImg}>Fake Image</div>
            <p>Some text..</p>
            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco.</p>

            <h2 className="mt-5">TITLE HEADING</h2>
            <h5>Title description, Sep 2, 2020</h5>
            <div style={styles.fakeImg}>Fake Image</div>
            <p>Some text..</p>
            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco.</p>
          </div>
        </div>
      </div>

      {/* Footer 로 추출할 부분 */}
      <div className="mt-5 p-4 bg-dark text-white text-center">
        <p>Footer</p>
      </div>
    </div>
  )
}

export default BasicPage;
