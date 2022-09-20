import styles from './Homee.module.css'
import savings from './../img/savings.svg'
import LinkButton from './LinkButton.js'
function Homee () {
    return(
        <section className={styles.homee_conteiner}>
            <h1>
                Bem-vindo ao <span>Costs</span>
            </h1>
            <h3>Comece a gerenciar seu projeto agora mesmo!</h3>
            <LinkButton to="/newproject" text="Criar Projeto"/>
            <img src={savings} alt="Costs"/>
        </section>
    )
}
export default Homee