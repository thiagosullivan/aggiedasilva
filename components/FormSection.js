import React, { useState } from 'react';
import toast from 'react-hot-toast';
import MaskedInput  from 'react-input-mask';
import { sendContactMail } from '../services/sendMail';
import styles from '../styles/Home.module.css';
import Loading from './Loading';

function FormSection() {

    const [ nome, setNome ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ company, setCompany ] = useState('');
    const [ loading, setLoading ] = useState(false);

    console.log(nome, email, phone, company)

    async function handleSubmit(event){
        event.preventDefault();
    
        if(!nome || !email || !phone || !company){
          toast('Preencha todos os campos para enviar sua mensagem!', {
            style: {
              background: '#D45D5D',
              color: '#ffffff',
            }
          });
    
          return;
        }
    
        try {
          setLoading(true)
          await sendContactMail(nome, email, phone, company);
          setNome('');
          setEmail('');
          setPhone('');
          setCompany('');
          toast('Formulário enviado com sucesso!', {
            style: {
              background: '#6fd45d',
              color: '#ffffff'
            }
          });
        } catch {
          toast('Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente!', {
            style: {
              background: '#D45D5D',
              color: '#ffffff'
            }
          });
        } finally {
          // router.push('/obrigado')
          setLoading(false)
        }
      }

  return (
    <section className={styles.form__section} id="contato">
        <div className={styles.form__colOne}>
            <h1>Curso de liderança e vendas</h1>
            <p>Conheça a formação que faz sucesso nos Estados Unidos e agora no Brasil.</p>
            <ul>
                <li><span>&#47;&#47;</span> Forme líderes em vez de gestores e mude o perfil da sua empresa.</li>
                <li><span>&#47;&#47;</span> Desenvolva nos seus gestores suas habilidades de liderança.</li>
                <li><span>&#47;&#47;</span> Trabalhe neles sua inteligência emocional para serem grandes líderes</li>
            </ul>
        </div>
        <div className={styles.form__colTwo}>
            { loading ? <Loading /> : ''}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Name">Seu Nome</label>
                    <input
                        id="Name"                        
                        type="text"
                        onChange={({target}) => setNome(target.value)}
                        value={nome}
                    />
                </div>
                <div>
                    <label htmlFor="Email">E-mail corporativo</label>
                    <input
                        id="Email"                        
                        type="email"
                        onChange={({target}) => setEmail(target.value)}
                        value={email}
                    />
                </div>
                <div>
                    <label htmlFor="Phone">Telefone</label>
                    <MaskedInput
                        id="Phone"
                        mask="(99) 99999-9999"
                        type='tel'
                        onChange={({target}) => setPhone(target.value)}
                        value={phone}
                    />
                </div>
                <div>
                    <label htmlFor="Company">Nome da Empresa</label>
                    <input
                        id="Company"                        
                        type="text"
                        onChange={({target}) => setCompany(target.value)}
                        value={company}
                    />
                </div>
                <div className={styles.form__colTwo__checkbox}>
                    <input type="checkbox" required/>
                    <label>Estou ciente que o treinamento é destinado apenas para empresas , com no mínimo 5 participantes</label>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    </section>
  )
}

export default FormSection