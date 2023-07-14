import React, {useState} from "react";
import Contents from "./Contents";

function MainContent(props) {
  // 함수 MainContent의 매개변수로 전달된 데이터를 변수 styles 에 저장
  // 부모 컴포넌트에서 데이터를 전달받기 위한 props 객체는 읽기 전용
  // props의 내용을 수정하여 사용하고자 할 경우 자식 컴포넌트에서 변수를 선언하고 props의 데이터를 대입 후 수정해야 함 (state 사용)
  const styles = props.styles;
  // props객체의 값 자체를 변수에 대입하여 수정하는 것은 문제없음
  const editStyle = {
    height: props.styles.height + 100,
    backgroundColor: props.styles.backgroundColor,
  }

  const [data, setData] = useState(props.data);
  console.log(data);

  return (
    <div className="col-sm-8">
      {/* 자식 컴포넌트인 Contents 를 호출과 동시에 데이터를 전달함 */}
      <Contents styles={props.styles}/>
      <Contents styles={editStyle}/>

      <button onClick={() => setData(data + 10)} >클릭</button>
    </div>
  )
}

export default MainContent;
