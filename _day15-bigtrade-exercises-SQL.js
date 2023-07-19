//SQL = Relacionado com banco de dados e repositório de informações


/* 

---------PARA RODAR OS COMANDOS, EU PRECISO SELECIONAR O QUE EU QUERO COM O MOUSE--------------

1)Campos = podem ser textos (só que no caso de textos, tambem posso colocar number) ou numeros (não posso colocar nada que não seja um numero)
2)Primary key = números únicos para cada usuário
3)Não pode = Usar caracteres especiais, não pode espaços, não pode acentuação
4) * = significa TODOS/TODAS na programação
5)SELECT = buscar informações
6)FROM = de onde vele vai pegar as informações
7) WHERE = procurar um específico
8) AND = operador para andicionar mais uma regra
9) OR = tiver uma coisa ou outra
10) BETWEEN     and     = buscar um itens que ficam dentro de um e de outro 



*/ 


/*4) * = significa TODOS/TODAS na programação
5)SELECT = buscar informações
6)FROM = de onde vele vai pegar as informações*/

SELECT * FROM aluno //selecionei,TODAS as informações, do banco, aluno

SELECT * FROM aluno

SELECT * FROM professor

SELECT * FROM aulas

SELECT materia, cpf, nome FROM professor // vai pegar na ordem, somente materia, cpf, nome , do professor

//7) WHERE = procurar um específico

SELECT * FROM aluno WHERE matricula = 1 // ele vai procurar um aluno específico, que tenha a matrícula com o número 1


SELECT * FROM aluno WHERE nome like 'j%' // ele vai pegar todos os nomes que começam com J no início do nome

SELECT * FROM aluno WHERE nome like '%G%' // ele vai pegar todos os nomes que tem G em qualquer lugar

SELECT matricula, cpf FROM aluno WHERE nome like '%G%' // ai vai me mostrar somente a matricula e o cpf

//8) AND = operador para andicionar mais uma regra

SELECT * FROM aluno WHERE nome like 'j%' AND matricula > 2 // todo mundo que começar com j E o número da matrícula foir maior do que 2

//9) OR = tiver uma coisa ou outra

SELECT * FROM aluno WHERE nome like 'j%' OR matricula > 1 // todo mundo que começar com j OU o número da matrícula foir maior do que 1

//10) BETWEEN     and     = buscar um itens que ficam dentro de um e de outro 





