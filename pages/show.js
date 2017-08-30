import Link from 'next/link'
import fetch from 'isomorphic-fetch'

import Arc from '../components/Arc'
import { Note } from '../styles/Texts'
import { Footer } from '../styles/Footer'
import * as Styles from '../styles/ShowPage'

const ShowPage = ({ data }) => (
  <Styles.ShowPage>
    <Arc
      chartData={data}
      width={process.browser ? window.innerWidth : '100%'}
      height={process.browser ? window.innerHeight : '100%'}
    />

    <Styles.InformationBox>
      {data.map(({ label, stars }) => (
        <Styles.InformationRow key={label}>
          <Styles.InformationLabel>{label}</Styles.InformationLabel>
          <Styles.InformationCell>{stars} stars</Styles.InformationCell>
        </Styles.InformationRow>
      ))}
    </Styles.InformationBox>

    <Note>
      &mdash;
      <br />
      <br />
      <strong>Please keep in mind...</strong>
      <br />
      that this is nothing more than a <u>stupid</u> comparison that people like
      me, sometimes & for reasons unknown, like to use.
      <br />
      <br />
      &mdash;
    </Note>

    <Link href="/" prefetch>
      <a>
        <Styles.CreateYourOwn>
          {' '}
          Want to do it? <span>Create yours</span>
        </Styles.CreateYourOwn>
      </a>
    </Link>

    <Footer>
      <a href="https://recodes.co">by rec</a>
    </Footer>
  </Styles.ShowPage>
)

ShowPage.defaultProps = {
  data: []
}

const getReposFromUserOrOrganization = async usernameOrOrganization => {
  const res = await fetch(
    `https://api.github.com/users/${usernameOrOrganization}/repos?type=owner`
  )
  const json = await res.json()

  if (json.message && json.message === 'Not Found') {
    const orgRes = await fetch(
      `https://api.github.com/orgs/${usernameOrOrganization}/repos?type=sources`
    )
    return await res.json()
  }

  return json
}

const getRepos = async query => {
  const repos = (query.repos || '').split('|')

  if (repos.length === 1 && !repos[0].includes('/')) {
    const json = await getReposFromUserOrOrganization(repos[0])

    console.log({ json })

    if (json.message && json.message === 'Not Found') {
      throw new Error('User not found')
    }

    if (Array.isArray(json)) {
      return json.map(repo => repo.full_name)
    }
  }

  return repos
}

const sortByStars = (a, b) => {
  if (a.stars > b.stars) {
    return 1
  }

  if (a.stars < b.stars) {
    return -1
  }

  return 0
}

ShowPage.getInitialProps = async ({ query }) => {
  const repos = await getRepos(query)

  const stars = await Promise.all(
    repos.map(async repo => {
      const res = await fetch(`https://api.github.com/repos/${repo}`)
      const json = await res.json()
      return { label: repo, stars: json.stargazers_count }
    })
  )

  console.log({ stars })

  const sortedStars = Array.isArray(stars) ? stars.sort(sortByStars) : stars

  return {
    data: sortedStars
  }
}

export default ShowPage
