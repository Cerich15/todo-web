import React from 'react'
import Container from '../Container'
import style from "./.module.css"
import { useNavigate } from "react-router-dom";

const DropDownMenu = ({arrowUpIcon, arrowDownIcon, isClicked, setIsClicked}) => {
  const navigate = useNavigate()
  const onArrowClick = () => {
    setIsClicked(!isClicked)
  }

  const onSignOut = () => {
    onArrowClick()
    localStorage.removeItem('user-info')
    setTimeout(() => {
      navigate("/")
    }, 500);
  }
  
  return (
    <Container className={style["dropdown-menu-pane"]}>
        <a onClick={onArrowClick}>{!isClicked ? arrowDownIcon : arrowUpIcon}</a>
        <Container className={style["item-pane"]}>
          {
            isClicked ? <a onClick={onSignOut}>Sign out</a>: ""
          }
        </Container>
    </Container>
  )
}

export default DropDownMenu