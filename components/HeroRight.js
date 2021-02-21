import styled from 'styled-components'
import Button from './Button'

const HeroImage = styled.div`
    background: url('/images/plant.jpg');
    width: 100%;
    height: 600px;
    background-size: cover;
    background-position: bottom center;
    background-repeat: no-repeat;
    z-index: -1;

    @media screen and (max-width: 768px) {
      background-position: top left;
    }

`

const HeroText = styled.div`
    position: relative;
    top: 25%;
    right: 5%;
    content: "";
    width: 50%;
    height: auto;
    color: #333;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    z-index: 2;
    margin-left: auto;
    padding: 2rem;

    @media screen and (max-width: 768px) {
        width: 90%;
        padding: 3rem;
        background: rgba(255,255,255,0.7);
        box-shadow: 5px 5px 25px #ccc;
        border-radius: 1rem;
        align-items: center;
        text-align: center;

    }

`
export default function HeroRight() {
  return (
    <div>
        <HeroImage>
          <HeroText>
              <h1>Headers</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <Button buttonColor="#ED7E3C" textColor="#fff" buttonHover="#ccc" target="#">Hello</Button>
          </HeroText>
          </HeroImage>

    </div>
  )
}