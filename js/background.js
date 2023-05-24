
const body = document.body; /* dom에서 body부분 끌어오기 */

async function getPixa() { /* API 호출 및 배경그림 랜덤 부여 */
    const imgGet = await fetch(`https://pixabay.com/api/?key=${KEY}&q=sky&image_type=photo`);
    const imgList = await imgGet.json();
    const bgList = imgList.hits[Math.floor(Math.random() * imgList.hits.length)].largeImageURL; /* hit.s */
    // console.log(results[Math.floor(Math.random() * results.length)]); 띄워쓰니깐 되네?
    // console.log(results[Math.floor(Math.random())*results.length]); 붙여쓰니깐 안되고 
    body.style.background = `url(${bgList}) no-repeat center / cover`; /* 랜덤이미지 부여 */
}
getPixa();
