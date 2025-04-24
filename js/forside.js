function setupArticle(article) {
    const openBtn = article.querySelector("article > button");
    const dialog = article.querySelector ("dialog");
    const closeBtn = article.querySelector (".close-dialog");

    openBtn.addEventListener("click", openDia);
    function openDia(){
        dialog.querySelector("img").scrollIntoView();
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