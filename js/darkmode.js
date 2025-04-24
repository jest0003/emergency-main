const switcher = document.querySelector("#switcher");
const css = document.querySelector("#lightmode");
const btn = document.querySelector ("#switchBtn");
btn.addEventListener ("click", change);

function change () {
    if (css.href.includes("darkmode")) {
        css.href = "../css/custom.css";
        switcher.textContent = "Dark mode";
    }
    else {
        css.href = "../css/darkmode.css";
        switcher.textContent = "Light mode";
    }
}