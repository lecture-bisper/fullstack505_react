import React from 'react';
import Children from "./Children";

// 부모 컴포넌트에서 자식 컴포넌트로 데이터 전달
function Parent(props) {

  return (
    <div>
      <Children data={'부모 컴포넌트 데이터'} />
    </div>
  )
}

export default Parent;
