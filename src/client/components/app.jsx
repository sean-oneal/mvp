import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { WaitListInput } from './waitListInput.jsx';
import { WaitList } from './waitList.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      waitlist: []
    }
  }
  componentWillMount() {
    const success = (data) => {
      this.setState({
        waitlist: data
      });
    }
    $.ajax({
      url: 'http://127.0.0.1:3000/api/waitlist',
      type: 'GET',
      dataType: 'json',
      success: success,
      error: function(xhr, textStatus, error) {
        console.log('text status', textStatus, 'error', error);
      }
    });
  }
  addUser(newUser) {
    this.setState({
      waitlist: this.state.waitlist.concat(newUser)
    });
  }
  deleteUser(person) {
    this.setState({
      waitlist: this.state.waitlist.filter( user => {
        return user.name !== person;
      })
    });
  }
  render() {
    return (
      <div>
        <WaitListInput addUser={this.addUser.bind(this)} />
        <WaitList list={this.state.waitlist} deleteUser={this.deleteUser.bind(this)}/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);