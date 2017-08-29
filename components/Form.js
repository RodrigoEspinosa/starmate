import Link from 'next/link'
import { PureComponent } from 'react'

import * as Styles from '../styles/IndexPage'

const hasString = (value) => value && value.length && value.length > 0

export default class Form extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      repos: []
    }

    this._onChange = this._onChange.bind(this)
  }

  _onChange (event) {
    const { repos } = this.state
    const { value, name } = event.target

    const newRepos = [
      ...repos.slice(0, parseInt(name)),
      value,
      ...repos.slice(parseInt(name) + 1, repos.length),
    ].filter(hasString)

    this.setState({ repos: newRepos })
  }

  render() {
    const { repos } = this.state

    console.log({ repos: repos.join('|') })

    const query = {
      repos: repos.join('|')
    }

    return (
      <Styles.Form>
        <span>Enter some github urls here...</span>

        {Array.from(Array(repos.length + 1), (_, index) =>
          <Styles.Input
            required
            key={index}
            name={index}
            onChange={this._onChange}
            value={repos[index] || ''}
            placeholder="RodrigoEspinosa/starmate"
          />
        )}

        <Link href={{ pathname: 'show', query }}>
          <a>
            <Styles.Submit>Send</Styles.Submit>
          </a>
        </Link>
      </Styles.Form>
    )
  }
}
