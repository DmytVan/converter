import React, {useState, useRef, useEffect} from 'react';
import ConverterInput from '../ConverterInput';
import ConverterInfo from '../ConverterInfo'


export default function () {
    const [lastEnteredValue, setValue] = useState({type: 'c', value: 0});
    const input = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if(input && input.current) {
            input.current.focus();
        }
    }, [])

    return (
        <div>
            <ConverterInput ref={input} type='c'
                            value={lastEnteredValue.type === 'c' ?
                                lastEnteredValue.value :
                                +((lastEnteredValue.value - 32) / 1.8).toFixed(2)}
                            handleChange={setValue}/>
            <ConverterInput type='f'
                            value={lastEnteredValue.type === 'c' ?
                                +(lastEnteredValue.value * 1.8 + 32).toFixed(2) :
                                lastEnteredValue.value}
                            handleChange={setValue}/>
            <ConverterInfo  value={lastEnteredValue.type === 'c' ?
                lastEnteredValue.value :
                (+lastEnteredValue.value - 32) / 1.8} />
        </div>
    )
}