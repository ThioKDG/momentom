const quotes = [
    {
        quote: '당신이 행한 봉사에 대해서는 말을 아끼라. 허나 당신이 받았던 호의들에 대해서는 이야기하라.',
        author: '세나카'
    },
    {
        quote: '나이가 들어도 사랑을 막을 수는 없어요. 하지만 사랑은 노화를 어느 정도 막을 수 있죠.',
        author: '잔느 모로',
    },
    {
        quote: '열정은 세상을 돌게 한다. 사랑은 세상을 좀 더 안전한 곳으로 만들 뿐이다.',
        author: 'Ice T',
    },
    {
        quote: '어젯밤 10파운드짜리 마시멜로를 먹는 꿈을 꾸었는데, 깨어보니 베개가 사라지고 없었다.',
        author: '토미 쿠퍼',
    },
    {
        quote: '우리가 이룬 것만큼, 이루지 못한 것도 자랑스럽습니다.',
        author: '스티브 잡스',
    },
    {
        quote: '웃을 수 없다면 우리는 모두 돌아버릴 것이다.',
        author: '지미 버핏',
    },
    {
        quote: '우리는 젊을 때에 배우고 나이가 들어서 이해한다.',
        author: '마리 폰 에브너 에센바흐',
    },
    {
        quote: '지금의 시대도, 언제나 그렇듯, 아주 훌륭한 시대입니다. 이 시대에 우리가 무엇을 해야 하는지만 알고 있다면.',
        author: '랄프 왈도 에머슨',
    },
    {
        quote: '우리는 오늘은 이러고 있지만, 내일은 어떻게 될지 누가 알아요?',
        author: '윌리엄 셰익스피어',
    },
    {
        quote: '미래는 내일이면 더 나을 것이다.',
        author: '댄 퀘일',
    },
]

const quote = document.querySelector('#quotes span:first-child');
const author = document.querySelector('#quotes span:last-child');

const todaysQutoe = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQutoe.quote;
author.innerText = todaysQutoe.author;