import styled from 'styled-components'

export const Title = styled.h1`
  ${'' /* color: rgba(255, 255, 0, 0.75); */}
  color: #00A99D;
  font-size: 4.5rem;
  margin: 4rem 2rem;
  font-family: 'Space Mono', monospace;

  font-style: italic;
  ${'' /* text-decoration: line-through; */}
  letter-spacing: -0.4rem;

  position: absolute;
`

export const Note = styled.div`
  color: rgba(255, 255, 255, 0.88);
  font-size: 3rem;
  margin: 4rem 2rem;
  font-family: 'Space Mono', monospace;

  strong {
    font-size: 2.75rem;
  }
`
