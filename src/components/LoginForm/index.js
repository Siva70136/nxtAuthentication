// Write your JS code here
// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {userName: '', password: '', isShowError: false, errorMsg: ''}

  onNameChange = event => {
    this.setState({
      userName: event.target.value,
    })
  }

  onPwdChange = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onSubmitSuccess = () => {
    const {history} = this.props

    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({
      isShowError: true,
      errorMsg,
    })
  }

  submit = async event => {
    event.preventDefault()
    const {userName, password} = this.state
    const userDetails = {username: userName, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {userName, password, isShowError, errorMsg} = this.state
    return (
      <div className="login-container">
        <div className="main-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="login-image"
          />
          <div className="form-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="logo"
            />

            <form onSubmit={this.submit} className="myForm">
              <label className="name" htmlFor="name">
                USERNAME
              </label>
              <input
                type="text"
                placeholder="Username"
                id="name"
                value={userName}
                onChange={this.onNameChange}
                className="box"
              />
              <label className="name" htmlFor="pwd">
                PASSWORD
              </label>
              <input
                type="password"
                placeholder="Password"
                id="pwd"
                value={password}
                onChange={this.onPwdChange}
                className="box"
              />

              <button type="submit" className="button">
                Login
              </button>
              {isShowError && <p className="error-msg">{errorMsg}</p>}
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm
