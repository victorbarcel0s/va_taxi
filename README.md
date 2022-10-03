# Vá de taxi

Api para criação de corridas
## Porque NodeJs com express?
Como a aplicação se trata de algo não muito complexo e um serviço pequeno, utilizei essas tecnologias por acreditar que seria o ideal para um desenvolvimento rápido e estável, tendo em vista também a simplicidade do código
## Instruções de uso

Para executar a api sem o container precisamos rodar o comando "npm i" para instalar as dependecias do projeto e após isso, executar o comando "npm run dev" para levantar o serviço na porta 3000 do ip local da máquina

Para executar a partir do container, execute o comando docker 'docker build . -t user/va-de-taxi' e depois execute o comando 'docker run user/va-de-taxi'

Ou pegue o container do dockerhub (está público) e execute o comando 'docker run victorbcls/va-de-taxi'
https://hub.docker.com/r/victorbcls/va-de-taxi

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

### Criação de viagem

Recebe um body com informações necessárias para a realização da viagem (location, location_name, destiny, destiny_name) e o token gerado do usuario no header x-access-token

#### Exemplo:
<p align="center"><img src='./readmeAssets/createTripBody.png'></p>
<p align="center"><img src='./readmeAssets/createTripAuth.png'></p>

```curl
curl -X POST \
  'localhost:3000/trips/create' \
  --header 'Accept: */*' \
  --header 'x-access-token: {token}' \
  --header 'Content-Type: application/json' \
  --data-raw '{      "location": "-22.884048671727754, -43.5569031632711",
      "destiny": "-22.879452166019192, -43.46627231737502",
      "location_name":"West Shopping",
      "destiny_name":"Bangu Shopping"}'
```

### Cancelamento de viagem

Recebe apenas o x-access-token com o token de usuario nos headers, pois só pode exisitr uma viagem ativa por usuário

#### Exemplo:
<p align="center"><img src='./readmeAssets/deleteTrip.png'></p>

```curl

curl -X DELETE \
  'localhost:3000/trips' \
  --header 'Accept: */*' \
  --header 'x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVmljdG9yIEJhcmNlbG9zIiwidXNlcm5hbWUiOiJ2aWN0b3JiY2xzIiwicGFzc3dvcmQiOiIxMjNxd2UiLCJjcmVhdGVkQXQiOiIyMDIyLTA5LTI2IDE5OjU2OjI0LjEwNCArMDA6MDAiLCJ1cGRhdGVkQXQiOiIyMDIyLTA5LTI2IDE5OjU2OjI0LjEwNCArMDA6MDAiLCJpYXQiOjE2NjQ4MDUwNzgsImV4cCI6MTY2NDgwNjg3OH0.0uGsmw82CEUeeFJZjd1cZg6hw6mhsNbM18j1unWPeNg'
```

  
