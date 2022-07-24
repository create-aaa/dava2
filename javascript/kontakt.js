const langArr = {
    "title_questions" : {
        "ru": "Наши контакты",
        "eng": "Our contacts",
    },
    "text_hello" : {
        "ru": "Контакты для связи с нами",
        "eng": "Contacts to contact us",
    },
    "text_hello1": {
        "ru": "Для связи с нами вы можете использовать,любую из соц сетей",
        "eng": "To contact us, you can use any of the social networks",
    },
    // "text_hello2": {
    //     "ru": "О: Оформления заказа происходит на сайте в разделе Lineage2 ,вы выбераете в поиске нужный сервер,\n"+
    //         "</br> способ оплаты ,указываете электронную почту и ник персонажа. Для вашего удобства используется</br> множиство различных\n" +
    //         "платёжных систем.",
    //     "eng": "A: Ordering takes place on the site in the Lineage2 section, you select the desired server in the search,\n" +
    //         "payment method, indicate the e-mail and nickname of the character. For your convenience, there are many different\n" +
    //         "payment systems.",
    // },
    // "text_hello3": {
    //     "ru": "В: Что вы продаете помимо валюты в игре? Можно ли купить оружие или персонажей?",
    //     "eng": "Q: What do you sell besides in-game currency? Can I buy a weapon or character from you?",
    // },
    // "text_hello4": {
    //     "ru": "О: Мы работаем каждый день над тем что бы , упростить вашу игру. Вы можете обратиться к нашему оператору ,</br>\n" +
    //         "в любой удобный способ и узнать о наличии нужного предмета .\n" +
    //         "Наши специалисты , займутся поиском</br> подходящего для Вас предмета, персонажа , эпика или оружия +16, но это может занять больше времени",
    //     "eng": "A: We work every day to make your game easier. You can select the desired server and contact the operator, in any convenient way, and find out if the product you need is in stock.\n" +
    //         "Our experts will look for the right item, character,</br> equipment or gun +16 for you, but this may take longer,",
    // },
    // "text_hello5": {
    //     "ru": "В: Какие гарантии выполнения сделки?",
    //     "eng": "Q: What are the order fulfillment guarantees?",
    // },
    // "text_hello6": {
    //     "ru": "В: Мы выполняем все свои обещания , если же произойдет такой случай что мы не сможем выполнить ваш\n" +
    //         "заказ</br> мы вернем вам деньги и выдадим купон на 30% скидку для следуйщего заказа.Репутация это\n" +
    //         "наше лицо , и мы</br> этим дорожим. Если у вас возникают какие то вопросы или проблемы , обращайтесь к оператору,\n" +
    //         "он ответит</br> на все ваши вопросы по заказу и времени его выполнения. <a class='garant1' href='/6/questions.html#ru'>Гарантии</a> ",
    //     "eng": "A: We keep all our promises, if there is such a case that we cannot fulfill your\n" +
    //         "order, we will refund your money and issue</br> a coupon for a 30% discount for the next order. Reputation is our" +
    //         " face, and we value it. If you have any questions or problems, please contact the operator, he will answer all " +
    //         "your questions about the order and the time of its implementation. <a class='garant1' href='/6/guarantees.html#eng'>Warranty</a>",
    //
    // },
    // "text_hello7": {
    //     "ru": "В: Как быстро выполняется заказ через ваш магазин?",
    //     "eng": "Q: How fast is an order through your store?",
    // },
    // "text_hello8": {
    //     "ru": "О: Время выполнения заказа от 3 минуты до нескольких часов ( точное время уточняйте у оператора ).\n",
    //     "eng": "A: The order execution time is from 3 minutes to several hours (check with the operator for the exact time)",
    // },
    // "text_hello9": {
    //     "ru": "В: Почему именно вы? есть же много всяких сервисов и магазинов?\n",
    //     "eng": "Q: Why should I choose you?\n" +
    //         "There are other shops and services.",
    // },
    // "text_hello10": {
    //     "ru": "О: Наша команда занимается продажами более 10 лет в Lineage2. Мы знаем про многие случаи обманов</br> при покупке или\n" +
    //         "продаже , про многие мошенические схемы и сервисы. Мы хотим предаставить вам наши</br> гарантии и сервис\n" +
    //         "что бы вы не только покупали у нас , потому что *Хорошая цена* , но и смогли советывать нас вашим друзьям.\n" +
    //         "Нам есть куда рости и развиваться.Наша мисия - качественный и быстрый сервис для Вашей игры. Убедитесь сами.",
    //     "eng": "A: Our team has been selling at Lineage2 for over 10 years. We are aware of many cases of deception\n" +
    //         "when buying or</br> selling, about many fraudulent schemes and services. We would like to introduce you to our\n" +
    //         "guarantees and service,</br> so that you not only buy from us, because *good price*, but also had the opportunity" +
    //         " to recommend us to their</br> friends. We have room to grow and develop. Our mission is a high-quality and fast service for your game.</br> You can see for yourself",
    // },
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


function changeURLLanguge() {
    let seo = select.value;
    location.href = window.location.pathname +"#"+ seo;
    // location.reload();
    // return;
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1)
    if (!alllang.includes(hash)) {
        location.href = window.location.pathname + "#" + select.value;
        // location.reload();
        return;
    }


    select.value = hash;

    // if (hash !== "")
    localStorage.setItem("langers", hash)

    document.querySelector('title').innerHTML = langArr["title_questions"][hash];
    document.querySelector(".text_hello").innerHTML = langArr["text_hello"][hash];
    document.querySelector(".text_kontakt").innerHTML = langArr["text_hello1"][hash];
    // document.querySelector(".text_hello2").innerHTML = langArr["text_hello2"][hash];
    // document.querySelector(".text_hello3").innerHTML = langArr["text_hello3"][hash];
    // document.querySelector(".text_hello4").innerHTML = langArr["text_hello4"][hash];
    // document.querySelector(".text_hello5").innerHTML = langArr["text_hello5"][hash];
    // document.querySelector(".text_hello6").innerHTML = langArr["text_hello6"][hash];
    // document.querySelector(".text_hello7").innerHTML = langArr["text_hello7"][hash];
    // document.querySelector(".text_hello8").innerHTML = langArr["text_hello8"][hash];
    // document.querySelector(".text_hello9").innerHTML = langArr["text_hello9"][hash];
    // document.querySelector(".text_hello10").innerHTML = langArr["text_hello10"][hash];
    document.querySelector(".menu_1").innerHTML = langArr["text_menu1"][hash];
    document.querySelector(".menu_3").innerHTML = langArr["text_menu3"][hash];
    document.querySelector(".menu_4").innerHTML = langArr["text_menu4"][hash];
    document.querySelector(".menu_5").innerHTML = langArr["text_menu5"][hash];
    document.querySelector(".deal").innerHTML = langArr["deal"][hash];

}

setInterval(() => {
    changeLanguage()
},30)
