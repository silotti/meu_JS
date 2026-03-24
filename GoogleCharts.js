//Inserir Grafico no Google Charts usando JavaScript:
//cria vetor valores vazio
let valores=[];
//posição + numeros, vetor de vetores
const addValor=(x)=>{
    //vai colocar dentro de cada indice do vetor valores,
    //outro vetor com 2 valores cada
    valores.push([valores.length+1,x]); 
}
//a media é do segundo valor ex.[2,5],[1,10] pega o 5 e 10 tira média
const media=()=>{
    let soma=0;
    for(x of valores)
        //tá somando todos os segundos elementos
        soma += x[1];
    return soma/ valores.length;
}

//FUNÇÃO PARA USAR NO GOOGLE CHARTS
const drawBasic=()=>{
    var data=new google.visualization.DataTable();
    //cria uma tabela com as colunas: Pos, X
    data.addColumn('number', 'Pos');
    data.addColumn('number', 'X');
    data.addRows(valores);
    var options={hAxis:{title:'Posição'},vAxis:{title:'Valor de X'}};
    // o chat recebe a div
    var chart=new google.visualization
                    .LineChart(document.getElementById('chart_div'));
    //manda desenhar
    chart.draw(data, options);
}

