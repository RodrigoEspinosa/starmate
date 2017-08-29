import Link from 'next/link'
import fetch from 'isomorphic-fetch'

import Arc from '../components/Arc'
import { Note } from '../styles/Texts'
import { Footer } from '../styles/Footer'
import * as Styles from '../styles/ShowPage'

const ShowPage = ({ data }) =>
  <Styles.ShowPage>
    <Arc
      chartData={data}
      width={process.browser ? window.innerWidth : '100%'}
      height={process.browser ? window.innerHeight : '100%'}
    />

    <Styles.InformationBox>
      {data.map(({ label, stars }) => (
        <Styles.InformationRow>
          <Styles.InformationLabel>{ label }</Styles.InformationLabel>
          <Styles.InformationCell>{ stars } stars</Styles.InformationCell>
        </Styles.InformationRow>
      ))}
    </Styles.InformationBox>

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

    <Link href="/" prefetch>
      <a>
        <Styles.CreateYourOwn>
          {' '}
          Want to do it?
          {' '}
          <span>Create yours</span>
        </Styles.CreateYourOwn>
      </a>
    </Link>

    <Footer>
      <a href="https://recodes.co">by rec</a>
    </Footer>
  </Styles.ShowPage>

ShowPage.defaultProps = {
  data: []
}

ShowPage.getInitialProps = async ({ query }) => {
  const repos = (query.repos || '').split('|')

  const stars = await Promise.all(
    repos.map(async repo => {
      const res = await fetch(`https://api.github.com/repos/${repo}`)
      const json = await res.json()
      return { label: repo, stars: json.stargazers_count }
    })
  )

  return {
    data: stars
  }
}

export default ShowPage
