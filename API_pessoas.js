//url com API de Teste:
//a url:https://randomuser.me/api/,
//gera de dados de pessoas aleatória no formato JSON,
//utilizar a API fetch para: acessar a url, ler o JSON
//retorna 10 nomes e sobrenomes partir dela

//Função pessoas em Java Script
//chama 10 resultados de pessoas, da página
const url = 'https://randomuser.me/api/?results=10';

//função assincrona(pega a informação pra colocar em: lista)
async function getUsers(lista){
    //chama uma (promisse) promessa de resposta
    const resp = await fetch(url);
    //tem que usar await, mais aqui já pega a resposta: resp.json
    const objeto = await resp.json(); 
    //aqui são os itens da minha lista
    let itens = "";
    //cada objeto de results é uma pessoa, 
    //porque results, na página, é um vetor de objetos
    for(let pessoa of objeto.results){
        //pega o primeiro nome e o ultimo nome
        itens += `<li>${pessoa.name.first} ${pessoa.name.last}</li>`;
    }
    //aqui coloca como innerHTML da lista
    document.getElementById(lista).innerHTML = itens;
}