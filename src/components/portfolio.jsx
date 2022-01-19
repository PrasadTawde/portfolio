const seo = {
  title: "Prasad's Portfolio",
  description: "A passionate web devloper",
};

const greeting = {
  title: "Prasad Tawde",
  logo: "Prasad",
  description: "A FullStack web devloper",
  resume_link: "www.go.com",
};

const social_media = [
  {
    name: "Github",
    link: "https://github.com/PrasadTawde",
    icon: "fab fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/prasad-tawde-07/",
    icon: "fab fa-linkedin-in",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/prasadtawde07/",
    icon: "fab fa-instagram",
  },
  {
    name: "Twitter",
    link: "https://www.twitter.com/PrasadTawde07",
    icon: "fab fa-twitter",
  },
  {
    name: "Koo App",
    link: "https://www.kooapp.com/profile/prasadtawde",
    icon: "fas fa-kiwi-bird",
  },
];

// contact details
const contact_details = {
  title: "Reach out to me",
  description:
    "I am available on almost every social media platform, leave a message for me ill get back to you as soon as possible. I can help you with Laravel, React, Angular.",
  form_title: "Contact Me",
};

//projects
const projectheader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Laravel and React projects.",
};

//skills
const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "Building resposive website using resuable bootstarp components",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          icon: "fab fa-html5",
        },
        {
          skillName: "CSS3",
          icon: "fab fa-css3-alt",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          icon: "fab fa-js",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          icon: "fab fa-react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          icon: "fab fa-node-js",
          style: {
            color: "#339933",
          },
        },
      ],
    },
  ],
};

export { seo, greeting, social_media, contact_details, projectheader, skills };
