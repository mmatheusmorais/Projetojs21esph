// LIMPEZA

const email="       email@email.com   ";
//trim- remove os espaçoes Início e fim
const emailLimpo= email.trim();
console.log(emailLimpo)

//VALIDAÇÃO
if(emailLimpo.includes("@")){
    console.log("Email válido")
}else{
    console.log("Email inválido")
}

//TRANFORMAÇÃO DE TEXTO

const tituloArtigo="Como aprender JAVA RAIZ";
//metodo upper(maiúsculo) e low(minúsculo)
const texto1 = tituloArtigo.toLowerCase();
console.log(texto1)
//split- transfroma o texto em array
const texto2 =tituloArtigo.split(" ")
console.log(texto2)
//join- junta tudo em uma unica string 
const texto3 = texto2.join(" ")
console.log(texto3)
//metodo toFixad


const precoProduto=199.99;
const desconto=0.15; //15%
const precoFinal=precoProduto * (1 - desconto)
console.log(precoFinal)
// ``- template strings - concatenação
console.log(`R$ ${precoFinal.toFixed(2)}`);