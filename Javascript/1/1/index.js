var nome = prompt("Qual é o seu nome?");
var tamanhoNome = nome.length;//pega o tamanho da string
var primeiraLetra = nome.slice(0,1);// separa a primeira letra

nome = nome.slice (1,tamanhoNome);// descarta a primeira letra do nome
nome = nome.toLowerCase(); // o restante é trocado para lowercase
primeiraLetra = primeiraLetra.toUpperCase();//aumenta a primeira letra do nome

alert(`Olá, ${primeiraLetra}${nome}`);//concatena