import React, { useState, useEffect } from 'react'
import './SelectComponent.scss'

interface SelectOptions {
    label: string,
    value: any
}

interface SelectProps {
    options: SelectOptions[],
    value?: SelectOptions,
    selectOnChange: (value: SelectOptions | undefined) => void
}



const SelectComponent = ({ value, selectOnChange, options }: SelectProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [highlightIndex, setHighlightedIndex] = useState<number>()
    // useEffect(() => {
    //     if (isOpen) setHighlightedIndex(0)
    // }, [isOpen])
    const clearOption = () => {
        selectOnChange(undefined);
    }
    const selectOption = (option: SelectOptions) => {
        if (option !== value) selectOnChange(option);
    }
    const isOptionSelected = (option: SelectOptions) => {
        return option === value;
    }

    return (
        <div onBlur={() => setIsOpen(false)}
            onClick={() => setIsOpen(o => !o)} tabIndex={0} className="select-component-container">
            <span className="value">
                {value?.label}
            </span>
            {/* <button onClick={e => {
                e.stopPropagation()
                clearOption()
            }} className="clear-btn">
                &times;
            </button> */}
            <div className="divider">

            </div>
            <div className={isOpen ? "caret-open" : "caret"}>

            </div>
            <ul className={`options ${isOpen ? "show" : ""}`}>
                {options.map((option, index) => {
                    return (
                        <li onClick={e => {
                            e.stopPropagation()
                            selectOption(option)
                            setIsOpen(false)
                        }}
                            onMouseEnter={() => setHighlightedIndex(index)}
                            className={`option ${isOptionSelected(option) ? "selected" : ""}
                            ${index === highlightIndex ? "highlighted" : ""}
                            `}
                            key={option.value}>
                            {option.label}
                        </li>)
                })}
            </ul>
        </div>
    )


}

export default SelectComponent