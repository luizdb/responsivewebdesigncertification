import {Outlet} from "react-router-dom"
import styles from "./Conteiner.module.css"
function Conteiner(props){
    console.log(styles[props.customClass])
    return(
        <div className={`${styles.conteiner} ${styles[props.customClass]}`}>
            <Outlet/>
        </div>
    )
}
export default Conteiner
