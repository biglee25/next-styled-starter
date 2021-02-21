import React from "react"
import styled from "styled-components"

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    text-align: center;

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr;
    }
`

const FormArea = styled.div`
  grid-column: 1/2;
  width: 100%;
  height: auto;
  background: #f2f2f2;
  padding: 7em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h1 {
    margin: 0;
  }

  p {
    padding: 0 10rem;
  }

  form {
    width: 80%;

    @media (max-width: 1200px) {
      width: 100%;
      padding: 0 1rem;
    }
  }

  input {
    font-size: 1em;
    width: 100%;
    height: 50px;
    padding-left: 10px;
    margin-bottom: 10px;
    border: 0;
  }

  textarea {
    font-size: 1em;
    border: 0;
    width: 100%;
    height: 200px;
    padding-left: 10px;
    margin-bottom: 2rem;
  }

  button {
    width: 100%;
    display: inline-block;
    border: none;
    padding: 1em 2em;
    text-decoration: none;
    background: #000;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
  }
`

const Formarea = styled.div`
  width: 100%;
  margin: auto;
  


  @media (max-width: 1200px) {
    width: 50%;
  }

  @media (max-width: 768px) {
      width: 100%;
      padding: 0 1rem;
    }


  input {
    margin: 1rem 0;
  }
`

const Message = styled.div`
  input {
    padding: 1rem 0 10rem 0.5rem;
  }
`

const Success = styled.div`
  background: #66cd00;
  padding: 0.5rem;
  color: #fff;
`

const Fail = styled.div`
  background: #cc0000;
  margin-top: 1rem;
  padding: 1rem;
  color: #fff;
`

const GridItemText = styled.div`
    background: #f2f2f2;
    color: #333;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5rem;

    @media (max-width: 1200px) {
      width: 100%;
      padding: 0 10rem;
      text-align: center;
      order: -1;
    }

    @media (max-width: 768px) {
      width: 100%;
      padding: 0 5rem;
      text-align: center;
      order: -1;
    }
`


export default class MyForm extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: "",
    }
  }

  render() {
    const { status } = this.state
    return (
      <GridContainer>
        <FormArea>
        <h1>
          Form Header
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        <form
          onSubmit={this.submitForm}
          //action="https://formspree.io/xgennqrz"
          method="POST"
        >
          <Formarea>
            <input type="name" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
            <Message>
              <input type="text" name="message" placeholder="Message" />
            </Message>
            {status === "SUCCESS" ? (
              <Success>
                Thanks for your message. We will reply as soon as possible.
              </Success>
            ) : (
              <button>Submit</button>
            )}
            {status === "ERROR" && <Fail>There was an error.</Fail>}
          </Formarea>
        </form>

        </FormArea>
        <GridItemText>
        <h1>Header</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        </GridItemText>

      </GridContainer>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: "SUCCESS" })
      } else {
        this.setState({ status: "ERROR" })
      }
    }
    xhr.send(data)
  }
}
