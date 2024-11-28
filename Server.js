const express = require('express');
const app = express();
const port = 3000;

// 단축 URL 로직을 여기에 추가하세요

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port}에서 실행 중입니다.`);
});
