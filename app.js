//모듈 추출
const express = require('express');
const host_config = require('./config/secret.json')
//서버 생성
const app = express();

//모든 요청에 대한 이벤트 리스너 생성
app.use((req, res) =>{
    res.send("hello world")
})

app.listen(host_config.port, () =>{
    console.log(`Server running at localhost:${host_config.port}`)
})