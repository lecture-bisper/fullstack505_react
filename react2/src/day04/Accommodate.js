import React, {useEffect, useState} from "react";
import useCounter from "./useCounter";

// 최대 값 설정
const MAX_CAPACITY = 10;

function Accommodate(props) {
  // useState 사용
  const [isFull, setIsFull] = useState(false);
  // 커스텀 훅 사용, 커스텀 훅에서 반환한 변수 및 함수를 전개연산를 통해서 각각의 변수에 대입함
  const [count, increaseCount, decreaseCount] = useCounter(0);

  // useEffect hook 사용
  useEffect(() => {
    console.log("--------------------------------");
    console.log("useEffect() 호출!!");
    console.log(`isFull : ${isFull}`);
  });

  // useEffect hook 사용, 의존성 배열에 지정한 count 의 값이 변경 시 실행
  useEffect(() => {
    // 변수 isFull의 값을 수정하기 위한 setState
    // 변수 count의 값이 MAX_CAPACITY의 값과 같으면 true, 아니면 false
    setIsFull(count >= MAX_CAPACITY);
    console.log(`현재 count 값 : ${count}`); // 현재 count값 출력
  }, [count]);

  return (
    <div className={'container p-3'}>
      <p>{`총 ${count}명 수용했습니다.`}</p>
      <button type={'button'} className={'btn btn-primary'} onClick={increaseCount} disabled={isFull}>입장</button>
      <button type={'button'} className={'btn btn-warning ms-2'} onClick={decreaseCount}>퇴장</button>

      {/* isFull의 값이 true일 경우에만 && 연산자 뒤의 태그가 화면에 그려짐 */}
      {isFull && <p className={'text-danger'}>정원이 가득찼습니다.</p>}
    </div>
  );
}

export default Accommodate;












