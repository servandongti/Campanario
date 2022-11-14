import styles from '../styles/Home.module.css'

export const salones = {
  home: {
    title: 'El Campanario Eventos.',
    sub: 'Tu evento como lo soñaste',
    color: 'warning',
    colorTitle: styles.goldGradient,
    logoSrc: '/logos/homeLogo.svg',
    href: '/',
    description: `
    En Campanario Eventos tenemos como propósito brindarte las ventajas que marcarán la 
    diferencia en tu evento.
    `
  },
  elCampanario: {
    title: 'El Campanario',
    color: '$elCampanario',
    logoSrc: '/logos/campanario.svg',
    href: '/salones/el-campanario',
    description: `
      El ambiente de fiesta que tu estás buscando, lo encontrarás en salón EL CAMPANARIO, 
      con la amplitud de nuestras instalaciones, elegante escalera de presentación, 
      amplia pista de baile y bellamente decorado, este salón tiene una capacidad desde 300 hasta
      500 personas.
    `
  },
  misionDelCampanario: {
    title: 'Misión del Campanario',
    color: '$misionDelCampanario',
    logoSrc: '/logos/mision.svg',
    href: '/salones/mision-del-campanario',
    description: `
      Para que tu evento este envuelto en una cálida atmósfera, en cada pasaje de tu recepción con lo 
      más selecto de tus seres queridos y amistades. 
      Te ofrecemos nuestro salón MISION DEL CAMPANARIO elegantemente decorado donde te brindaremos 
      el servicio y atención que tu te mereces, éste espacio tiene capacidad desde 100 hasta 250 invitados.
    `
  },
  elGranCampanario: {
    title: 'El Gran Campanario',
    color: '$elGranCampanario',
    logoSrc: '/logos/gran-campanario.svg',
    href: '/salones/el-gran-campanario',
    description: `
      Tu evento lucirá perfecto enmarcado en nuestro salón EL GRAN CAMPANARIO, 
      elegantemente decorado este salón tiene una capacidad de hasta 800 personas.
    `
  },
}
