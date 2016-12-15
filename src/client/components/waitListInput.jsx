import React from 'react';


class WaitListInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      slack: '',
      phone: ''
    };
  }
  handleName(e) {
    this.setState({name: e.target.value});

  }
  handleEmail(e) {
    this.setState({email: e.target.value});
  }
  handleSlack(e) {
    this.setState({slack: e.target.value});
  }
  handleClick() {
    this.props.addUser(this.state);
    this.setState({
      name: '',
      email: '',
      slack: '',
      phone: ''
    });
  }
  render() {
    return (
      <div class="input-group">
        <form>
          <input type="text" value={this.state.name} placeholder="name" onChange={this.handleName.bind(this)}></input>
          <input type="text" value={this.state.email} placeholder="email" onChange={this.handleEmail.bind(this)}></input>
          <input type="text" value={this.state.slack} placeholder="slack" onChange={this.handleSlack.bind(this)}></input>
          <button class="button-default" type="button" onClick={this.handleClick.bind(this)}>Put me in line!</button>
        </form>
      </div>
    )
  }
}
export { WaitListInput }