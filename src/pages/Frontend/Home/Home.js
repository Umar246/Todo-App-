
import React, { useEffect, useState } from 'react'
import { Button, Form, Input, Divider, DatePicker, message } from 'antd';
import { useAuthContext } from '../../Contexts/AuthContext'
import TextArea from 'antd/es/input/TextArea';



const initialState = {
  title: '',
  description: '',
  date: '',
  id: '',
  dateCreated:'',
  status:''
}
export default function Home() {
  const [messageApi, contextHolder] = message.useMessage();
  const { dispatch } = useAuthContext()
  const [isProcessing, setIsProcessing] = useState(false)
  const [state, setState] = useState(initialState)
  const [todos, setTodos] = useState([])
  const handleChange = (e) => {
    setState(s => ({ ...s, [e.target.name]: e.target.value }))
  }
  const onChange = (_, dateString) => {
    console.log(dateString);
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos")) || []

    setTodos(todos)
  }, [])



  const handleAddTodo = e => {
    e.preventDefault()
    const { title, description, date } = state
    
    if (title.length < 3) {
      return messageApi.open({
        type: 'error',
        content: 'Add Title',
      });
    }
    if (description.length < 10) {
      return messageApi.open({
        type: 'error',
        content: 'Add Description',
      });
    }
    let todo = {...state}
    todo.id = Math.round(Math.random()*10000).toString(32);
    todo.dateCreated = new Date();
    todo.status = "active"
    let todos = JSON.parse(localStorage.getItem("todos") || "[]");
    todos.push(todo)
    setIsProcessing(true)
    setTimeout(() => {
      setIsProcessing(false)
      localStorage.setItem("todos", JSON.stringify(todos))
      dispatch({ type: "SET_LOGGED_IN", payload: { todos } })
      setState(initialState)
    }, 2000)



  }



  return (
    <>
      <div className="loginPage mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6  m-auto">

              <div className="card p-4">
                <Form
                  layout='vertical'
                >
                  <h2 className='text-center'>Add Your Task</h2>
                  {/* <Title level={2}>h2. Ant Design</Title> */}
                  <Divider />
                  <Form.Item
                    label="Title"
                  >
                    <Input placeholder='Add Title' value={state.title} name='title' onChange={handleChange} />
                  </Form.Item>
                  
                  
                  
                  <Form.Item label="Date">
                    <input type="date" name='date' className='w-100 form-control' onChange={handleChange}/>
                    {/* <DatePicker name='date' onChange={onChange} /> */}
                    </Form.Item>
                   
                    <Form.Item
                    label="Description"
                  >

                  
                    <TextArea rows={2} placeholder="Add Description" name='description' onChange={handleChange} />

                  </Form.Item>

                  <Button type="primary" htmlType="submit" loading={isProcessing} onClick={handleAddTodo} className='w-100'>
                    ADD TODO
                  </Button>
                </Form>


              </div>
            </div>
          </div>
        </div>
      </div >

    </>
  )
}
