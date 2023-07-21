import React, {useEffect, useState} from 'react';
import axios from "axios";

// 문제 1) axios를 사용하여 회원 정보 목록을 출력하는 페이지를 작성하세요
// 화면 로드 시 바로 회원 목록 정보를 가져와야 함 (useEffect 사용)
// DB의 user 테이블 사용

// 문제 2) 동일한 페이지에서 axios를 사용하여 사용자를 추가하는 페이지를 추가하세요
function Quiz1(props) {
  // 사용자 목록
  const [userList, setUserList] = useState([]);
  
  // 사용자 정보 입력받는 변수
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/user/selectUserList')
      .then(res => {
        console.log("통신 성공");

        if (res.data.result == 'success') {
          setUserList(res.data.data);
        }
      })
      .catch(err => {})
        console.log('통신 실패');
    },[]);

  const btnClickUserInsertParam = () => {
    axios.post('http://localhost:8080/user/insertUser', null, {
      params: {
        userId: userId,
        userPw: userPw,
        userName: userName,
        userEmail: userEmail
      }
    })
      .then(res => {
        console.log('통신 성공');

        if (res.data.result == 'success') {
          console.log(`${userName} 회원님이 ${res.data.msg}`);
        }
        else {
          console.log(res.data.msg);
        }
      })
      .catch (err => {
        console.log('회원 등록 중 오류가 발생했습니다.');
      });
  }

  const btnClickUserInsertDto = () => {
    axios.post('http://localhost:8080/user/insertUserDto', {
      userId: userId,
      userPw: userPw,
      userName: userName,
      userEmail: userEmail
    })
      .then(res => {
        console.log('통신 성공');

        if (res.data.result == 'success') {
          console.log(`${userName} 회원님이 ${res.data.msg}`);
        }
        else {
          console.log(res.data.msg);
        }
      })
      .catch (err => {
        console.log('회원 등록 중 오류가 발생했습니다.');
      });
  }

  return (
    <div>
      <div className={'row'}>
        <div className={'col-sm-6 mx-auto'}>
          <table className={'table table-hover table-striped'}>
            <thead>
              <tr>
                <th>순번</th>
                <th>아이디</th>
                <th>비밀번호</th>
                <th>이름</th>
                <th>이메일</th>
              </tr>
            </thead>
            <tbody>
              {
                userList.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.userId}</td>
                      <td>{item.userPw}</td>
                      <td>{item.userName}</td>
                      <td>{item.userEmail}</td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </div>
      <div className={'row'}>
        <div className={'col-sm-4 mx-auto'}>
          <div className={'my-3'}>
            <label htmlFor={'user-id'} className={'form-label'}>아이디 : </label>
            <input type={'text'} className={'form-control'} id={'user-id'} value={userId} onChange={(e) => setUserId(e.target.value) } />
          </div>
          <div className={'my-3'}>
            <label htmlFor={'user-pw'} className={'form-label'}>비밀번호 : </label>
            <input type={'password'} className={'form-control'} id={'user-pw'} value={userPw} onChange={(e) => setUserPw(e.target.value)} />
          </div>
          <div className={'my-3'}>
            <label htmlFor={'user-name'} className={'form-label'}>이름 : </label>
            <input type={'text'} className={'form-control'} id={'user-name'} value={userName} onChange={(e) => setUserName(e.target.value)} />
          </div>
          <div className={'my-3'}>
            <label htmlFor={'user-email'} className={'form-label'}>이메일 : </label>
            <input type={'email'} className={'form-control'} id={'user-email'} value={userEmail} onChange={e => setUserEmail(e.target.value)} />
          </div>
          <div className={'my-3 d-grid gap-3'}>
            <button type={'button'} className={'btn btn-primary'} onClick={btnClickUserInsertParam}>Param 사용 등록하기</button>
            <button type={'button'} className={'btn btn-primary'} onClick={btnClickUserInsertDto}>Dto 사용 등록하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz1;
