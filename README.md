# Todo React Avançado

## 🧩 Objetivo
Desenvolver uma aplicação de lista de tarefas (Todo List) utilizando recursos avançados do React.  
O foco é aplicar **Hooks**, **Hooks customizados**, **Memoização** e **Context API**, promovendo organização, uso de lógica e desempenho.

---

## 🚀 Funcionalidades
- Adicionar novas tarefas
- Marcar tarefas como concluídas
- Remover tarefas
- Filtrar tarefas (todas, concluídas, pendentes)
- Persistência no `localStorage`

---

## 🧠 Tecnologias utilizadas
- React 18+
- Context API
- Hooks (`useState`, `useEffect`, `useMemo`, `useContext`)
- Hooks customizados (`useLocalStorage`, `useInput`)
- Vite (build tool)
- CSS puro (Mobile First)

---

## ⚙️ Instalação e execução

1. Clone o repositório:
   ```bash
   git clone https://github.com/SEU_USUARIO/todo-react-avancado.git
   cd todo-react-avancado
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o projeto localmente:
   ```bash
   npm run start
   ```

4. Abra o navegador e acesse:
   ```
   http://localhost:5173
   ```

---

## 🧱 Estrutura de pastas
```
todo-react-avancado/
├─ public/
│  └─ index.html
├─ src/
│  ├─ App.jsx
│  ├─ index.jsx
│  ├─ styles.css
│  ├─ components/
│  │  ├─ TodoProvider.jsx
│  │  ├─ TodoForm.jsx
│  │  ├─ TodoList.jsx
│  │  ├─ TodoItem.jsx
│  │  └─ TodoFilters.jsx
│  └─ hooks/
│     ├─ useLocalStorage.js
│     └─ useInput.js
└─ package.json
```

---

## 🧭 Publicação no GitHub
1. Crie um repositório público chamado **todo-react-avancado**.
2. No terminal do projeto, execute:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/todo-react-avancado.git
   git push -u origin main
   ```

---

## 💡 Melhorias futuras
- Edição inline das tarefas
- Ordenação por data ou nome
- Múltiplas listas de tarefas
- Integração com backend (ex: Firebase)
- Testes com React Testing Library

---

Desenvolvido como parte do módulo **React Avançado** 🧠
