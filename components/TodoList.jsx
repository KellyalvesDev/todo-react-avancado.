import React, { useMemo } from 'react'
import { useTodos } from './TodoProvider'
import TodoItem from './TodoItem'

export default function TodoList() {
  const { todos, filter } = useTodos()

  const filtered = useMemo(() => {
    switch (filter) {
      case 'active': return todos.filter(t => !t.completed)
      case 'completed': return todos.filter(t => t.completed)
      default: return todos
    }
  }, [todos, filter])

  if (filtered.length === 0) return <p className="empty">Nenhuma tarefa encontrada</p>

  return (
    <ul className="todo-list">
      {filtered.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}