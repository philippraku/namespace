var PHILIPPRAKU = {

    init: function () {

        let divA = document.createElement("div");
        divA.className = "box";
        divA.textContent = "PHILIPPRAKU";

        let divAs = document.getElementById("boxes");
        divAs.appendChild(divA);

        divA.addEventListener("click", function () {
            divA.style.borderColor = "#000000";
            divA.style.backgroundColor = "#b3c6ff";
            divA.write("Phil The Thrill!")
        });
        divA.addEventListener("mouseover", function () {
            divA.classList.toggle("highlight");
        });
        divA.addEventListener("mouseout", function () {
            divA.classList.toggle("highlight");
            divA.removeAttribute("style");
        });
    }
};