// index.js
const selectValue = ["Etienne", "Farid", "Superman"];
const expenseList = [
    {
        id: 0,
        amount: 20.75599,
        description: "First Expense",
        userName: "Etienne",
        userColor: "hsl(270, 70%, 47%)"
    },
    {
        id: 1,
        amount: 79.11,
        description: "Second Expense",
        userName: "Superman",
        userColor: "hsl(202, 70%, 47%)"
    },
    {
        id: 2,
        amount: 10.13,
        description: "Third Expense",
        userName: "Etienne",
        userColor: "hsl(270, 70%, 47%)"
    },
    {
        id: 3,
        amount: 68.88,
        description: "Fourth Expense",
        userName: "Superman",
        userColor: "hsl(202, 70%, 47%)"
    },
    {
        id: 4,
        amount: 95.18,
        description: "Fifth Expense",
        userName: "Etienne",
        userColor: "hsl(202, 70%, 47%)"
    }
];



function Expense({ amount, description, userName, userColor }) {
    return (
        <div className="expense">
            <div className="expense--info">
                <p className="expense--description">{description}</p>
                <div className="expense--user">
                    <div className="expense--user-color" style={{ background: userColor }} />
                    <p className="expense--user-text">{userName}</p>
                </div>
            </div>
            <Amount amount={amount} />
            <button className="button button--flat expense--delete button--danger" type="button">
                Delete
      </button>
        </div>
    );
}

function Amount({ amount }) {
    const integerNumber = Math.floor(amount);
    const floatNumber = Math.floor((amount - integerNumber) * 100);
    return (
        <div className="amount expense--amount ">
            <span className="amount--big-num">{integerNumber}</span>
            <span className="amount--small-num">,{floatNumber}</span>
            <span className="amount--currency">€</span>
        </div>
    );
}

function Card({ title, children }) {
    return (
        <div className="card">
            <h2 className="card--title">{title}</h2>
            {children}
        </div>
    );
}

function Input({ type, name, placeholder }) {
    return (
        <div className="input">
            <input type={type} name={name} className="input--input" placeholder={placeholder} />
        </div>
    );
}

function Select({ label, userId }) {
    return (
        <div className="select">
            <label htmlFor={userId} className="select--label">
                {label}
            </label>
            <select className="select--select" name={userId}>
                <option value="none">Select an user</option>
                {selectValue.map((value, index) => (
                    <option key={index} value={`user${index}`}>{value}</option>
                ))}
            </select>
        </div>
    );
}

function Button({ type, label }) {
    return (
        <div className="button-container" style={{ justifyContent: 'flex-end' }}>
            <button className="button" type={type}>
                {label}
            </button>
        </div>
    );
}

function App() {
    return (
        <div className="panels">
            <div className="panel">
                <Card title="Expenses">
                    <div className="list">
                        {expenseList.map(({ id, amount, description, userName, userColor }) => (
                            <Expense key={id} amount={amount} description={description} userName={userName} userColor={userColor} />
                        ))}
                    </div>
                </Card>
                <form>
                    <Card title="New Expense">
                        <div>
                            <Input type="text" name="description" placeholder="Description" />
                            <Input type="text" name="amount" placeholder="Amount" />
                            <Select label="User" userId="userId" />
                        </div>
                    </Card>
                    <Button type="button" label="Add Expense" />
                </form>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));