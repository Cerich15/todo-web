import React, { useEffect, useState } from 'react'
import Container from '../../components/Container'
import { fields } from '../../constants/const'
import style from "./.module.css"
import { useNavigate } from "react-router-dom";
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/user-login';

const Login = () => {
    const navigate = useNavigate();
    const state = useSelector(state => state.user_login)
    const { loading, error, user_info } = state
    const dispatch = useDispatch()
    console.log(state, "<<<<< state")

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const [error, setError] = useState(false)
    // const [loading, setLoading] = useState(false)

    const onChange = (ae) => (e) => {
        if (ae === "email") setEmail(e.target.value)
        else if (ae === "password") setPassword(e.target.value)
    }

    const onSignIn = async () => {
        dispatch(login(email,password))
        navigate("/notes")
    //     try {
    //         const config = {
    //             headers: {
    //                 "Content-type": "application/json"
    //             },
    //         }
    //         setLoading(true)
    //         const { data } = await axios.post("/api/users/login", {
    //             email, password
    //         }
    //         , config)
    //         console.log(data, "<<< data")
    //         localStorage.setItem('user-info', JSON.stringify(data))
    //         setLoading(false)
    //         navigate("/notes")
    //     } catch (error){
    //         setError(error.response.data.message)
    //         setLoading(false)
    //     }
    }

    const onSignUp = () => {
        navigate("/sign-up")
    }

    const isAlreadyLoggedIn = () => {
        const _userInfo = localStorage.getItem("user-info")
        if (_userInfo) {
            navigate("/notes")
        }
        
    }

    useEffect(isAlreadyLoggedIn,[navigate])


  return (
    <>
       {error ? <Error setLoading={setLoading} error={error} setError={setError}/> : ""}
       {loading && <Loader/> }
        <Container style={{filter: loading ? "blur(4px)" : ""}} className={style["login-pane"]}>
            {
                fields.map((field, fieldIndex) => 
                    <Container key={fieldIndex}  className={style["input-pane"]}>
                        {field.label}
                        <input
                            type={field.type} 
                            placeholder={field.placeholder}
                            onChange={onChange(field.name)}
                            />        
                    </Container>
                    
                )
            }
            <Container className={style["login-button-pane"]}>
                <button onClick={onSignIn}>Sign In</button>
                <button onClick={onSignUp}>Don't have an account yet?</button>
            </Container>
        </Container>
    </>
  )
}

export default Login