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
        }
    },
});

export const {setName} = personalDataSlice.actions;

export default personalDataSlice.reducer;