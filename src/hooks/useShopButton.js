import { useContext } from "react";
import { CartUpdater } from "../App.js"

function useHandleAdd (product) {
    const { dispatch } = useContext(CartUpdater);
    dispatch({ type: "ADD_ITEM", payload: product });
}

function useHandleDecrease(id) {
    const { dispatch } = useContext(CartUpdater);
    dispatch({ type: "DECREASE_ITEM", payload: id });
}

function useHandleDelete(id) {
    const { dispatch } = useContext(CartUpdater);
    dispatch({ type: "DELETE_ITEM", payload: id });
}

export {useHandleAdd, useHandleDecrease, useHandleDelete};