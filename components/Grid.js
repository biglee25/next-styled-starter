import styled from 'styled-components'

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.gridSize}, 1fr);
    padding: 10px;
    text-align: center;
    gap: 5rem;
    margin: 2rem;
    padding: 2rem;
    background-color: red;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

export default function Grid(props, children) {
  return (
      <GridContainer gridSize={props.gridSize}>
        {props.children}
      </GridContainer>
  )
}