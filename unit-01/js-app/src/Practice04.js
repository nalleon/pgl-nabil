import React from "react";
import PropTypes from 'prop-types'

const Practice04 = (props) => {
    return (
            <>
            <h1>Sum:</h1>
            <p>La suma de {props.num1} y {props.num2} es: ({props.num1+props.num2})</p>
            </>
        );
    }
    Practice04.propTypes = {
            num1: PropTypes.number.isRequired,
            num2: PropTypes.number.isRequired
        }

export default Practice04;