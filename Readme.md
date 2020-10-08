# challange

Solução para o [desafio](challenge.md).

## Tecnologias

- Docker 19.03
- Node 14
- Jest

## Dot files

1. Renomeie o arquivo `.env.example` para `.env`
2. Edite no arquivo `.env` a variavel `GIPHY_KEY` com a sua chave

## Execução

Rodando a aplicação em produção:
```shell
docker-compose up
```

Rodando a aplicação em dev:
```shell
docker-compose -f docker-compose.dev.yml up 
```

## Testes

```shell
docker-compose -f docker-compose.test.yml up 
```