// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Tyler",
  middleName: "",
  lastName: "Kim",
  message: " Making cool things since 2015😎.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/tylertaewook",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/tyler.kim.338211",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/tylr.kim/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/tylertaewook/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/tylertaewook/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/tylerkim.png"),
  imageSize: 375,
  message:
    "My name is Tyler Kim. I'm an incoming freshman for Columbia University who is motivated, initiative, and open to trying new things including but not limited to Data Analysis, Computer Science, and Machine Learning. ",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "tylertaewook", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["project-orbitron","sstp-hist-cnn","arduino-turret","chisktale"],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Featured",
  message:
    "",
  images: [
    { 
      img: require("../editable-stuff/orbitron.png"), 
      label: "Project Orbitron", 
      paragraph: "A 4WIS/WID vehicle with sphericla wheels"
    },
    { 
      img: require("../editable-stuff/turret.png"), 
      label: "Arduino Turret", 
      paragraph: "Terminator-inspired Turret Project Controlled with C# WinForms App" 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: false,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "If you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "tylertaewook@gmail.com",
};

const experiences = {
  show: true,
  headings: "Publications",
  data: [
    {
      role: 'Intuitive Control Algorithm Development of 4WIS/4WID Using a SpaceMouse',
      company: 'Kent School Guild',
      companylogo: require('../assets/img/columbia.png'),
      date: 'Jan 2018 – June 2020',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      descBullets: [
        'Built a vehicle with a spherical wheel that implements a 4 wheel independent steering/driving system with Arduino and C# Winform Application.',
        'Developed a unique control algorithm in Mathematica and wrote/presented a paper in front of school body; Accepted as one of three members in Kent Guild; Won 7 awards at CT Science Fair; patent-pending (Application Number: KR 10-2019-0087022)',
      ],
    },

    {
      role: 'Histogram Layer for Texture Classification',
      company: 'UF SSTP',
      companylogo: require('../assets/img/columbia.png'),
      date: 'June 2019 – Aug 2019',
      desc:
        'In this paper, we propose a hybrid model that incorporates a stackable, localized histogram layer on convolutional neural network (CNN) for texture analysis applications. Texture classification is a part of texture analysis that focuses on the image’s spatial variation in pixel intensity values and gray levels to classify texture. Instead of using standard histogram operation, we used RBF (Radial Basis Function) to perform a localized binning operation without binning constraints. In order to evaluate the proposed model’s performance, we used six different CNNs comprising of histogram and convolution layer to classify images. Experiments were conducted using the KTH-TIPS 2b dataset and the use of standardization was analyzed during this study. As a result, every network improved performance significantly with standardization, averaging about 6.50\% increase in average overall accuracy. Then, the results were evaluated using confusion matrices, classification metrics, and overall accuracy on the networks standardized data to further evaluate the proposed model. Overall, the proposed model did not necessarily perform better than the standard CNNs, but the histogram CNN performed better on some classes. Future works will include evaluating different initialization methods and parameters such as number of bins, window size, and kernel size.',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
