var campos = document.querySelectorAll(".input");

const botao = document.querySelector('.btn-enviar');
botao.addEventListener("click", () => {
    validarDados();
});

function validarDados() {
    let campoObrigatorio = document.querySelectorAll(".campo-obrigatorio");

    for (let i = 0; i < campos.length; i++) {
        if (campos[i].value.trim() === "") {
            campos[i].classList.add("vazio");
            campoObrigatorio[i].classList.add("campo-vazio");
        } else if(campos[i].value.trim() !== "") {
            campos[i].classList.remove("vazio");
            campoObrigatorio[i].classList.remove("campo-vazio");
            campos[i].classList.add("preenchido");
        } else {
            campos[i].classList.remove("preenchido");
        }
    }
}
