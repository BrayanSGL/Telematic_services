import styles from './style.module.css';

export const StartView = () => {
  return (
    <div className={styles.body}>
        <div className={styles.container}>
        <h1 className={styles.h1}>¡Perreo Intenso de Bienvenida!</h1>
        <p>Prepárate para una experiencia única de energía y diversión.</p>
        <a href="#" class="btn">Empezar el Perreo</a>
    </div>
    </div>
  );
}
