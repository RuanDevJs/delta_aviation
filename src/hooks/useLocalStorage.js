import React, { useMemo } from 'react'

export default function useLocalStorage(valueToGet) {

    const value = useMemo(() => {
        const getItem = localStorage.getItem(valueToGet);
        if(getItem){
            return getItem;
        }else{
            return null;;
        }
    }, [valueToGet]);

    return value;
}
