import React from 'react'
import firebase from 'firebase/app'
import { useTheme } from 'next-themes'
import IconButton from './IconButton'

export default function ThemeSwitcherButton() {
  const { theme, setTheme } = useTheme()

  const handleSwitchTheme = (newTheme: 'light' | 'dark') => {
    // log analytics event
    firebase.analytics().logEvent('switched_theme', {
      before: theme,
      after: newTheme,
    })
    // set the theme in local state
    setTheme(newTheme)
  }

  return (
    <React.Fragment>
      {theme === 'light' && (
        <IconButton
          alt="Switch to Dark Mode"
          src="/icons/icon-moon.svg"
          size="lg"
          onClick={() => handleSwitchTheme('dark')}
        />
      )}
      {theme === 'dark' && (
        <IconButton
          alt="Switch to Light Mode"
          src="/icons/icon-sun.svg"
          size="lg"
          onClick={() => handleSwitchTheme('light')}
        />
      )}
    </React.Fragment>
  )
}
