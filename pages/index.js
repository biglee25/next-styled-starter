import Head from 'next/head'

import Wrapper from '../components/Wrapper'
import Navbar from '../components/Navbar'
import Navbar2 from '../components/Navbar2'
import Navbar3 from '../components/Navbar3'
import Hero from '../components/Hero'
import HeroLeft from '../components/HeroLeft'
import HeroRight from '../components/HeroRight'
import Grid2 from '../components/Grid2'
import Grid2alt from '../components/Grid2alt'
import Grid3 from '../components/Grid3'
import Card from '../components/Card'
import CardImage from '../components/CardImage'
import Button from '../components/Button'
import Grid from '../components/Grid'
import Form from '../components/Form'
import FormLeft from '../components/FormLeft'



export default function Home(props, {children}) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap" rel="stylesheet"></link>
      </Head>
      <div className="section">
        <h1>Navbars</h1>
        <Navbar />
        <Navbar2 />
        <Navbar3 />
      </div>
      <div className="section">
        <h1>Hero</h1>
          <Hero />
          <HeroLeft />
          <HeroRight />
      </div>
      <div className="section">
        <h1>Grids</h1>
        <Grid2 />
        <Grid2alt />
        <Grid3 />
      </div>
      <div className="section">
        <h1>Cards</h1>
        <Wrapper>
          <Card background="#ccc" buttonColor="#f4f4" textColor="#333">Card 1</Card>
          <Card background="#555" buttonColor="#ffa07a">Card 2</Card>
          <Card borderRadius="1rem">Card 3</Card>
        </Wrapper>
        <Wrapper>
        <CardImage>
          Test
          <Button borderColor="2px solid #333" buttonColor="none" textColor="#000" buttonHover="#333" textHover="#fff" borderRadius="0" width="100%" target="#">Button 1</Button>
        </CardImage>
        <CardImage>
          Test
          <Button buttonColor="#000" buttonHover="#333" textHover="#fff" borderRadius="0" width="100%" target="#">Button 1</Button>
        </CardImage>
        </Wrapper>
      </div>
      <div className="section">
        <h1>Buttons</h1>
        <Wrapper>
          <Button buttonColor="#a020a0" buttonHover="#ba63ba" target="#">Button 1</Button>
          <Button buttonColor="#333" target="#">Button 2</Button>
          <Button buttonColor="#ccc" textColor="#333" textHover="#fff" target="#">Button 3</Button>
        </Wrapper>
        <Wrapper>
          <Button width="300px" height="40px" buttonColor="none" buttonHover="#e84e2c" textHover="#fff" textColor="#e84e2c" target="#" borderColor="2px solid #e84e2c" borderRadius="none">Button</Button>
          <Button width="150px" height="40px" buttonColor="none" buttonHover="#2f80d7" textHover="#fff" textColor="#2f80d7" target="#" borderColor="2px solid #2f80d7" borderRadius="none">Button</Button>
          <Button width="100px" height="40px" buttonColor="none" buttonHover="#23af96" textHover="#fff" textColor="#23af96" target="#" borderColor="2px solid #23af96" borderRadius="none">Button</Button>
        </Wrapper>
      </div>
      <div className="section">
        <h1>Custom Grid</h1>
          <Grid gridSize="3">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
          </Grid>
      </div>
      <div className="section">
        <h1>Forms</h1>
        <Form />
        <div className="section">
        <FormLeft />
        </div>
      </div>
    </div>
  )
}
