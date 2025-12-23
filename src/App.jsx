import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoFilters from './components/TodoFilters'

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Todo List</h1>
      <TodoForm />
      <TodoFilters />
      <TodoList />
    </div>
  )
}
