//toggle hidden menu
function toggleMenu(toggleId, navListId){
    const toggle = document.getElementById(toggleId);
    const navList = document.getElementById(navListId);

    function clickHandler(){
        navList.classList.add('show-menu');
    }

    if(toggle && navList){
        toggle.addEventListener('click', clickHandler);
    }

}
toggleMenu('nav-toggle','nav-list');



// function say(){
//     console.log("helo world");
// }

// const say = function(){
//     console.log("hello world2");
// }
// say();

// const say= () => console.log("hello world3");
// say();

