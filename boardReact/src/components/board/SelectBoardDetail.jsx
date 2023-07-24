import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

function SelectBoardDetail(props) {
  const board = useParams();
  const [boardIdx] = useState(board.boardIdx);
  const [title, setTitle] = useState('');
  const [createId, setCreateId] = useState('');
  const [createDt, setCreateDt] = useState('');
  const [contents, setContents] = useState('');
  const [updateId, setUpdateId] = useState('');
  const [updateDt, setUpdateDt] = useState('');
  const [hitCnt, setHitCnt] = useState('');

  const navi = useNavigate();

  useEffect(() => {
    // axios.get('http://localhost:8080/', {
    //   params: {
    //     idx: boardIdx
    //   }
    // })
    axios.get(`http://localhost:8080/board/${boardIdx}`)
      .then(res => {
        const data = res.data;
        setTitle(data.title);
        setContents(data.contents);
        setCreateId(data.createId);
        setCreateDt(data.createDt);
        setUpdateId(data.updateId);
        setUpdateDt(data.updateDt);
        setHitCnt(data.hitCnt);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const eventChangeTitle = e => setTitle(e.target.value);
  const eventChangeUpdateId = e => setUpdateId(e.target.value);
  const eventChangeUpdateDt = e => setUpdateDt(e.target.value);
  const eventChangeContents = e => setContents(e.target.value);
  const eventClickList = () => navi('/');

  const eventClickDelete = () => {
    axios.delete(`http://localhost:8080/board/${boardIdx}`)
      .then(res => {
        console.log(res);
        navi('/');
      })
      .catch (err => {
        console.log(err);
      });
  }

  const eventClickUpdate = () => {
    axios.put(`http://localhost:8080/board/${boardIdx}`, null, {
      params: {
        title: title,
        contents: contents,
        updateId: updateId,
        boardIdx: boardIdx
      }
    })
      .then(res => {
        console.log(res);
        navi('/');
      })
      .catch (err => {
        console.log(err);
      });
  }


  return (
    <div className={'container my-4 p-3'}>
      <div className={"row my-3"}>
        <div className={"col-sm"}>
          <div className={"input-group"}>
            <span className={"input-group-text"}>글번호</span>
            <input type={"text"} className={"form-control"} name={"boardIdx"} readOnly={true} value={boardIdx} />
          </div>
        </div>
        <div className={"col-sm-6"}>
          <div className={"input-group"}>
            <span className={"input-group-text"}>글제목</span>
            <input type={"text"} className={"form-control"} name={"title"} placeholder={"제목을 입력하세요"} value={title} onChange={eventChangeTitle} />
          </div>
        </div>
        <div className={"col-sm"}>
          <div className={"input-group"}>
            <span className={"input-group-text"}>조회수</span>
            <input type={"text"} className={"form-control"} readOnly={true} value={hitCnt} />
          </div>
        </div>
      </div>
      <div className={"row my-3"}>
        <div className={"col-sm"}>
          <div className={"input-group"}>
            <span className={"input-group-text"}>작성자</span>
            <input type={"text"} className={"form-control"} readOnly={true} value={createId} />
          </div>
        </div>
        <div className={"col-sm"}>
          <div className={"input-group"}>
            <span className={"input-group-text"}>등록날짜</span>
            <input type={"text"} className={"form-control"} readOnly={true} value={createDt} />
          </div>
        </div>
        <div className={"col-sm"}>
          <div className={"input-group"}>
            <span className={"input-group-text"}>수정자</span>
            <input type={"text"} className={"form-control"} name={"updateId"} placeholder={"사용자 ID를 입력하세요"} value={updateId} onChange={eventChangeUpdateId} />
          </div>
        </div>
        <div className={"col-sm"}>
          <div className={"input-group"}>
            <span className={"input-group-text"}>수정날짜</span>
            <input type={"text"} className={"form-control"} value={updateDt} onChange={eventChangeUpdateDt} />
          </div>
        </div>
      </div>
      <div className={"row my-3"}>
        <div className={"col-sm"}>
          <label htmlFor={"contents"} className={"form-label"}>글 내용 : </label>
          <textarea className={"form-control"} id={"contents"} name={"contents"} rows={"5"} placeholder={"내용을 입력하세요"} value={contents} onChange={eventChangeContents}></textarea>
        </div>
      </div>
      <div className={"row my-3"}>
        <div className={"col-sm"}>
          <button type={"button"} className={"btn btn-secondary"} onClick={eventClickList}>목록</button>
        </div>
        <div className={"col-sm d-flex justify-content-end"}>
          <button type={"button"} className={"btn btn-danger me-2"} onClick={eventClickDelete}>삭제</button>
          <button type={"button"} className={"btn btn-warning"} onClick={eventClickUpdate}>수정</button>
        </div>
      </div>
    </div>
  );
}

export default SelectBoardDetail;
