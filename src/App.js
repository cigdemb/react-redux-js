import React from 'react'
import { useSelector } from 'react-redux'
import DarkModeSwitcher from './components/dark-mode-switcher/dark-mode-switcher'
import './App.css'
import LangSwitcher from './components/lang-switcher/lang-switcher'
import { $t } from './helpers/locale-helper'


const App = () => {
  const darkMode = useSelector(state=>state.theme.darkMode)
  //useSelector used to update App.js to be able to render lang-switcher
  const currentLang = useSelector(state=>state.locale.lang)
  return (
    
    <div className= {darkMode ? 'dark' : ""}>
      <DarkModeSwitcher/>
      <LangSwitcher/>
      <h2>{$t("hello-world")}</h2>
    </div>
    
  )
}

export default App