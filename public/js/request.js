// 인스타그램


// 트위터


// 네이버 블로그


// 모델
export const modelRequest = async() => {
    const url = "model request url";
    try{
        const response = await axios.get(url);
        const snsData = response.data.sns;
        return snsData;
    } catch(error){
        if(error.response){
            // 백엔드 에러 처리 시
            console.log(error.response.data.message);
        }
    }
}

export const modelRequestMock = async()=>{
    const sort = ['instagram','twitter','naver'];
    const Items = ['어피치','초롱초롱무지','튜브', '프로도', '라이언', '콘', '춘식이', '제이지']
    const randomItem = (items) => {
        return items[Math.floor(Math.random() * items.length)]; 
    }
    const snsData = [];
    await new Promise(resolve => setTimeout(resolve,1000));
    let count = 0;
    while(count < 20){
        snsData.push({
            "sort": randomItem(sort),
            "content": randomItem(Items)
        });
        count++;
    }
    return snsData;
}










 