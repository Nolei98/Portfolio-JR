import React from 'react';
import { Briefcase, Code, Terminal } from 'lucide-react';

export const personalInfo = {
  name: "João",
  email: "contato@seunome.com",
  gitlab: "https://gitlab.com/",
  linkedin: "https://linkedin.com/in/",
  instagram: "https://instagram.com/",
};

export const i18n = {
  en: {
    nav: { about: "About", skills: "Skills", experience: "Timeline", projects: "Projects", contact: "Contact", resume: "Resume" },
    hero: { 
      greeting: "Hello, world! I am", 
      subtitle: "Rodrigues", 
      desc: "Building bridges between design and mental engineering. Specialized in creating exceptional, accessible, and user-centric digital experiences.", 
      contactBtn: "Get in touch" 
    },
    about: { 
      title: "About Me", 
      subtitle: "01.", 
      p1: `Hello! I am João Rodrigues, a Software Engineer focused on building beautiful and functional interfaces. My interest in web development started back in 2017 when I realized I wanted to bring my digital ideas to life.`, 
      p2: "I am a passionate developer creating modern, efficient, and scalable web solutions. Specialized in transforming complex ideas into clean interfaces and seamless digital experiences.", 
      p3: "My main focus today is building products and experiences across various disciplines in an accessible and scalable way.",
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
    nav: { about: "Sobre", skills: "Habilidades", experience: "Linha do Tempo", projects: "Projetos", contact: "Contato", resume: "Currículo" },
    hero: { 
      greeting: "Olá, mundo! Eu sou", 
      subtitle: "Rodrigues", 
      desc: "Construindo pontes entre design e engenharia mental. Especializado em criar experiências digitais excepcionais, acessíveis e centradas no usuário.", 
      contactBtn: "Entrar em Contato" 
    },
    about: { 
      title: "Sobre Mim", 
      subtitle: "01.", 
      p1: `Olá! Sou João Rodrigues, um Engenheiro de Software focado em construir interfaces bonitas e funcionais. Meu interesse em desenvolvimento web começou em 2017 quando percebi que queria dar vida às minhas ideias digitais.`, 
      p2: "Sou um desenvolvedor apaixonado por criar soluções web modernas, eficientes e escaláveis. Especializado em transformar ideias complexas em interfaces limpas e experiências digitais fluidas.", 
      p3: "Meu foco principal hoje é construir produtos e experiências em várias disciplinas de forma acessível e escalável.",
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
      category: "Frontend", 
      items: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
        { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
        { name: "Framer M.", icon: "" }
      ] 
    },
    { 
      category: "Backend", 
      items: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
        { name: "REST APIs", icon: "" }
      ] 
    },
    { 
      category: "Tools & Others", 
      items: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
        { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
        { name: "Agile", icon: "" }
      ] 
    }
  ],
  pt: [
    { 
      category: "Frontend", 
      items: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
        { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
        { name: "Framer M.", icon: "" }
      ] 
    },
    { 
      category: "Backend", 
      items: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
        { name: "REST APIs", icon: "" }
      ] 
    },
    { 
      category: "Ferramentas & Outros", 
      items: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
        { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
        { name: "Metodologias Ágeis", icon: "" }
      ] 
    }
  ]
};

export const experienceData = [
  {
    role: { en: "Senior Developer", pt: "Desenvolvedor Sênior" },
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    description: { 
      en: "Technical leadership in architecture and core platform development, resulting in a 40% overall performance improvement and adoption of modern CI/CD practices.", 
      pt: "Liderança técnica na arquitetura e desenvolvimento da plataforma principal, resultando em uma melhoria de 40% na performance geral e adoção de práticas modernas de CI/CD." 
    },
    icon: <Briefcase className="w-5 h-5" />
  },
  {
    role: { en: "Mid-level Developer", pt: "Desenvolvedor Pleno" },
    company: "Startup Inovadora",
    period: "2019 - 2022",
    description: { 
      en: "Development of robust APIs and interactive UI, working closely with the design team to ensure the best user experience.", 
      pt: "Desenvolvimento de APIs robustas e interfaces de usuário interativas, trabalhando em estreita colaboração com a equipe de design para garantir a melhor experiência do usuário."
    },
    icon: <Code className="w-5 h-5" />
  },
  {
    role: { en: "Jr Programmer Analyst", pt: "Analista Programador Jr" },
    company: "Agência Digital",
    period: "2017 - 2019",
    description: { 
      en: "Creation of landing pages, maintenance of legacy systems, and implementation of new features in custom CMS.", 
      pt: "Criação de landing pages, manutenção de sistemas legados e implementação de novas funcionalidades em CMS personalizados." 
    },
    icon: <Terminal className="w-5 h-5" />
  }
];

export const projectsData = [
  {
    id: 1,
    title: { en: "Omni E-commerce Platform", pt: "Plataforma de E-commerce Omni" },
    description: {
      en: "A complete e-commerce system with an administrative dashboard, real-time inventory management, and multiple payment gateway integrations.",
      pt: "Um sistema completo de comércio eletrônico com painel administrativo, gestão de inventário em tempo real e integração de múltiplos gateways de pagamento."
    },
    tech: ["Next.js", "Node.js", "Stripe", "PostgreSQL"],
    link: "#",
    gitlab: "#",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
  },
  {
    id: 2,
    title: { en: "EcoCalc Dashboard", pt: "EcoCalc Dashboard" },
    description: {
      en: "SaaS application for calculating environmental metrics with interactive data visualization and exportable reports.",
      pt: "Aplicativo SaaS para cálculo de métricas ambientais com visualização de dados interativa e relatórios exportáveis."
    },
    tech: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
    link: "#",
    gitlab: "#",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  },
  {
    id: 3,
    title: { en: "Manager ERP Studio", pt: "Manager ERP Studio" },
    description: {
      en: "Custom internal ERP management system encompassing HR, finance, and access control modules.",
      pt: "Sistema interno de gestão ERP desenvolvido sob medida, englobando módulos de RH, financeiro e controle de acesso."
    },
    tech: ["Vue.js", "Django", "Docker", "Redis"],
    link: "#",
    gitlab: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
];

