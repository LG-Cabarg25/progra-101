import { letters } from './helpers/letters';
import './App.css'
import { HangImage } from './components/HangImage'
import { useEffect, useState } from 'react'
import { getRandomWord } from './helpers/getRandomWord';

function App() {

  const [word, setWord] = useState( getRandomWord());
  const [hiddenWord, setHiddenWord] = useState('_ '.repeat(word.length));
  const [attemps, setAttemps ] = useState(0);
  const [lose, setLose] = useState(false);
  const [won, setWon] = useState(false);

  //Determinar si la persona perdcio
  useEffect(()=> {
    if(attemps>=9){
      setLose(true)
    }
  }, [attemps]);

  //Determinar si la persona ganó
  useEffect(()=>{
    const currentHidenWord = hiddenWord.split(' ').join('');
    if(currentHidenWord === word){
      setWon(true)
    }
  },[hiddenWord]);


  const checkLetter = (letter: string)=> {
    if (lose) return;
    if(!word.includes(letter)){
      setAttemps(Math.min(attemps+1,9))
      return;
    }
    const hiddenWordArray = hiddenWord.split(' ');
    for(let i = 0; i <word.length; i++){
      if(word[i] === letter){
          hiddenWordArray[i]= letter
      }
    }
    setHiddenWord(hiddenWordArray.join(' '))
  }
const newGame = ()=>{
  const newWord = getRandomWord();
  setWord (newWord);
  setHiddenWord ('_ '.repeat(newWord.length));
  setAttemps (0);
  setLose (false);
  setWon (false);
}

  return(
    <div className='App'>
      {/* Imagenes */}
      <HangImage imageNumber={attemps}/>
      {/* Palabra Oculta */}
      <h3>{hiddenWord}</h3>
      {/* Contador */}
      <h3>Intentos: {attemps}</h3>
      {/* Mensaje si perdio */}

      {
        (lose)? <h2>PERDIÓ la palabra correcta es {word}</h2>: ' '
      }

      {/* Mensaje si gano */}

      {
        (won)? <h2>FELICITADES ADIVINASTE LA PALABRA:  {word}</h2>: ' '
      }
      {/*BOTONES CON LETRAS */}
      {
        letters.map((letter)=> (
          <button 
          onClick={()=>checkLetter(letter)}
          key={letter}>{letter}</button>
        ))
      }
      <br />
      <br />

      <button onClick={newGame}>¿Nuevo Juego?</button>


    </div>
  )



}

export default App
