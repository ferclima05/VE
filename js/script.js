document.addEventListener('DOMContentLoaded', function() {

    let mestre = {}

    const botao_comecar = document.querySelector('.botao_comecar_novo');

    const botao_carregar = document.querySelector('.botao_carregar');

    const seletor_arquivo = document.getElementById('seletor_arquivo');

    function click_comecar(event) {
        event.preventDefault();
        localStorage.clear();
        localStorage.setItem('mestre', JSON.stringify(mestre));
        window.location.href = 'html/modelos.html';
    }

    function click_carregar(event) {
        event.preventDefault();
        seletor_arquivo.click();
    }

    function carregar_arquivo(event) {
        const arquivo = event.target.files[0];
        if (arquivo) {
            const leitor = new FileReader();
            leitor.onload = function(e) {
                const texto = e.target.result;
                try {
                    mestre = JSON.parse(texto);
                    window.location.href = 'html/modelos.html';
                } catch (err) {
                    console.error('Erro ao parsear o JSON:', err);
                }
            }
            leitor.readAsText(arquivo);
        }
    }

    seletor_arquivo.addEventListener('change', carregar_arquivo);

    botao_comecar.addEventListener('click', click_comecar);

    botao_carregar.addEventListener('click', click_carregar);

});
