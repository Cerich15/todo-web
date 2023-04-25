import React, { useState } from 'react'
import Container from '../../components/Container'
import style from "./.module.css"
import { signUpFields } from '../../constants/const'
import Error from '../../components/Error'
import axios from 'axios'
import Loader from '../../components/Loader'

const SignUp = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPw, setConfirmPw] = useState("")
  const [profile, setProfile] = useState("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg")
  const [message, setMessage] = useState(null)
  const [profileMessage, setProfileMessage] = useState("")
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const onChange = (ae) => (e) => {
    if (ae === "name") setName(e.target.value)
    else if (ae === "email") setEmail(e.target.value)
    else if (ae === "password") setPassword(e.target.value)
    else if (ae === "confirm-password") setConfirmPw(e.target.value)
    else setProfile(e.target.files[0])
  }

  const onSignUp = async () => {
    if (password !== confirmPw) {
      setMessage("Passwords do not match")
    } else {
      setMessage(null)
      try {
        const config = {
          headers: {
              "Content-type": "application/json"
          },
      }
      setLoading(true)
      
      const { data } = await axios.post("/api/users", {
        name, profile, email, password
      }, config)

      console.log(data, "<<<<")
      setLoading(false)
      setName("")
      setEmail("")
      setConfirmPw("")
      setPassword("")
      Navigate("/notes")
      localStorage.setItem('user-info', JSON.stringify(data))
      } catch (error) {
        setError(error.response.data.message)
      }
    }
  }
  
  return (
    <Container className={style["sign-in-pane"]}>
      {message ? <Error error={message}/> : ""}
      {error ? <Error setLoading={setLoading} error={error} setError={setError}/> : ""}
      {loading && <Loader/> }
      {
        signUpFields.map((field, fieldIndex) => 
            <Container key={fieldIndex} className={style["input-pane"]}>
              {field.label}
              <input 
                  type={field.type}
                  value={
                    field.name === "name" ? name :
                    field.name === "email" ? email :
                    field.name === "password" ? password :
                    field.name === "confirm-password" ? confirmPw : ""
                  }
                  placeholder={field.placeholder}
                  onChange={onChange(field.name)}
                  accept="image/png, image/gif, image/jpeg"
              />
            </Container>
        )
      }
      <button onClick={onSignUp}>Signup</button>
    </Container>
  )
}

export default SignUp