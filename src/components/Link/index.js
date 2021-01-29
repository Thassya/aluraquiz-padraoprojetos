//usando uma biblioteca interna do next e vai fazer o roteamento no modo 'spa' sem recarregar a pagina..
//brilhando 
import React from 'react';
import NextLink from 'next/link';

export default function Link({ children, href, ...props }){
    return(
        <NextLink href={href} passHref>
            <a {...props}>
                {children}
            </a>
        </NextLink>
    )

}