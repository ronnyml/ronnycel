import {
    faGithub,
    faLinkedin,
    faTwitter,
    faInstagram,
    faMedium
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ProjectCategory } from "@/src/interfaces/project.interface";

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
      title: "Services",
      url: "/services"
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
        title: 'Envelope',
        url: 'mailto:ronnycontacto@gmail.com',
        icon: faEnvelope
    }
]

const projects: ProjectCategory[] = [
    {
      "React - Next.js": [
        {
            title: "React Academy",
            description: "E-learning platform built with React and Node.js.",
            image: "react-academy.png",
            github: "react-academy",
            url: ""
        },
        {
            title: "React Calendar",
            description: "React calendar app built with TypeScript that allows users to manage reminders.",
            image: "react-calendar.png",
            github: "react-calendar",
            url: "https://react-calendar-seven-beta.vercel.app"
        },
        {
            title: "React Task Board Real-time",
            description: "A real-time collaborative task board application built with React, TypeScript and Socket.io",
            image: "react-task-board.png",
            github: "react-task-board",
            url: "https://react-task-board-pied.vercel.app/"
        },
        {
          title: "React Chat",
          description: "Chat App built with Node.js, Express.js, Socket.IO, TypeScript and React.",
          image: "react-chat-app.png",
          github: "react-chat-app",
          url: ""
        },
        {
            title: "React Questionarie App",
            description: "App built with React and TypeScript to take customizable questionnaires and collecting responses.",
            image: "react-questionarie.png",
            github: "react-questionarie",
            url: "https://react-questionarie.vercel.app/"
        },
        {
            title: "Next.js Project Manager",
            description: "Next.js app to manage projects",
            image: "project-management.png",
            github: "nextjs-project-manager",
            url: "https://nextjs-project-manager.vercel.app/"
        }
      ]
    },
    {
      "Python - Django": [
        {
            title: "Python Screenshot Generator",
            description: "Django app to generate screenshots from a specified URL.",
            image: "python-screenshot-generator.png",
            github: "python-screenshot-generator",
            url: ""
        },
        {
            title: "PyScanText",
            description: "Streamlit app that extracts text from images using OCR and detects programming languages.",
            image: "pyscantext.png",
            github: "pyscantext",
            url: ""
        },
        {
            title: "playmind-py",
            description: "Python command line game to practice your Math skills.",
            image: "playming-py.png",
            github: "playmind-py",
            url: ""
        },
        {
            title: "Django TV",
            description: "Django app to manage my Movies / TV Shows collection.",
            image: "django-tv.png",
            github: "django-tv",
            url: ""
        }
      ]
    },
    {
        "Android": [
            {
                title: "Playmind Android",
                description: "Android educational game to practice Math and train your mind doing mental calculations.",
                image: "playmind-android.png",
                github: "",
                url: "https://apkpure.net/math-game-playmind/com.wdggames.playmind"
            },
            {
                title: "Rock Music - Android",
                description: "Android app to enjoy high quality rock music.",
                image: "0-rock-music.png",
                github: "",
                url: "https://apkpure.net/music-rock/com.musicnetwork.therockcorner"
            },
            {
                title: "Rock al palo - Android",
                description: "Android app to enjoy high quality rock music in Spanish.",
                image: "1-rock-al-palo.png",
                github: "",
                url: "https://apkpure.net/rock-free/com.musicnetwork.rockalpalo"
            },
            {
                title: "Electro Music - Android",
                description: "Android app to enjoy high quality electro music.",
                image: "3-electro-music.png",
                github: "",
                url: "https://apkpure.net/electronic-music/com.dotwdg.electroxd"
            }
        ]
      },
      {
        "Golang - C++": [
            {
                title: "Snowplow Tracking CLI",
                description: "Command-line app (written in Golang) for tracking Snowplow events.",
                image: "snowplow-cli.png",
                github: "https://github.com/snowplow/snowplow-tracking-cli",
                url: "https://docs.snowplow.io/docs/sources/trackers/snowplow-tracking-cli/"
            },
            {
                title: "Programación en C++",
                description: "C++ Tutorial Series (Spanish): Punteros, matrices, listas, recursividad, búsquedas y ordenamiento.",
                image: "cplusplus.png",
                github: "C---Tutorial",
                url: "https://ronnyml.wordpress.com/category/c/"
            }
        ]
      },
      {
        "KDE - QT": [
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
                image: "qml-smplayer.png",
                github: "QML-SMPlayer",
                url: ""
            }
        ]
      }
  ];

export const skills = [
  "aws.png",
  "javascript.png",
  "linux.png",
  "nextjs.png",
  "nodejs.png",
  "postgresql.png",
  "python.png",
  "react.png",
  "tailwind.png",
  "typescript.png",
];

export { navLinks, socialIcons, projects };