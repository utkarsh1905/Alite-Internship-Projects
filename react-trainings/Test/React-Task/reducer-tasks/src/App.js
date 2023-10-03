import './App.css';
import React, { useReducer } from 'react';
import UserDetails from './Components/UserDetails';
import UserTable from './Components/UserTable';
import ReducerTodo from './Components/ReducerTodo';
const initialState = {
  data: [],
  sampleDataObj : {
    name: '',
    phoneNumber: '',
    email: '',
    address: '',
    city: '',
    id: null,
  },
};

const reducer = (state, action) => {
  console.log("act",action);
  switch (action.type) {
    case "ADD_DATA":{ return { ...state, data: [...state.data, action.payload] };}
    case "DELETE_DATA":{
      return {
        ...state,
        data: state.data.filter((user) => user.id !== action.payload)
      };}
    case "EDIT_DATA":{
      return {
        ...state,
        data: action.payload
      };}
    case "SET_SELECTED_USER":{
      return {
        ...state,
        sampleDataObj : state.data.find((user) => user.id === action.payload)
      };}
    case "UPDATE_SAMEPLE_DATA_OBJ":{
        return { ...state,sampleDataObj:{...state.sampleDataObj,[action.payload.type]: action.payload.value}}}
    case "RESET_SAMEPLE_DATA_OBJ":{
     return {...state,sampleDataObj:{name: '',
      phoneNumber: '',
      email: '',
      address: '',
      city: '',
      id:null
     }}
  }
    default: {return {state}}
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    // TODO : Remove Optional Chaining before preventDefault
    e?.preventDefault();
    if(state?.sampleDataObj?.id === null)
    {
      dispatch({ type: "ADD_DATA", payload: { ...state?.sampleDataObj, id: crypto.randomUUID() } });
      dispatch({type:"RESET_SAMEPLE_DATA_OBJ"});
    }else{
      const tempData = state.data;
      for(let index = 0 ;index <tempData.length;index++)
      {
        if(tempData[index]?.id === state?.sampleDataObj?.id){
          Object.keys(tempData[index]).map(key => tempData[index][key] = state?.sampleDataObj[key])
        }
      }
      dispatch({type:"EDIT_DATA",payload:tempData});
      // TODO : Spelling Mistake
      dispatch({type:"RESET_SAMEPLE_DATA_OBJ"});
    }
  };

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_DATA", payload: id });
  };

  const handleEdit = (id) => {
    dispatch({ type: "SET_SELECTED_USER", payload: id });
  };

  // TODO : onInputChange rename
  const dataHandler = (type,value) => {
    dispatch({ type: "UPDATE_SAMEPLE_DATA_OBJ", payload: {type,value} });
  }

  return (
    <div className="App">
      <UserDetails
        data = {state}
        onSubmit={handleSubmit}
        // rename props also
        dispatcher = {dataHandler}
      />
      <UserTable
        userData={state.data}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />

      <ReducerTodo/>
    </div>
  );
}

export default App;