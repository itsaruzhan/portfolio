let info = {
  name: "Aruzhan Anarbayeva",
  flat_picture: require("./src/assets/myPhoto.jpg"),
  hobby1:  require("./src/assets/hobby1.jpg"),
  hobby2:  require("./src/assets/hobby2.jpg"),
  hobby3:  require("./src/assets/hobby3.jpg"),
  
  description:
    "Allow me to introduce myself: I'm Aruzhan Anarbayeva, A second course Information Technologies student at SDU University with an interest in Software Development, Database and Front-end developing. ",
  links: {
    instagram: "https://www.instagram.com/itsaruzhan/",
    github: "https://github.com/itsaruzhan/",
    email: "https://mail.google.com/mail/u/0/?tab=rm#inbox",
    telegram:
      "https://t.me/itsaruz"
  },
  education: [
    {
      name: ["G.Muratbayeva School","Suleyman Demirel University"],
      place: ["Taraz city", "Kaskelen district"],
      date: ["sep,2009 - june,2020 ","sep, 2020 - currently"],
      degree: "bachelor in information systems",
      gpa: ["Altyn Belgi","3.71/4.0"],
      description: "",
      
    },
  ],
  aboutMe: [ "I focus on living in the moment. Some ways I do that are....",
             "Watching The natue",
             "Enjoying  making cakes",
             "Eating great Turkish food",
             "Traveling the world!",
             "Going for a run",
             "Desire to dance"
            ],
 
  skills: [
    {
      title: "Language",
      info: [
        "Python","Javascript","Java"],
      icon: "fa fa-code"
    },
    {
      title: "Front-end",
      info: [
        "HTML5","CSS3","Bootstrap3","JQuery","Vue.js"],
      icon: "fa fa-cubes"
    },
    {
      title: "web technologies",
      info: ["Vue", "Node"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "Databases",
      info: [ "MySQL", "SQL Server"],
      icon: "fa fa-database"
    },
    {
      title: "Operating systems & tools",
      info: [  "Agile", "Scrum"],
      icon: "fas fa-tools"
    },
    {
      title: "Design",
      info: ["Photoshop", "Gimp"],
      icon: "fa fa-pencil-square-o"
    }
  ],
  portfolio: [
    {
      name: "Nike App",
      pictures: [
        {
          img: require("./src/assets/pr2.jpg")
        }
      ],
      technologies: ["HTML", "CSS","JavaSript","JQuery"],
      description:
        "Discover the story behind the Swoosh and learn more about Nike, Inc. careers worldwide. "
    },
    {
      name: "Beauty Room",
      pictures: [
        {
          img: require("./src/assets/pr1.jpg")
        }
      ],
      technologies: ["HTML", "CSS","JavaSript"],
      
      description:
        "A hair salon, day spa and clothing boutique for the eternally hip in Anchorage, Alaska."
    },
    {
      name: "Protect land company",
      pictures: [
        {
          img: require("./src/assets/pr3.jpg")
        }
      ],
      technologies: ["HTML", "CSS","JavaSript","JQuery"],
    
      description:
        " Protecting Land Through Conservation Development: Lessons from Land Trust . "
    },
  ]}
 

export default info;
