import * as Perfil from "./core/Perfis.js";

document.addEventListener('DOMContentLoaded', function() {

    const main = document.querySelector('main');

    const el_tabela_perfis = document.getElementById('tabela_perfis');

    const botao_mais = document.querySelector('.botao_mais');

    let mestre = localStorage.getItem('mestre') ? JSON.parse(localStorage.getItem('mestre')) : {};

    console.log(mestre);

    let teste = new Perfil.LG056(2005, 'H', '90/90');

    function cria_linha_perfil(perfil){

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
        txt_qtd.textContent = 1;

        const txt_peso = document.createElement('h3');
        linha.appendChild(txt_peso);
        txt_peso.textContent = perfil.calculaPeso()*txt_qtd.textContent;

        el_tabela_perfis.appendChild(linha);

    }

    cria_linha_perfil(teste);

    function click_mais(event){
        const container = document.createElement('div');
        container.classList.add('cria_perfil');

        const seletor_codigo = document.createElement('select');
        container.appendChild(seletor_codigo);

        const seletor_pos = document.createElement('select');
        container.appendChild(seletor_pos);

        const seletor_corte = document.createElement('select');
        container.appendChild(seletor_corte);

        const input_tamanho = document.createElement('input');
        container.appendChild(input_tamanho);

        const input_qtd = document.createElement('input');
        container.appendChild(input_qtd);

        const botao_criar = document.createElement('button');
        botao_criar.classList.add('botao_criar');
        container.appendChild(botao_criar);
    }

    botao_mais.addEventListener('click', click_mais);

});