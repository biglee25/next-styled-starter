import { useState } from 'react'

import styled from 'styled-components'
import Link from 'next/link'
import { Twirl as Hamburger } from "hamburger-react"

const Container = styled.div`
    //position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 75px;
    background: #ccc;
    color: #333;
    padding: 1rem;
    z-index: 1000;

    h1 {
        margin: 0;
        padding: 0;
    }


    ul {
        display: flex;
        list-style: none;

        li {
            padding: 0 1rem;
        }
    }

    @media screen and (max-width: 768px) {
        ul {
            display: none;
        }
    }
`

const Icon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
            display: block;
            z-index: 10000;

        }
`

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: ${({ nav }) => (nav ? "100%" : "0")};
  position: fixed;
  top: 0;
  right: 0;
  background-color: #ccc;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  z-index: 1000;


  a {
      padding: 2rem 0;
      font-size: 1.2rem;
  }
`


export default function Navbar3() {

const [nav, showNav] = useState(false);

  return (
    <div>
      <Container>
        <h1>Logo</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
            <Icon>
                <Link href="#">
                    <a onClick={() => showNav(!nav)}>
                        <Hamburger direction="left" color="#333" />
                    </a>
                </Link>
            </Icon>
            <Menu nav={nav}>
                <Link href="#">
                    <a>Home</a>
                </Link>
                <Link href="#">
                    <a>About</a>
                </Link>
                <Link href="#">
                    <a>Services</a>
                </Link>
                <Link href="#">
                    <a>Contact</a>
                </Link>
            </Menu>
      </Container>
    </div>
  )
}