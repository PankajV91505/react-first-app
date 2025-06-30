import 'bootstrap/dist/css/bootstrap.min.css'
import Display from './components/Display'
import ButtonContainer from './components/ButtonContainer'
import styles from './App.module.css'
import { useState } from 'react'

function App() {
  const [calVal ,setCalVal ] = useState("45");
  const onButtonClick = (event) => console.log(event);

  return (
    <>
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonContainer onButtonClick = {onButtonClick}> </ButtonContainer>


    </div>
    </>
  )
}

export default App
