import React from "react";
import styles from "./About.module.css";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className={styles.container}>
          <h1>¡Bienvenido a mi perfil!</h1>
          <p>
            Soy Wendy Rius, nutrióloga y diseñadora multimedia con una profunda
            pasión por la programación. Después de enfrentar desafíos en mi
            carrera, encontré una inigualable oportunidad en el bootcamp de Soy
            Henry, donde estoy creciendo a nivel personal y profesional. Este es
            mi primer proyecto, y estoy emocionada por seguir aprendiendo y
            enfrentando nuevos retos en el mundo de la tecnología, el camino es largo pero agradable.
          </p>
        </div>
      </>
    );
  }
}

export default About;
