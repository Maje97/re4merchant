import { useState, useReducer } from "react";

export default function useCartReducer() {
    const [amount, setAmount] = useState([]);

    const initialState = {
        cartItems: []
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "ADD_ITEM":
                    return { ...state, cartItems: [...state, action.payload]};
            case "DECREASE_ITEM":
                if(amount[action.id]>1) {
                    setAmount(amount[action.id]-=1);
                    return state;
                } else {
                    setAmount(amount[action.id]=0);
                    return { ...state, cartItems: [...state.filter(item => item.id !== action.payload)]};
                };
            case "DELETE_ITEM": 
                setAmount(amount[action.id]=0);
                return { ...state, cartItems: [...state.filter(item => item.id !== action.payload)]};
            default:
                return state;
        }
    }
    
    const [cart, dispatch] = useReducer(reducer, initialState);

    const HandleAdd = (product) => {
        dispatch({ type: "ADD_ITEM", payload: product });
    }

    const HandleDecrease = (id) => {
        dispatch({ type: "DECREASE_ITEM", payload: id })
    }

    const HandleDelete = (id) => {
        dispatch({ type: "DELETE_ITEM", payload: id })
    }

    return ({ amount, cart, dispatch, HandleAdd, HandleDecrease, HandleDelete });
}