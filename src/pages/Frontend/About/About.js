import React, { useEffect, useState } from 'react'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { message } from 'antd'

const initialState = {
  title: "",
  description: "",
  date: "",
}
export default function About(){
  // const [messageApi, contextHolder] = message.useMessage();

  const [state, setState] = useState(initialState)
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const  todos  = JSON.parse(localStorage.getItem("todos"))
    setTodos(todos)
  }, [])

  // const handleChange = e => {
  //   let { name, value } = e.target
  //   setState(s => ({ ...s, [name]: value }))
  // }
  
  // const toggleModal = () => setIsModalOpen(!isModalOpen)

  // const handleUpdate = (e) => {

  //   e.preventDefault();

  //   let { title, location, description, status } = state
  //   title = title.trim()
  //   description = description.trim()

  //   if (title.length < 3) {
  //     return messageApi.open({
  //       type: 'error',
  //       content: 'Add Title',
  //     });
  //   }

  //   if (description.length < 10) {
  //     return messageApi.open({
  //       type: 'error',
  //       content: 'Add Description',
  //     });
  //   }
  //   if (!date) {
  //     return messageApi.open({
  //       type: 'error',
  //       content: 'Add Title',
  //     });
  //   }

  //   let todo = { ...state, title, description , date}
  //   todo.dateModified = new Date();

  //   const updatedTodos = todos.map((oldTodo) => {
  //     if (oldTodo.id === todo.id)
  //       return todo
  //     return oldTodo
  //   })

  //   setTodos(updatedTodos)

  //   localStorage.setItem("todos", JSON.stringify(updatedTodos))
  //   messageApi.open({
  //     type: 'error',
  //     content: 'Add Title',
  //   });

  //   // toggleModal()
  // }
  const handleDelete = todo => {

    let filteredData = todos.filter((oldTodo) => {
      return oldTodo.id !== todo.id
    })

    setTodos(filteredData)
    localStorage.setItem("todos", JSON.stringify(filteredData))
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card mt-5">
              <h2 className='text-center py-3'>TODOS LIST</h2>
              <div className="table-responsive ">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Description </th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                    {
                      todos.map((todo, i) => {
                        return (

                          <tr key={i}>
                            <th>{i + 1}</th>
                            <td>{todo.title}</td>
                            <td>{todo.description}</td>
                            <td>{todo.date}</td>
                            <td><DeleteOutlined className='text-danger' onClick={() => { handleDelete(todo) }} /> <EditOutlined className='text-info' onClick={() => { setState(todo) }} /></td>
                          </tr>


                        )

                      })
                    }

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
</>
  )
}
