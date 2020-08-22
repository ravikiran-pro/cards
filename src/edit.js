import React from 'react';

const styles ={
    root:{
      display:'flex',
      flexWrap:'wrap',
      height:'100vh',
      padding:20,
      justifyContent:'center',
      alignItems:'center'
    },
    tools:{
      listStyle:'none',
      lineHeight:'2.2em',
      opacity:0.7
    },
    keys:{
      textAlign:'center',
      backgroundColor:'black',
      padding:10,
      margin:2,
      color:'white',
      cursor:'pointer',
    }
  }
  
  export default function Edit(props){
    return(
      <div style={styles.root}>
        <div>
            <ul style={styles.tools}>
              {
                ['i1','i2','i3','EXIT'].map((item,index) =>{
                  return(
                    <li style={styles.keys} key={index} onClick={props.closeModal}>{item}</li>
                  )
                })
              }
            </ul>
        </div>
        <div style={{backgroundColor:'orange',height:300,width:'80%'}}>
          <img src={props.loc} alt="editor" style={{height:'100%',width:'100%'}}></img>
        </div>
      </div>
  )}
  
