
export type Event = {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  tag: string;
  featured: boolean;
  image: string;
  details: string;
  time: string;
  registerLink: string;
  whatToExpect: string[];
  roadmapImage?: string;
  eventCode?: string; // ✅ optional here
};


export const events = [
  // {
  //   id: "devfest-2024",
  //   title: "DevFest 2024",
  //   date: "December 15, 2024",
  //   location: "SOIT Campus",
  //   description: "The biggest developer festival of the year featuring talks, workshops, and networking.",
  //   tag: "Flagship Event",
  //   image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
  //   details: "DevFest 2024 brings developers, designers, and tech enthusiasts together to explore cutting-edge technologies, participate in hands-on sessions, and network with like-minded professionals. Expect keynote speakers, live coding, and a celebration of community innovation! Tracks include Web, Cloud, AI, and Mobile.",
  //   time: "09:00 AM - 06:00 PM",
  //   featured: true,
  //   registerLink: "https://gdg.community.dev/events/details/google-gdg-bhopal-presents-devfest-bhopal-2024/",
  //   whatToExpect: [
  //     "Keynote sessions from Google experts",
  //     "Hands-on technical workshops",
  //     "Networking with 500+ developers",
  //     "Exclusive swags and merchandise",
  //     "Panel discussions on future tech"
  //   ]
  // },
  {
     id: "solution-challenge-2026",
  title: "Google Solution Challenge 2026",
  date: "Mar - Apr 2026",
  location: "Online",
  description:
    "Google Solution Challenge 2026 is a global hackathon by GDG where students build innovative solutions for real-world problems using Google technologies and compete for ₹10 Lakh+ prize pool.",
  tag: "On Going",
  featured: true,
  image: "/gdg-events/d6fc9124-59f7-4b50-a897-6039562cf58a.png",
  details:
    "In this global challenge, students develop impactful solutions aligned with the United Nations Sustainable Development Goals (SDGs). Participants will leverage technologies like AI, Firebase, Flutter, and Google Cloud. Top teams get a chance to win a ₹10 Lakh+ prize pool along with global recognition, mentorship, and exciting rewards.",
  time: "Submission Deadline: April 2026",
  registerLink:
    "https://promptwars.in/solutionchallenge2026.html",
  eventCode: "      V4J4EC",      // OPTIONAL
  whatToExpect: [
    "₹10 Lakh+ Prize Pool 💰",
    "Build real-world impactful projects using Google technologies",
    "Mentorship from Google experts and GDG leaders",
    "Opportunity to compete globally",
    "Certificates, recognition, and exciting rewards",
    "Hands-on experience with AI, Cloud, and App Development"
    ],

  roadmapImage : "/gdg-events/solutionChallengeRoadmap.png"// OPTIONAL
  },
  {
    id: "bit-n-build-hackathon",
    title: "Bit n Build Hackathon",
    date: "29 Dec - 17 Jan",
    location: "Online",
    description: "Compete in this high-energy hackathon to solve real-world challenges.",
    tag: "Completed",
    featured: false,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000",
    details: "Bit n Build Hackathon: Open Innovation Challenge. Join us for Bit n Build, a high-energy hackathon under our TechSprint campaign! We’re inviting developers to tackle real-world challenges through Open Innovation. Participants will build end-to-end solutions, leveraging Google Technologies like Flutter, Firebase, and Google Cloud. This is your chance to sharpen your skills with expert mentorship, collaborate with the GDG community, and win exclusive Google Swag and digital certificates. Whether you're a beginner or a pro, come turn your ideas into impact, master new tools, and get recognized on our community channels. Let’s build the future together!",
    time: "-----",
    registerLink: "https://vision.hack2skill.com/event/gdgoc-25-bitnbuildsoit",
    whatToExpect: [
      "Intensive Open Innovation Challenges",
      "Mentorship from Industry Experts",
      "Exclusive GDG Swag & Rewards",
      "Hands-on Solution Building"
    ]
  },
  {
    id: "gdg-orientation",
    title: "GDG Orientation",
    date: "November 7, 2025",
    location: "UIT RGPV Hall",
    description: "Welcome to the community! An introduction to GDG, our mission, and upcoming opportunities.",
    tag: "Completed",
    featured: false,
    image: "/gdg-events/Orientation.jpeg",
    details: "The event featured a compelling keynote session from Nistha Jain (Ex-Goldman Sachs), who shared invaluable career and technical wisdom. Developers then put their problem-solving skills to the test in the challenging and fun Da Jigsaw Code treasure hunt. Participants successfully navigated the community's key areas, with lucky winners taking home exclusive Google Swags! The orientation effectively outlined the year's upcoming opportunities, including workshops, hackathons, and speaker sessions.",
    time: "10:00 AM - 03:00 PM",
    registerLink: "",
    // registerLink is intentionally undefined here to show the conditional hiding
    whatToExpect: [
      "Speaker session (Nistha Jain)",
      "Da-jigsaw code (treasure hunt)",
      "Swags giveaway",
      "Community introduction"
    ]
  },
]