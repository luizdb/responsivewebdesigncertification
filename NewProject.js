import ProjectForm from './ProjectForm.js'
import styles from './NewProject.module.css'
function NewProject () {
    return(
        <div className={styles.newproject_conteiner}>
            <h1>Criar Projeto</h1>
            <h3>Crie seus projetos para depois adicionar os serviços</h3>
            <ProjectForm btnText="Criar Projeto"/>
        </div>
    )
}
export default NewProject