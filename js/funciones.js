function dolar() {
    setInterval(() => {
        dolarFetch();
    }, 3000)
}

function dolarFetch() {
    fetch(dolaresUrl)
    .then(response => response.json())
    .then(({oficial, blue, solidario}) => {
        hideSpinner()
        showInputs()
        Doficial.innerText = `${"$" + oficial.toFixed(2)}`;
        Dblue.innerText = `${"$" + blue.toFixed(2)}`;
        Dsolidario.innerText = `${"$" + solidario.toFixed(2)}`;
        inputDolares.addEventListener("input", () => {
            const conversion = (inputDolares.value * blue).toLocaleString();
            inputPesos.value = conversion;
        })
        inputPesos.addEventListener("input", () => {
            const conversion2 = (inputPesos.value / blue).toLocaleString();
            inputDolares.value = conversion2;
        })
    })
    .catch(error => console.error(error))
    .finally(() => console.log("Proceso Finalizado"))
}

function hideSpinner() {
    for(const spinners of spanDolar) {
        spinners.className = "spinnerOut";
    }
}

function showInputs() {
    inputDolares.classList.add("inp");
    inputPesos.classList.add("inp");
}