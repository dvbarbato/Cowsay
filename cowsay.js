let cowsayRun = document.getElementById("cowsay-run")
let cowsayOutput = document.getElementById("cowsay-output")

cowsayRun.addEventListener("click", function () {
    let inputText = document.getElementById("putInput")
    if (inputText.value.includes("?")) {
        cowsayOutput.innerHTML = "Não sei o que dizer sobre isso."
    } else if (inputText.value.includes("!")) {
        cowsayOutput.innerHTML = "SIM SIM, " + inputText.value.toUpperCase()
    } else {
        cowsayOutput.innerHTML = "Yeah, " + inputText.value
    }
})