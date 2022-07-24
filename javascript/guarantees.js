const langArr = {
    "unit" : {
        "ru": "Наши гарантии\n" +
            "Lineage2",
        "eng": "Our guarantees\n" +
            "Lineage2",
    },
    "text_hello" : {
        "ru": "Гарантии сделок",
        "eng": "Our guarantees",
    },
    "text_hello1": {
        "ru": "GoldBox24.com - это опытная команда играков Lineage2 , у которых за плечами не одна тысяча успешных\n" +
            "        сделок. Наш магазин новый , мы не можем похвастаться тем что нас все знают, но будьте уверены,\n" +
            "        мы своей работой и примером покажем что нам нужно и можно доверять.",
        "eng": "GoldBox24.com is an experienced team of Lineage2 players with over a thousand successful sales in the game. Our shop is new " +
         "but rest assured, we will prove to you that we can and should be trusted.",
    },
    "text_hello2": {
        "ru": "Мы используем такие платежные системы как PayPal, visa, mastercard, webmoney, qiwi все наши платежные системы" +
         " прошли индификацию. Мы пришли сюда на долго, у нас нету цели обманывать людей , мы хотим развиваться в этом направлении.",
        "eng": "We use such payment systems as PayPal, Visa, MasterCard, WebMoney, Qiwi, all our payment systems have been certified." +
         " We have come here for a long time, we have no purpose to deceive. We want to develop in this direction.",
    },
    "text_hello3": {
        "ru": "В дальнейшем, мы собираемся открывать разделы и по другим онлайн играм.",
        "eng": "In the future we are going to enter sections on other online games.",
    },
    "text_hello4": {
        "ru": "Если вы выберете нас , вы сами сможете убедится в наших словах. В дальнейшем мы планируем использовать G2A ," +
         " а так же открыть юридическое лицо компании.",
        "eng": "If you choose us, you will be convinced of our words. In the future, we plan to use G2A, as well as open " +
         "a legal entity of the company.",
    },
    "text_hello5": {
        "ru": "Если вы выберете нас , вы сами сможете убедится в наших словах. В дальнейшем мы планируем использовать G2A ," +
         " а так же открыть юридическое лицо компании.",
        "eng": "If you have any questions, please contact the operator. Sincerely, GoldBox24.com team ;)",
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
}

const select = document.querySelector('select');
const alllang = ['eng', 'ru'];

select.addEventListener('change', changeURLLanguge); //измененние языка до загрузки страницы

window.addEventListener("load", function bbb (event){
    select.value = localStorage.getItem("langers");
});


function changeURLLanguge() { //тут мы только добавляем в ссылку # и тот язык который мы выбрали
    let seo = select.value;
    location.href = window.location.pathname +"#"+ seo;
    // location.reload();
    // return
}

function changeLanguage(){
    let hash = window.location.hash;
    hash = hash.substr(1)
    if (!alllang.includes(hash)){
        location.href = window.location.pathname + "#" + select.value;
        // location.reload();
        return;
    }
    select.value = hash;

    // if (hash !== "")
    localStorage.setItem("langers",hash)

    document.querySelector('title').innerHTML = langArr["unit"][hash];
    document.querySelector(".text_hello").innerHTML = langArr["text_hello"][hash];//нужно переделать по класу или Id
    document.querySelector(".text_hello1").innerHTML = langArr["text_hello1"][hash];
    document.querySelector(".text_hello2").innerHTML = langArr["text_hello2"][hash];
    document.querySelector(".text_hello3").innerHTML = langArr["text_hello3"][hash];
    document.querySelector(".text_hello4").innerHTML = langArr["text_hello4"][hash];
    document.querySelector(".text_hello5").innerHTML = langArr["text_hello5"][hash];
    document.querySelector(".menu_1").innerHTML = langArr["text_menu1"][hash];
    document.querySelector(".menu_3").innerHTML = langArr["text_menu3"][hash];
    document.querySelector(".menu_4").innerHTML = langArr["text_menu4"][hash];
    document.querySelector(".menu_5").innerHTML = langArr["text_menu5"][hash];
    document.querySelector(".deal").innerHTML = langArr["deal"][hash];

}

setInterval(() => {
    changeLanguage()
},30)