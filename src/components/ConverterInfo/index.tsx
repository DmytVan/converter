import React from 'react';

interface ConverterInfoProps {
    value: number,
    children?: React.ReactNode;
}

function ConverterInfo(props: ConverterInfoProps) {

    const {value} = props;

    let info: React.ReactElement;

    if (isNaN(value)) {
        info = <p>Введите числовое значение</p>
    } else {
        if (value <= 0) {
            info = <p>Вода замерзнет</p>
        } else {
            info = <p>Вода не замерзнет</p>
        }
    }

    return info;
}

export default ConverterInfo;