import React from 'react';
import { Briefcase, Code, Terminal } from 'lucide-react';

export const personalInfo = {
  name: "João",
  email: "noleirodrigues@gmail.com",
  gitlab: "https://gitlab.com/JoaoRodrigues_Nolei",
  linkedin: "https://www.linkedin.com/in/joão-rodrigues-18b731179",
  instagram: "https://instagram.com/noleicreative",
  github: "https://github.com/Nolei98",
  whatsapp: "https://wa.me/5587999099937",
};

export const i18n = {
  en: {
    nav: { about: "About", skills: "Skills", experience: "Timeline", projects: "Projects", contact: "Contact", resume: "Resume" },
    hero: { 
      greeting: "Hello, world! I am", 
      subtitle: "Rodrigues", 
      desc: "Transforming logic into real solutions since 2014. With solid experience in web development since 2019, I help build scalable systems, secure architectures, and consistent digital businesses.", 
      contactBtn: "Get in touch" 
    },
    about: { 
      title: "About Me", 
      subtitle: "01.", 
      p1: `My journey in technology started early, in 2014, when I enrolled in the IT Tech course at IF Campus Salgueiro. That's where I built the algorithmic and structural foundation that pushed me into the web development market in 2019. Since then, whether through my agency NOLEI CREATIVE or in independent partnerships, I've been transforming real needs into efficient digital platforms.`, 
      p2: "Currently, I am in the 3rd semester of the Bachelor's degree in Software Engineering at Jala University, improving my view of system architecture and going deeper into the corporate back-end ecosystem. My daily focus is writing clean code, designing performant databases, and delivering solutions that actually solve problems, always driven by collaboration and a constant desire to learn.", 
      p3: "",
      musicTitle: "Music Taste", 
      musicDesc: "Indie Rock, Electronic, Alternative, Brazilian MPB", 
      softTitle: "Soft Skills", 
      softDesc: "Problem Solving, Communication, Adaptability, Teamwork" 
    },
    skills: { title: "Tech Skills", subtitle: "02." },
    experience: { title: "Professional Path", subtitle: "03." },
    projects: { title: "Featured Work", subtitle: "04.", projectLabel: "Project" },
    contact: { 
      title: "Let's Talk", 
      subtitle: "05 / Next Step", 
      p: "Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!", 
      btn: "Say Hello" 
    },
    footer: { text1: "Built with brutalist but soft modern design.", text2: "© 2026" }
  },
  pt: {
    nav: { about: "Sobre", skills: "Habilidades", experience: "Carreira", projects: "Projetos", contact: "Contato", resume: "Currículo" },
    hero: { 
      greeting: "Olá, mundo! Eu sou", 
      subtitle: "Rodrigues", 
      desc: "Transformando lógica em soluções reais desde 2014. Com sólida atuação no desenvolvimento web desde 2019, ajudo a construir sistemas escaláveis, arquiteturas seguras e negócios digitais consistentes.", 
      contactBtn: "Entrar em Contato" 
    },
    about: { 
      title: "Sobre Mim", 
      subtitle: "01.", 
      p1: `Minha jornada na tecnologia começou cedo, em 2014, quando ingressei no curso Técnico em TI no IF Campus Salgueiro. Foi lá que construí a base algorítmica e estrutural que me impulsionou para o mercado de desenvolvimento web em 2019. Desde então, seja através da minha agência NOLEI CREATIVE ou em parcerias independentes, venho transformando necessidades reais em plataformas digitais eficientes.`, 
      p2: "Atualmente, estou no 3º semestre do Bacharelado em Engenharia de Software na Jala University, aprimorando minha visão de arquitetura de sistemas e me aprofundando no ecossistema de back-end corporativo. Meu foco diário é escrever código limpo, projetar bancos de dados performáticos e entregar soluções que realmente resolvam problemas, sempre movido pela colaboração e pela constante vontade de aprender.", 
      p3: "",
      musicTitle: "Gosto Musical", 
      musicDesc: "Indie Rock, Eletrônica, Alternativo, MPB", 
      softTitle: "Soft Skills", 
      softDesc: "Resolução de Problemas, Comunicação, Adaptabilidade, Trabalho em Equipe" 
    },
    skills: { title: "Habilidade Técnicas", subtitle: "02." },
    experience: { title: "Trajetória Profissional", subtitle: "03." },
    projects: { title: "Trabalhos em Destaque", subtitle: "04.", projectLabel: "Projeto" },
    contact: { 
      title: "Vamos Conversar", 
      subtitle: "05 / Próximo passo", 
      p: "Embora eu não esteja procurando ativamente por novas oportunidades de emprego no momento, minha caixa de entrada está sempre aberta. Seja para uma pergunta, uma proposta de projeto ou apenas para dizer oi!", 
      btn: "Diga Olá" 
    },
    footer: { text1: "Construído de forma brutal e mais livre.", text2: "© 2026" }
  }
};

export const skillsObj = {
  en: [
    { 
      category: "Back-end & Logic", 
      items: [
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
        { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
        { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" }
      ] 
    },
    { 
      category: "Front-end & UI", 
      items: [
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
        { name: "React (🌱 Learning)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" }
      ] 
    },
    { 
      category: "Databases", 
      items: [
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
        { name: "NoSQL", icon: "https://cdn.simpleicons.org/couchbase/111111" }
      ] 
    },
    { 
      category: "Infra, DevOps & Tools", 
      items: [
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
        { name: "GitLab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg" },
        { name: "CLI (Ubuntu/Linux)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-plain.svg" },
        { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" }
      ] 
    },
    { 
      category: "Web Ecosystems", 
      items: [
        { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg" },
        { name: "Joomla", icon: "https://cdn.simpleicons.org/joomla/111111" },
        { name: "OpenCart", icon: "https://cdn.simpleicons.org/opencart/111111" }
      ] 
    },
    { 
      category: "Soft Skills & Methodologies", 
      items: [
        { name: "Clear Communication", icon: "" },
        { name: "Teamwork", icon: "" },
        { name: "Flexibility", icon: "" },
        { name: "Agile (Scrum)", icon: "" }
      ] 
    }
  ],
  pt: [
    { 
      category: "Back-end & Lógica", 
      items: [
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
        { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
        { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" }
      ] 
    },
    { 
      category: "Front-end & UI", 
      items: [
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
        { name: "React (🌱 Em aprendizado)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" }
      ] 
    },
    { 
      category: "Bancos de Dados", 
      items: [
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
        { name: "NoSQL", icon: "https://cdn.simpleicons.org/couchbase/111111" }
      ] 
    },
    { 
      category: "Infraestrutura, DevOps & Ferramentas", 
      items: [
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
        { name: "GitLab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg" },
        { name: "CLI (Ubuntu/Linux)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-plain.svg" },
        { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" }
      ] 
    },
    { 
      category: "Ecossistemas Web", 
      items: [
        { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg" },
        { name: "Joomla", icon: "https://cdn.simpleicons.org/joomla/111111" },
        { name: "OpenCart", icon: "https://cdn.simpleicons.org/opencart/111111" }
      ] 
    },
    { 
      category: "Soft Skills & Metodologias", 
      items: [
        { name: "Comunicação clara", icon: "" },
        { name: "Teamwork (Trabalho em Equipe)", icon: "" },
        { name: "Flexibilidade", icon: "" },
        { name: "Rápida adaptabilidade técnica", icon: "" },
        { name: "Controle de versão contínuo", icon: "" },
        { name: "Metodologias Ágeis (Scrum)", icon: "" }
      ] 
    }
  ]
};

export const experienceData = [
  {
    role: { en: "System Creation & Maintenance", pt: "Criação e Manutenção de Sistemas" },
    company: "Web Development",
    period: "2019 - Present",
    description: { 
      en: "Development of custom solutions for digital management and operation of companies and diverse clients.", 
      pt: "Desenvolvimento de soluções sob medida para gestão e operação digital de empresas e clientes variados." 
    },
    icon: <Code className="w-5 h-5" />
  },
  {
    role: { en: "E-commerce & CMS", pt: "E-commerce & CMS" },
    company: "E-commerce platforms",
    period: "2019 - Present",
    description: { 
      en: "Structuring, customization, and maintenance of high-performance virtual stores and dynamic portals using ecosystems like OpenCart, WordPress, and Joomla.", 
      pt: "Estruturação, customização e manutenção de lojas virtuais e portais dinâmicos de alto desempenho utilizando ecossistemas como OpenCart, WordPress e Joomla."
    },
    icon: <Briefcase className="w-5 h-5" />
  },
  {
    role: { en: "Robust Back-end", pt: "Back-end Robusto" },
    company: "APIs & Data",
    period: "2022 - Present",
    description: { 
      en: "Implementation of advanced business rules, APIs, and data manipulation using Java, Spring Boot, and PHP, prioritizing security, cryptography, and structural efficiency.", 
      pt: "Implementação de regras de negócios avançadas, APIs e manipulação de dados utilizando Java, Spring Boot e PHP, priorizando segurança, criptografia e eficiência estrutural." 
    },
    icon: <Terminal className="w-5 h-5" />
  },
  {
    role: { en: "B.S. in Software Engineering", pt: "Bacharelado em Eng. de Software" },
    company: "Jala University",
    period: "2025 - 2029",
    description: {
      en: "Currently in the 3rd semester, focusing on back-end development, design patterns (Repository Pattern, DTOs), and data modeling.",
      pt: "Atualmente cursando o 3º semestre, com foco em desenvolvimento back-end, padrões de projeto (Repository Pattern, DTOs) e modelagem de dados."
    },
    icon: <Briefcase className="w-5 h-5" />
  },
  {
    role: { en: "IT Technician (High School)", pt: "Técnico em TI Integrado ao Ensino Médio" },
    company: "IF Campus Salgueiro",
    period: "2014 - 2019",
    description: {
      en: "Technical education that established my foundation in programming, logic, and infrastructure.",
      pt: "Formação técnica que estabeleceu meus fundamentos em programação, lógica e infraestrutura."
    },
    icon: <Terminal className="w-5 h-5" />
  }
];

export const projectsCategories = [
  {
    id: "university-projects",
    label: { en: "University Projects", pt: "Projetos Universitários" },
    items: [
      {
        id: "modutask-capstone",
        title: "ModuTask",
        semester: { en: "3rd Semester - Jala University", pt: "3º Semestre - Jala University" },
        description: { 
          en: "CLI-based task management system developed as a Capstone (Sprint) project. Focus on layered architecture and data security.", 
          pt: "Sistema de gerenciamento de tarefas baseado em CLI desenvolvido como projeto Capstone (Sprint). Foco em arquitetura em camadas e segurança de dados." 
        },
        technologies: ["Java", "MongoDB", "AES Encryption", "Service Layer"],
        repositoryLink: "https://github.com/Nolei98/modutask", // User's GitHub is Nolei98 based on earlier context
        liveDemoLink: null,
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
      }
    ]
  },
  {
    id: "web-ecommerce",
    label: { en: "Web Apps & E-commerce", pt: "Aplicações Web & E-commerce" },
    items: [
      {
        id: "exemplo-ecommerce-opencart",
        title: "Virtual Store - Client X",
        semester: { en: "Professional - NOLEI CREATIVE", pt: "Profissional - NOLEI CREATIVE" },
        description: {
          en: "Complete e-commerce development, payment gateway configuration, and virtual storefront speed optimization.",
          pt: "Desenvolvimento de e-commerce completo, configuração de gateway de pagamento e otimização de velocidade da vitrine virtual."
        },
        technologies: ["OpenCart", "PHP", "MySQL", "Bootstrap"],
        repositoryLink: null,
        liveDemoLink: "https://noleicreative.com", // Dummy or actual if available
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80"
      }
    ]
  },
  {
    id: "backend-architecture",
    label: { en: "Backend & Architecture", pt: "Backend & Arquitetura" },
    items: [
      {
        id: "exemplo-api-springboot",
        title: "Internal Management API",
        semester: { en: "Studies/Professional", pt: "Estudos/Profissional" },
        description: {
          en: "Development of a RESTful API using the Repository pattern, DTOs, and rich domain structuring to guarantee the integrity of business rules.",
          pt: "Desenvolvimento de uma API RESTful utilizando o padrão Repository, DTOs e estruturação de domínio rico para garantir a integridade das regras de negócio."
        },
        technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
        repositoryLink: "https://github.com/Nolei98/",
        liveDemoLink: null,
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
      }
    ]
  }
];

