const arr = [1,2,3,4,5]         /**lista de inteiros */
 
const output = arr.filter((x)=>  x > 4);     /** usando o metodo filter() na lista de inteiros e 
                                                criando uma função do tipo Arrow que retorna 
                                                os números maiores que 'x' se x for maior que 4*/
                                                
console.log(output); //imprime a lista com o filtro
