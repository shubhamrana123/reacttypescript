import React, { Fragment } from 'react'
import { IInputProps } from '../../../types/common.types';

function Input(props: IInputProps) {
    const fields = props.fields;
    return (
        <Fragment>
            <label >{props.label}</label>
            <input className='form-control' type={props.type} {...props.register(props.controller, { required: fields.required, minLength: fields.minLength, maxLength: fields.maxLength })} />
            <br />
            {props.errors[props.controller] && <p className="text-danger">This field is required </p>}
        </Fragment>
    )
}

export default Input