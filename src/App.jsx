import axios from 'axios'
import { useEffect, useState } from 'react'
import { Form } from './components/from/Form'
import { Container } from './components/task-container/Container'
axios.defaults.baseURL = 'https://6412ba93232c91393dd438d4.mockapi.io/todos/test/todos'
async function getTaskList (){
  const response = await axios.get()
  return response.data
  
}


function App() {
  const [taskList, setTaskList] = useState([])

  useEffect(() => {
    async function fetchTodoList() {
      const data = await getTaskList()
      setTaskList(data)
    }
    fetchTodoList()
  }, [taskList])
  

  return (
    <div>
      <Form ></Form>
      <Container taskList={taskList}></Container>
    </div>
  )
}

export default App
