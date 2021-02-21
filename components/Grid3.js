import Image from 'next/image'
import styled from 'styled-components'

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 10px;
    text-align: center;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

const GridItemImage = styled.div`
    background: #333;
    color: #fff;
    text-align: center;
    margin: 1rem;
`

const GridItemText = styled.div`
    background: #333;
    color: #fff;
    text-align: left;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3rem;
    `

export default function Grid3() {
  return (
    <div>
      <GridContainer>
          <GridItemText>
              <h1>Header</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </GridItemText>
          <GridItemText>
              <h1>Header</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </GridItemText>
          <GridItemText>
              <h1>Header</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </GridItemText>
      </GridContainer>
    </div>
  )
}