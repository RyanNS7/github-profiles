import {useState} from 'react'
import GlobalStyles from "./styles/GlobalStyles";
import {Header} from "./components/Header";
import {Main} from "./components/Main"

function App() {

  const [dark, setDark] = useState(false)

  function switchTheme(){
    setDark(!dark)
  }

  return (
    <div> 
      <GlobalStyles />

      <Header switchTheme={switchTheme} dark={dark}/>

      <Main switchTheme={switchTheme} dark={dark}/>
    </div>
  );
}

export default App;
