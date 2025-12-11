// Mock data for Dr. Aravind Krishnakumar's Portfolio

export const profileData = {
  name: "Dr. Aravind Krishnakumar",
  title: "Postdoctoral Fellow in Astrophysics",
  affiliation: "University of Liège, Belgium",
  email: "u246982@uliege.be",
  image: "/downloads/Profile_Pic.jpeg",
  tagline: "Exploring the cosmos through cometary science and observational astronomy",
  bio: "I am a physicist working in the field of observational astronomy, specializing in cometary science. I received my undergraduate degree in physics from the Sacred Heart College, Thevara, Kerala, India in 2013, my post-graduate degree in physics from Loyola College, Chennai, Tamil Nadu, India in 2015, and earned my PhD from IIT Gandhinagar working at Physical Research Laboratory, Ahmedabad, India in 2023. My research focuses on understanding comets - those celestial marvels composed of dust, rock, and ice that hold invaluable insights into the early stages of our solar system's formation.",
  socialLinks: {
    website: "https://draravind1192.github.io/",
    linkedin: "https://www.linkedin.com/in/dr-aravind-krishnakumar-14413668/",
    googleScholar: "https://scholar.google.com/citations?user=63MKgTkAAAAJ&hl=en",
    researchGate: "https://www.researchgate.net/profile/Aravind-Krishnakumar",
    orcid: "https://orcid.org/0000-0002-8328-5667"
  }
};

export const currentResearch = {
  title: "Cometary Science & Interstellar Objects",
  description: "My current research explores the significance of comets and their profound impact on our understanding of the cosmos. Comets provide us with invaluable insights into the early stages of our solar system's formation, offering a glimpse into the primordial material from which planets and other celestial bodies emerged. I study both solar system comets and external stellar system objects, including the fascinating interstellar comet 2I/Borisov.",
  focusAreas: [
    {
      title: "Interstellar Comets",
      description: "Studying rare visitors from other stellar systems like 2I/Borisov to understand extra-solar system composition"
    },
    {
      title: "Spectroscopic Analysis",
      description: "Long-term monitoring of cometary activity using advanced spectroscopic techniques"
    },
    {
      title: "Molecular Gas Production",
      description: "Analyzing production rates of molecular species (CN, C2, C3) in cometary atmospheres"
    },
    {
      title: "Volatile-Driven Activity",
      description: "Understanding how volatile compounds drive cometary behavior near perihelion"
    }
  ]
};

export const publications = [
  {
    id: 1,
    title: "Activity of the first interstellar comet 2I/Borisov around perihelion: results from Indian observatories",
    authors: "K Aravind, S Ganesh, K Venkataramani, et al.",
    journal: "Monthly Notices of the Royal Astronomical Society",
    year: 2021,
    citations: 32,
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=63MKgTkAAAAJ&citation_for_view=63MKgTkAAAAJ:d1gkVwhDpl0C"
  },
  {
    id: 2,
    title: "Long-term spectroscopic monitoring of comet 46P/Wirtanen",
    authors: "K Aravind, K Venkataramani, S Ganesh, E Jehin, Y Moulane",
    journal: "Journal of Astrophysics and Astronomy",
    year: 2024,
    citations: 3,
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=63MKgTkAAAAJ&citation_for_view=63MKgTkAAAAJ:WF5omc3nYNoC"
  },
  {
    id: 3,
    title: "Optical spectroscopy of comets using Hanle Echelle Spectrograph (HESP)",
    authors: "K Aravind, K Venkataramani, S Ganesh, et al.",
    journal: "Monthly Notices of the Royal Astronomical Society",
    year: 2024,
    citations: 1,
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=63MKgTkAAAAJ&citation_for_view=63MKgTkAAAAJ:LkGwnXOMwfcC"
  },
  {
    id: 4,
    title: "Optical observations and dust modelling of comet 156P/Russell-LINEAR",
    authors: "K Aravind, P Halder, S Ganesh, et al.",
    journal: "Icarus",
    year: 2022,
    citations: 1,
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=63MKgTkAAAAJ&citation_for_view=63MKgTkAAAAJ:qjMakFHDy7sC"
  },
  {
    id: 5,
    title: "Ionic emission from and activity evolution in comet C/2020 F3 (NEOWISE)",
    authors: "K Aravind, E Jehin, S Hmmidouch, et al.",
    journal: "Astronomy & Astrophysics",
    year: 2025,
    citations: 0,
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=63MKgTkAAAAJ&citation_for_view=63MKgTkAAAAJ:MXK_kJrjxJIC"
  }
];

export const talks = [
  {
    id: 1,
    title: "Activity Analysis of Interstellar Comet 2I/Borisov",
    event: "International Virtual Planet Research Conference (IVPR)",
    date: "2021",
    location: "Virtual Conference",
    description: "Presented comprehensive findings on the activity of the first interstellar comet 2I/Borisov during its perihelion passage. The talk covered spectroscopic observations from multiple Indian observatories, including the Himalayan Chandra Telescope. Key findings included the production rates of CN, C2, and C3 molecular species, dust production analysis, and comparison with solar system comets. The presentation highlighted the unique characteristics of this interstellar visitor and its implications for understanding extra-solar system composition.",
    image: "/downloads/talk_1.jpeg"
  },
  {
    id: 2,
    title: "Long-term Spectroscopic Monitoring of Cometary Activity",
    event: "Astronomical Society of India Meeting",
    date: "2024",
    location: "India",
    description: "Discussed the methodology and results of long-term spectroscopic monitoring campaigns for several comets including 46P/Wirtanen and C/2020 F3 (NEOWISE). The presentation focused on temporal variations in gas production rates, the evolution of spectral features across different heliocentric distances, and the correlation between solar activity and cometary emissions. Advanced data reduction techniques using the Hanle Echelle Spectrograph (HESP) were demonstrated.",
    image: "/downloads/talk_2.jpeg"
  },
  {
    id: 3,
    title: "The Carbon-Chain Depletion of Recently Observed Jupiter Family Comets",
    event: "Asteroids, Comets, Meteors Conference",
    date: "2023",
    location: "International",
    description: "Explored the phenomenon of carbon-chain depletion in Jupiter Family Comets through extensive photometric and spectroscopic observations. The talk presented statistical analysis of C2/CN and C3/CN ratios across multiple comets, revealing systematic differences between Jupiter Family Comets and long-period comets. Discussed implications for cometary taxonomy, formation regions in the early solar system, and dynamical evolution. Collaborative data from European and Indian observatories were showcased.",
    image: "/downloads/talk_3.jpeg"
  },
  {
    id: 4,
    title: "Spectropolarimetric Properties of Lunar Swirls",
    event: "Lunar and Planetary Science Conference",
    date: "2023",
    location: "USA",
    description: "Presented novel findings on the spectropolarimetric characteristics of lunar swirl Reiner Gamma using the EMPOL polarimeter. The presentation detailed unique regolith properties revealed through imaging polarimetry at large phase angles, including surface texture, grain size distribution, and magnetic field interactions. Discussed the correlation between spectropolarimetric signatures and surface magnetic anomalies, providing insights into lunar space weathering processes and the formation mechanisms of these enigmatic features.",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80"
  }
];

export const education = [
  {
    id: 1,
    degree: "Ph.D. in Physics",
    institution: "IIT Gandhinagar",
    location: "India",
    year: "2023",
    details: "Thesis focused on observational astronomy and cometary science at Physical Research Laboratory, Ahmedabad"
  },
  {
    id: 2,
    degree: "M.Sc. in Physics",
    institution: "Loyola College",
    location: "Chennai, India",
    year: "2015",
    details: "Specialized in theoretical and experimental physics"
  },
  {
    id: 3,
    degree: "B.Sc. in Physics",
    institution: "Sacred Heart College",
    location: "Thevara, Kerala, India",
    year: "2013",
    details: "Foundation in physics and mathematics"
  }
];

export const professionalExperience = [
  {
    id: 1,
    position: "Postdoctoral Fellow",
    institution: "University of Liège",
    location: "Belgium",
    period: "2023 - Present",
    details: "Conducting research on cometary science and interstellar objects. Collaborating with international teams on spectroscopic monitoring campaigns and data analysis from various observatories."
  },
  {
    id: 2,
    position: "Research Scholar",
    institution: "Physical Research Laboratory",
    location: "Ahmedabad, India",
    period: "2017 - 2023",
    details: "Conducted doctoral research in observational astronomy focusing on cometary activity and spectroscopic analysis. Operated and developed instruments including EMPOL polarimeter and worked with the Himalayan Chandra Telescope."
  },
  {
    id: 3,
    position: "Junior Research Fellow",
    institution: "Indian Institute of Astrophysics",
    location: "Bangalore, India",
    period: "2015 - 2017",
    details: "Worked on optical spectroscopy projects and assisted in observational campaigns. Gained expertise in astronomical instrumentation and data reduction techniques."
  }
];

export const skills = [
  {
    category: "Observational Techniques",
    items: ["Optical Spectroscopy", "Imaging Polarimetry", "Photometry", "Long-slit Spectroscopy"]
  },
  {
    category: "Instrumentation",
    items: ["Hanle Echelle Spectrograph (HESP)", "EMPOL Polarimeter", "Himalayan Chandra Telescope", "MISTRAL Spectrograph"]
  },
  {
    category: "Data Analysis",
    items: ["Spectral Analysis", "Gas Production Rate Calculations", "Dust Modeling", "Statistical Methods"]
  },
  {
    category: "Programming & Tools",
    items: ["Python", "IRAF", "IDL", "Data Visualization", "Scientific Computing"]
  },
  {
    category: "Research Areas",
    items: ["Cometary Science", "Solar System Astronomy", "Interstellar Objects", "Planetary Science"]
  }
];

export const metrics = {
  citations: 75,
  hIndex: 4,
  i10Index: 3,
  publications: 20
};

export const downloads = [
  {
    id: 1,
    title: "Curriculum Vitae",
    description: "Complete academic CV with research experience, publications, and achievements",
    fileName: "CV_Aravind_Krishnakumar.pdf",
    filePath: "/downloads/CV_Aravind_Krishnakumar.pdf",
    downloadUrl: "#"
  },
  {
    id: 2,
    title: "Research Statement",
    description: "Detailed overview of current and future research directions in cometary science",
    fileName: "",
    filePath: "",
    downloadUrl: "#"
  },
  {
    id: 3,
    title: "PhD Thesis",
    description: "Observational Studies of Cometary Activity and Spectroscopic Analysis",
    fileName: "",
    filePath: "",
    downloadUrl: "#"
  },
  {
    id: 4,
    title: "Publication List",
    description: "Comprehensive list of peer-reviewed publications and conference proceedings",
    fileName: "",
    filePath: "",
    downloadUrl: "#"
  }
];