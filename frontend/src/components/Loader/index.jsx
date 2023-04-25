import React from 'react'
import { Audio } from 'react-loader-spinner'
import Container from '../Container'
import style from "./.module.css"

const Loader = () => {
  return (
    <Container className={style["loader-pane"]}>
        <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
    />
    </Container>
  )
}

export default Loader