import React, {createContext} from "react";
export const ProdutoContext =  createContext();

export function ProdutoProdiver({ children }){
    
    return(
        <ProdutoContext.Provider>
            {children}
        </ProdutoContext.Provider>
    )
}