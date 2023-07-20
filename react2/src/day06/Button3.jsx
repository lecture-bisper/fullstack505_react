import React from 'react';

function Button3(props) {

  return (
    // 부모 컴포넌트에서 전달한 데이터가 props에 저장되어 있음
    <button className={`btn btn-${props.theme}`} onClick={() => alert(props.theme)}>{props.theme}</button>
  )
}

export default Button3;
