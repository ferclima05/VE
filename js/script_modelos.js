document.addEventListener('DOMContentLoaded', function() {

    const el_largura_com_folga = document.getElementById('largura_com_folga');

    const el_altura_com_folga = document.getElementById('altura_com_folga');

    const el_largura_externa = document.getElementById('largura_externa');

    const el_altura_externa = document.getElementById('altura_externa');

    const el_input_nome_cliente = document.getElementById('nome_cliente');

    const el_input_produto = document.getElementById('produto');

    const el_input_quantidade = document.getElementById('quantidade');

    const el_input_largura = document.getElementById('largura');

    const el_input_altura = document.getElementById('altura');

    const el_input_folga = document.getElementById('folga');

    let mestre = localStorage.getItem('mestre') ? JSON.parse(localStorage.getItem('mestre')) : {};

    function preenche_inputs(mestre) {
        for (let key in mestre) {
            if (mestre.hasOwnProperty(key)) {
                let input = document.getElementById(key);
                if (input) {
                    input.value = mestre[key];
                }
            }
        }
    }

    function captura_input(event){
        let inputId = event.target.id;
        let inputValue = event.target.value;
        mestre[inputId] = inputValue;
        localStorage.setItem('mestre', JSON.stringify(mestre));
        console.log(mestre);

        if (mestre['largura'] && mestre['altura'] && mestre['folga']) {

            el_largura_com_folga.textContent = parseFloat(mestre.largura) - parseFloat(mestre.folga);
    
            el_altura_com_folga.textContent = parseFloat(mestre.altura) - parseFloat(mestre.folga);
    
            el_largura_externa.textContent = parseFloat(mestre.largura) + 24;
    
            el_altura_externa.textContent = parseFloat(mestre.altura) + 24;
        };
    }

    preenche_inputs(mestre);

    el_largura_com_folga.textContent = parseFloat(mestre.largura) - parseFloat(mestre.folga);
    
    el_altura_com_folga.textContent = parseFloat(mestre.altura) - parseFloat(mestre.folga);

    el_largura_externa.textContent = parseFloat(mestre.largura) + 24;

    el_altura_externa.textContent = parseFloat(mestre.altura) + 24;

    el_input_nome_cliente.addEventListener('input', captura_input);

    el_input_produto.addEventListener('input', captura_input);

    el_input_quantidade.addEventListener('input', captura_input);

    el_input_largura.addEventListener('input', captura_input);

    el_input_altura.addEventListener('input', captura_input);

    el_input_folga.addEventListener('input', captura_input);

});