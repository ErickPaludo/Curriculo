var contador = 0;
var bckgnd = document.querySelector(".exp");
var bckgnd_bio = document.querySelector(".bio_desc");
var exp = document.querySelector(".emp");
var title = document.querySelector("#title");
var exi = document.querySelector("#exit");
function formatacion() {
  bckgnd.style.background = "rgb(36, 41, 47)";
  bckgnd.style.border = "1px solid rgba(255, 255, 255, 0.301)";
  exi.innerHTML = "&#9650";
}
function formatacion_bio() {
  bckgnd_bio.style.background = "rgb(36, 41, 47)";
  bckgnd_bio.style.border = "1px solid rgba(255, 255, 255, 0.301)";
}

function emp() {
  formatacion();
  title.innerHTML = "Irapuru Transportes | 2020-2021";
  exp.innerHTML = "Meu primeiro emprego foi na transportadora Irapuru, filial de Joinville, Santa Catarina. Tratou-se de um contrato como menor aprendiz feito pelo CIEE, que teve início em setembro de 2020 e se estendeu até dezembro de 2021. Com 15 anos de idade, dei início à minha jornada como menor aprendiz, desempenhando as seguintes tarefas: emissão e baixa de comprovantes de entrega, emissão de carta-frete e manuseio de cartões de pedágio. No geral, essa experiência foi muito enriquecedora, pois me proporcionou aprendizado significativo no campo da logística, além de desenvolver minha responsabilidade e comprometimento. Principalmente, aprendi como me comportar adequadamente em um ambiente de trabalho. No final de 2021, meu contrato como menor aprendiz chegou ao fim.";
}
function emp_1() {
  formatacion();
  title.innerHTML = "Irapuru Transportes | 20/01/2022 - 30/12/2022";
  exp.innerHTML = "Retornando à carreira na empresa Irapuru Transportes como estagiário de meio período em fevereiro de 2022, com 17 anos de idade, encontrei um ambiente familiar com tarefas familiares. Continuando a desempenhar as seguintes responsabilidades: emissão e baixa de comprovantes de entrega, emissão de carta-frete, manuseio de cartões de pedágio e gerenciamento de planilhas relacionadas às médias de consumo dos caminhões da empresa. Foi durante este período que iniciei o desenvolvimento de um dos meus projetos pessoais, o The Best Fuel, que você pode encontrar na seção <u><strong>Meus Projetos</strong></u>. Essa experiência foi incrivelmente enriquecedora, pois me permitiu interagir com uma variedade de pessoas no dia a dia, consolidando e aprimorando o conhecimento adquirido durante o meu primeiro emprego.";
}
function emp_2() {
  formatacion();
  title.innerHTML = "Martiplast / &lt; Ou &gt | 22/03 - 07/06/2023 ";
  exp.innerHTML = "Trabalhei na empresa Martiplast alguns meses após meu retorno à minha cidade natal, Caxias do Sul. Na Martiplast, desempenhei as funções de expedidor de produtos da marca &lt; Ou &gt e expedidor de matéria-prima para terceiros (outras fábricas da marca). Essa experiência foi a mais recente que tive na área de logística. Durante esse período, adquiri um conhecimento significativo sobre tomada de decisões e tive a oportunidade de interagir com diversos setores distintos da empresa."
}
function emp_3() {
  formatacion();
  title.innerHTML = "Bitcom Internet 12/07/2023";
  exp.innerHTML = "Iniciei na Bitcom graças a recomendações de colegas da instituição de ensino da qual estudo, foi uma conquista pessoal, pois se trata do primeiro emprego lidando diretamente com a área da tecnologia. Creio que o principal aprendizado que venho adquirindo seja a maneira que tratamos o cliente, é um trabalho que une a tecnologia e pessoas, já que deve-se pré diagnosticar o problema e traduzi-lo ao cliente. Entrei praticamente sem conhecimento algum de rede, e rapidamente fui instruído pelos colegas de trabalho, se trata de um emprego no qual eu posso aprender algo que gosto, e acima de tudo, adquirir mais experiência! Atualmente, permaneço na Bitcom.";
}
function exit() {
  bckgnd.style.background = "none";
  bckgnd.style.border = "none";
  title.innerHTML = "";
  exp.innerHTML = "";
  exi.innerHTML = "";
}
var param = document.querySelector(".p_1");
var param_one = document.querySelector(".p_2");
var param_two = document.querySelector(".p_3");
var param_three = document.querySelector(".p_4");
var param_four = document.querySelector(".p_5");
var espaco = document.querySelector("#ghost");

function open_bio() {
  if (contador % 2 === 0) {
    formatacion_bio();
    espaco.style.marginTop = "600px"
    param.innerHTML = "Olá, meu nome é Érick Augusto Paludo, tenho 18 anos e sou natural de Caxias do Sul, Rio Grande do Sul. Atualmente, estou cursando Ciência da Computação no Centro Universitário da Serra Gaúcha | FSG. Morei em Joinville SC de 2020 até 2022, no início de 2023 retornei a minha cidade de origem.";
    param_one.innerHTML = "Comecei a aprender programação por volta em 2020 em meio a pandemia. Estudei a lógica de programação em C# e algum tempo depois estudei Orientação de Objetos.";
     param_two.innerHTML = "É importante ressaltar que, até o ano de 2023, fui autodidata, aprendendo por conta própria com cursos em diversas plataformas. Trabalhava de manhã, estudava à tarde (ensino médio) e estudava programação todas as noites"
     param_three = "Em 2023, depois de uma experiência de estágio em uma empresa com um grande estoque, decidi desenvolver um sistema de gestão de estoque chamado Vanilla Stq a fim de entender como funcionava por trás."
     param_four.innerHTML = "Esta é uma breve visão da minha jornada na programação. Ao longo deste site, você verá muitos novos projetos e a apresentação de alguns que ainda estão em desenvolvimento. Como pode notar, atualmente estou estudando HTML juntamente com JavaScript."
    
    
    contador++;
  }
  else {
    espaco.style.marginTop = "10px"
    bckgnd_bio.style.background = "none";
    bckgnd_bio.style.border = "none";
    contador++;
    param.innerHTML = ""
    param_one.innerHTML = ""
    param_two.innerHTML = ""
    param_three.innerHTML = ""
    param_four.innerHTML = ""
    param_five.innerHTML = ""
  }




}
