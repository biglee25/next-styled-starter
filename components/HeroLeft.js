import styled from 'styled-components'
import Button from './Button'

const HeroImage = styled.div`
    background: url('/images/light.jpg');
    width: 100%;
    height: 800px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
`

const HeroText = styled.div`
    position: relative;
    top: 25%;
    left: 5%;
    content: "";
    width: 50%;
    height: auto;
    color: #333;
    border-radius: 1rem;
    background: rgba(255,255,255,0.7);
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 2;
    margin-right: auto;
    padding: 2rem;
    box-shadow: 5px 5px 25px #ccc;

    @media screen and (max-width: 768px) {
        width: 90%;
        text-align: center;

    }

`
export default function HeroLeft() {
  return (
    <div>
        <HeroImage>
          <HeroText>
              <h1>Headers</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <Button buttonColor="#ED7E3C" textColor="#fff" buttonHover="#ba63ba"target="#">More Info</Button>
          </HeroText>
          </HeroImage>

    </div>
  )
}