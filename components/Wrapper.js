import React from "react"
import styled from "styled-components"

const MainWrapper = styled.div`
  width: 80%;
  min-height: auto;
  margin: 5rem auto;
  display: flex;
  align-items: stretch;
  justify-content: center;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    margin: 1rem auto 2rem auto;
    padding: 0 0.5rem;
    display: block;
  }
`

export default function Wrapper({ children }) {
  return <MainWrapper>{children}</MainWrapper>
}
