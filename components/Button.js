import styled from "styled-components"
import Link from "next/link"

const Wrapper = styled.div`
  padding: 1rem;
`

const ButtonStyle = styled.button`
  width: ${props => props.width || "250px"};
  height: ${props => props.height || "50px"};
  background: ${props => props.buttonColor || "#e84e2c"};
  color: ${props => props.textColor || "#fff"};
  border-radius: ${props => props.borderRadius || "5rem"};
  border: ${props => props.borderColor || "none"};
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  cursor: pointer;
  
  :focus {
    outline: 0;
  }

  :hover {
    color: ${props => props.textHover || "#333"};
    background: ${props => props.buttonHover || "#ff4c4c"};
    box-shadow: 2px 2px 5px #888;
    transition: all 0.5s ease-out;
  }
`

export default function Button(props, children) {
  return (
    <Wrapper>
      <Link href={props.target}>
        <ButtonStyle
          width={props.width}
          height={props.height}
          buttonColor={props.buttonColor}
          buttonHover={props.buttonHover}
          textHover={props.textHover}
          textColor={props.textColor}
          borderRadius={props.borderRadius}
          borderColor={props.borderColor}
          >
            
            {props.children}
          
        </ButtonStyle>
      </Link>
    </Wrapper>
  )
}
