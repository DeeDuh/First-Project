import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';

const styles={
    card:{
        width:'70%',
    },
    buttonGroup:{
        width:'80%',
        margin:'10px'
    },
button:{
    float:'left'
 }
}
const buttons = [
    <Button style={styles.button} key="1">Ответ 1</Button>,
    <Button style={styles.button} key="2">Ответ 2</Button>,
    <Button style={styles.button} key="3">Ответ 3</Button>,
    <Button style={styles.button} key="4">Ответ 4</Button>,
  ];
const TestCard=()=>{
    return(
        <Card style={styles.card} sx={{ minWidth: 275 }}>
        <CardContent>
        
          <Typography variant="h5" component="div">
          Вопрос
          </Typography>
          <ButtonGroup style={styles.buttonGroup}
        orientation="vertical"
        aria-label="vertical outlined button group"
      >
        {buttons}
      </ButtonGroup>
        </CardContent>

        <CardActions>
          <Button size="small">Удалить</Button>
        </CardActions>
      </Card>
    );
}
export default TestCard;