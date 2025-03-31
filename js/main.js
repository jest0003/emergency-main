/*mirror_girl*/
document.querySelector ("#mirror_girl_h") .addEventListener("mouseover", mirror_girl_h);
document.querySelector ("#mirror_girl_h") .addEventListener("mouseout", mirror_girl_out);
document.querySelector ("#mirror_girl_h") .addEventListener("click", mirror_girl_c)

function mirror_girl_h() {
    console.log ("mirro girl gets blurry");
    document.querySelector ("#mirror_girl_h") .style.opacity = "60%";
}
function mirror_girl_out() {
    console.log ("un blurred");
    document.querySelector ("#mirror_girl_h") .style.opacity = "0%" ;
}
function mirror_girl_c() {
    console.log ("klikket")
    animateBox ()
    document.querySelector(".info-text > h2") .textContent = "SKAB EN RELATION"
    document.querySelector(".info-text > article > p") .textContent = "Tester"
    document.querySelector("#efficiency") .innerHTML = "Tester inner <br>html"
    document.querySelector("#requirement") .innerHTML = "Tester inner <br>html"
}

    /*outer_girl*/
document.querySelector ("#q_mark_h") .addEventListener("mouseover", q_mark_h);
document.querySelector ("#q_mark_h") .addEventListener("mouseout", q_mark_h_out);
document.querySelector ("#q_mark_h") .addEventListener("click", q_mark_h_c);

function q_mark_h() {
    console.log ("mirro girl gets blurry");
    document.querySelector ("#q_mark_h") .style.opacity = "60%";
}
function q_mark_h_out() {
    console.log ("un blurred");
    document.querySelector ("#q_mark_h") .style.opacity = "0%" ;
}
function q_mark_h_c() {
    console.log ("klikket")
    animateBox ()
    document.querySelector(".info-text > h2") .textContent = "REFLEKTER"
    document.querySelector(".info-text > article > p") .textContent = "Tester"
    document.querySelector("#efficiency") .innerHTML = "Tester inner <br>html"
    document.querySelector("#requirement") .innerHTML = "Tester inner <br>html"
}

    /*sigil*/
    document.querySelector ("#sigil_h") .addEventListener("mouseover", sigil_h);
document.querySelector ("#sigil_h") .addEventListener("mouseout", sigil_h_out);
document.querySelector ("#sigil_h") .addEventListener("click", sigil_h_c);

function sigil_h() {
    console.log ("sigil lights");
    document.querySelector ("#sigil_h") .style.opacity = "80%";
}
function sigil_h_out() {
    console.log ("back to normal");
    document.querySelector ("#sigil_h") .style.opacity = "0%" ;
}
function sigil_h_c() {
    console.log ("klikket")
    animateBox ()
    /* document.querySelector ("#efficiency") .classList.remove ("hide");
    document.querySelector ("#efficiency") .classList.add("fadeIn");
    document.querySelector("#efficiency") .addEventListener ("animationend", cleanup); */

    
    document.querySelector(".info-text > h2") .textContent = "RENSNINGS RITUAL"
    document.querySelector(".info-text > article > p") .innerHTML = "<p>Hvis du vil have din egen reflektion tilbage, kan det opnåes ved at udføre dette rensnings ritual.</p><p><strong>Tilgangs metode:</strong> <ol><li>Mix ingridienserne sammen i en skål</li><br><li>Tegn symbolet på en reflekterende overflade, med de mixede ingridienser.</li><br><li>Sig disse magiske ord:<br> <br>abracadabra<br>sim sala bim<br>micrato, raepy sathonich<br>voilà</li></ol></p>"
    document.querySelector("#efficiency") .innerHTML = "<h3>Ingridienser</h3><p></p><ul><li>Første ingridiens</li><li>Anden ingridiens</li><li>Tredje ingridiens</li><li>Fjerde ingridiens</li><li>Femte ingridiens</li></ul>"
    document.querySelector("#requirement") .innerHTML = "Box 2...."
}
function cleanup () {
    console.log ("clean up");
    document.querySelector ("#requirement") .classList.remove ("fadeIn");
    document.querySelector ("#efficiency") .classList.remove ("fadeIn");
    document.querySelector ("#efficiency") .removeEventListener ("animationend", cleanup);
    document.querySelector ("requirement") .removeEventListener ("animationend", cleanup);
}
function animateBox () {
    document.querySelector ("#efficiency") .classList.remove ("hide");
    document.querySelector ("#efficiency") .classList.add("fadeIn");
    document.querySelector("#efficiency") .addEventListener ("animationend", cleanup);
    document.querySelector ("#requirement") .classList.remove ("hide");
    document.querySelector ("#requirement") .classList.add("fadeIn");
    document.querySelector("#requirement") .addEventListener ("animationend", cleanup);
}