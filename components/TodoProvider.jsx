import React, { createContext, useContext, useMemo } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const TodoContext = createContext()

export function useTodos() {
  return useContext(TodoContext)
}

export function TodoProvider({ children }) {
  const [todos, setTodos] = useLocalStorage('todos', [])
  const [filter, setFilter] = useLocalStorage('todos_filter', 'all')

  const actions = useMemo(() => ({
    addTodo: (text) => {
      setTodos((prev) => [...prev, { id: Date.now().toString(), text, completed: false }])
    },
    toggleTodo: (id) => {
      setTodos((prev) => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
    },
    removeTodo: (id) => {
      setTodos((prev) => prev.filter(t => t.id !== id))
    },
    clearCompleted: () => {
      setTodos((prev) => prev.filter(t => !t.completed))
    },
    setFilter
  }), [setTodos, setFilter])

  const value = useMemo(() => ({ todos, filter, ...actions }), [todos, filter, actions])

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}