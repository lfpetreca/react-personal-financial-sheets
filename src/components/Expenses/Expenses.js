import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = props => {
    const items = props.items.map((item, index) => {
        return <ExpenseItem key={index} title={item.title} amount={item.amount} date={item.date} />
    });

    return <Card className='expenses'>{items}</Card>;
}

export default Expenses;