# Frontend - Sistema de Fila de Banco

## Descrição

Este projeto é o frontend do **Sistema de Fila de Banco**, desenvolvido com **Angular 21**.

A aplicação simula o funcionamento de um painel de atendimento bancário, permitindo emitir senhas, chamar clientes, finalizar atendimentos e acompanhar as chamadas em tempo real através de um painel eletrônico.

O frontend consome uma API REST desenvolvida com **Spring Boot**, responsável por toda a regra de negócio.

---

# Tecnologias

- Angular 21
- TypeScript
- HTML5
- CSS3
- RxJS
- Angular Router
- HttpClient

---

# Funcionalidades

## Emissão de Senhas

Permite emitir:

- Senha Normal
- Senha Preferencial

Cada senha é gerada automaticamente pelo backend.

Exemplos:

```
N001
N002
P001
P002
```

---

## Painel do Atendente

O atendente possui uma tela exclusiva para realizar o atendimento das senhas.

Funcionalidades:

- Chamar próxima senha
- Visualizar senha em atendimento
- Finalizar atendimento
- Abrir o Painel Eletrônico
- Interface simples e intuitiva

---

## Painel Eletrônico

O painel eletrônico exibe a senha atualmente em atendimento.

Características:

- Atualização automática a cada 6 segundos
- Exibição da senha atual
- Exibição do caixa responsável
- Interface inspirada em painéis reais de atendimento

---

## Atualização Automática

O painel consulta a API automaticamente utilizando RxJS.

```
interval(6000)
```

Sempre que uma nova senha é chamada, o painel é atualizado sem necessidade de recarregar a página.

---

## Alerta Sonoro

Sempre que uma nova senha é chamada:

- o painel identifica a alteração;
- reproduz um aviso sonoro (bip);
- evita reproduzir o som repetidamente para a mesma senha.

Por questões de segurança dos navegadores modernos, o áudio é habilitado pelo usuário através do botão **Ativar Som**.

---

## Navegação

A aplicação utiliza o Angular Router para navegação entre as telas.

Rotas principais:

```
/
```

Tela inicial.

```
/atendente
```

Painel do Atendente.

```
/painel
```

Painel Eletrônico.

---

## Comunicação com o Backend

A comunicação com a API é realizada utilizando o **HttpClient**.

Principais operações:

- emitir senha
- chamar próxima senha
- finalizar atendimento
- consultar painel eletrônico

---

## Estrutura do Projeto

```
src
│
├── app
│   ├── components
│   ├── models
│   ├── services
│   ├── emitir-senha
│   ├── painel-atendente
│   ├── painel-eletronico
│   └── app.routes.ts
│
├── assets
│   └── audio
│       └── bip.mp3
│
├── environments
│
└── styles.css
```

---

## Recursos Implementados

- Componentes Standalone
- Dependency Injection com `inject()`
- Angular Router
- HttpClient
- RxJS Interval
- Atualização automática do painel
- Reprodução de áudio
- Organização por componentes
- Separação entre Models e Services
- CSS moderno
- Interface responsiva

---

# Objetivo do Projeto

Este projeto foi desenvolvido com apoio de Inteligência Artificial 
como ferramenta de aprendizado e produtividade.
A IA foi utilizada para auxiliar na discussão de soluções, 
esclarecer dúvidas, revisar código, sugerir melhorias na organização 
do projeto e apoiar a documentação. Todo o desenvolvimento, 
implementação, testes, adaptações e decisões finais foram realizados e 
validados pelo autor.
Foram usados conceitos modernos do Angular de 
integrar o frontend com uma API REST desenvolvida em Spring Boot.

Durante o desenvolvimento foram utilizados conceitos importantes como:

- Componentes Standalone
- Comunicação HTTP
- Injeção de Dependência
- Atualização automática com RxJS
- Organização em camadas
- Integração Frontend + Backend

---

# Autor

**Manoel Dalmo Facuri Filho**

Java Backend Developer | Angular Developer

GitHub

https://github.com/facurymanoel

LinkedIn

https://www.linkedin.com/in/manoel-facuri 
 
 
