import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';

const styles = {
    card: {
        margin: '2%',
        width: '96%',
    },
    buttonGroup: {
        width: '96%',
        margin: '2%'
    },
    button: {
        textAlign: 'left'
    }
}

const TestCard = (props) => {
    const [check, setCheck] = useState('Ответ не выбран')   

    const SecectAnswer = (event) => {
        if (event.target.innerText.toLowerCase() !== (props.test["answer" + props.test.rightAnswer].toLowerCase())) {
            setCheck('Ответ не правильный')
        } else {
            setCheck('Ответ правильный')
        }
    }

    return (  
        <Card style={styles.card} sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {`${props.number}. ${props.test.question}`}
                </Typography>
                <ButtonGroup
                    style={styles.buttonGroup}
                    orientation="vertical"
                    aria-label="vertical outlined button group"
                >
                    <Button onClick={SecectAnswer}>{props.test.answer1}</Button>
                    <Button onClick={SecectAnswer}>{props.test.answer2}</Button>
                    <Button onClick={SecectAnswer}>{props.test.answer3}</Button>
                    <Button onClick={SecectAnswer}>{props.test.answer4}</Button>
                </ButtonGroup>
                <p>{check}</p>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => props.remove(props.test)}>Удалить</Button>
            </CardActions>
        </Card>
    );
}
 
export default TestCard;