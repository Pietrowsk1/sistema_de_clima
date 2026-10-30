# Sistema de Clima (C&T)

Aplicação web de previsão do tempo, desenvolvida para praticar React com TypeScript, roteamento e estilização com Tailwind CSS. O visual foi inspirado em um layout de painel de clima com cards translúcidos, degradês e tipografia em destaque.

> Projeto de estudo. Os dados de clima exibidos são fixos (de exemplo) e ainda não vêm de uma API real.

## Funcionalidades

- Tela de login como primeira página do site
- Navegação entre páginas com React Router
- Painel com a previsão do tempo:
  - clima atual (cidade, temperatura e descrição)
  - card de alerta ativo
  - lista das próximas horas
  - previsão da semana com barras em degradê (do frio ao quente)
  - grade de métricas (umidade, vento, índice UV, pressão, visibilidade e sensação térmica)
- Layout responsivo (adapta-se ao celular e ao desktop)

## Tecnologias

| Ferramenta | Uso |
|---|---|
| [React](https://react.dev/) | Interface |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem estática |
| [Vite](https://vite.dev/) | Servidor de desenvolvimento e build |
| [React Router](https://reactrouter.com/) | Rotas e navegação |
| [Tailwind CSS v4](https://tailwindcss.com/) | Estilização |
| [ESLint](https://eslint.org/) | Análise de código |
| [Fontsource](https://fontsource.org/) | Fontes Fraunces (destaques) e Manrope (texto) |

## Como rodar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- npm (já vem com o Node.js)
- Git

### Passo a passo

```bash
# 1. Clonar o repositório
git clone https://github.com/Pietrowsk1/sistema_de_clima.git

# 2. Entrar na pasta do projeto
cd sistema_de_clima/meu-app

# 3. Instalar as dependências
npm install

# 4. Iniciar o servidor de desenvolvimento
npm run dev
```

Depois, abra o endereço que aparecer no terminal (normalmente `http://localhost:5173`).

### Scripts disponíveis

| Comando | O que faz |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção |
| `npm run preview` | Visualiza a versão de produção localmente |
| `npm run lint` | Verifica o código com o ESLint |

## Estrutura de pastas

```
meu-app/
├── src/
│   ├── components/
│   │   ├── AppLayout.tsx    # Layout com header e fundo, usado nas páginas internas
│   │   ├── Header.tsx       # Cabeçalho com logo e busca
│   │   └── ...
│   ├── pages/
│   │   ├── LoginPage.tsx    # Tela de login (rota "/")
│   │   └── Home.tsx         # Painel de previsão (rota "/home")
│   ├── routes/
│   │   └── routes.tsx       # Definição das rotas da aplicação
│   ├── App.tsx
│   ├── main.tsx             # Ponto de entrada (BrowserRouter)
│   └── index.css            # Tailwind, tema (fontes) e estilos globais
├── index.html
├── vite.config.ts
└── package.json
```

## Rotas

| Caminho | Página | Descrição |
|---|---|---|
| `/` | `LoginPage` | Tela de login, primeira a ser exibida |
| `/home` | `Home` | Painel de previsão do tempo (dentro do `AppLayout`) |

## Estilização

- O Tailwind v4 é carregado pelo plugin `@tailwindcss/vite`, sem arquivo `tailwind.config.js`.
- As fontes são registradas no `@theme` do `src/index.css` e usadas pelas classes `font-sans` (texto) e `font-display` (números e títulos).
- Os cards usam um efeito de vidro (`bg-white/10`, `border-white/10` e `backdrop-blur`).
- As listas (próximas horas, semana e métricas) são geradas com `.map()` a partir de arrays, em vez de blocos repetidos à mão.

## Situação atual e próximos passos

- [x] Estrutura do projeto com Vite, React, TypeScript, React Router e Tailwind
- [x] Tela de login e navegação para a Home
- [x] Painel de previsão com dados de exemplo
- [ ] Autenticação real (validação de e-mail e senha em um servidor, com senhas guardadas como hash)
- [ ] Proteção da rota `/home` para usuários não autenticados
- [ ] Integração com uma API de clima (por exemplo, a Open-Meteo)
- [ ] Busca de cidade funcional
- [ ] Páginas de Radar, Alertas e Mapas

## Observações

- O login atual é apenas visual: qualquer pessoa consegue acessar `/home` diretamente. A verificação de credenciais precisa de um servidor para ser segura.
- O projeto usa TypeScript na versão 6.0, por compatibilidade com o `typescript-eslint`.

## Autor

Desenvolvido por [Pietrowsk1](https://github.com/Pietrowsk1).
