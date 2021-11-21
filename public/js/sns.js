/*
 <div class="snsInsta">
<div class="content-icon"><i class="fab fa-instagram"> instagram</i></div>
<div class="sns-content">내용</div>
</div>
<div class="snsTwitter">
<div class="content-icon"><i class="fab fa-twitter"> twitter</i></div>
<div class="sns-content">내용</div>
</div>
<div class="snsBlog">
<div class="content-icon"> naver blog</div>
<div class="sns-content">내용</div>
</div>
*/
import { modelRequestMock } from './request.js';


const snsWrapper = document.querySelector('.sns-wrapper')

const createDom = (message) => {
    const dom = document.createElement('div') 
    dom.classlist.add('sns')
    let html;
   
    switch(message.sort){
        case 'instagram':
            html =  `
            <div class="content-icon"><i class="fab fa-instagram"> instagram</i></div>
            <div class="sns-content">${message.content}</div>
            `
            break;
        case 'twitter':
            html =  `
            <div class="content-icon"><i class="fab fa-twitter"> twitter</i></div>
            <div class="sns-content">${message.content}</div>
            `
            break;  
        case 'naver':
            html = `
            <div class="content-icon"> naver blog</div>
            <div class="sns-content">${message.content}</div>
            `
            break;
        default:
            alert('오류남 ㅅㄱ')
    }
    dom.innerHTML= html;
    return dom;
}

const addSns = async (messages,loadTime) => {
    for(const message of messages){
        // { sort, content}
        const dom = createDom(message);
        await new Promise(resolve => setTimeout(resolve,loadTime));
        // 50 개가 넘었을 때 
        // 맨 마지막꺼 지우고 새거 추가
        const numberOfMessages = snsWrapper.childElementCount; 
        console.log(numberOfMessages);
        if(numberOfMessages >= 50){
            snsWrapper.removeChild(snsWrapper.lastChild);
            snsWrapper.prepend(dom);
        } else {
            snsWrapper.prepend(dom);
        }
    }
}

const start = async(requestFunction) => {
    let pauseTime = 1;
    while(true){
        pauseTime = 1
        const messages = await requestFunction();
        const loadTime = 50/messages.length;
        // 2.5 초마다 실행
        console.log(messages.length);
        addSns(messages,loadTime * 1000);
        await new Promise(resolve => setTimeout(resolve, pauseTime * 1000));
    }
}

// start(modelRequestMock);


  
// 



// 요청을 10


// 4분 주기
// 컨테이너당 100 개 
// 300 개
// 5 분 (미니멈) -> 




// 모델 200 개 2 ~ 3 분
// 
// 트위터 : 5초
// 인스타그램 크롤러 : 4 분


// axios 요청이 온다
// 데이터 반환시 addSns 함수 호출
// 5 분 = 300 초 에 한번 요청을 보냄
// n 개  1개 = 300/n