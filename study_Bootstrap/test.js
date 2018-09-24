window.onload = function () {
    /*    document.addEventListener("click", function (e) {
            let a = e.target,
                li = a.parentNode,
                lis = li.parentNode.children;
            for (let i = 0;i<lis.length;i++){
                lis[i].className = "";
            }
            li.className = "active";
        })*/
    let progress = document.getElementsByClassName("progress-bar")[0],
        val,
        number = document.getElementById("number");
    progress.style.width = "0%";
    function interval() {
        if (progress.style.width === "0%") {
            clearInterval(val);
            val = setInterval(function () {
                let num = progress.style.width;
                progress.style.width = parseInt(num) + 1 + "%";
                number.innerText = parseInt(num) + 1;
                interval();
            }, 100)
        }
        if (progress.style.width === "100%") {
            clearInterval(val);
            val = setInterval(function () {
                let num = progress.style.width;
                progress.style.width = parseInt(num) - 1 + "%";
                number.innerText = parseInt(num) - 1;
                interval();
            }, 100)
        }
    }

    interval();
    let hover = document.getElementsByClassName("list-group-item");
    for (let i = 0; i < hover.length; i++) {
        hover[i].onmouseover = function () {
            this.style.backgroundColor = "#0000ff";
            this.style.cursor = 'pointer';
        };
        hover[i].onmouseout = function () {
            this.style.backgroundColor = "#ffffff";
            this.style.default = 'pointer';
        };
    }
};
