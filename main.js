const form = document.getElementById('form-agenda');
const telefones = [];
let linhas = '';


form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();

})

function adicionaLinha(){
    const inputNome = document.getElementById('nome');
    const inputTelefone = document.getElementById('telefone');

    if(telefones.includes(inputTelefone.value)){
        alert(`O telefone ${inputNome} ja esta atribuido a um contato`);
    } else{
        telefones.push(inputTelefone.value);
    
        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += '</tr>';
    
        linhas += linha
    }


    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}