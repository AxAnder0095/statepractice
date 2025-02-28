import {useOutletContext} from "react-router-dom";

function Information(){

    const context = useOutletContext();

    return(
        <>
            <p>Name: {context.budgetData.name}</p>
            <p>Email: {context.budgetData.email}</p>
            <p>Age: {context.budgetData.age}</p>
            <p>Expense: {context.budgetData.expense}</p>
        </>
    )
}

export default Information;