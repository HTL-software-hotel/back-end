# back-end

## Inicializando o projeto

#

<br>
<h1><b>1) .ENV </b></h1>
<br>

### Após clonar o repositorio para a sua maquina, é preciso adicionar um arquivo chamado .env e colocar as seguintes informações nele

```
SECRET_KEY=sua_secret_key

POSTGRES_HOST=localhost
POSTGRES_USER=seu_usuario_postgres
POSTGRES_PASSWORD=sua_senha_postgres
POSTGRES_PORT=sua_porta_postgres
POSTGRES_DB=_seu_banco_de_dados_postgres
```

<br>
<h1><b>1.2) Comandos </b></h1>
<br>

### Após colocar o env teremos que instalar as dependências do package.json através do comando `yarn`

### Após ter todas as dependências instaladas você poderá rodar as migrações afim de persistir as tabelas no banco de dados atráves do seguinte comando `yarn typeorm migration:run -d src/data-source.ts`

### Se até aqui deu tudo certo, rode o comando `yarn dev` para iniciar o servidor e poder consumir a API

---

<br>
<h1><b>2) Rotas da API </b></h1>
<br>


#
