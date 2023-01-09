//Fase 1

//Pegando os dados do primeiro formulário
var dataDaChegada = document.getElementsByTagName('input')[0];
var nomePaciente = document.getElementsByTagName('input')[1]; 
var genero = document.getElementsByTagName('select')[0];
var opcaoUmSelecionada = genero.options.selectedIndex.valueOf(genero.options.selectedIndex);
var idade = document.getElementsByTagName('input')[2]; 
var doc = document.getElementsByTagName('select')[1];
var opcaoDoisSelecionada = doc.options.selectedIndex.valueOf(doc.options.selectedIndex);
var numID = document.getElementsByTagName('input')[3];
var tel = document.getElementsByTagName('input')[4];

//Pegando os dados do segundo formulário
var peso = document.getElementsByTagName("input")[6];
var temperatura = document.getElementsByTagName("input")[7];

//Pegando os dados do terceiro formulário
var motivo = document.getElementsByTagName("textarea")[0];
var tempo = document.getElementsByTagName("textarea")[1];
var alivio = document.getElementsByTagName("textarea")[2];
var historico = document.getElementsByTagName("textarea")[3];
var habitos = document.getElementsByTagName("textarea")[4];

//Pegando os dados do quarto formulário
var tempo = document.getElementsByTagName("textarea")[5];


//Validando o primeiro formulário e continuando a introdução dos dados
function PrimeiroForm(){
    if((dataDaChegada.value !== "") && (nomePaciente.value !== "") && (opcaoUmSelecionada.value !== "Selecione uma das opções") &&
       (idade.value !== "") && (opcaoDoisSelecionada.value !== "Selecione o documento que possui") && (numID.value !== "") &&
       (tel.value !== "")){
        var inputNomeUm = document.getElementsByTagName('input')[5].value = nomePaciente.value;
        window.open("#passo-2", "_self");
    }
    else
        alert("Preencha todos os campos!!!")
}

//Validando o segundo formulário e continuando a introdução dos dados
function SegundoForm(){
    if((peso.value !== "") && (temperatura.value !== "")){
        var inputNomeDois = document.getElementsByTagName('input')[10].value = nomePaciente.value;
        window.open("#passo-3", "_self");
    }
    else
        alert("Preencha todos os campos!!!")
}

//Validando o segundo formulário e continuando a introdução dos dados
function TerceiroForm(){
    if((motivo.value !== "") && (tempo.value !== "") && (alivio.value !== "") && (historico.value !== "")){
        var inputNomeTres = document.getElementsByTagName('input')[11].value = nomePaciente.value;
        window.open("#passo-4", "_self");
    }
    else
        alert("Preencha todos os campos!!!")
}

//Fase 2
//Pegando os dados do primeiro formulário
var nome = document.getElementsByTagName('input')[0];
var observacoes = document.getElementsByTagName('textarea')[0]; 
var diagnosticos = document.getElementsByTagName('textarea')[1];

//Pegando os dados do segundo formulário
var alergias = document.getElementsByTagName("textarea")[2];
var receita = document.getElementsByTagName("textarea")[3];
var dataDaPrescricao = document.getElementsByTagName("input")[2];

//Validando o primeiro formulário e continuando a introdução dos dados
function PassarONome(){
    if((nome.value !== "") && (observacoes.value !== "") && (diagnosticos.value !== "")){
        var inputNome = document.getElementsByTagName('input')[1].value = nome.value;
        window.open("#passo-2", "_self");
    }
    else
        alert("Preencha todos os campos!!!")
}

//Imprimir

function ImprimirUm(){
    window.print();
}

function Imprimir(){
    window.print();
}

//Retroceder
function Retroceder(){
    window.history.back();
}