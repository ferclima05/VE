import * as Perfil from "./core/Perfis.js";

const Codigos = {
    LG056: 'LG056',
    LG058: 'LG058',
    LG007: 'LG007',
    LG043: 'LG043',
    LG016: 'LG016',
    LG027: 'LG027',
    VZ006: 'VZ006',
    MP347: 'MP347',
    CM063: 'CM063'
}

const Pos = {
    H: 'H',
    L: 'L',
}

const Corte = {
    '90/90': '90/90',
    '90/45': '90/45',
    '45/45': '45/45',
    '45/90': '45/90',
}

const Tamanhos = {
    altura: 'altura',
    largura: 'largura',
    altura_externa: 'altura externa',
    largura_externa: 'largura externa',
    altura_com_folga: 'altura com folga',
    largura_com_folga: 'largura com folga',
    altura_2: 'altura/2',
    largura_2: 'largura/2',
    personalizado: 'personalizado',
}

document.addEventListener('DOMContentLoaded', function() {

    const main = document.querySelector('main');

    const el_tabela_perfis = document.getElementById('tabela_perfis');

    let mestre = localStorage.getItem('mestre') ? JSON.parse(localStorage.getItem('mestre')) : {};

    const Tamanhos_2 = {
        altura: mestre.altura,
        largura: mestre.largura,
        altura_externa: parseFloat(mestre.altura) + 24,
        largura_externa: parseFloat(mestre.largura) + 24,
        altura_com_folga: parseFloat(mestre.altura) - parseFloat(mestre.folga),
        largura_com_folga: parseFloat(mestre.largura) - parseFloat(mestre.folga),
        altura_2: parseFloat(mestre.altura)/2,
        largura_2: parseFloat(mestre.largura)/2,
    }

    console.log(mestre);

    const peso_total = document.getElementById('peso_total');

    const botao_mais = document.createElement('button');
    botao_mais.classList.add('botao_mais');
    botao_mais.textContent = '+';
    main.appendChild(botao_mais);

    // inicialização do contairer de criação de perfil
    const container = document.createElement('div');
    container.classList.add('cria_perfil');

    const titulo = document.createElement('h1');
    titulo.textContent = 'Insira as informações do perfil:';
    container.appendChild(titulo);

    const div_superior = document.createElement('div');
    div_superior.classList.add('div_superior');
    container.appendChild(div_superior);

    function cria_opcoes(select, dict_opcoes){
        for (let key in dict_opcoes){
            let option = document.createElement('option');
            option.value = key;
            option.textContent = dict_opcoes[key];
            select.appendChild(option);
        }
    }

    const div_codigo = document.createElement('div');
    div_codigo.classList.add('caixas');
    const titulo_codigo = document.createElement('h4');
    titulo_codigo.textContent = 'Código:';
    div_codigo.appendChild(titulo_codigo);
    const seletor_codigo = document.createElement('select');
    cria_opcoes(seletor_codigo, Codigos);
    div_codigo.appendChild(seletor_codigo);
    div_superior.appendChild(div_codigo);

    const div_pos = document.createElement('div');
    div_pos.classList.add('caixas');
    const titulo_pos = document.createElement('h4');
    titulo_pos.textContent = 'Pos:';
    div_pos.appendChild(titulo_pos);
    const seletor_pos = document.createElement('select');
    cria_opcoes(seletor_pos, Pos);
    div_pos.appendChild(seletor_pos);
    div_superior.appendChild(div_pos);

    const div_corte = document.createElement('div');
    div_corte.classList.add('caixas');
    const titulo_corte = document.createElement('h4');
    titulo_corte.textContent = 'Corte:';
    div_corte.appendChild(titulo_corte);
    const seletor_corte = document.createElement('select');
    cria_opcoes(seletor_corte, Corte);
    div_corte.appendChild(seletor_corte);
    div_superior.appendChild(div_corte);

    const div_tamanho = document.createElement('div');
    div_tamanho.classList.add('caixas');
    const titulo_tamanho = document.createElement('h4');
    titulo_tamanho.textContent = 'Tamanho (mm):';
    div_tamanho.appendChild(titulo_tamanho);
    const input_tamanho = document.createElement('select');
    const input_personalizado = document.createElement('input');
    cria_opcoes(input_tamanho, Tamanhos);
    div_tamanho.appendChild(input_tamanho);
    div_superior.appendChild(div_tamanho);

    const div_qtd = document.createElement('div');
    div_qtd.classList.add('caixas');
    const titulo_qtd = document.createElement('h4');
    titulo_qtd.textContent = 'Quantidade:';
    div_qtd.appendChild(titulo_qtd);
    const input_qtd = document.createElement('input');
    div_qtd.appendChild(input_qtd);
    div_superior.appendChild(div_qtd);

    const div_botoes = document.createElement('div');
    div_botoes.classList.add('div_botoes');

    const botao_criar = document.createElement('button');
    botao_criar.classList.add('botao_criar');
    botao_criar.textContent = 'Criar';

    const botao_fechar = document.createElement('button');
    botao_fechar.classList.add('botao_fechar');
    botao_fechar.textContent = 'Fechar';

    div_botoes.appendChild(botao_criar);
    div_botoes.appendChild(botao_fechar);

    container.appendChild(div_botoes);



    // ---------------------------------------------

    function cria_linha_perfil(perfil, qtd){

        const linha = document.createElement('div');
        linha.classList.add('linha');

        const txt_codigo = document.createElement('h3');
        linha.appendChild(txt_codigo);
        txt_codigo.textContent = perfil.codigo;

        const txt_pos = document.createElement('h3');
        linha.appendChild(txt_pos);
        txt_pos.textContent = perfil.pos;

        const txt_corte = document.createElement('h3');
        linha.appendChild(txt_corte);
        txt_corte.textContent = perfil.corte;

        const txt_tamanho = document.createElement('h3');
        linha.appendChild(txt_tamanho);
        txt_tamanho.textContent = perfil.tamanho;

        const txt_qtd = document.createElement('h3');
        linha.appendChild(txt_qtd);
        txt_qtd.textContent = qtd;

        const txt_peso = document.createElement('h3');
        linha.appendChild(txt_peso);
        txt_peso.textContent = (perfil.calculaPeso()*txt_qtd.textContent).toFixed(3);

        el_tabela_perfis.appendChild(linha);
    }

    let personalizado = false;
    function verificaPersonalizado(){
        if (input_tamanho.value === "personalizado"){
            input_tamanho.remove();
            div_tamanho.appendChild(input_personalizado);
            personalizado = true;
        }
    }

    function atualizaPeso(){
        let peso = 0;
        for (let linha of el_tabela_perfis.children){
            if (linha.classList == 'linha'){
                peso += parseFloat(linha.children[5].textContent);
            }
        }
        peso_total.textContent = peso.toFixed(3);
    }

    function click_mais(event){
        botao_mais.remove();
        main.appendChild(container);
    }

    function click_criar(event){

        let codigo = seletor_codigo.value;
        let pos = seletor_pos.value;
        let corte = seletor_corte.value;
        let tamanho = null;

        if (personalizado) {
            tamanho = input_personalizado.value;
        } else {
            tamanho = Tamanhos_2[input_tamanho.value];;
        }

        let qtd = input_qtd.value;

        let perfil = new Perfil[codigo](tamanho, pos, corte);

        cria_linha_perfil(perfil, qtd);

        atualizaPeso();
        container.remove();
        main.appendChild(botao_mais);
    }

    function click_fechar(event){
        container.remove();
        main.appendChild(botao_mais);
    }

    atualizaPeso();

    input_tamanho.addEventListener('change', verificaPersonalizado);

    botao_mais.addEventListener('click', click_mais);

    botao_criar.addEventListener('click', click_criar);

    botao_fechar.addEventListener('click', click_fechar);
});