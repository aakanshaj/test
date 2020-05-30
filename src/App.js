import React, {Component} from 'react'
import UserOuput from './User/UserOutput'
import {UserInput} from './User/UserInput'
import './App.css'
import {Validation} from './Validation'
import CharComponent from './CharComponent'

class App extends Component {

state = {
  usernames : [
    'Aakansha',
    'Ankita',
    'Prateek'
  ],
  input : ''
}

onChangeHandler = (event) => {
  this.setState({
    usernames : [
      event.target.value,
      'Ankita',
      'Prateek'
    ]
  })
}

inputChangeHandler = (event) => {
  this.setState({input : event.target.value})
}
//test
onClickHandler = (idx) => {
  const str = this.state.input.split('');
  str.splice(idx, 1);
  const finalStr = str.join('');
  this.setState({input : finalStr})
}

render(){

const style = {
  backgroundColor : 'white',
    font : 'inherit',
    padding : '8px',
    border : '1px solid blue',
    cursor : 'pointer'
};

let length = this.state.input.length;
let list = null;

if(length > 0) {
  let arr = this.state.input.split('')
  list = (
    <div>
     {arr.map((c,idx) => {
      return <CharComponent name={c} key={idx} click={() => this.onClickHandler(idx)}/>})}
    </div>
 )
     }
  return (
    <div className="App">
      <input type="text" onChange={this.inputChangeHandler} value={this.state.input}/>
      <br/>
      <p>{this.state.input.length}</p>
      <Validation len={this.state.input.length}/>
      <br/>
      {list}
    </div>
  ); 
  }

}

export default App;