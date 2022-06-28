//toggle hidden menu
const toggleMenu = (toggleId, navListId) => {
    const toggle = document.getElementById(toggleId);
    const navList = document.getElementById(navListId);
    const toggleIcon = toggle.getElementsByTagName('i')[0];


    if (toggle && navList) {
        //add 추가 , remove: 제거, toggle:추가/제거
        toggle.addEventListener('click', () => {
            navList.classList.toggle('show-menu');
            //change toggle icon: bx-menu <-> bx bx-x 
            toggleIcon.classList.toggle("bx-menu");
            toggleIcon.classList.toggle("bx bx-x");

        });
    }
};
toggleMenu('nav-toggle', 'nav-list');



// function say(){
//     console.log("helo world");
// }

// const say = function(){
//     console.log("hello world2");
// }
// say();

// const say= () => console.log("hello world3");
// say();

const addNow = (homeCardId) => {
    //html -> js
    const homeCard = document.getElementById(homeCardId);

    //시간 -> 몇번째 식사가 선택되어야하는지 결정
    //중식 끝: 01:00 
    //조식 끝: 08:00 
    //석식 끝: 05:50 
    var now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    hour = 4;
    minute = 20;
    console.log(hour, minute);  //14 30
    minute = hour * 60 + minute;
    index = 0;

    if (minute >= 17 * 60 + 50) {
        index = 0;
    } else if (13 * 60 <= minute) {
        index = 2;
    } else if (6 * 60 <= minute) {
        index = 1;
    } else {
        index = 0;
    }

    console.log(index);

    //homeCard에서 index번째 card에 now 클래스 추가
    let card = homeCard.getElementsByClassName('card')[index];
    card.classList.add('now')
}
addNow('home-card');

