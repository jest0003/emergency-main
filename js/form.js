const slider = document.querySelector ("#minder");
const minderValue = document.querySelector ("#range-value");
slider.style.accentColor = "#81e6b5";
slider.addEventListener("input", minderValue);

/*summerey*/
const submit = document.querySelector ("#submit");

submit.addEventListener("click", submitForm);

function submitForm() {

    /*radio knap*/
    document.querySelector("#age").textContent =document.querySelector('input[name="ja_nej"]:checked').value;
}
