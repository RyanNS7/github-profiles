import {useState} from "react"
import GlobalStyles, { Container } from "./styles/GlobalStyles";
import {Header} from "./components/Header";
import {Main} from "./components/Main"

function App() {

  const [dark, setDark] = useState(sessionStorage.getItem('themePage') ? JSON.parse(sessionStorage.getItem('themePage')): false)
  const [user, setUser] = useState([])
  const [repositories, setRepositories] = useState([])

  function switchTheme(){
    setDark(!dark)
    sessionStorage.setItem('themePage', JSON.stringify(!dark))
  }

  return (
    <Container dark={dark}> 
      <GlobalStyles dark={dark}/>

      <Header switchTheme={switchTheme} dark={dark} setUser={setUser} setRepositories={setRepositories}/>

      {user.length !== 0 && <Main switchTheme={switchTheme} dark={dark} user={user} repositories={repositories}/>}
    </Container>
  );
}

export default App;
