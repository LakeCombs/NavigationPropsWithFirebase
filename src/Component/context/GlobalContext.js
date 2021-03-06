import React, { useState, useReducer, createContext } from "react";
import { AppReducer } from "./AppReducer";

const initialState = {
	student: [
		{ name: "ola", id: 1 },
		{ name: "lakes", id: 2 }
	]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	const AddingStudent = name => {
		dispatch({
			type: "ADD_VALUE",
			payload: state.student
		});
	};

	return (
		<GlobalContext.Provider value={state.students}>
			{children}
		</GlobalContext.Provider>
	);
};
