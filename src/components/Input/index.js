import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputBase = styled.input`
    width: 100%;
    padding: 15px;
    border: 1px solid ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.contrastText};
    background-color: ${({theme}) => theme.colors.mainBg};
    border-radius: ${({theme}) => theme.borderRadius};
    outLine: 0;
    margin-bottom: 25px;
`;

export default function Input({onChange, placeholder, ...props }){
    return(
        <div>
            <InputBase 
            placeholder={placeholder}
            onChange={onChange}
            {...props}
            />
        </div>
    )
}

//ou
// export function Input(props){
//     return(
//         <div>
//             <InputBase 
//             placeholder={props.placeholder}
//             onChange={props.onChange} />
//         </div>
//     )
// }
Input.defaultProps ={
    value: '',
};

Input.defaultProps = {
    value: '',
};

Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
};