import React, {useState} from "react";

// 문제 1) 회원 가입 페이지를 작성하세요
// id, 비밀번호, 이름, email, 휴대전화, 성별 정보를 입력받고 확인 버튼 클릭 시 console이나 alert으로 결과를 출력하세요
// id : userId, 비밀번호 : userPw, 이름 : userName, email : userEmail, 휴대전화 : userPhone, 성별 : userGender
function Join(props) {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userGender, setUserGender] = useState('남자');

  const handleSubmit = e => {
    let message = `User ID : ${userId}\n`;
    message += `User PW : ${userPw}\n`;
    message += `User Name : ${userName}\n`;
    message += `User Email : ${userEmail}\n`;
    message += `User Phone : ${userPhone}\n`;
    message += `UserGender : ${userGender}\n`;
    console.log(message);
    alert(message);
    e.preventDefault();
  }

  const handleUserId = e => setUserId(e.target.value);
  const handleUserPw = e => setUserPw(e.target.value);
  const handleUserName = e => setUserName(e.target.value);
  const handleUserEmail = e => setUserEmail(e.target.value);
  const handleUserPhone = e => setUserPhone(e.target.value);
  const handleUserGender = e => setUserGender(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <div className={'row'}>
        <div className={'col-sm-4 mx-auto'}>
          <div className={'my-3'}>
            <label for={'user-id'} className={'form-label'}>USER ID :</label>
            <input type={'text'} className={'form-control'} id={'user-id'} value={userId} onChange={handleUserId}/>
          </div>
          <div className={'my-3'}>
            <label htmlFor={'user-pw'} className={'form-label'}>USER PASSWORD :</label>
            <input type={'password'} className={'form-control'} id={'user-pw'} value={userPw} onChange={handleUserPw}/>
          </div>
          <div className={'my-3'}>
            <label htmlFor={'user-name'} className={'form-label'}>USER NAME :</label>
            <input type={'text'} className={'form-control'} id={'user-name'} value={userName} onChange={handleUserName}/>
          </div>
          <div className={'my-3'}>
            <label htmlFor={'user-email'} className={'form-label'}>USER EMAIL :</label>
            <input type={'email'} className={'form-control'} id={'user-email'} value={userEmail} onChange={handleUserEmail}/>
          </div>
          <div className={'my-3'}>
            <label htmlFor={'user-gender'} className={'form-label'} id={'user-gender'}>USER GENDER :</label>
            <select id={'user-gender'} className={'form-control'} value={userGender} onChange={handleUserGender}>
              <option value={'남성'}>남성</option>
              <option value={'여성'}>여성</option>
            </select>
          </div>
          <div className={'my-3'}>
            <label htmlFor={'user-phone'} className={'form-label'}>USER PHONE :</label>
            <input type={'text'} className={'form-control'} id={'user-phone'} value={userPhone} onChange={handleUserPhone}/>
          </div>
          <div className={'d-grid gap-2 my-3'}>
            <button type={'submit'} className={'btn btn-primary'}>회원가입</button>
            <button type={'reset'} className={'btn btn-secondary'}>취소</button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Join;
