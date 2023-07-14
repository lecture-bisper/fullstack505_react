import React from "react";
import Reply from "./Reply";

const replys = [
  {name: '아이유', content:'첫번째 댓글입니다.'},
  {name: '유인나', content: '두번째 댓글입니다.'},
  {name: '유재석', content: '세번째 댓글입니다.'},
];

function ReplyList(props) {
  return (
    <div>
      {
        replys.map((reply) => {
          return (
            <Reply name={reply.name} content={reply.content} />
          );
        })
      }

      {/*<Reply name={replys[0].name} content={replys[0].content}/>*/}
      {/*<Reply name={replys[1].name} content={replys[1].content} />*/}
      {/*<Reply name={replys[2].name} content={replys[2].content} />*/}
      {/*<Reply name={'최수열'} content={'아 2등이네..'} />*/}
      {/*<Reply name={'유인나'} content={'ㅎㅎㅎㅎ'} />*/}
    </div>
  )
}

export default ReplyList;
