/*nr 1*/
//document.querySelector ("#lm_1").addEventListener("click", openDia1);
//function openDia1(e) {
//    e.preventDefault();
//    document.querySelector ("#dialog_1").showModal();
//}
/*nr 2*/
//document.querySelector("#lm_2").addEventListener("click", openDia2);
//function openDia2(e) {
//    e.preventDefault();
//    document.querySelector("#dialog_2").showModal();
//}
/*nr 3*/
//document.querySelector("#lm_3").addEventListener("click", openDia3);
//function openDia3(e) {
//    e.preventDefault();
//    document.querySelector("#dialog_3").showModal();
//}
/*nr 4*/
//document.querySelector("#lm_4").addEventListener("click", openDia4);
//function openDia4(e) {
//    e.preventDefault();
//    document.querySelector("#dialog_4").showModal();
//}

function setupArticle(article) {
    const openBtn = article.querySelector("article > button");
    const dialog = article.querySelector ("dialog");
    const closeBtn = article.querySelector (".close-dialog");

    openBtn.addEventListener("click", openDia);
    function openDia(){
        dialog.showModal();
    }
    closeBtn.addEventListener ("click", function() {dialog.close();})
}
const art_ = document.querySelectorAll (".news_card");

art_.forEach(setupArticle);

art_.forEach((article) => {
    setupArticle(article);});
art_.forEach(function (article) {setupArticle (article);});

/*animation teaser 1*/
document.querySelector("#teaser_1").classList.add ("up_down_animation");
document.querySelector("#teaser_1").classList.add("stop");

document.querySelector("#teaser_1").addEventListener("mouseover", startAni);
document.querySelector("#teaser_1").addEventListener("mouseout", stopAni);

function startAni() {
    this.classList.remove("stop");
}
function stopAni() {
    this.classList.add ("stop");
}

/*ani teaser 2*/
document.querySelector("#teaser_2").classList.add ("pan_animation");
document.querySelector("#teaser_2").classList.add("stop");

document.querySelector("#teaser_2").addEventListener("mouseover", startAni);
document.querySelector("#teaser_2").addEventListener("mouseout", stopAni);