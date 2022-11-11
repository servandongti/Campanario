import styles from '../styles/Home.module.css'

interface IDescription {
  home: {
    title: string;
    sub: string;
    desc: string;
    colorTitle?: string;
  }
  campanario: {
    title: string;
    desc: string;
  }
  misionDelCampanario: {
    title: string;
    desc: string;
  }
  elGranCampanario: {
    title: string;
    desc: string;
  }
}

export const descs: IDescription = {
  home: {
    title: 'El Campanario Eventos.',
    sub: 'Tu evento como lo soñaste',
    desc: 'En Campanario Eventos tenemos como propósito brindarte las ventajas que marcarán la diferencia en tu evento.',
    colorTitle: styles.goldGradient
  },

  campanario: {
    title: 'El Campanario.',
    desc: `El ambiente de fiesta que tu estás buscando, lo encontrarás en salón EL CAMPANARIO, 
      con la amplitud de nuestras instalaciones, elegante escalera de presentación, 
      amplia pista de baile y bellamente decorado, este salón tiene una capacidad desde 300 hasta 500 personas. 
    `
  },

  misionDelCampanario: {
    title: 'Misión del Campanario.',
    desc: `
      Para que tu evento este envuelto en una cálida atmósfera, en cada pasaje de tu recepción con lo más selecto 
      de tus seres queridos y amistades. 
      Te ofrecemos nuestro salón MISION DEL CAMPANARIO elegantemente decorado donde te brindaremos el servicio y atención que tu te mereces, éste espacio tiene capacidad desde 100 hasta 250 invitados.
    `
  },

  elGranCampanario: {
    title: 'El Gran Campanario.',
    desc: `Tu evento lucirá perfecto enmarcado en nuestro salón EL GRAN CAMPANARIO, 
          elegantemente decorado este salón tiene una capacidad de hasta 800 personas.`
  },


}
