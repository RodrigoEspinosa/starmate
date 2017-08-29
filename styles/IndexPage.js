import styled from 'styled-components'

export const IndexPage = styled.div`
  position: relative;
  min-height: 100vh;
  min-width: 100vw;
  ${'' /* background: linear-gradient(#D74177, #FFE98A); */}
  background: linear-gradient(#662D8C, #ED1E79);
  ${'' /* background: linear-gradient(#93278F, #93278F); */}

  padding-top: 4rem;
`

export const GuardRickImg = styled.img`
  max-height: 200px;
  display: block;
  margin: 0 2rem 0 auto;
`

export const Form = styled.form`
  border-radius: .2rem;
  border: .2rem solid black;

  margin: 0 2rem 0 2rem;
  padding: .5rem 1rem;

  span {
    margin: 1rem 0 2rem 0;
    display: block;
    color: rgba(0, 0, 0, 0.5);
    font-family: 'Space Mono', monospace;
    font-size: 1.4rem;
  }
`

export const Input = styled.input`
  background: transparent;
  border: none;
  box-sizing: border-box;
  display: block;
  width: 100%;
  border-bottom: .2rem solid white;

  margin: 1rem 0;
  padding: .5rem 1rem;

  color: white;
  font-family: 'Space Mono', monospace;
  font-size: 2rem;
  text-transform: lowercase;

  ::placeholder {
    color: rgba(255, 255, 255, .5)
  }

  :focus {
    border-bottom-color: black;
    outline: none;
  }
`

export const Submit = styled.button`
  background: black;
  border-radius: .2rem;
  border: .2rem solid black;

  margin: 2.5rem .5rem .5rem 0;
  padding: .5rem 1rem;

  cursor: pointer;

  color: white;
  font-family: 'Space Mono', monospace;
  font-size: 2rem;
  text-transform: uppercase;
`
