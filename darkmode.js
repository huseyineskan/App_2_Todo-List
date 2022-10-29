// const body = document.body;
// const btn = document.querySelector('.btnMode');
// const title = document.querySelector('#header-title');

// function nightMode(){
//     body.classList.toggle("bg-dark");
//     btn.classList.toggle ("btnWhite");
//     title.classList.toggle("bg-dark");
//     firstCardBody.classList.toggle("bg-dark");
//     secondCardBody.classList.toggle("bg-dark");

//     if(body.className === "bg-dark"){
//         btn.value = "LIGHT MODE";
//     }
//     else{
//         btn.value = "DARK MODE";
//     }
// }

const body = document.body;
const btn = document.querySelector('.btnMode');
const title = document.querySelector('#header-title');
const todoListTitle = document.querySelector('.card-title');
const hrTag = document.querySelector('hr');
const siteUrl = document.querySelector('.siteUrl')
const social = document.querySelector('.social')
const separator = document.querySelector('#separator')

//----------------LOCALSTORAGE----------------------//
let Dark;
let Light;
let Mode = [];

const Modes = JSON.parse(localStorage.getItem('Mode')); 

if(Modes === 'Dark'){
    nightMode();
}
//----------------LOCALSTORAGE----------------------//
function nightMode(){
    body.classList.toggle("bg-dark");
    btn.classList.toggle ("btnWhite");
    title.classList.toggle("titleDark");
    todoListTitle.classList.toggle("titleTodoListDark");
    firstCardBody.classList.toggle("bg-dark");
    secondCardBody.classList.toggle("bg-dark");
    hrTag.classList.toggle("hrDark");
    siteUrl.classList.toggle("text-color-red");
    social.classList.toggle("text-color-red");
    
    ;

    if(body.className === "bg-dark"){
        btn.value = "LIGHT MODE";
        clearTodos.className = "btn btn-danger btn-block";
        localStorage.setItem('Mode',JSON.stringify('Dark'));
        separator.style.color = "red";
        document.querySelector('#darkH6').style.color="#fff";
    }
    else{
        btn.value = "DARK MODE";
        siteUrl.className = ""
        clearTodos.className = "btn btn-danger btn-block";
        localStorage.setItem('Mode',JSON.stringify('Light'));
        separator.style.color = "black";
        document.querySelector('#darkH6').style.color="black";
    }

}




