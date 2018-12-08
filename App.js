import React, { Component } from 'react';
import './App.css';

class App extends Component {
 constructor(props){
   super(props);
   this.state ={
     title: 'React Single CRUD Application',
     act:0,
     index: '',
     datas: []
   }
 }
 componentDidMount(){
   this.refs.name.focus();
 }
 fsubmit =(e)=>{
   e.preventDefault();
   console.log('try');

   let datas = this.state.datas;
   let name = this.refs.name.value;
   let Lastname =this.refs.Lastname.value;

   if(this.state.act === 0){
     let data = {
       name, Lastname
     }
     datas.push(data);
   }else{
     let index = this.state.index;
     datas[index].name = name;
     datas[index].Lastname =Lastname;
   }

   
   this.setState({
     datas:datas,
     act:0
   });

   this.refs.myForm.reset();
   this.refs.name.focus();
 }
 fRemove =(i) => {
   let datas = this.state.datas;
   datas.splice(i,1);
   this.setState({
     datas:datas
   });
   this.refs.myForm.reset();
   this.refs.name.focus();
 
 }
 fEdit =(i) => {
   let data = this.state.datas[i];
   this.refs.name.value = data.name;
   this.refs.Lastname.value = data.Lastname;

   this.setState({
     act: 1,
     index: i
   })
 }
  render() {
    let datas = this.state.datas
    return (
      <div className="App">
      <h2>{this.state.title}</h2>
      <form ref="myForm" className="myForm">
      <input type="text" ref="name" placeholder="Your First name" className="formField"/>
      <input type="text" ref="Lastname" placeholder="Your Lastname" className="formField"/>
      <button onClick={this.fsubmit} className="myButton">submit</button>

      </form>
      <pre>
        {datas.map((data, i ) =>
        <li key={i} className="myList">
        {i+1}.{data.name},{data.Lastname}
        <button onClick={(e)=>this.fRemove(i)} className="myListButton">removes</button>
        <button onClick={(e)=>this.fEdit(i)} className="myListButton">edit</button>

        </li>
          )}
      </pre>
      </div>
    );
  }
}

export default App;
