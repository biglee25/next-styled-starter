import styled from 'styled-components'
import Button from '../components/Button'

const HeroImage = styled.div`
    background: url('/images/sea.jpg');
    width: 100%;
    height: 600px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
`

const HeroText = styled.div`
    position: relative;
    top: 0;
    content: "";
    width: 100%;
    height: 100%;
    color: #fff;
    background: rgba(0,0,0,0.3);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 2;
    margin: auto;
    padding: 2rem;

    p {
      width: 50%;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }

`
export default function Hero() {
  return (
    <div>
        <HeroImage>
          <HeroText>
              <h1>Headers</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <Button buttonColor="#ED7E3C" textColor="#fff" buttonHover="#ba63ba" target="#">Find Out More</Button>
          </HeroText>
          </HeroImage>

    </div>
  )
}