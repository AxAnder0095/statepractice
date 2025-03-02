import {createSlice} from "@reduxjs/toolkit";

interface PersonDataState {
    name: string;
    email: string;
    age: string;
    expense: string
}

const initialState: PersonDataState = {
    name: '',
    email: '',
    age: '',
    expense: ''
};

const personalDataSlice = createSlice({
    name: "personal data",
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setAll: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.age = action.payload.age;
            state.expense = action.payload.expense;
        }
    },
});

export const {setName, setAll} = personalDataSlice.actions;

export default personalDataSlice.reducer;