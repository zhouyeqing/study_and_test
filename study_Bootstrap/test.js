window.onload = function () {
    /*-------------------------------------------------------------------
    ------------------------------css组件部分用到的的js代码-----------------
    ------------------------------------------------------------------- */
    /*    document.addEventListener("click", function (e) {
            let a = e.target,
                li = a.parentNode,
                lis = li.parentNode.children;
            for (let i = 0; i < lis.length; i++) {
                lis[i].className = "";
            }
            li.className = "active";
        });
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
        }*/
    /*-------------------------------------------------------------------------
    ------------------------------Bootstrap框架JavaScript插件-------------------
    ------------------------------------------------------------------------ */
    let demo1 = document.getElementById("demo1"),
        demo2 = document.getElementById("demo2"),
        demo3 = document.getElementById("demo3"),
        button1 = document.getElementById("button1"),
        button2 = document.getElementById("button2"),
        button3 = document.getElementById("button3");
    button1.onclick = function () {
        alert("点击button1");
        if (demo1.style.display === "block") {
            demo1.style.display = "none";
        } else {
            demo1.style.display = "block";
            demo2.style.display = "none";
            demo3.style.display = "none";
        }
    };
    button2.onclick = function () {
        alert("点击button2");
        if (demo2.style.display === "block") {
            demo2.style.display = "none";
        } else {
            demo2.style.display = "block";
            demo1.style.display = "none";
            demo3.style.display = "none";
        }
    };
    button3.onclick = function () {
        alert("点击button3");
        if (demo3.style.display === "block") {
            demo3.style.display = "none";
        } else {
            demo3.style.display = "block";
            demo2.style.display = "none";
            demo1.style.display = "none";
        }
    };

    alert("加载完毕");


};
