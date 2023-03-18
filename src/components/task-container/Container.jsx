export function Container({ taskList}) {
  return (
    <div>
      <ul>
        {taskList.map((todo) => <li key={todo.id}><input type='checkbox' checked={todo.checked}></input><p>{ todo.text}</p></li>)}
      </ul>
    </div>
  )
}