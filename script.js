document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("CatButton").onclick = function() {
        const CatGifs = [
            "https://raw.githubusercontent.com/orlyjamie/spinningcat/refs/heads/main/cat.gif",
            "https://i.pinimg.com/originals/56/c6/2a/56c62a4753beca0c53815b515f06a29a.gif",
            "https://media.tenor.com/QJhemZqORgYAAAAj/cat-spin.gif",
            "https://i.redd.it/xi0yc6ll5x5a1.gif"
        ];

        const img = document.getElementById("CatImage");
        const randomIndex = Math.floor(Math.random() * CatGifs.length);
        img.src = CatGifs[randomIndex];
    }
});

