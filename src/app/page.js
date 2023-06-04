import TypingAnimation from './components/TypingAnimation';
import styles from './styles/Home.module.css';

export default function Home() {
  const typingOptions = {
    strings: ['Prazer, me chamo Leonardo Santos, sou desenvolvedor'
    + 'Full-Stack em Formação, <br>'
    + 'trabalho desenvolvendo soluções customizadas para o usuário,'
    + 'com base em suas necessidades e desejos <br>'
    + 'sou apaixonado por programação e como ela pode melhorar a vida dos usuários.'],
    typeSpeed: 50,
    loop: false,
    smartBackspace: false,
  };

  return (
    <main className={ styles.main }>
      <section className={ styles.sectionWelcome }>
        <span>
          Seja Bem Vindo ao meu PortFólio!
        </span>
        <TypingAnimation options={ typingOptions } />
      </section>
      <section>
        <a href="/aboutMe">Gostaria de conhecer minhas Skills?</a>
        <a href="/projects">Deseja conhecer meus Projetos?</a>
        <a href="/contact">Vamos conversar sobre sua Necessidade?</a>
      </section>
    </main>
  );
}
