/*mirror_girl*/
document.querySelector ("#mirror_girl_h") .addEventListener("mouseover", mirror_girl_h);
document.querySelector ("#mirror_girl_h") .addEventListener("mouseout", mirror_girl_out);
document.querySelector ("#mirror_girl_h") .addEventListener("click", mirror_girl_c)

function mirror_girl_h() {
    document.querySelector ("#mirror_girl_h") .style.opacity = "60%";
}
function mirror_girl_out() {
    document.querySelector ("#mirror_girl_h") .style.opacity = "0%" ;
}
function mirror_girl_c() {
    animateBox ()
    document.querySelector(".info-text > h2") .textContent = "SKAB EN RELATION"
    document.querySelector(".info-text > article > p") .innerHTML = "Okay. Din refleksion har sit eget liv nu. Cool. I stedet for panik og brandbål, så overvej: Hvad nu hvis I bare... blev venner? <br>Tænk over det. Du har nu en potentiel roomie, backup-sanger og skakmakker, der bogstaveligt talt forstår dig bedre end nogen anden. I kan dele tøj, planer og skyld. Start med et kompliment: “Flot hår i dag, mig.” Bare husk – den spejlede version har måske meget stærke meninger om tandbørstning og sovsevalg."
    document.querySelector("#requirement") .innerHTML = "<h4>Lav en vennebog</h4><p>Navn, livret, største frygt, yndlingsportal. Alt det gode. Gør det til en hyggelig aktivitet!</p>"
    document.querySelector("#efficiency") .innerHTML = "<h4>Start i det små</h4><p>Smil til dit spejlbillede. Vink. Del en snack. Undgå øjenkontakt i mere end 8 sekunder – det er stadig lidt utrygt.</p>"
}

    /*outer_girl*/
document.querySelector ("#q_mark_h") .addEventListener("mouseover", q_mark_h);
document.querySelector ("#q_mark_h") .addEventListener("mouseout", q_mark_h_out);
document.querySelector ("#q_mark_h") .addEventListener("click", q_mark_h_c);

function q_mark_h() {
    document.querySelector ("#q_mark_h") .style.opacity = "60%";
}
function q_mark_h_out() {
    document.querySelector ("#q_mark_h") .style.opacity = "0%" ;
}
function q_mark_h_c() {
    animateBox ()
    document.querySelector(".info-text > h2") .textContent = "REFLEKTER"
    document.querySelector(".info-text > article > p") .textContent = "Når din refleksion ændrer sig, bliver du tvunget til at se dig selv med nye øjne. Hvem er du egentlig – og hvem vil du være? Tag dig tid til at tænke. Skriv. Tal med nogen. Du kan ikke kontrollere det uventede, men du kan forholde dig til det. Refleksion er ikke kun noget, spejlet viser – det er en proces, du vælger."
    document.querySelector("#efficiency") .innerHTML = "<h4>Spørg dig selv</h4><p>Hvad frygter du, din refleksion ved om dig?</p>"
    document.querySelector("#requirement") .innerHTML = "<h4>Sæt ord på</h4><p>Navngiv det, du føler. Usikkerhed? Nysgerrighed? Noget midt imellem?</p>"
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