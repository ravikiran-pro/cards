import React, { Component } from 'react';
import Startlist from './list';
import Edit from './edit';

class App extends Component{
  state={
    imagelocation:null,
    url:[],
    modalpopup:null,
  }

  fileChange = (event) =>{
    var reader = new FileReader();
    const file=event.target.files[0];
		reader.onloadend = () => {
      var imageUrl = window.URL.createObjectURL(file);
      this.setState({url:[...this.state.url,imageUrl]});
		}
		reader.readAsDataURL(file);
  }
  

  deleteItem=(index)=>{
    var arr=this.state.url;
    arr.splice(index,1);
    this.setState({url:arr});
  }

  editItem=(index)=>{
    this.setState({modalpopup:index});
  }
   
  closeItem =()=>{
    this.setState({modalpopup:null});
  }

  render(){
    const button={backgroundColor:'orange',padding:'6px 14px',cursor:'pointer',fontSize:14,borderRadius:5}
    if(this.state.modalpopup==null){
      return(
        <div style={{margin:20}}>
          <div style={{marginBottom:20}}>
              <label style={button}>
              <input id="img" type="file" style={{display:'none'}} value={this.state.imagelocation} onChange={this.fileChange}/>
              Upload
              </label>
            </div>
            <div>
                <Startlist url={this.state.url} deleteItem={this.deleteItem} editItem={this.editItem}/>
            </div>
        </div>
      )
    }
    else{
      return(
        <Edit loc={this.state.url[this.state.modalpopup]} closeModal={this.closeItem}/>
      )
    }
  }
}
export default App;
