import heroImage from "../assets/hero.png"

import styles from "./Hero.module.css"

export function Hero (){
    return (
        <div id="about" className={styles.container}>
            <div>
                <img src={heroImage} alt="Um orc verde com armaduras no ombro e cintura vermelhas " />
            </div>
            <div className={styles.heroWrapper}>
                <div>
                    <h2 className={styles.title}>Guardiões de Grommash</h2>
                    <p className={styles.text}>
                        Bem-vindo à guilda "Guardiões de Grommash"! Embora sejamos uma guilda nova,
                        nossa paixão pela aventura e pela camaradagem em Azeroth é infinita. Estamos
                        unidos por um objetivo comum: evoluir juntos e alcançar objetivos que antes
                        pareciam impossíveis.
                    </p>
                    <p className={styles.text}>
                        Queremos criar uma comunidade onde todos os membros se sintam valorizados, 
                        apoiados e incentivados a crescer. Acreditamos que, juntos, podemos superar 
                        qualquer desafio e alcançar grandes feitos em World of Warcraft.
                    </p>
                </div>
                <div>
                    <h3 className={styles.subtitle}>Nossos objetivos</h3>
                    <ul className={styles.list}>
                        <li>Construir uma comunidade forte e unida</li>
                        <li>Conquistar desafios de alto nível, incluindo raides míticas e Míticas+</li>
                        <li>Fomentar o crescimento e a progressão dos nossos membros</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}