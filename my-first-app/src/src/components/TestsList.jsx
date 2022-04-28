import React from 'react';
import TestCard from './TestCard';

const TestsList = ({remove, tests}) => {
    return ( 
        <div>
            {tests.map((test, index) => 
                <TestCard remove={remove} number={index + 1} test={test} key={test.id}/>
            )}
        </div>
    );
}
 
export default TestsList;