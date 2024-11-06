const numbers = [1,2,3,4,5];        /**criação de uma lista de inteiros */
const output = numbers.map((x)=>{   /**criação de uma função do tipo Arrow  */
  return x * 2;         /**Esta função é equivalente a função do algoritmo_1 */
});
console.log(output); /**imprime a lista com os elementos multiplicados */


/**Sem o map, precisariamos usar um laço 'for' por exemplo, porém o
 * método map nos ajuda a otimizar nosso código, pegamos a lista de inteiros
 * e usamos o map para iterar e sobre essa lista e retornar uma lista com 
 * os inteiros multiplicados por 2.
 */
