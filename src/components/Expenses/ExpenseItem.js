import { useState } from 'react';

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = props => {
    const [title, setTitle] = useState(props.title);

    const clickeHandler = () => {
        setTitle('UPDATES TITLE');
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
                <button onClick={clickeHandler}>Change Title</button>
            </div>
        </Card>
    );
}

export default ExpenseItem;