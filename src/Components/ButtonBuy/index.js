import React from 'react';
import { Button } from './styles';

export default function ButtonBuy({children, as, ...props}) {
    
    return (
        <Button as={as} className="button-buy" {...props}>
            {children}
        </Button>
    )
}
