import React from 'react'

function TextArea(props: any) {
    return (
        <>
            <label className='form-control'>{props.label}</label> <br />
            <textarea className='form-control' name="" id="" cols={props.cols} rows={props.rows}></textarea>
        </>
    )
}

export default TextArea