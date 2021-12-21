import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import { useState } from 'react';
import {useDispatch} from 'react-redux'
import { login } from '../redux/action';

const Login = (props) => {
    
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  function onLogin() {
        let userData = localStorage.getItem("user@" + email)
        if (userData) {
          let user = JSON.parse(userData)
    
          if (user.password === password) {
              
            dispatch(login(user))
          }
        } else {
                
        }
      }

    return <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
                type="email"
                placeholder="Email adresinizi giriniz"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Şifre</Form.Label>
            <Form.Control type="password" placeholder="Şifrenizi giriniz"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                }} />
        </Form.Group>
        <Button variant="secondary" onClick={onLogin}>
            Giriş
        </Button>
    </Form>
}




export default Login;
