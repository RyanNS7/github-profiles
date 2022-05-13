import {useState} from 'react'
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";

function App() {

  const [dark, setDark] = useState(false)

  function switchTheme(){
    setDark(!dark)
  }

  return (
    <div> 
      <GlobalStyles />

      <Header switchTheme={switchTheme} dark={dark}/>
    </div>
  );
}

export default App;
