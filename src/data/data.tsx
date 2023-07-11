import { 
    faGithub,
    faLinkedin, 
    faTwitter,
    faInstagram,
    faMedium,
    faWordpress
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const navLinks = [
    {
      title: "Home",
      url: "/"
    },
    {
      title: "About",
      url: "/about"
    },
    {
      title: "Projects",
      url: "/projects"
    },
    {
      title: "Blog",
      url: "https://ronnyml.wordpress.com/blog/"
    }
]
  
const socialIcons = [
    {
        title: 'GitHub',
        url: 'https://github.com/ronnyml',
        icon: faGithub
    },
    {
        title: 'Linkedin',
        url: 'https://www.linkedin.com/in/ronnyml',
        icon: faLinkedin
    },
    {
        title: 'Twitter',
        url: 'https://twitter.com/ronnyml',
        icon: faTwitter
    },
    {
        title: 'Instagram',
        url: 'https://instagram.com/ronny_ml',
        icon: faInstagram
    },
    {
        title: 'Medium',
        url: 'https://medium.com/@ronnyml',
        icon: faMedium
    },
    {
        title: 'Wordpress',
        url: 'https://ronnyml.wordpress.com/blog/',
        icon: faWordpress
    },
    {
        title: 'Envelope',
        url: 'mailto:ronnycontacto@gmail.com',
        icon: faEnvelope
    }
]

const projects = [
    {
        title: "Python Screenshot Generator",
        description: "Django app to generate screenshots from a specified URL.",
        image: "python_screenshot_generator.png",
        github: "python-screenshot-generator",
        url: ""
    },
    {
        title: "playmind-py",
        description: "Python command line game to practice your Math skills.",
        image: "playming_py.png",
        github: "playmind-py",
        url: ""
    },
    {
        title: "Parla Chat",
        description: "Chat App built with Node.js, Express.js and Socket.IO.",
        image: "parla_chat.png",
        github: "parla-chat",
        url: ""
    },
    {
        title: "Django TV",
        description: "Django app to manage my Movies / TV Shows collection.",
        image: "django_tv.png",
        github: "django-tv",
        url: ""
    },
    {
        title: "Snowplow Tracking CLI",
        description: "Command-line app (written in Golang) for tracking Snowplow events.",
        image: "snowplow_cli.png",
        github: "https://github.com/snowplow/snowplow-tracking-cli",
        url: "http://snowplowanalytics.com/blog/2016/08/04/snowplow-tracking-cli-0.1.0-released/"
    },
    {
        title: "Playmind Android",
        description: "Android educational game to practice Math and train your mind doing mental calculations.",
        image: "playmind_android.png",
        github: "",
        url: "https://apkfab.com/math-game-playmind/com.wdggames.playmind"
    },
    {
        title: "Rock Music - Android",
        description: "Android app to enjoy high quality rock music.",
        image: "0-rock-music.png",
        github: "",
        url: "https://play.google.com/store/apps/details?id=com.musicnetwork.therockcorner"
    },
    {
        title: "Rock al palo - Android",
        description: "Android app to enjoy high quality rock music in Spanish.",
        image: "1-rock-al-palo.png",
        github: "",
        url: "https://play.google.com/store/apps/details?id=com.musicnetwork.rockalpalo"
    },
    {
        title: "Electro Music - Android",
        description: "Android app to enjoy high quality electro music.",
        image: "3-electro-music.png",
        github: "",
        url: "https://play.google.com/store/apps/details?id=com.dotwdg.electroxd"
    },
    {
        title: "Kmail Theme System - KDE",
        description: "As part of Google Summer of Code 2010, I ported Kmail and Akregator to use the Grantlee library for theme support system.",
        image: "kmail.png",
        github: "https://code.google.com/archive/p/google-summer-of-code-2010-kde/downloads",
        url: "https://ronnyml.wordpress.com/2010/08/26/gsoc-final-report-messageviewer-kmail-and-akregator-ported-to-grantlee/"
    },
    {
        title: "KPeg - KDE Game",
        description: "My latest KDE side project is a board game called KPeg: An implementation of the Peg Solitaire Game.",
        image: "kpeg.png",
        github: "https://github.com/KDE/kpeg",
        url: "https://store.kde.org/p/1109437"
    },
    {
        title: "QML - SMPlayer",
        description: "A Qt/QML Streaming Music Player for desktop and mobile.",
        image: "qml_smplayer.png",
        github: "QML-SMPlayer",
        url: ""
    },
    {
        title: "Programación en C++",
        description: "C++ Tutorial Series (Spanish): Punteros, matrices, listas, recursividad, búsquedas y ordenamiento.",
        image: "cplusplus.png",
        github: "C---Tutorial",
        url: "https://ronnyml.wordpress.com/category/c/"
    }
]

export { navLinks, socialIcons, projects };