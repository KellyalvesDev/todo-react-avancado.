import { useMemo } from 'react'
import { useTodos } from '../context/TodoContext'
import TodoItem from './TodoItem'

export default function TodoList() {
  const { todos, filter } = useTodos()

  const filtered = useMemo(() => {
    if (filter === 'done') return todos.filter(t => t.done)
    if (filter === 'pending') return todos.filter(t => !t.done)
    return todos
  }, [todos, filter])

  return (
    <ul>
      {filtered.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}
