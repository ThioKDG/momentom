
const body = document.body;

async function getPixa() {
    const imgGet = await fetch(`https://pixabay.com/api/?key=${KEY}&q=yellow+flowers&image_type=photo`);
    const imgList = await imgGet.json();
    const results = imgList.hits;
    const bgList = results[Math.floor(Math.random())*results.length].largeImageURL;
    console.log(results);
    body.style.background = `url(${bgList}) center no-repaet`;
}
getPixa();