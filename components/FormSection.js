import React from 'react';
import styles from '../styles/Home.module.css';

function FormSection() {
  return (
    <section className={styles.form__section}>
        <div className={styles.form__colOne}>
            <h1>Curso de liderança e vendas</h1>
            <p>Conheça a formação que faz sucesso nos Estados Unidos e agora no Brasil.</p>
            <ul>
                <li><span>//</span> Forme líderes em vez de gestores e mude o perfil da sua empresa.</li>
                <li><span>//</span> Desenvolva nos seus gestores suas habilidades de liderança.</li>
                <li><span>//</span> Trabalhe neles sua inteligência emocional para serem grandes líderes</li>
            </ul>
        </div>
        <div className={styles.form__colTwo}>
            <form>
                <div>
                    <label for="Name">Seu Nome</label>
                    <input id="Name" required/>
                </div>
                <div>
                    <label for="Email">E-mail corporativo</label>
                    <input id="Email" required/>
                </div>
                <div>
                    <label for="Phone">Telefone</label>
                    <input id="Phone" required/>
                </div>
                <div>
                    <label for="Company">Nome da Empresa</label>
                    <input id="Company" required/>
                </div>
                <div className={styles.form__colTwo__checkbox}>
                    <input type="checkbox" required/>
                    <label>Estou ciente que o treinamento é destinado apenas para empresas , com no mínimo 5 participantes</label>
                </div>
                <button>Enviar</button>
            </form>
        </div>
    </section>
  )
}

export default FormSection