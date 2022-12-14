import {useState, useEffect} from 'react'
import Input from '../form/Input.js'
import Select from '../form/Select.js'
import styles from "./ProjectForm.module.css"
import SubmitButton from "../form/SubmitButton.js"
function ProjectForm (btnText){
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch ("http://localhost:5000/categories",{
            method: "GET",
            headers: {
            'Content-Type': 'application/json'
             },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((err) => console.log(err))
    }, [])

    return(
        <form className={styles.form}>
            <Input
                type= "text"
                text= "Nome do Projeto:"
                name= "name"
                placeholder = "Insira o nome do projeto"
            />
            <Input
                type= "number"
                text= "Orçamento do Projeto:"
                name= "budget"
                placeholder = "Insira o orçamento total"
            />
            <Select name="category.id" text="Selecione a categoria" options={categories}/>
            <SubmitButton text={btnText}/>
        </form>
    )
}
export default ProjectForm