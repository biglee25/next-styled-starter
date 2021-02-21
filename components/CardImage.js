import styled from 'styled-components'
import Button from "../components/Button"
import Image from 'next/image'



const Container = styled.div`
    position: relative;
    background: ${props => props.background || "#fff"};
    color: ${props => props.textColor || "#333"};
    max-width: 50%;
    min-height: 100%;
    margin: 0 1rem;
    text-align: center;
    box-shadow: 2px 2px 20px #e8e8e8;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    border-radius: ${props => props.borderRadius || "none"};
    box-shadow: 5px 5px 15px #ccc;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    margin: 0 auto;
    padding: 0;
  }
`
const CardBody = styled.div`
    margin: 2rem 0; 
    padding: 0 2rem;

`




export default function CardImage(props, children) {
  return (
      <Container>
        <Image
            src="/images/sea.jpg"
            alt="Picture of the author"
            layout="responsive"
            width={450}
            height={250}
        />
        <CardBody>
            <h1>Card Header</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            {props.children}
        </CardBody>
      </Container>
  )
}

