// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  increment = () => {
    this.setState(prevState => {
      const randomCount = Math.ceil(Math.random() * 100)
      const newCount = prevState.count + randomCount
      return {count: newCount}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <div>
            <button type="button" className="btn" onClick={this.increment}>
              Generate
            </button>
          </div>
          <p className="count">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
