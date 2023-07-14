// JSX 문법을 사용하여 작성한 코드
const element = <h1>hello world!!</h1>;

//   실제로 생성된 JS Object 타입
{
  type: 'button',
  props: {
      className: 'bg-green',
      children: {
        type: 'b',
        props: {
          children: 'hello world'
      }
    }
  }
}
// 위의 object 타입이 구현된 모습
<button class="bg-green">
  <b>hello, world</b>
</button>


React.createElement(
  type,
  [props],
  [...children]
)











