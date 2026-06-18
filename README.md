# Don Colonial Site

Site institucional e vitrine comercial da Don Colonial, desenvolvido do zero com React, Vite, React Router e Tailwind CSS.

O projeto reorganiza a presença digital da marca para destacar produtos, qualidade, canais de contato e área futura de revendedores.

## Stack

- JavaScript
- React
- Vite
- React Router
- Tailwind CSS
- CSS global com variáveis em `src/index.css`

## Como Rodar

Instale as dependências:

```bash
npm install
```

Rode o ambiente local:

```bash
npm run dev
```

Abra o endereço exibido no terminal, normalmente:

```text
http://localhost:5173
```

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Estrutura Principal

- `src/App.jsx`: rotas e layout global.
- `src/components/`: componentes reutilizáveis.
- `src/pages/`: páginas do site.
- `src/data/products.js`: dados editáveis dos produtos.
- `src/data/revendedores.js`: base futura para revendedores.
- `src/data/contacts.js`: contatos oficiais e link de WhatsApp.
- `public/images/`: imagens usadas no site.

## Rotas

- `/`: página inicial.
- `/empresa`: página institucional.
- `/produtos`: catálogo de produtos.
- `/qualidade`: diferenciais e qualidade.
- `/revendedores`: área futura de revendedores.
- `/contato`: canais de contato e WhatsApp.

## Observações

- As fotos finais dos produtos foram extraídas do catálogo oficial em PDF.
- O formulário ainda não possui envio por backend, EmailJS ou Formspree.
- Textos oficiais de história, missão, visão e valores ainda precisam ser validados.
- Informações de glúten dos produtos recheados devem ser confirmadas antes da publicação final.