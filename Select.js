import styles from "./Select.module.css"
function Select ({ text, name, options, option, handleOnChange, value}){
    return(
        <div className={styles.form_control}>
            <label htmlFor="">{text}:</label>
           <select name={name} id={name}>
                <options>Selecione uma opção</options>
                {options.map(() => (
                    <options value={option.id} key={option.id}>
                        {option.name}
                    </options>
                ))}
           </select>
        </div>
    )
}
export default Select