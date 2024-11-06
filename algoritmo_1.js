/**Comente os códigos informando o significado sintático de cada linha e o 
 * significado semântico do algoritmo. Nos casos em que o tipo da função não 
 * apresente a Arrow Function faça os ajustes. */


const numeros = [1,2,3,4,5];            /**Aqui estamso usando 'const' para declarar uma constatnte chamada 'numeros' 
                                        que recebe uma lista de inteiros */

let calcularDobro = (numero) => {return numero * 2}     /** Criando a função 'calcularDobro()' que recebe como paramêtro 'numero' retorna o numero multiplicado por 2  */

const numerosDobro = numeros.map(calcularDobro);    /**declarando outra constante, chamada 'numerosDobro' que recebe a lista numeros ultilizando o metodo map() 
                                                    que recebe uma callback 'calcularDobro' e irá iterar sobre a lista*/

console.log(numerosDobro);                          /**Irá imprimir a lista numeros com todos os inteiros multiplicado por 2, ou seja, o dobro */


