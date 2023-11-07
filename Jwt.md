# Jwt

## O que são ?
- Servem para troca informações de forma segura entre aplicações no formato JSON
- Ele é autossuficientes.
- Ele é assinado digitalmente, então podemos ter certeza que a informação não foi alterada.
- São self-contained
  - Dentro do token tem todas as informações necessárias para a validação
- Stateless
  - Uma vez que o token é gerado, não é necessário armazenar nada no servidor
  - Não e precisa adicionar estado ao servidor 
- Por ser Json ele pode ser manipulado por qualquer linguagem de programação
# Anatomia token
- Ele é composto por 3 partes:
  - Header: Tipo de token e algoritmo de criptografia
  - Payload: Dados do usuário
  - Signature: Assinatura do token para verificar se ele é válido
## Header 
- É onde armazenamos informações como o tipo de token (JWT) e o algoritmo usado para gerar a assinatura
## Payload
- É onde armazenamos as informações do usuário e do token
## Signature
- É onde armazenamos a assinatura do token para verificar se ele é válido, ela garante a integridade do token
- Não colocar nenhum dado sensível no jwt
- A assinatura é gerada usando o header, payload e um secret e aplicando uma função de hash
- Ela garante a integridade da formção, pois ele e gerada com a informação que foi enviada
- A validação do token é feita usando o secret, o header, o payload e a assinatura
- Geramos a secrete novamente e comparamos a secret gerado na hora com a que veio na requisição 

# Como funciona ?
