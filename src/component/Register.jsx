import { useState } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import {useDispatch} from 'react-redux'
import { login } from '../redux/action';

const Register = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    
    const dispatch = useDispatch()

    function signUp() {
        let user = {
            email: email,
            password: password,
            name: name,
            surname: surname,
        }
        localStorage.setItem("user@" + email, JSON.stringify(user))
        dispatch(login(user))
    }

    return <Form style={{ width: '50%', justifySelf: 'center' }}>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Email Giriniz"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                />
            </Form.Group>

            <Form.Group as={Col} controlId="formBasicPassword">
                <Form.Label>Şifre</Form.Label>
                <Form.Control type="password" placeholder="Şifre"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }} />
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col}>
                <Form.Label>Ad</Form.Label>
                <Form.Control type="name" placeholder="Ad giriniz"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value)
                    }} />
            </Form.Group>

            <Form.Group as={Col}>
                <Form.Label>Soyad</Form.Label>
                <Form.Control type="surname" placeholder="Soyad giriniz"
                    value={surname}
                    onChange={(e) => {
                        setSurname(e.target.value)
                    }} />
            </Form.Group>
        </Row>
        <Button variant="secondary" onClick={signUp}>
            Kayıt Ol
        </Button>
    </Form>
}

export default Register;