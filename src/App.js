import {useState} from 'react'
import GlobalStyles from "./styles/GlobalStyles";
import {Header} from "./components/Header";
import {Main} from "./components/Main"

function App() {

  const [dark, setDark] = useState(false)
  const [user, setUser] = useState([])
  const [repositories, setRepositories] = useState([])

  function switchTheme(){
    setDark(!dark)
  }

  return (
    <div> 
      <GlobalStyles dark={dark}/>

      <Header switchTheme={switchTheme} dark={dark} setUser={setUser} setRepositories={setRepositories}/>

      <Main switchTheme={switchTheme} dark={dark} user={user} repositories={repositories}/>
    </div>
  );
}

export default App;
