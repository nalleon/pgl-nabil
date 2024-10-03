import React from "react";
import PropTypes from 'prop-types'


type Props = {
    num1?: number;
    num2?: number;
}

const Practice05 = (props: Props) => {
    return (
            <p>
                La suma de {props.num1 ?? 0} y {props.num2 ?? 0} es: 
                {(props.num1 ?? 0) + (props.num2 ?? 0)}
            </p>
        );
    }

export default Practice05;