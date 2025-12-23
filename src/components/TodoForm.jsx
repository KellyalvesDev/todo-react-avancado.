import { useState } from 'react'
import { useTodos } from '../context/TodoContext'

export default function TodoForm() {
  const [text, setText] = useState('')
  const { addTodo } = useTodos()

  const submit = (e) => {
    e.preventDefault()
    if (!text) return
    addTodo(text)
    setText('')
  }

  return (
    <form onSubmit={submit}>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button>Adicionar</button>
    </form>
  )
}
