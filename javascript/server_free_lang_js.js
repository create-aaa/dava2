const langArr = {
    "unit" : {
        "ru": "Купи адену на любимом сервере Lineage2",
        "eng": "Buy adena on beloved server Lineage2",
    },
    "text_hello" : {
        "ru": "Список Серверов",
        "eng": "SERVER LIST",
    },
    "text_hello1": {
        "ru": "Способ оплаты",
        "eng": "Payment method",
    },
    "text_hello2": {
        "ru": "Купить сейчас",
        "eng": "Buy Now",
    },
    "text_hello3": {
        "ru": "Валюта",
        "eng": "Currency",
    },
    "text_menu1": {
        "ru": "Главная",
        "eng": "Home",
    },
    "text_menu3": {
        "ru": "Вопросы",
        "eng": "Questions",
    },
    "text_menu4": {
        "ru": "Контакты",
        "eng": "Contacts",
    },
    "text_menu5": {
        "ru": "Поставщикам",
        "eng": "Deliver",
    },
    "deal": {
        "ru": "Гарантии",
        "eng": "Warranty",
    },
    "nik_name": {
        "ru": "Ник вашего персонажа:",
        "eng": "Name character:",
    },
    "email": {
        "ru": "Ваша электронная почта:",
        "eng": "Your email:",
    },
    "adena": {
        "ru": "Получу:",
        "eng": "You will get:",
    },
    "oplata": {
        "ru": "Заплачу: kk",
        "eng": "You pay: for kk",
    },
}
const select = document.querySelector('.change-lang');
const alllang = ['eng', 'ru'];

select.addEventListener('change', changeURLLanguge);

window.addEventListener("load", function bbb (event){
    select.value = localStorage.getItem("langers");
});


function changeURLLanguge() {
    let seo = select.value;
    location.href = window.location.pathname +"#"+ seo;
    location.reload();
}

function changeLanguage(){
    let hash = window.location.hash;
    hash = hash.substr(1)
    if (!alllang.includes(hash)){
        location.href = window.location.pathname + "#" + select.value;
        return;
    }
    select.value = hash;

    localStorage.setItem("langers",hash)

    document.querySelector('title').innerHTML = langArr["unit"][hash];
    document.querySelector('.server__list_button').innerHTML = langArr["text_hello"][hash];
    document.querySelector(".donat__list_button").innerHTML = langArr["text_hello1"][hash];
    document.querySelector(".text_hello2").innerHTML = langArr["text_hello2"][hash];
    document.querySelector(".Currency").innerHTML = langArr["text_hello3"][hash];
    document.querySelector('.nikname').placeholder = langArr["nik_name"][hash]
    document.querySelector('.email').placeholder = langArr["email"][hash]
    document.querySelector('.adena').placeholder = langArr["adena"][hash]
    document.querySelector('.oplata').placeholder = langArr["oplata"][hash]
    document.querySelector(".menu_1").innerHTML = langArr["text_menu1"][hash];
    document.querySelector(".menu_3").innerHTML = langArr["text_menu3"][hash];
    document.querySelector(".menu_4").innerHTML = langArr["text_menu4"][hash];
    document.querySelector(".menu_5").innerHTML = langArr["text_menu5"][hash];
    document.querySelector(".deal").innerHTML = langArr["deal"][hash];

    }
// setInterval(() => {
//     changeLanguage()
// },10)

changeLanguage()


