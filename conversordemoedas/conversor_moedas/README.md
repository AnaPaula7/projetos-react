# 💱 Conversor de Moedas com React

Este é um projeto simples de **conversor de moedas** desenvolvido em **React**, utilizando a API pública [ExchangeRate-API](https://www.exchangerate-api.com/) para buscar taxas de câmbio atualizadas.

## 🚀 Funcionalidades

- Conversão de valores entre diferentes moedas.
- Atualização automática da cotação ao alterar a moeda ou valor.
- Interface intuitiva e responsiva.

## 🛠️ Tecnologias Utilizadas

- React
- Axios (requisições HTTP)
- CSS (estilização)
- API pública de câmbio: ExchangeRate-API

## 🎥 Demonstração

> Em breve, você pode adicionar uma imagem ou GIF aqui mostrando o projeto em funcionamento.

## 📦 Instalação e Execução

Clone o repositório e execute o projeto localmente:

```bash
git clone https://github.com/AnaPaula7/projetos-react.git
cd conversordemoedas
npm install
npm run dev
Depois, abra no navegador: http://localhost:5173

🧠 Como funciona?
Ao carregar a aplicação, a API retorna todas as taxas de câmbio em relação ao USD.

O usuário informa um valor, escolhe a moeda de origem e a moeda de destino.

O sistema calcula a conversão com base nas taxas recebidas.

O valor convertido é exibido automaticamente na tela.

📁 Estrutura do Projeto
css
Copiar
Editar
conversordemoedas/
│
├── public/
├── src/
│   ├── components/
│   │   └── CurrencyConverter.jsx
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── README.md
📌 Observação
A API usada possui limite gratuito de requisições por dia. Para evitar problemas, use com moderação ou obtenha uma chave pessoal.

👩‍💻 Autor
Ana Paula
🔗 GitHub: @AnaPaula7