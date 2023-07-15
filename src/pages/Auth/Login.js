import React, { useState } from 'react'
import { Button, Form, Input } from 'antd';
import { useAuthContext } from '../Contexts/AuthContext'


const initialState = { userName: "", email: "", password: "" }
export default function Login() {
    const { dispatch } = useAuthContext()
    const [isProcessing, setIsProcessing] = useState(false)
    const [state, setState] = useState(initialState)
    const handleChange = (e) => {
        setState(s => ({ ...s, [e.target.name]: e.target.value }))
    }

    const handleLogin = e => {
        e.preventDefault()
        const { userName, email, password } = state
        let user = { userName, email, password }

        setIsProcessing(true)
        setTimeout(() => {
            setIsProcessing(false)
            localStorage.setItem("user", JSON.stringify(user))
            dispatch({ type: "SET_LOGGED_IN", payload: { user } })
            setState(initialState)
        }, 2000)

    }



    return (
        <>
            <div className="loginPage mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6  m-auto">
                            <div className="card p-3 ">
                                <h2 className='text-center'>Login Form</h2>
                                <Form
                                    layout='vertical'
                                >
                                    <Form.Item
                                        label="Username"
                                    >
                                        <Input placeholder='Enter your Full Name' value={state.userName} name='userName' onChange={handleChange} />
                                    </Form.Item>
                                    <Form.Item label="Email">
                                        <Input type='email' placeholder='Enter Email' value={state.email} name='email' onChange={handleChange} />
                                    </Form.Item>

                                    <Form.Item
                                        label="Password"
                                    >
                                        <Input.Password name='password' value={state.password} onChange={handleChange} />
                                    </Form.Item>

                                    <Button type="primary" htmlType="submit" loading={isProcessing} onClick={handleLogin} className='w-100'>
                                        Login
                                    </Button>
                                </Form>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
