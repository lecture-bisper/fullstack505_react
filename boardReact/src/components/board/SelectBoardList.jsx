import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

function SelectBoardList(props) {
  const [boardList, setBoardList] = useState([]);

  // useEffect()를 사용하여 화면이 마운트 된 후 자동 실행
  useEffect(() => {
    axios.get("http://localhost:8080/board/")
      .then(res => {
        const dataList = res.data;
        setBoardList(dataList);
      })
      .catch(err => {
        console.log(err);
      }, []);
  });

  return (
    <div className={'container my-4 p-3'}>
      <table className={'table table-hover table-striped'}>
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {
          boardList.map(item => {
            return (
              <tr key={item.boardIdx}>
                <td>{item.boardIdx}</td>
                <td>
                  <Link to={`/board/${item.boardIdx}`} className={'text-decoration-none'}>{item.title}</Link>
                </td>
                <td>{item.createId}</td>
                <td>{item.createDt}</td>
                <td>{item.hitCnt}</td>
              </tr>
            );
          })
        }
        </tbody>
      </table>
      <div className={'my-3 d-flex justify-content-end'}>
        <Link to={'/write'} className={'btn btn-primary'}>글쓰기</Link>
      </div>
    </div>
  );
}

export default SelectBoardList;
