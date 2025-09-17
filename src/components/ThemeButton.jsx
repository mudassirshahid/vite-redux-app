import React from 'react'

const ThemeButton = ({theme, handleTheme}) => {
  return (
    <>
      <button className='bg-emerald-600 p-3 rounded' onClick={handleTheme}>{theme ? "Dark mode" : "Light mode"}</button>
    </>
  )
}

export default ThemeButton
