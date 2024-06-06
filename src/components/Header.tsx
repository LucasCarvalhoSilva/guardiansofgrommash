import logo from "../assets/logo.png"

import styles from "./Header.module.css"

export function Header() {
    return(
        <div className={styles.container}>
            <div className={styles.logo}>
                <img className={styles.logo} src={logo} alt="Logo da guilda guardiões de grommash, a face de um lobo vermelho e um machado abaixo" />
            </div>
            <ul>
                <li className={styles.listWrapper}>
                    <a href="#about" className={styles.menuItem}>Sobre nós</a>
                    <a href="#recruitment" className={styles.menuItem}>Recrutamento</a>
                </li>
            </ul>
        </div>
    )
}