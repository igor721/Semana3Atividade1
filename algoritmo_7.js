let estudantes =[
 {nome:"João", idade:15},
 {nome:"Maria", idade:20},
 {nome:"Felipe", idade:22},
 {nome:"Pedro", idade:12},
 {nome:"Joana", idade:18},
];

/**cirando lista de objetos (pessoas) */

const details = estudantes.filter((x)=> x.idade >= 18);

/**
 * filtrando os estudantes atraves de uma variavel de iteração 'x'
 * que vai iterar sobre o atributo idade de cada objeto e retornar 
 * o atributo idade que tenha o valor superior ou igual a 18
 */

console.log(details.length);  //imprime o tamanho da lista, quantidade de pessoas dentro dela
