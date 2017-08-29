import Form from '../components/Form'
import { Footer } from '../styles/Footer'
import { Title, Note } from '../styles/Texts'
import * as Styles from '../styles/IndexPage'

const IndexPage = () =>
  <Styles.IndexPage>
    <Title>Starmate</Title>

    <Styles.GuardRickImg src="/static/guard-rick.png" />
    <Form />

    <Note>
      &mdash;
      <br />
      <br />

      <strong>Please keep in mind...</strong>
      <br />
      that this is nothing more than a <u>stupid</u>
      {' '}
      comparasion that people like me, somethings & for reasons unknown,
      {' '}
      like to use.

      <br />
      <br />
      &mdash;
    </Note>

    <Footer>
      <a href="https://recodes.co">by rec</a>
    </Footer>
  </Styles.IndexPage>

export default IndexPage
