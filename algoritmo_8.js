const users=[
    {firstName:"john", lastName:"colben", age:26},
    {firstName:"jimmy", lastName:"fred", age:75},
    {firstName:"sam", lastName:"boston", age:50},
    {firstName:"ronald", lastName:"bristh", age:26},  
  ];

  /** Criando uma lista de objetos */


  const output=users.filter((x)=>x.age<30).map((x)=>x.firstName);

  /** filtrando os usuarios atraves de uma variavel de iteração 'x'
   * sendo x.age relacionado a idade da pessoa que é o objeto em questão
   * output retorna atraves do filtro fornecido as pessoas que tem a idade
   * abaixo de 30 anos, e após a declaração do filter o map é utilizado para
   * iterar sobre os objetos e retornar o nome das pessoas que tem a idade 
   * abaixo de 30 anos.
  */


  console.log(output); // imprime a nova lista com as pessoas adeptas ao filtro fornecido
  