const numbers = [1,2,3,4,5]; /**criação de uma lista de inteiros */
const isOdd = (x) => {
    return x % 2  /**Arrow function que retorna os números impares */
}
const output = numbers.filter(isOdd); /**filtranfo a lista de números usando a 
                                        função (isOdd) que é responsavel por retornar
                                        os números impares*/
                                        
console.log(output);    //imprime a lista de números impares
