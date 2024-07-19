import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import Portfolio from '../portfolio/portfolio.json'
import { PortfolioItemType } from '../portfolio/portfolioTypes'
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'fr',
    resources: {
      fr: {
        translation: {
          h1: 'Portfolio de Luc Maggiotto',
          logo: {
            alt: 'Logo du site web'
          },
          navitems: {
            nav1: 'À propos',
            nav2: 'Portfolio',
            nav3: 'Contact',
            nav4: 'Mon CV'
          },
          burgerMenu: {
            open: 'ouvrir le menu de navigation',
            close: 'fermer le menu de navigation'
          },
          toggler: {
            lightmode: 'Changer en mode sombre',
            darkmode: 'Changer en mode clair'
          },
          language: 'français',
          error: {
            error: 'Erreur',
            errorMsg1: 'Oups! La page que ',
            errorMsg2: ' vous demandez n\'existe pas.',
            errorBackLink: 'Retourner sur la page d’accueil'
          },
          section1: {
            altphoto: 'Photo de Luc Maggiotto',
            title: 'Luc Maggiotto',
            subtitle: 'Développeur Full-Stack',
            content1: 'Il n\'est jamais trop tard pour coder ses rêves :',
            content2: 'comment j\'ai transformé ma passion de toujours en moteur de ma nouvelle vie professionnelle.',
            contactme: 'Me contacter',
            skills: 'Mes compétences :',
            skillItems: {
              front: 'Frontend',
              back: 'Backend',
              tools: 'Outils',
            }  
          },
          section2: {
            text1: 'Bonjour ! Je m\'appelle Luc Maggiotto et j\'ai très exactement ',
            text1_2: '.',
            text2: 'Quand j\'étais enfant à la fin des années 80, j\'ai eu entre les mains un ',
            text2_link: 'https://fr.wikipedia.org/wiki/Oric#Oric_Atmos',
            text2_linkText: 'Oric',
            text2_2: '.',
            text3: 'Un écran noir avec un curseur qui clignote, ce n\'est pas très amusant, alors j\'ai commencé à recopier des lignes de code tirées de magazines, et puis j\'ai essayé de comprendre ce que je tapais.',
            text4: 'C\'est comme ça que j\'ai appris les bases de l\'algorithmique, grâce au ',
            text4_link: 'https://fr.wikipedia.org/wiki/Basic_(langage)',
            text4_linkText : 'Basic',
            text4_2 : '.',
            text5: 'Dans les années 90, j\'ai récupéré mon premier vrai PC équipé d\'un ',
            text5_link: 'https://fr.wikipedia.org/wiki/Intel_80286',
            text5_linkText: 'processeur 80286',
            text5_2: '.',
            text6: ' : j\'ai alors pu utiliser un langage plus abouti et coder en ',
            text6_link: 'https://fr.wikipedia.org/wiki/Turbo_Pascal',
            text6_linkText: 'Turbo Pascal 7',
            text6_2: '.',
            text7: 'Par la suite, j\'ai eu différents ordinateurs de plus en plus puissants, et j\'ai eu l\'occasion de m\'initier à ',
            text7_link: 'https://fr.wikipedia.org/wiki/Visual_Basic',
            text7_linkText: 'Visual Basic',
            text7_2: ' entre autres.',
            text8: 'Plus récemment, j\'ai fait l\'acquisition d\'un ',
            text8_link: 'https://fr.wikipedia.org/wiki/Raspberry_Pi',
            text8_linkText : 'Raspberry Pi',
            text9: ' et j\'ai donc naturellement appris ',
            text9_link: 'https://fr.wikipedia.org/wiki/Python_(langage)',
            text9_linkText: 'Python',
            text9_2: '.',
            text9_3: 'Ce qui était au départ un loisir est devenu au fil du temps une passion dévorante.',
            text10: 'Alors après deux décennies d\'une carrière riche et variée,  j\'ai décidé de prendre un nouveau départ et de m\'y consacrer à plein temps.',
            text11: 'Dans le cadre de ma reconversion, j\'ai suivi un programme complet de développement web, maîtrisant les fondamentaux ',
            text11_link1: 'https://fr.wikipedia.org/wiki/HTML5',
            text11_linkText1: 'HTML',
            text11_2: ', ',
            text11_link2 : 'https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade',
            text11_linkText2: 'CSS',
            text11_3: ' et ',
            text11_link3: 'https://fr.wikipedia.org/wiki/JavaScript',
            text11_linkText3: 'JavaScript',
            text11_4: ', et approfondissant mes connaissances avec ',
            text11_link4: 'https://fr.wikipedia.org/wiki/React',
            text11_linkText4 : 'React',
            text11_5: ' et ',
            text11_link5: 'https://fr.wikipedia.org/wiki/Node.js',
            text11_linkText5: 'Node.js',                                                        
            text11_6: '.',                                    
            text12: 'Me voilà désormais prêt à démarrer une nouvelle vie !'
          },
          section3: {
            learnMore: 'en savoir plus →',
            button: 'Voir plus...',
          },
          section4: {
            text1: 'N\'hésitez pas à me contacter par mail à l\'adresse ',
            text2: ' ou via ce formulaire :',
            contactForm : {
              lastname: 'Nom',
              firstname: 'Prénom',
              email: 'Email',
              subject: 'Sujet',
              message: 'Message',
              send: 'Envoyer'
            }
          },
          section5: {
            download: 'Télécharger mon CV'
          },
          portfolio: {
            filters : {
              frontend: 'Frontend',
              backend: 'Backend',
              all: "Tous"
            },
            carouselAltButton: {
              previous: 'précédent',
              next: 'suivant'
            },
            description: "Description :",
            skills: 'Compétences acquises :',
            technos: 'Technologies utilisées :',
            link: 'Lien vers le repo :'
          },
          counter: {
            years: {
              singular: 'an',
              plural: 'ans'
            },
            months: {
              singular: 'mois',
              plural: 'mois'
            },
            days: {
              singular: 'jour',
              plural: 'jours'
            },
            hours: {
              singular: 'heure',
              plural: 'heures'
            },
            minutes: {
              singular: 'minute',
              plural: 'minutes'
            },
            seconds: {
              singular: 'seconde',
              plural: 'secondes'
            },
            and: ' et '
          },
          footer: {
            text1: 'Réalisé par ',
            text2: ' en utilisant React avec TypeScript - 2024'
          }
        }
      },
      en: {
        translation: {
          h1: 'Luc Maggiotto Portfolio',
          logo: {
            alt: 'Website logo'
          },
          navitems: {
            nav1: 'About me',
            nav2: 'Portfolio',
            nav3: 'Contact',
            nav4: 'My resume'
          },
          burgerMenu: {
            open: 'open navigation menu',
            close: 'close navigation menu'
          },
          toggler: {
            lightmode: 'Toggle to dark theme',
            darkmode: 'Toggle to light theme'
          },
          language: 'english',
          error: {
            error: 'Error',
            errorMsg1: 'Oops! The page you\'re ',
            errorMsg2: ' asking for doesn\'t exist.',
            errorBackLink: 'Back to main page'
          },
          section1: {
            altphoto: 'Picture of Luc Maggiotto',
            title: 'Luc Maggiotto',
            subtitle: 'Full-Stack Developer',
            content1: 'It\'s never too late to code your dreams:',
            content2: 'how I transformed my lifelong passion into the driving force of my new professional life.',
            contactme: 'Contact me',
            skills: 'My skills:',
            skillItems: {
              front: 'Frontend',
              back: 'Backend',
              tools: 'Tools',
            }            
          },
          section2: {
            text1: 'Hello! My name is Luc Maggiotto and I am exactly ',
            text1_2: ' old.',
            text2: 'When I was a kid in the late 80s, I got my hands on an ',
            text2_link: 'https://en.wikipedia.org/wiki/Oric_(computer)#Oric_Atmos',
            text2_2: '.',
            text3: 'A black screen with a blinking cursor isn\'t much fun, so I started copying lines of code from magazines, and then trying to figure out what I was typing.',
            text4: 'This is how I learned the basics of algorithms, by coding in ',
            text4_link: 'https://en.wikipedia.org/wiki/BASIC',
            text4_linkText : 'BASIC',
            text4_2: '.',
            text5: 'In the 90s I got my first real PC with a ',
            text5_link: 'https://en.wikipedia.org/wiki/Intel_80286',
            text5_linkText: '80286 processor',
            text6: ' : I was then able to use more advanced language and code in ',
            text6_link: 'https://en.wikipedia.org/wiki/Turbo_Pascal#Version_7.0',
            text6_linkText: 'Turbo Pascal 7',
            text6_2: '.',
            text7: 'Later, I had different computers of increasing power, and I had the opportunity to learn ',
            text7_link: 'https://en.wikipedia.org/wiki/Visual_Basic_(classic)',
            text7_linkText: 'Visual Basic',
            text7_2: ', among other things.',
            text8: 'More recently, I acquired a ',
            text8_linkText : 'Raspberry Pi',
            text8_link: 'https://en.wikipedia.org/wiki/Raspberry_Pi',
            text9: ' and so I naturally learned ',
            text9_link: 'https://en.wikipedia.org/wiki/Python_(programming_language)',
            text9_linkText: 'Python',
            text9_2: '.',
            text9_3: 'What started as a hobby has over time become a consuming passion.',
            text10: 'So after two decades of a rich and varied career, I decided to make a fresh start and devote myself to it full time.',
            text11: 'As part of my retraining, I followed a complete web development program, mastering the fundamentals ',
            text11_link1: 'https://en.wikipedia.org/wiki/HTML5',
            text11_linkText1: 'HTML',
            text11_2: ', ',
            text11_link2 : 'https://en.wikipedia.org/wiki/CSS',
            text11_linkText2: 'CSS',
            text11_3: ' and ',
            text11_link3: 'https://en.wikipedia.org/wiki/JavaScript',
            text11_linkText3: 'JavaScript',
            text11_4: ', and deepening my knowledge with ',
            text11_link4: 'https://en.wikipedia.org/wiki/React_(JavaScript_library)',
            text11_linkText4 : 'React',
            text11_5: ' and ',
            text11_link5: 'https://en.wikipedia.org/wiki/Node.js',
            text11_linkText5: 'Node.js',
            text11_6: '.',
            text12: 'Now I\'m ready to start a new life!'
          },
          section3 : {
            learnMore: 'learn more →',
            button: 'See more...'
          },
          section4: {
            text1: 'Don\'t hesitate to contact me by email at ',
            text2: ' or through this form:',
            contactForm : {
              lastname: 'Last name',
              firstname: 'First name',
              email: 'E-mail',
              subject: 'Subject',
              message: 'Message',
              send: 'Send'
            }
          },
          section5: {
            download: 'Download my resume'
          },
          portfolio: {
            filters : {
              frontend: 'Frontend',
              backend: 'Backend',
              all: "All"
            },
            carouselAltButton: {
              previous: 'previous',
              next: 'next'
            },
            description: 'Description:',
            skills: 'Acquired skills:',
            technos: 'Used technologies:',
            link: 'Link to the repo:'
          },
          counter: {
            years: {
              singular: 'year',
              plural: 'years'
            },
            months: {
              singular: 'month',
              plural: 'months'
            },
            days: {
              singular: 'day',
              plural: 'days'
            },
            hours: {
              singular: 'hour',
              plural: 'hours'
            },
            minutes: {
              singular: 'minute',
              plural: 'minutes'
            },
            seconds: {
              singular: 'second',
              plural: 'seconds'
            },
            and: ' and '
          },
          footer: {
            text1: 'Made by ',
            text2: ' using React with TypeScript - 2024'
          }
        }
      }
    }
  })
  
  type addTranslationsTypes = {
    portfolioItem: PortfolioItemType,
    lang: string
  }

  Portfolio.forEach((item: PortfolioItemType) => {
    const addTranslations = ({ portfolioItem, lang }: addTranslationsTypes) => {
      const translations = portfolioItem[lang] as Record<string, any>
      for (const [key, value] of Object.entries(translations)) {
        if (Array.isArray(value)) {
          value.forEach((item, index) => {
            i18n.addResource(lang, 'translation', `portfolio.${portfolioItem.id}.${key}.${index}`, item)
          })
        } else {
          i18n.addResource(lang, 'translation', `portfolio.${portfolioItem.id}.${key}`, value)
        }
      }
    }
    addTranslations({ portfolioItem: item, lang: 'fr'})
    addTranslations({ portfolioItem: item, lang: 'en'})
  })

export default i18n

