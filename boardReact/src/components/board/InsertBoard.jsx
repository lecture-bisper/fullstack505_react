import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";

function InsertBoard(props) {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [userId, setUserId] = useState('');
  const navi = useNavigate();

  const eventChangeTitle = (e) => {
    setTitle(e.target.value);
  }

  const eventChangeContents = (e) => {
    setContents(e.target.value);
  }

  const eventChangeUserId = (e) => {
    setUserId(e.target.value);
  }

  const eventClickOK = () => {
    axios.post('http://localhost:8080/board/write', null, {
      params: {
        title: title,
        contents: contents,
        createId: userId
      }
    })
      .then(() => {
        navi('/');
      })
      .catch(() => {

      });
  }

  const eventClickCancel = () => {
    navi('/');
  }

  return (
    <div className={'container my-4 p-3'}>
      <div className={'row'}>
        <div className={'col-sm-4 mx-auto'}>
          <div className={'my-3'}>
            <label htmlFor={'title'} className={'form-label'}>글제목 : </label>
            <input type={'text'} className={'form-control'} value={title} onChange={eventChangeTitle}/>
          </div>
          <div className={'my-3'}>
            <label htmlFor={'userId'} className={'form-label'}>아이디 : </label>
            <input type={'text'} className={'form-control'} value={userId} onChange={eventChangeUserId}/>
          </div>
          <div className={'my-3'}>
            <label htmlFor={'contents'} className={'form-label'}>글내용 : </label>
            <textarea className={'form-control'} rows={5} value={contents} onChange={eventChangeContents}></textarea>
          </div>
          <div className={'d-grid gap-2 my-3'}>
            <button type={'button'} className={'btn btn-primary'} onClick={eventClickOK}>확인</button>
            <button type={'button'} className={'btn btn-secondary'} onClick={eventClickCancel}>취소</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InsertBoard;
