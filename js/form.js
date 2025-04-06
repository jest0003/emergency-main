const slider = document.querySelector ("#minder");
const minderValue = document.querySelector ("#range-value");
slider.style.accentColor = "#81e6b5";
slider.addEventListener("input", updateValue);

function initOption7(element) {
    if (element.checked) {
        document.querySelector('#op7text').required = true;
    } else {
        document.querySelector('#op7text').required = false;
    }
}
document.querySelector('#op7').addEventListener("click", function(e) {
    const element = e.target; // get clicked element
    initOption7(element);
})
initOption7(document.querySelector('#op7'));

function updateValue() {
    minderValue.textContent = slider.value;
}

/*summerey*/
const submit = document.querySelector ("#webform");
submit.addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault(); // prevent the form to submit normally

    /*radio knap*/
    document.querySelector("#sumF_25").textContent = document.querySelector('input[name="ja_nej"]:checked').value;
    document.querySelector("#sumFNavn").textContent = document.querySelector('#f-navn').value;
    document.querySelector("#sumENavn").textContent = document.querySelector('#e-navn').value;
    document.querySelector("#sumEmail").textContent = document.querySelector('#email').value;

    const optioner = [];
    document.querySelectorAll('input[name="options"]:checked').forEach(function(opt) {
        optioner.push(opt.value);
    });
    if (document.querySelector('#op7').checked) {
        optioner.push(document.querySelector('#op7text').value);
    }
    document.querySelector("#sumHvorfor").innerHTML = optioner.join("<br />");
    document.querySelector("#sumVarighed").textContent = document.querySelector('#drop_d').value;
    document.querySelector('#sumMinder').textContent = `${slider.value}%`;
    document.querySelector("#sumSamtykke").textContent = document.querySelector('#samtykke').checked ? "Ja" : "Nej";
}




