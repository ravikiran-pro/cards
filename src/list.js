import React from 'react';


const styles = {
    root:{
        display:'flex',
        flexWrap:'wrap',
        margin:'auto',
        justifyContent:'center'
    },
    wrapper:{
        width:300,
        height:200,
        padding:20,
        backgroundColor:'whitesmoke'
    },
    img:{
        width:'100%',
        height:'100%'
    },
    edit:{
        float:'right',
        marginRight:15,
        cursor:'pointer',
    }
}

export default function Startlist(props){
    
    const Trash=(index)=>{
      return(<img src={require('./images/trash.png')} alt="trash" style={styles.edit} onClick={()=>props.deleteItem(index)}/>)
    }
    const Edit=(index)=>{
      return(<img src={require('./images/pencil.png')} alt="pencil" style={styles.edit} onClick={()=>props.editItem(index)}/>)
    }

    return(
      <div style={styles.root}> 
        {
          props.url.map((url,index)=>
                  {
                  return(
                    <>
                        <div style={{margin:10}}>
                        {Trash(index)}
                        {Edit(index)}
                        <div style={styles.wrapper}>
                          <img src={url} alt="upload" style={styles.img} key={index}></img>
                        </div>
                        </div>
                    </>
                )})
        }
      </div>        
    )
  }
