setTimeout(() => {
    document.getElementById("num").innerHTML = 1;
    setTimeout(() => {
        document.getElementById("num").innerHTML = 2;
        setTimeout(() => {
            document.getElementById("num").innerHTML = 3;
            setTimeout(() => {
                document.getElementById("num").innerHTML = 4;
                setTimeout(() => {
                    document.getElementById("num").innerHTML = 5;
                    setTimeout(() => {
                        document.getElementById("num").innerHTML = "Happy new year";
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);