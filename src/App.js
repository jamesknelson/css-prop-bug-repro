import React from 'react'
import styled, { css } from 'styled-components/macro'

function App() {
  return (
    <div
      css={css`
        text-align: center;
      `}>
      <header
        css={css`
          background-color: #282c34;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: calc(10px + 2vmin);
          color: white;
        `}>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  )
}

export default App