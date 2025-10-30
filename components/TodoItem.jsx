import React, { useCallback } from 'react'
import { useTodos } from './TodoProvider'

function TodoItemComponent({ todo }) {
  const { toggleTodo, removeTodo } = useTodos()

  const onToggle = useCallback(() => toggleTodo(todo.id), [toggleTodo, todo.id])
  const onRemove = useCallback(() => removeTodo(todo.id), [removeTodo, todo.id])

  console.log('render TodoItem', todo.id)

  return (
    <li className={\`todo-item \${todo.completed ? 'completed' : ''}\`}>
      <label>
        <input type="checkbox" checked={todo.completed} onChange={onToggle} />
        <span>{todo.text}</span>
      </label>
      <button onClick={onRemove} aria-label={\`remover \${todo.text}\`}>Remover</button>
    </li>
  )
}

export default React.memo(TodoItemComponent)