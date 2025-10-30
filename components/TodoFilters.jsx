import React from 'react'
import { useTodos } from './TodoProvider'

export default function TodoFilters() {
  const { filter, setFilter, todos, clearCompleted } = useTodos()
  const pending = todos.filter(t => !t.completed).length

  return (
    <div className="filters">
      <div>
        <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>Todas</button>
        <button onClick={() => setFilter('active')} className={filter === 'active' ? 'active' : ''}>Pendentes</button>
        <button onClick={() => setFilter('completed')} className={filter === 'completed' ? 'active' : ''}>Concluídas</button>
      </div>
      <div>
        <span>{pending} pendentes</span>
        <button onClick={clearCompleted}>Limpar concluídas</button>
      </div>
    </div>
  )
}