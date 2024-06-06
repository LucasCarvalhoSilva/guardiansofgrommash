import { useState } from "react"
import styles from "./Recruitment.module.css"
import axios from 'axios';

interface FormData {
    nomePersonagem: string;
    classe: string;
    offSpecialization: string;
    contact: string;
    discord: string;
    bnet: string;
    mail: string;
}

export function Recruitment() {
    
    const [nickname, setNickname] = useState<string>("");
    const [playerClass, setPlayerClass] = useState<string>("");
    const [ofSpec, setOfSpec] = useState<string>("");
    const [contactBy, setContactBy] = useState<string>("");
    const [discord, setDiscord] = useState<string>("");
    const [bNet, setBNet] = useState<string>("");
    const [mail, setMail] = useState<string>("");    
    const [formData, setFormData] = useState<FormData>({
        nomePersonagem: '',
        classe: '',
        offSpecialization: '',
        contact: '',
        discord: '',
        bnet: '',
        mail: ''
    });

    const validateEmail = (email: string): boolean => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const sendSubscription = (event: Event) => {
        event.preventDefault()
        if(validateEmail(mail)){
            setFormData({
                nomePersonagem: nickname,
                classe: playerClass,
                offSpecialization: ofSpec,
                contact: contactBy,
                discord: discord,
                bnet: bNet,
                mail: mail
            })
    
            axios.post('https://formspree.io/f/xleqypqq', formData)
                .then(response => {
                    alert('Formulário enviado com sucesso!');
                    setFormData({
                        nomePersonagem: '',
                        classe: '',
                        offSpecialization: '',
                        contact: '',
                        discord: '',
                        bnet: '',
                        mail: ''
                    });
                    console.log(response)
                })
                .catch(error => {
                    alert('Ocorreu um erro ao enviar o formulário.');
                    console.log(error)
                })
                .finally(() => {
                    setFormData({
                        nomePersonagem: '',
                        classe: '',
                        offSpecialization: '',
                        contact: '',
                        discord: '',
                        bnet: '',
                        mail: ''
                    })
                    setNickname("")
                    setPlayerClass("")
                    setOfSpec("")
                    setContactBy("")
                    setDiscord("")
                    setBNet("")
                    setMail("")
                })
        } else {
            alert("Email invalido, insira um email válido")
        }
        
    }

    return (
        <div id="recruitment" className={styles.container}>
            <div>
                <h2 className={styles.title}>Junte-se aos guardiões de grommash!</h2>
                <p className={styles.text}>
                    Somos uma guilda da Horda focada em criar uma comunidade forte e unida, 
                    onde todos os membros podem evoluir juntos e alcançar objetivos que antes 
                    pareciam impossíveis. Se você está procurando um lugar para crescer, se 
                    divertir e enfrentar desafios de alto nível, você está no lugar certo!
                </p>
            </div>
            <div>
                <h2 className={styles.subtitle}>O que Oferecemos</h2>
                <ul className={styles.list}>
                    <li>Raides Regulares: Participe de raides míticas e outros conteúdos de alto nível.</li>
                    <li>Míticas+ e PvP: Grupos organizados para Míticas+ e eventos de PvP.</li>
                    <li>Eventos Sociais: Diversos eventos sociais e atividades para fortalecer a camaradagem.</li>
                    <li>Ambiente Inclusivo: Uma comunidade acolhedora e respeitosa para todos os jogadores.</li>
                </ul>
            </div>
            <div>
                <h2 className={styles.subtitle}>Como se Inscrever</h2>
                <p className={styles.text}>
                    Preencha o Formulário de Inscrição: Clique no link abaixo para acessar o formulário
                    de inscrição e fornecer as informações necessárias. Após o envio do formulário,
                    entraremos em contato para finalizarmos o recrutamento.
                </p>
            </div>
            <div>
                <form className={styles.formWrapper} onSubmit={sendSubscription}>
                    <fieldset className={styles.fieldSet}>
                        <legend className={styles.formTitle}>Formulário de Inscrição</legend>
                        <div className={styles.inputWrapper}>
                            <label htmlFor="nickname">Qual o seu nickname?</label>
                            <input className={styles.inputs} id="nickname" type="text" placeholder="nickname..." value={nickname} onChange={(e) => setNickname(e.target.value)}/>
                        </div>
                        <div className={styles.inputWrapper}>
                            <label htmlFor="playerClass">Qual a sua classe?</label>
                            <input className={styles.inputs} id="playerClass" type="text" placeholder="druida" value={playerClass} onChange={(e) => setPlayerClass(e.target.value)}/>
                        </div>
                        <div className={styles.inputWrapper}>
                            <label htmlFor="ofSpec">Possui offspec? Se sim, qual?</label>
                            <input className={styles.inputs} id="ofSpec" type="text" placeholder="ex. Sim, tank" value={ofSpec} onChange={(e) => setOfSpec(e.target.value)}/>
                        </div>
                        <div className={styles.inputWrapper}>
                            <label htmlFor="ContactBy">Como prefere ser contactado?</label>
                            <input className={styles.inputs} id="contactBy" type="text" placeholder="Discord" value={contactBy} onChange={(e) => setContactBy(e.target.value)}/>
                        </div>
                        <div className={styles.inputWrapper}>
                            <label htmlFor="Discord">Qual o seu discord?</label>
                            <input className={styles.inputs} id="Discord" type="text" placeholder="discord#0000" value={discord} onChange={(e) => setDiscord(e.target.value)}/>
                        </div>
                        <div className={styles.inputWrapper}>
                            <label htmlFor="bNet">Qual o seu battle.net?</label>
                            <input className={styles.inputs} id="bNet" type="text" placeholder="bnet#0000" value={bNet} onChange={(e) => setBNet(e.target.value)}/>
                        </div>
                        <div className={styles.inputWrapper}>
                            <label htmlFor="mail">Qual o seu email?</label>
                            <input className={styles.inputs} id="mail" type="text" placeholder="email@gmail.com" value={mail} onChange={(e) => setMail(e.target.value)}/>
                        </div>
                    </fieldset>
                    <button className={styles.button} type="submit">Inscrever-se</button>
                </form>
            </div>
        </div>
    )
}