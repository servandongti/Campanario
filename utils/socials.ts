export interface ISocial {
  name: string;
  url: string;
  icon: string;
}

export const socials: ISocial[] = [
  {
    name: 'WhatsApp',
    url: 'https://api.whatsapp.com/send?phone=5218116605609&text=Me%20interesa%20informaci%C3%B3n%20del%20Sal%C3%B3n.%0A%0AMi%20Nombre%20es%20',
    icon: '/icons/whatsapp.svg'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/elcampanarioapodaca/?hl=es-la',
    icon: '/icons/instagram.svg'
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/saloneselcampanarioeventos/',
    icon: '/icons/facebook.svg'
  },
]
