// import images properly
import abdo from "/public/clubMembers/abdo.jpeg";
import said from "/public/clubMembers/said.png";
import fati from "/public/clubMembers/fati.png";
import newunknown from "/public/newunkown.png";
import ihsane from "/public/clubMembers/ihsane.jpeg";
import safouane from "/public/clubMembers/safouane.jpeg";
import AIT_BAOUI_Mohamed_amine from "/public/clubMembers/AIT_BAOUI_Mohamed_amine.jpeg";
import mohcineDarmoune from "/public/clubMembers/mohcineDarmoune.jpeg";
import Hossam from "/public/clubMembers/Hossam.jpeg";
import aymen_saleh_ayt_brahim from "/public/clubMembers/aymen saleh ayt brahim.jpeg";
import ilhamelhajli from "/public/clubMembers/ilhamelhajli.jpeg";
import yahyaMohib from "/public/clubMembers/yahyaMohib.jpeg";
import chaimae from "/public/clubMembers/chaimae.jpeg";


// sample members data -- replace pictures/links with real ones
const members = [
  {
    id: 1,
    name: "Yahya EL OURAK",
    role: "President",
    image: newunknown,
    linkedin: "https://linkedin.com/in/example2",
    bio: "Yahya is the head chief of our club"
  },
  {
    id: 2,
    name: "Abdellatif TAZARNIi",
    role: "Project Manager",
    image: abdo,
    linkedin: "https://www.linkedin.com/in/rachid-el-magroua-619189304/",
    bio: "Abedllatif is the project manager of our club, he is responsible for managing and coordinating all the projects and activities of the club."
  },
  {
    id: 3,
    name: "Said LAACHIR",
    role: "Sponsoring Manager",
    image: said,
    linkedin: "https://www.linkedin.com/in/said-l-649581225/",
    bio: "He has one job, to find an investor (Someone to pay for us 😏)"
  },
  {
    id: 4,
    name: "Mohamed Amine AIT BAOUI",
    role: "Formation Manager",
    image: AIT_BAOUI_Mohamed_amine,
    linkedin: "https://www.linkedin.com/in/oussama-hajjoubi-089a66214/",
    bio: "Mohamed Amine is the formation manager of our club, he is responsible for managing and coordinating all the training activities of the club and making sure that all the members are well trained and ready for all the activities and events of the club."
  },
  {
    id: 5,
    name: "Fatima Ezzahra EL MENYAR",
    role: "Communication Manager",
    image: fati,
    linkedin: "http://www.linkedin.com/in/fatima-ezzahra-el-menyar-b77a18283",
    bio: "Fatimazohra is here to speak on behalf of the whole team members in big events and ceremonies and represents the club."
  },
  {
    id: 6,
    name: "Safouane",
    role: "Project Manager",
    image: safouane,
    linkedin: "https://linkedin.com/in/example3",
    bio: "We need somebody to deal with Projects palanings and roadmaps, this is Safouane "
  },
  {
    id: 7,
    name: "Ihsane FATHI",
    role: "Interior commuinication manager",
    image: ihsane,
    linkedin: "https://linkedin.com/in/example3",
    bio: "Ihsane is the interior communication manager of our club, she is responsible for managing and coordinating all the communication activities between the members of the club and making sure that all the members are well informed about all the activities and events of the club."
  },
  {
    id: 8,
    name: "Mouhcine",
    role: "Events Manager",
    image: mohcineDarmoune,
    linkedin: "https://linkedin.com/in/example3",
    bio: "He is here to do his job, manage and coordinate work for the good of the club."
  },
  {
    id: 9,
    name: "Walid ZAHRAOUI",
    role: "Vice President",
    image: newunknown,
    linkedin: "https://linkedin.com/in/example3",
    bio: "Walid is the right hand of the president, he is here to help and support him in all his work and responsibilities."
  },
  {
    id: 10,
    name: "Hossam",
    role: "Designer",
    image: Hossam,
    linkedin: "https://www.linkedin.com/in/abdellatif-tazarni-61691a24a/",
    bio: "Hossam is the designer of our club, he is responsible for creating all the visual content and designs for the club's activities and events."
  },
  {
    id: 11,
    name: "Mehdi",
    role: "CTF manager",
    image: newunknown,
    linkedin: "https://www.linkedin.com/in/abdellatif-tazarni-61691a24a/",
    bio: "Mehdi is the CTF manager of our club, he is responsible for organizing and managing all the CTF events and activities of the club."
  },
  {
    id: 12,
    name: "Aymen Saleh AYT BRAHIM",
    role: "Unkown",
    image: aymen_saleh_ayt_brahim,
    linkedin: "https://www.linkedin.com/in/abdellatif-tazarni-61691a24a/",
    bio: "Aymen is ....."
  },
  {
    id: 13,
    name: "Ilham ELHAJLI",
    role: "Social Media Manager",
    image: ilhamelhajli,
    linkedin: "https://www.linkedin.com/in/abdellatif-tazarni-61691a24a/",
    bio: "Ilham is the social media manager of our club, she is responsible for managing and updating all the social media accounts of the club and creating content for them."
  },
  {
    id: 14,
    name: "Yahya MOHIB",
    role: "Communication Manager",
    image: yahyaMohib,
    linkedin: "https://www.linkedin.com/in/yahya-mohib-48070531b",
    bio: "Yahya is the communication manager of our club, he is responsible for managing and coordinating all the communication activities of the club."
  },
  {
    id: 15,
    name: "Chaymae BELKHIR",
    role: "Designer",
    image: chaimae,
    linkedin: "https://www.linkedin.com/in/abdellatif-tazarni-61691a24a/",
    bio: "Designer and creative mind behind our club's visual identity."
  },
  {
    id: 16,
    name: "Zineb",
    role: "Unkown",
    image: newunknown,
    linkedin: "https://www.linkedin.com/in/abdellatif-tazarni-61691a24a/",
    bio: "Social Media Manager."
  }

  
];

export default members;
