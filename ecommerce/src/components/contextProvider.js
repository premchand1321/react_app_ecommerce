import React, {createContext, useState, useContext} from 'react';

export const MyShoppingContext = createContext({});
export function useShoppingCart() {
    return useContext(MyShoppingContext)
  }

export const MyShoppingContextProvider = ({children}) => {
	const [count, setCount] = useState([]);


	return (
		<MyShoppingContext.Provider value={{count, setCount}}>
			{children}
		</MyShoppingContext.Provider>
	)
}