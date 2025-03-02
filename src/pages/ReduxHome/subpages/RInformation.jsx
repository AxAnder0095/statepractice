import {useSelector} from "react-redux";

function RInformation(){
    const pData = useSelector((state) => state.personalData);

    return(
        <>
            <p>Name: {pData.name}</p>
            <p>Email: {pData.email}</p>
            <p>Age: {pData.age}</p>
            <p>Expense: {pData.expense}</p>
        </>
    )
}

export default RInformation;