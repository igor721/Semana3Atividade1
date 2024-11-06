const users=[
    {firstName:"john", lastName:"colben", age:26},
    {firstName:"jimmy", lastName:"fred", age:75},
    {firstName:"sam", lastName:"boston", age:50},
    {firstName:"ronald", lastName:"bristh", age:26},   
  ];

  /**Criação de uma lista de objetos */

  const output = users.map((x)=> x.firstName+" "+x.lastName);
  /** output recebe a lista de objetos e map é utilizado para iterar sobre
   * eles atraves da variavel de iteração x que retorna o primeiro nome do objeto 
   * concatenado com o ultimo nome, tudo isso dentro de uma Arrow Function declarada
   * dentro do metodo map.
   */


  console.log(output); /** Imprime a nova lista com firstName + lastName */
  
  