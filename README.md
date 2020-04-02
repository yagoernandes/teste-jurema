# Teste Jurema.la


## 1) Crie um serviço em Node.js que exponha uma API que retorne a lista de estados brasileiros.

`RESPOSTA: pasta questao1`


## 2) Crie um outro serviço em Node.js que exponha uma API que retorne a população de um determinado estado brasileiro

`RESPOSTA: pasta questao2`


## 3) Altere o primeiro serviço para acessar o segundo e retornar junto ao resultado a população de cada estado.

`RESPOSTA: pasta questao3`


## 4) Observe o modelo de dados abaixo e responda as perguntas a seguir.
###### A) Crie uma query que retorne todos os usuários criados no mês de janeiro de 2013, nos grupos (IDs) 15 e 40.

###### B) Crie uma query para autenticação do usuário (função hash SHA1).
	
###### C) Insira um usuário qualquer e defina que ele pertence aos grupos (IDs) 20 e 33.

###### D) Crie uma query que retorne todos os usuários que possuem as permissões (IDs) 55, 80 e 48.

###### E) Delete todos os dados de todas as tabelas.

`RESPOSTA: questao4.sql`

## 5) Usando Promise, simule o acesso assíncrono à 2 métodos e apresente uma mensagem de sucesso quando os 2 métodos terminarem sua execução.

`RESPOSTA: questao5.js`

## 6) Agora usando async/await, repita a simulação da questão anterior.

`RESPOSTA: questao6.js`

## 7) Veja o código a seguir e responda as perguntas a seguir.
```javascript
for(var i = 0; i <= 3; i++) {
  setTimeout(function() { console.log(i); }, 100);
}
```
###### A) O que será apresentado no console? Por quê?
###### B) Altere o código de forma que os números 0, 1, 2 e 3 sejam apresentados no console. Justifique a alteração.

`RESPOSTA: questao7.js`

## 8) Mostre na tela números de 1 a 100, mas para os números múltiplos de 3 mostre a palavra “Fizz”, para os números múltiplos de 5 mostre a palavra “Buzz” e para os números múltiplos de 3 e 5 a palavra “FizzBuzz”.

`RESPOSTA: questao8.js`

## 9) Troque os valores das variáveis x e y sem o auxílio de outra terceira variável.
```javascript
x = 24
y = 99
```

`RESPOSTA: questao9.js`

# DevOps

## 10) Descreva a sequência de comandos para "matar" um processo zumbi no servidor.

`RESPOSTA: questao10.sh`

## 11) Indique a linha de comando (shell) para listar somente os processos node rodando no server.

`RESPOSTA: questao11.sh`

## 12) Configure o cron abaixo para rodar toda sexta feira, as 10n da manha e as 22:22h da noite.
```shell
*  *  *  *  *  /usr/local/foo-bar.sh
```

`RESPOSTA: questao12.sh`

## 13) Crie um arquivo docker compose com um container node e outro container postgresql.

`RESPOSTA: docker-compose.yml`
