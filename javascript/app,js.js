const langArr = {
    "unit" : {
        "ru": "Купи адену на любимом сервере Lineage2",
        "eng": "Buy adena on beloved server Lineage2",
    },
    "text_hello" : {
        "ru": "Добро пожаловать друг !",
        "eng": "Welcom frend !",
    },
    "text_hello1": {
        "ru": "Lineage2 стала всеми любимой игрой, в которую играют сотни тысяч людей по всему миру. Наша команда состоит " +
            "из бывших играков, у которых многое связанно с этой увлекательной игрой. Мы имеем значительный опыт продажах в Lineage 2," +
            " именно по этому решили упростить Вам задачу и помочь в поисках всех важных атрибутов для более интересной игры. Вы можете не боятся " +
            "что купите или продадите золото в игре у нас. Всё верно, мы не только\n" +
            "продаем, но и покупаем золото и не только.",
        "eng": "Lineage2 has become a beloved game played by hundreds of thousands of people around the world. Our " +
            "team consists of" +
            " former players who have a lot to do with this exciting game. We have considerable experience in sales in Lineage 2," +
            " which is why we decided to simplify your task and help you find all the important attributes for a more interesting game. " +
            "You can not be afraid that you will buy or sell gold in the game with us. That's right, we are not only\n" +
            "we sell, but also buy gold and not only.",
    },
    "text_hello2": {
        "ru": "Наша команда,готова в любое время суток найти нужное количество золота для вашей активной игры на нужном\n" +
            "сервере. Вы можете отдыхать с семьей,заниматся своими делами в реальной жизни и при этом ваш персонаж будет развиватся," +
            " так как Lineage 2 это не только пвп но и долгий и не всегда веселый фарм.",
        "eng": "Our team is ready at any time of the day to find the necessary amount of gold for active games at the right level\n" +
            "server. You can relax with your family, go about your business in real life and at the same time your character will develop," +
            " since Lineage 2 is not only pvp, but also a long and not always fun farm.",
    },
    "text_hello3": {
        "ru": "Мы рады приветствовать вас у нас в гостях, именно так мы и относимся к нашим клиентам как к друзьям, и считаем,\n" +
            "что репутация при выше доходов. Убедитесь сами!",
        "eng": "We welcome you as our guest, this is how we treat clients as friends, and we think that,\n" +
            "that reputation is higher than income.You can see for yourself",
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
    document.querySelector(".index_text1").innerHTML = langArr["text_hello1"][hash];
    document.querySelector(".index_text2").innerHTML = langArr["text_hello2"][hash];
    document.querySelector(".index_text3").innerHTML = langArr["text_hello3"][hash];
    document.querySelector(".menu_1").innerHTML = langArr["text_menu1"][hash];
    document.querySelector(".menu_3").innerHTML = langArr["text_menu3"][hash];
    document.querySelector(".menu_4").innerHTML = langArr["text_menu4"][hash];
    document.querySelector(".menu_5").innerHTML = langArr["text_menu5"][hash];
    document.querySelector('.deal').innerHTML = langArr['deal'][hash];

}

setInterval(() => {
    changeLanguage()
},30)

