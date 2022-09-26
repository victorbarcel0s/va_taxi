# Vá de taxi

Api para criação de corridas

## Endpoints

### Create User

Recebe um body com informações do usuário (username, password, name) cria usuário que será utilizado para realizar requisições na api.

#### Exemplo:
<p align="center"><img src='./readmeAssets/signIn.png'></p>

```curl
curl -X POST \
  'http://localhost:3000/users/create' \
  --header 'Accept: */*' \
  --header 'Content-Type: application/json' \
  --data-raw '{
  "name":"Victor Barcelos",
  "username":"victorbcls",
  "password":"123qwe"
}'
```

### Login

Recebe um body com informações do usuário (username, password) e retorna o token de autenticação utilizado para realizar requisições na api.

#### Exemplo:
<p align="center"><img src='./readmeAssets/login.png'></p>

```curl
curl -X POST \
  'http://localhost:3000/login' \
  --header 'Accept: */*' \
  --header 'Content-Type: application/json' \
  --data-raw '{
  "username":"victorbcls",
  "password":"123qwe"
}'
```
