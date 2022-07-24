const langArr = {
    "unit" : {
        "ru": "Поставщикам золота в Lineage2",
        "eng": "For gold suppliers in Lineage2",
    },
    "text_hello" : {
        "ru": "Хотите продать то что копили годами , играя на любимом сервере?",
        "eng": "Do you want to sell what you have been saving for years playing on your favorite server?",
    },
    "text_hello1": {
        "ru": "Тогда вы попали туда куда нужно",
        "eng": "Then you have come to the right place",
    },
    "text_hello2": {
        "ru": "В жизни случаются разные ситуации , кто то устает от игры, взрослеет и у него нету больше времени" +
         "на игру. Причины бывают разные. Если вы хотите продать игровую валюту, персонажа или же другие" +
          "ценные итемы в игре, наша команда готова выкупить у вас , все по хорошей цене.",
        "eng": "Different situations happen in life, someone gets tired of the game, grows up and has no more time" +
         "for the game.</br> The reasons are different. If you want to sell game currency, character or other" +
          "valuable items in the game, our</br> team is ready to buy from you, all at a good price.",
    },
    "text_hello3": {
        "ru": "А так же, мы постоянно в поисках людей которые желают зарабатывать деньги играя в любимую игру," +
         "если вы </br>из таких людей,оброщайтесь к нашему оператору , он добавит вас в список поставщиков" +
          "на вашем сервера и при необходимости выкупит у вас вашу игровую валюту по лучшим ценам" +
           "Даже, если вы эдиножды решитесь что то продать, добавляйтесь мы всем рады.",
        "eng": "And also, we are constantly looking for people who want to earn money by playing their favorite game," +
         "if you are</br> one of these people, contact our operator, he will add you to the list of suppliers" +
          "on your server and, if necessary,</br> will buy your game currency from you at the best prices" +
           "Even if you once decide to sell something, add us, </br>we are all happy.",
    },"text_hello4": {
        "ru": "Все наши контакты, есть на сайте при переходе по сайту на наши соц сети вы можете не беспокоится.\n" +
            "В другом же случаее, если попытаетесь найти нас сами в поиске. Убедитесь что это действительно мы.\n" +
            "Хорошего вам дня и Удачного фарма ;)\n" +
            "\n",
        "eng": "All our contacts are on the site when you go through the site to our social networks, you can not worry." +
         "In another</br> case, if you try to find us yourself in the search. Make sure it's really us." +
          "</br>Have a nice day and good farming ;)",
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
    "text_menu6": {
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
    document.querySelector(".menu_1").innerHTML = langArr["text_menu1"][hash];
    document.querySelector(".menu_3").innerHTML = langArr["text_menu3"][hash];
    document.querySelector(".menu_4").innerHTML = langArr["text_menu4"][hash];
    document.querySelector(".menu_5").innerHTML = langArr["text_menu5"][hash];
    document.querySelector(".menu_6").innerHTML = langArr["text_menu6"][hash];

}

setInterval(() => {
    changeLanguage()
},30)