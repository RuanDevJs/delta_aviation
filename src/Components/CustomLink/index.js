import React from 'react';
import "./style.css";

export default function CustomLink({ children, href="#", ...props }) {
    return (
        <a className="button" href={href} {...props}>
            {children}
        </a>
    )
}
