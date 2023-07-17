import React, { useState, useEffect } from "react";

function VolumeControl() {
  // useState를 사용하여 지정된 state 변수의 값을 변경할 수 있도록 지정
  const [volume, setVolume] = useState(0);

  // useEffect를 사용하여 의존성 배열에 지정된 변수의 값이 변경되면 콜백함수를 실행
  useEffect(() => {
    document.title = `현재 볼륨은 ${volume}입니다.`;
  }, [volume]);

  return (
    <div className={'container'}>
      <div className={'justify-content-center'}>
        <button type={'button'} className={'btn btn-primary me-2'} onClick={() => {
          volume + 1 <= 10 ? setVolume(volume + 1) : setVolume(10);
        }}>vol + </button>
        <button type={'button'} className={'btn btn-primary'} onClick={() => {
          volume - 1 >= 0 ? setVolume(volume - 1) : setVolume(0);
        }}>vol - </button>
      </div>
      <p>현재 볼륨은 {volume} 입니다.</p>
    </div>
  )
}

export default VolumeControl;
