import { useTodos } from '../context/TodoContext'

export default function TodoFilters() {
  const { setFilter } = useTodos()

  return (
    <div>
      <button onClick={() => setFilter('all')}>Todas</button>
      <button onClick={() => setFilter('done')}>Concluídas</button>
      <button onClick={() => setFilter('pending')}>Pendentes</button>
    </div>
  )
}
