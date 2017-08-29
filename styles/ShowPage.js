import styled from 'styled-components'

export const ShowPage = styled.div`
  position: relative;
  min-height: 100vh;
  min-width: 100vw;
  background: linear-gradient(#D74177, #FFE98A);
`

export const InformationBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 4rem 2rem;
`

export const InformationRow = styled.div`
  flex: 100%;
  display: flex;
  position: relative;
`

export const InformationCell = styled.div`
  color: rgba(255, 255, 255, 0.75);
  flex: auto;
  font-family: 'Space Mono', monospace;
  font-size: 1.2rem;
  margin: 1rem 0;
  text-align: right;
`

export const InformationLabel = styled(InformationCell)`
  flex: 1;
  text-align: left;
`

export const CreateYourOwn = styled.button`
  background: transparent;
  border-radius: .2rem;
  border: .2rem solid black;

  margin: 4rem 2rem 8rem 2rem;
  padding: .5rem 1rem;

  cursor: pointer;

  color: white;
  font-family: 'Space Mono', monospace;
  font-size: 2rem;
  text-transform: uppercase;

  span {
    color: black;
  }
`
