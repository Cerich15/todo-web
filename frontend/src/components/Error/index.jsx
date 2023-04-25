import React from 'react'
import Container from '../Container'
import style from "./.module.css"

const Error = ({error, setLoading, setError}) => {

    const onBack = () => {
        setLoading(false)
        setError("")
    }
  return (
    <Container className={style["error-handler-pane"]}>
        {error}
        <a onClick={onBack}>Back</a>
    </Container>
  )
}

export default Error