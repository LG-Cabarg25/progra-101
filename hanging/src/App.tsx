import { letters } from './helpers/letters'
import './App.css'
import { HangImage } from './components/HangImage'

function App() {
  return(
    <div className='App'>
      {/* Imagenes */}
      <HangImage imageNumber={9}/>
      {/* Palabra Oculta */}
      <h3>_ _ _ _ _ _ _ _</h3>
      {/* Contador */}
      <h3>Intentos: 0</h3>

      {/*BOTONES CON LETRAS */}
      {
        letters.map((letter)=> (
          <button key={letter}>{letter}</button>
        ))
      }


    </div>
  )



}

export default App
