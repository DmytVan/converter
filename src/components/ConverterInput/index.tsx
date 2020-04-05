import React from 'react';

const style = {
    padding: '5px 10px'
};

interface ConverterInputProps {
    type: string,
    value: number,
    handleChange: any,
    children?: React.ReactNode
}

const ConverterInput = React.forwardRef(({type, value, handleChange}: ConverterInputProps, ref: any) => {

    return (
        <p style={style}>
            <span>{`${type} : `}</span>
            <input ref={ref} name='input' type="text" value={value} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                handleChange({type, value: event.target.value})
            }}/>
        </p>
    )
})

export default ConverterInput;