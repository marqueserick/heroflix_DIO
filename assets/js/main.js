const botao = document.getElementById("abrir-filme");
botao.addEventListener("click", abrirFilme);

function abrirFilme(){
    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/YUfWrIcX4zw";
    iframe.width=600;
    iframe.height=400;
    const movie = window.open("",'movie','width=650 height=500');
    movie.document.body.appendChild(iframe).open();
}