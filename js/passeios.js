
    const imagens = [
        "img/Rectangle 68.jpg",
        "img/Vector.png",
        "img/chale_suisso.jpg",
        "img/festival-de-verao-2023-2.jpg",
    ];

    const imagemPasseio = document.getElementById("imagem-passeio");
    const botaoAnterior = document.getElementById("anterior");
    const botaoProximo = document.getElementById("proximo");
    let currentImageIndex = 0;

    function changeImage(direction) {
        if (direction === "anterior") {
            currentImageIndex = (currentImageIndex - 1 + imagens.length) % imagens.length;
        } else {
            currentImageIndex = (currentImageIndex + 1) % imagens.length;
        }
        imagemPasseio.src = imagens[currentImageIndex];
    }

    botaoAnterior.addEventListener("click", () => {
        changeImage("anterior");
    });

    botaoProximo.addEventListener("click", () => {
        changeImage("proximo");
    });

    // Função para exibir a imagem inicial
    function exibirImagemInicial() {
        imagemPasseio.src = imagens[currentImageIndex];
    }

    // Chame a função para exibir a imagem inicial
    exibirImagemInicial();

    const imagens1 = [
        "img/passeio-de-barco-em-paraty.jpg",
        "img/WhatsApp Image 2022-10-15 at 12.46.13 PM (2).jpeg",
        "img/chale_suisso.jpg",
        "img/festival-de-verao-2023-2.jpg",
    ];
    
    const imagemPasseio1 = document.getElementById("imagem-passeio1");
    const botaoAnterior1 = document.getElementById("anterior1");
    const botaoProximo1 = document.getElementById("proximo1");
    let currentImageIndex1 = 0;
    
    function changeImage1(direction) {
        if (direction === "anterior1") {
            currentImageIndex1 = (currentImageIndex1 - 1 + imagens1.length) % imagens1.length;
        } else {
            currentImageIndex1 = (currentImageIndex1 + 1) % imagens1.length;
        }
        imagemPasseio1.src = imagens1[currentImageIndex1];
    }
    
    botaoAnterior1.addEventListener("click", () => {
        changeImage1("anterior1");
    });
    
    botaoProximo1.addEventListener("click", () => {
        changeImage1("proximo1");
    });
    
    // Função para exibir a imagem inicial
    function exibirImagemInicial1() {
        imagemPasseio1.src = imagens1[currentImageIndex1];
    }
    
    // Chame a função para exibir a imagem inicial
    exibirImagemInicial1();
    