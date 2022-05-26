import { ThemeProvider } from 'styled-components'
import './App.css'
import Main from './components/Main'
import { LightTheme, DarkTheme } from './components/Themes'

import AboutPage from './components/AboutPage'
import WorkPage from './components/WorkPage'
import MySkillsPage from './components/MySkillsPage'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <ThemeProvider theme={LightTheme}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
    
    {/*<AnimatePresence exitBeforeEnter >

    /** Setting link locations 

    <Routes location={location} key={location.pathname} >
      <Route exact path="/" component={Main}/>
      <Route exact path="/about" component={AboutPage}/>
      <Route exact path="/work" component={WorkPage}/>
      <Route exact path="/skills" component={MySkillsPage}/>
    </Routes>

    </AnimatePresence> */}
    
    </ThemeProvider>

  );
}

export default App
