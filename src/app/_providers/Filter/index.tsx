'use client'

import { ReactNode, createContext, useContext, useState } from 'react';

export const INTITIAL_FILTER_DATA ={
    categoryFilters: [],
    setCategoryFilters: () => [],
    sort: '',
    setSort: () => '',
}

const FilterContext = createContext(INTITIAL_FILTER_DATA);
export const FilterProvider = ({ children }: {children: React.ReactNode}) =>{
    const [categoryFilters, setCategoryFilters] = useState([]);
    const [sort, setSort] = useState('-createdAt');
    
    return(
        <FilterContext.Provider 
        value={{
            categoryFilters,
            setCategoryFilters,
            sort,
            setSort,
        }}
    >
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => useContext(FilterContext)

