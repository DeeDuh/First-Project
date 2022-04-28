import React, { useState } from 'react';
import Input from '@mui/material/Input'
import Button from '@mui/material/Button'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const styles = {
    form: {
        padding: '1%',
        margin: '2%',
        width: '94%',
        border: '2px solid DodgerBlue',
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column'
    },
    input: {
        margin: '10px',
    },
    inputGroup: {
        display: 'flex',
        flexDirection: 'column'
    },
    button: {
        margin: '10px',
        width: '200px'
    },
    hr: {
        width: '100%',
        border: 'none',
        color: 'DodgerBlue',
        backgroundColor: 'DodgerBlue',
        height: '2px'
    },
    h1: {
        textAlign: 'center'
    }
}

const TestForm = ({create}) => {
    const [test, setTest] = useState({question: '', answer1: '', answer2: '', answer3: '', answer4: '', rightAnswer:''});

    const addNewTest = (e) => {

        e.preventDefault();
        const newTest = {
            ...test, id: Date.now()
        }
        create(newTest)
        setTest({question: '', answer1: '', answer2: '', answer3: '', answer4: '', rightAnswer:''})
    }

    return (  
        <div>
            <h1 style={styles.h1}>Создание вопроса для теста</h1>
            <form style={styles.form}>
                <Input 
                    style={styles.input}
                    value={test.question}
                    onChange={e => setTest({...test, question: e.target.value})}
                    type='text' 
                    placeholder="Введите вопрос:"
                />
                <hr style={styles.hr} />
                <div style={styles.inputGroup}>
                    <Input 
                        style={styles.input}
                        value={test.answer1}
                        onChange={e => setTest({...test, answer1: e.target.value})}
                        type='text' 
                        placeholder="Введите первый ответ"
                    />
                    <Input 
                        style={styles.input}
                        value={test.answer2}
                        onChange={e => setTest({...test, answer2: e.target.value})}
                        type='text' 
                        placeholder="Введите второй ответ"
                    />
                    <Input 
                        style={styles.input}
                        value={test.answer3}
                        onChange={e => setTest({...test, answer3: e.target.value})}
                        type='text' 
                        placeholder="Введите третий ответ"
                    />
                    <Input 
                        style={styles.input}
                        value={test.answer4}
                        onChange={e => setTest({...test, answer4: e.target.value})}
                        type='text' 
                        placeholder="Введите четвёртый ответ"
                    />
                    <hr style={styles.hr} />
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Правильный ответ</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            onChange={e => setTest({...test, rightAnswer: e.target.value})}
                        >
                            <FormControlLabel value="1" control={<Radio />} label="1" />
                            <FormControlLabel value="2" control={<Radio />} label="2" />
                            <FormControlLabel value="3" control={<Radio />} label="3" />
                            <FormControlLabel value="4" control={<Radio />} label="4" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <Button style={styles.button} onClick={addNewTest}>Добавить</Button>
            </form>
        </div>
    );
}
 
export default TestForm;