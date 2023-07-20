import React, {useState} from "react";

function RequestForm(props) {
  // useState를 사용하여 변수 value를 state로 설정
  const [value, setValue] = useState('요청사항을 입력하세요');

  // 이벤트 발생 시 동작할 함수
  const handleChange = e => setValue(e.target.value);

  const handleSubmit = e => {
    alert(`입력한 요청사항 : ${value}`);
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label for={'comment'} className={'form-label'}>요청사항 : </label>
      <textarea rows={5} className={'form-control'} id={'comment'} onChange={handleChange} value={value}></textarea>
      <button type={'submit'} className={'btn btn-primary mt-2'}>확인</button>
    </form>
  )
}

export default RequestForm;
