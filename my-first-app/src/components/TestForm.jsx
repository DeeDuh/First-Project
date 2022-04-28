import React from 'react';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

const TestForm =()=>{
    const styles={
 form:{
    padding:'0 15px',
    margin:'10px',
    width:'60%',
    display:'flex',
    border:'2px solid DodgerBlue',
    flexDirection:'column'
},
input:{
    margin:'10px',
},
inputGroup:{
    display:'flex',
    flexDirection:'column'
},
button:{
    margin:'10px',
    width:'200px'
 },
 hr:{
 width:'100%',
 border:'none',
 color:'DodgerBlue',
 backgroundColor:'DodgerBlue',
 height:'2px'
 }
}
    return(
        <form style={styles.form}>
            <Input style={styles.input}/>
            <hr style={{}}/>
        <div style={styles.inputGroup}>
           <Input style={styles.input}/>
           <Input style={styles.input}/>
           <Input style={styles.input}/>
           <Input style={styles.input}/>
        </div> 
            <Button style={styles.button}>Добавить</Button>
        </form>
    )
}
export default TestForm;