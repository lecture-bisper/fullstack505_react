// JSX 문법으로 구성한 화면
function Button(props) {
  return (
    <button className={`bg-${props.color}`}>
      <b>{props.children}</b>
    </button>
  )
}

function ConfirmDialog(props) {
  return (
    <div>
      <p>내용을 확인하셨으면 확인 버튼을 클릭하세요</p>
      <Button color={'green'}>확인</Button>
      <Button color={'red'}>취소</Button>
    </div>
  )
}


// 실제로 생성되는 js object
{
  type: 'div',
  props: {
    children: [
      { // p 태그
        type: 'p',
        props: {
          children: '내용을 확인하셨으면 확인 버튼을 클릭하세요'
        }
      },
      { // Button 컴포넌트 부분
        type: 'Button',
        props: {
          color: 'green',
          children: '확인'
        }
      }
    ]
  }
}

{
  type: 'div',
  props: {
    children: [
      {
        type: 'p',
        props: {
          children: '내용을 확인하셨으면 확인 버튼을 클릭하세요'
        }
      },
      {
        type: 'button',
        props: {
          className: 'bg-green',
          children: {
            type: 'b',
            props: {
              children: '확인'
            }
          }
        }
      }
    ]
  }
}




