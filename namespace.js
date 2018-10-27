var PHILIPPRAKU = {

    ColorDiv = function (ev) {
        let target = ev.currentTarget;
        target.style.backgroundColor = 'purple';
        target.style.color = 'white';
    }

    init: function () {
        divA = document.getElementById("output");
        divA = addEventListener("mouseout", PHILIPPRAKU.colorDiv);
    }
}

PHILIPPRAKU.init();
