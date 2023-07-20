import React, {useState} from "react";

function ConfirmButtonFunction(props) {
  const [isConfirmed, setIsConfirmed] = useState(false);
  
  const handleConfirm = () => {
    setIsConfirmed((isConfirmed) => !isConfirmed);
  }
  
  return (
    <button type={'button'} className={'btn btn-primary'} onClick={handleConfirm} disabled={isConfirmed}>{isConfirmed ? '확인됨' : '확인하기'}</button>
  );
}

export default ConfirmButtonFunction;
