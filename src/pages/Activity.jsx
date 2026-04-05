import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

// Activities array (Ordered newest to oldest)
const activities = [
  {
    id: 3,
    title: "Champions of DGSSI CTF 2026",
    date: "2026 March 25",
    venue: "DGSSI Headquarters, Rabat",
    animator: "SECORA Team",
    description: `La Direction Générale de la Sécurité des Systèmes d'Information (DGSSI), l'autorité nationale marocaine en matière de cybersécurité, a organisé l'édition 2026 de son grand concours national « Capture The Flag » (CTF). Cet événement d'envergure réunit les esprits les plus brillants des grandes écoles d'ingénieurs et universités marocaines pour s'affronter sur des scénarios de cybermenaces réalistes.

    La compétition s'est déroulée dans des environnements de laboratoires virtuels hautement sécurisés, englobant des défis pointus : exploitation d'infrastructures Active Directory (AD), sécurité des applications Web, Reverse Engineering, cryptographie et analyse Forensic.
    
    L'équipe représentant l'ENIAD était composée de 5 étudiants talentueux, dont 2 fiers membres de notre club SECORA (Mehdi et Abdellatif), accompagnés de 3 autres brillants étudiants de notre école. Grâce à leur approche stratégique, leur cohésion et leur ingéniosité, l'équipe a remporté la 1ère place, s'imposant comme le "Winner of the Year 2026". 
    
    Ce triomphe souligne non seulement l'excellence de la formation à l'ENIAD, mais consacre également l'expertise technique de nos étudiants face aux défis complexes du monde de la cybersécurité moderne.`,
    stats: [
      { label: "Classement Final", value: "🏆 1ère Place" },
      { label: "Score Total", value: "1,207 Points" },
      { label: "Équipe ENIAD", value: "5 Étudiants (2 SECORA)" },
      { label: "Défis Résolus", value: "32 Challenges" },
      { label: "Écoles Participantes", value: "20+ Grandes Écoles & Universités" }
    ],
    skills: [
      "Exploitation d'infrastructures critiques",
      "Reverse Engineering et Pwn",
      "Cryptographie appliquée",
      "Réponse aux incidents et Threat Hunting",
      "Travail d'équipe sous pression",
    ],
    requirements: [
      "Esprit d'analyse et de compétition",
      "Maîtrise des concepts offensifs et défensifs",
    ],
    image: "/CTF winners/congrats.jpeg", // Image principale
    gallery: [
      // Seulement les 5 images des membres participants
      "/CTF winners/abdo pic.jpeg", 
      "/CTF winners/barae pic.jpeg", 
      "/CTF winners/mehdi pic.jpeg",
      "/CTF winners/nabil pic.jpeg", 
      "/CTF winners/sagghir pic.jpeg"
    ],
    links: [
      "https://www.linkedin.com/posts/dgssi-direction-g%C3%A9n%C3%A9rale-de-la-s%C3%A9curit%C3%A9-des-syst%C3%A8mes-d-information_r%C3%A9sultats-finale-macc26-activity-7444451495795830784-P1RM?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADiA3lkB7tFargmVTSgHj5jfeP5rRAffysI",
      "https://www.dgssi.gov.ma/"
    ]
  },
  {
    id: 2,
    title: "SOC Fundamentals: The Blue Team Framework",
    date: "2026 March 07",
    venue: "ENIAD BR5 at 1:00 PM",
    animator: "Mohamed Amine AIT BAOUI",
    description: `
      We will cover a range Blue Team fundamentals:
        * People: Mindset, mental models, career progression, burnout
        * Process: Analysis, investigation theory, triage, and data flow
        * Technology: Network and host monitoring, understanding protocols, spotting attacks, scripting and automation
        * Strategic, operational, and tactical level info.
      Sections: 
        1. What is Cyber Security Operations Center ?
        2. SOC Components 
        3. SOC Overview 
        4. Defensible Network Concepts
        5. Events, Alerts, Anomalies, and Incidents
        6. Incidents Managements Systems
        7. Threat Intelligence Platforms
        8. SIEM and Automation
    `,
    skills: [
      "Network & Endpoint Telemetry Analysis",
      "Network Protocol & Packet Analysis",
      "SIEM, TIP, and Incident Management Tool Proficiency",
      "Security Scripting & Automation (e.g., Python, PowerShell)",
      "Threat Intelligence Analysis & Application",
    ],
    requirements: [
      "Laptop (Windows recommended)",
    ],
    image: "/Trainings/socFundamentals.jpeg", 
    links: ["https://filigran.io/platforms/opencti/", "https://www.misp-project.org/"]
  },
  {
    id: 1,
    title: "Windows Pentesting Active Directory 2026",
    date: "2026 February 28",
    venue: "ENIAD BR6 at 1:00 PM",
    animator: "Abdellatif TAZARNI",
    description: `
This hands-on training introduces students to real-world Windows Active Directory penetration testing.

Participants will learn how attackers exploit enterprise environments, escalate privileges, and move laterally across systems.

The session focuses on practical attack techniques, tools, and methodologies used in real-world cybersecurity operations.
    `,
    skills: [
      "Active Directory enumeration",
      "Privilege escalation",
      "Lateral movement",
      "Domain attacks (Kerberos, ACL abuse)",
      "Real pentesting workflow",
    ],
    requirements: [
      "Laptop (Windows recommended)",
      "VirtualBox or VMware installed",
      "Basic networking knowledge",
      "Basic Linux commands",
    ],
    image: "/Trainings/pentestSaturday.jpeg", 
    links: []
  }
];

export default function Activity({ theme }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const activity = activities.find((a) => a.id.toString() === id);

  if (!activity) {
    return (
      <PageWrapper>
        <p className={`pt-28 text-center font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>
          Activity not found
        </p>
      </PageWrapper>
    );
  }

  const activityImage = activity.image;

  return (
    <PageWrapper>
      <section className="pt-24 pb-12 px-4 md:px-6 max-w-5xl mx-auto space-y-8 relative z-10">

        {/* BACK BUTTON */}
        <div className="flex w-full mb-2">
          <button
            onClick={() => navigate("/activities")}
            className={`
              flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold shadow-md
              transition-all duration-300 ease-in-out transform hover:-translate-x-1 hover:scale-105
              ${theme === "dark"
                ? "bg-[#5e17eb] text-white hover:bg-[#8b5cf6] hover:shadow-[#5e17eb]/40"
                : "bg-cyan-600 text-white hover:bg-cyan-500 hover:shadow-cyan-600/40"
              }
            `}
          >
            <span className="text-xl leading-none">←</span> Back to Activities
          </button>
        </div>

        {/* MAIN IMAGE */}
        <div className="w-full flex justify-center overflow-hidden">
          <img
            src={activityImage}
            alt={activity.title}
            className="w-full max-h-[60vh] object-contain rounded-lg shadow-lg"
          />
        </div>

        {/* CONTENT CONTAINER */}
        <div className="space-y-10">
          
          {/* TITLE AND INFO */}
          <div className="text-center md:text-left">
            <h2 className={`text-3xl md:text-5xl font-extrabold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
              {activity.title}
            </h2>
            <p className={`mb-1 font-semibold text-xl ${theme === "dark" ? "text-cyan-400" : "text-cyan-600"}`}>
              {activity.date} — {activity.venue}
            </p>
            <p className={`mb-6 text-lg font-medium ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
              By {activity.animator}
            </p>

            {/* STATS (DGGSI CTF) */}
            {activity.stats && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                {activity.stats.map((stat, i) => (
                  <div key={i} className={`p-4 rounded-xl text-center border shadow-sm transition-transform hover:-translate-y-1 ${theme === "dark" ? "bg-[#1a0033] border-[#5e17eb]/40" : "bg-white border-gray-200"}`}>
                    <h4 className={`text-sm md:text-base font-semibold mb-2 ${theme === "dark" ? "text-cyan-400" : "text-cyan-600"}`}>{stat.label}</h4>
                    <p className={`text-lg md:text-xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>{stat.value}</p>
                  </div>
                ))}
              </div>
            )}

            {/* DESCRIPTION */}
            <p className={`whitespace-pre-line text-base md:text-lg leading-relaxed text-justify ${theme === "dark" ? "text-gray-300" : "text-gray-800"}`}>
              {activity.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* SKILLS */}
            {activity.skills && activity.skills.length > 0 && (
              <div className={`p-6 rounded-xl border ${theme === "dark" ? "bg-[#10002b] border-[#5e17eb]/30" : "bg-gray-50 border-gray-200"}`}>
                <h3 className={`text-2xl font-extrabold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
                  What you will learn
                </h3>
                <ul className={`list-disc pl-5 space-y-2 text-base md:text-lg ${theme === "dark" ? "text-gray-300" : "text-black"}`}>
                  {activity.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* REQUIREMENTS */}
            {activity.requirements && activity.requirements.length > 0 && (
              <div className={`p-6 rounded-xl border ${theme === "dark" ? "bg-[#10002b] border-[#5e17eb]/30" : "bg-gray-50 border-gray-200"}`}>
                <h3 className={`text-2xl font-extrabold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
                  What you need
                </h3>
                <ul className={`list-disc pl-5 space-y-2 text-base md:text-lg ${theme === "dark" ? "text-gray-300" : "text-black"}`}>
                  {activity.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* USEFUL RESOURCES */}
          {activity.links && activity.links.filter(l => l !== "").length > 0 && (
            <div>
              <h3 className={`text-2xl md:text-3xl font-extrabold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
                Useful Resources
              </h3>
              <ul className={`list-disc pl-6 space-y-3 text-base md:text-lg ${theme === "dark" ? "text-gray-300" : "text-black"}`}>
                {activity.links.filter(l => l !== "").map((link, i) => (
                  <li key={i} className="break-all">
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`hover:underline font-medium ${theme === "dark" ? "text-cyan-400" : "text-cyan-600"}`}
                    >
                      {link.includes("linkedin.com") ? "Lien LinkedIn Officiel (Photos & Résultats)" : link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* GALLERY RÉDUITE AUX 5 MEMBRES */}
          {activity.gallery && activity.gallery.length > 0 && (
            <div className="pt-8 border-t border-gray-300 dark:border-gray-700">
              <h3 className={`text-3xl md:text-4xl font-extrabold text-center mb-8 ${theme === "dark" ? "text-white" : "text-black"}`}>
                L'équipe participante (ENIAD)
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                {activity.gallery.map((img, idx) => (
                  <div key={idx} className="w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-full shadow-lg border-4 border-gray-200 dark:border-[#5e17eb] group relative">
                    <img 
                      src={img} 
                      alt={`Membre ENIAD ${idx + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>
    </PageWrapper>
  );
}