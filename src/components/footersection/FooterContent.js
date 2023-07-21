import Visa from '../../assests/icons/Visa.png'
import Mastercard from '../../assests/icons/Mastercard.png'
import Bitcoin from '../../assests/icons/Bitcoin.png'
import Facebook from '../../assests/icons/facebook.png'
import Instagram from '../../assests/icons/instagram.png'
import Linkedin from '../../assests/icons/linkedin.png'
import Twitter from '../../assests/icons/twitter.png'
import Youtube from '../../assests/icons/youtube.png'
import logo2 from '../../assests/icons/logo2.png'

export const FooterContent = {
  logo: {
    icon: logo2,
    label: 'COINOPUS'
  },
  QuickLink: {
    header: 'Quick Link',
    link: [
      'Home',
      'Products',
      'About',
      'Features',
      'Contact'
    ]
  },
  Resources: {
    header: 'Resources',
    link: [
      'Download Whitepapper',
      'Smart Token',
      'Blockchain Explorer',
      'Crypto API',
      'Interest'
    ]
  },
  Payments: {
    header: 'We accept following payment systems',
    method: [
      Visa,
      Mastercard,
      Bitcoin
    ]
  },
  Social: [
    Facebook,
    Instagram,
    Youtube,
    Twitter,
    Linkedin
  ],
  Copyright: '©2023 COINOPUS. All rights reserved'
}