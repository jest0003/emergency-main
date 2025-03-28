/*mirror_girl*/
document.querySelector ("#mirror_girl_h") .addEventListener("mouseover", mirror_girl_h);
document.querySelector ("#mirror_girl_h") .addEventListener("mouseout", mirror_girl_out);

function mirror_girl_h() {
    console.log ("mirro girl gets blurry");
    document.querySelector ("#mirror_girl_h") .style.opacity = "60%";
}
function mirror_girl_out() {
    console.log ("un blurred");
    document.querySelector ("#mirror_girl_h") .style.opacity = "0%" ;}

    /*outer_girl*/
document.querySelector ("#mirror_girl_h") .addEventListener("mouseover", mirror_girl_h);
document.querySelector ("#mirror_girl_h") .addEventListener("mouseout", mirror_girl_out);

function mirror_girl_h() {
    console.log ("mirro girl gets blurry");
    document.querySelector ("#mirror_girl_h") .style.opacity = "60%";
}
function mirror_girl_out() {
    console.log ("un blurred");
    document.querySelector ("#mirror_girl_h") .style.opacity = "0%" ;}

    /*sigil*/
    document.querySelector ("#sigil_h") .addEventListener("mouseover", sigil_h);
document.querySelector ("#sigil_h") .addEventListener("mouseout", sigil_h_out);

function sigil_h() {
    console.log ("sigil lights");
    document.querySelector ("#sigil_h") .style.opacity = "80%";
}
function sigil_h_out() {
    console.log ("back to normal");
    document.querySelector ("#sigil_h") .style.opacity = "0%" ;}