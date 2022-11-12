import React from 'react'

import styles from "../styles/components/FormElements.module.css"

function FormElements({ element = 'text', label, name, placeholder, readOnly, options = [], value = '', onChange = () => { }, rows }) {
    if (element !== 'textarea' && element !== 'select') {
        return (
            <Input
                type={element}
                label={label}
                name={name}
                placeholder={placeholder}
                readOnly={readOnly}
                value={value}
                onChange={onChange} />
        )
    } else if (element === 'textarea') {
        return (
            <Textarea
                label={label}
                name={name}
                placeholder={placeholder}
                readOnly={readOnly}
                value={value}
                onChange={onChange}
                rows={rows}
            />
        )
    } else if (element === 'select') {
        return (
            <Select
                options={options}
                label={label}
                name={name}
                placeholder={placeholder}
                readOnly={readOnly}
                value={value}
                onChange={onChange} />
        )
    }
}

export default FormElements


export const Input = ({ type = 'text', label, name, placeholder, readOnly, value, onChange }) => {
    return (
        <div className={styles.profile__input}>
            <label>{label}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                readOnly={readOnly}
                disabled={readOnly}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}


export const Textarea = ({ label, name, placeholder, readOnly, value, onChange, rows }) => {
    return (
        <div className={styles.profile__input}>
            <label>{label}</label>
            <textarea
                name={name}
                placeholder={placeholder}
                readOnly={readOnly}
                disabled={readOnly}
                value={value}
                onChange={onChange}
                rows={rows}
            ></textarea >
        </div>
    )
}


export const Select = ({ options = [], label, name, placeholder, readOnly, value, onChange }) => {
    return (
        <div className={styles.profile__input}>
            <label>{label}</label>
            <select
                name={name}
                readOnly={readOnly}
                disabled={readOnly}
                value={value}
                onChange={onChange}
            >
                <option value="">{placeholder}</option>
                {options.map((o, index) => <option value={o?.value} key={index}>{o?.title}</option>)}
            </select >
        </div>
    )
}