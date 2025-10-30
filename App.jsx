import React from 'react'
import { TodoProvider } from './components/TodoProvider'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoFilters from './components/TodoFilters'

export default function App() {
  return (
    <TodoProvider>
      <div className="container">
        <h1>Todo React Avançado</h1>
        <TodoForm />
        <TodoFilters />
        <TodoList />
      </div>
    </TodoProvider>
  )
}