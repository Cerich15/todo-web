import React, { useEffect, useState } from 'react'
import Container from '../../components/Container'
import style from "./.module.css"
import DropDownMenu from '../../components/DropDown'
import { SlArrowDown, SlArrowUp } from "react-icons/sl"

const Notes = () => {
  const [isNavItemClicked, setIsNavItemClicked] = useState(false)
  const [user, setUser] = useState(null)
  
  useEffect(() => {
    
    setUser(JSON.parse(localStorage.getItem('user-info')))
  },[])
  return (
    <Container>
      <main className={style["my-note-pane"]}>
        <nav>
          <h5>Note Engine</h5>
          <Container className={style["nav-right-pane"]}>
             <h5>{user && user.name}</h5>
             <DropDownMenu 
                arrowDownIcon={<SlArrowDown/>} 
                arrowUpIcon={<SlArrowUp/>} 
                isClicked={isNavItemClicked}
                setIsClicked={setIsNavItemClicked}
              />
          </Container>
        </nav>
        <section>
          <Container className={style["first-section-pane"]}>
            <Container>
              Welcome back { user && user.name }
            </Container>
            <Container>
              <button>Create Note</button>
            </Container>
          </Container>
        </section>
      </main>
    </Container>
  )
}

export default Notes