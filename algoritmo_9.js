let students = [
    {name:"Smith", average:80},
    {name:"Jenny", average:69},
    {name:"John", average:35},
    {name:"Tiger", average:55}
   ];

   /**
    * lista de objetos (students)
    */

   const output = students.map((student)=>{
       if(student.marks < 60){
           student.average += 20;
       }
       return student;
   }).filter((student)=> student.average > 60);
   console.log(output);
   
   /** pegamos a lista de objetos e iteramos ela atraves do map
    * que recebe student como parametro e dentro do retorno do
    * Arrow Function temos uma condição (se student.marks < 60)
    * ele retorna student.average += 20, ele arredona a media do 
    * estudante e por fim temos um filtro que verifica os estudantes
    * com average maior que 60 e retorna eles.
    */