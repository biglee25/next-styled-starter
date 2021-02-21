import styled from 'styled-components'
import Button from "../components/Button"


const Container = styled.div`
    background: ${props => props.background || "#333"};
    color: ${props => props.textColor || "#fff"};
    max-width: ${props => props.width || "100%"};
    min-height: 100%;
    margin: 0 1rem;
    padding: 3rem 2rem;
    text-align: center;
    box-shadow: 2px 2px 20px #e8e8e8;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    border-radius: ${props => props.borderRadius || "none"};
    box-shadow: 5px 5px 15px #ccc;


  @media (max-width: 768px) {
    display: block;
    width: 60%;
    text-align: center;
    margin: 2rem auto;
    padding: 2rem;
  }
`

export default function Card(props, children) {
  return (
    <div>
      <Container background={props.background} width={props.width} textColor={props.textColor} borderRadius={props.borderRadius}>
        <h1>Card Header</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <Button buttonColor={props.buttonColor} target="#">{props.children}</Button>
      </Container>
    </div>
  )
}

