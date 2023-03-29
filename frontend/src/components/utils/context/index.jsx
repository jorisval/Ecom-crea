import { useState, createContext } from 'react';

export const HeaderContext = createContext();
export const HeaderProvider = ({children}) => {
    const [activePage, setActivePage] = useState('');
    return (
        <HeaderContext.Provider value={{activePage, setActivePage}}>
            {children}
        </HeaderContext.Provider>
    );
};

