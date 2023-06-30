// 외부에서 사용할 수 있도록 export로 지정

export const name = '아이유';
export const gender = '여성';
export const job = '가수';

export const getInfo = () => console.log(`이름 : ${name}, 직업 : ${job}, 성별 : ${gender}`);