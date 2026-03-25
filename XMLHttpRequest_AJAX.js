//o retorno é o nome da camada
function ajax(nome, camada){
    //vem para essa função o nome
    var url = 'http://httpbin.org/get?text=' + nome;
    //gera o objeto
    var xmlhttp = new XMLHttpRequest();
    // função tipo call-back, (fica de "boca-aberta")
    // esperando uma função que ou se vier do servidor
    xmlhttp.onreadystatechange = function(){
        //4=> completou(eviou tudo) e 200=> sucesso
        if(xmlhttp.readyState==4 && xmlhttp.status==200){
            //pega o texto da resposta
            var resp = xmlhttp.responseText;
            //coloca na camada a resposta que veio pelo XMLHttpRequest
            document.getElementById(camada).innerHTML=resp;
        }
    }
    //abre em modo: GET, a url, de forma assincrona(true) 
    xmlhttp.open("GET", url, true);
    // cada vez que executa usa a função: onreadystatechange
    // vai ser chamado como uma função assincrona, (call-back)
    xmlhttp.send();
}