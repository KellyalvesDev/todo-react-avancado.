import React, { useCallback } from 'react'
import { useTodos } from './TodoProvider'
import useInput from '../hooks/useInput'

export default function TodoForm() {
  const { addTodo } = useTodos()
  const input = useInput('')

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    const text = input.value.trim()
    if (!text) return
    addTodo(text)
    input.reset()
  }, [addTodo, input])

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input placeholder="Adicione uma tarefa..." value={input.value} onChange={input.onChange} aria-label="nova tarefa" />
      <button type="submit">Adicionar</button>
    </form>
  )
}