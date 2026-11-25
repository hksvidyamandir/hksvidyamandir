export type MegaMenuColumn = {
  title: string;
  badges: string[];
  items: string[];
};

export type CampusLifeCategory = {
  id: string;
  label: string;
  subtitle?: string;
  to: "/krishi-vidya" | "/khel-vidya" | "/anubhav-vidya" | "/samskriti-vidya" | "/campus" | "/campus-life";
  ctaLabel: string;
  columns: [MegaMenuColumn, MegaMenuColumn];
};

export const CAMPUS_LIFE_MEGA_MENU: CampusLifeCategory[] = [
  {
    id: "krishi-vidya",
    label: "Krishi Vidya",
    subtitle: "Farming & Sustainability",
    to: "/krishi-vidya",
    ctaLabel: "Explore Krishi Vidya",
    columns: [
      {
        title: "Organic Farming & Horticulture",
        badges: ["Farming Related", "Hands-On"],
        items: [
          "Life Skills Education - Organic Farming & Horticulture",
          "Planting, Gardening & Harvesting",
          "Composting & Soil Care",
          "Campus Green Spaces & Gardens",
        ],
      },
      {
        title: "Environment & Sustainability",
        badges: ["Ecology", "Stewardship"],
        items: [
          "Environmental and Sustainability Learning Zone",
          "Environmental Science Laboratory",
          "Environmental Club",
          "Pet Day & Animal Care",
          "Community Engagement and Social Responsibility",
        ],
      },
    ],
  },
  {
    id: "khel-vidya",
    label: "Khel Vidya",
    subtitle: "Sports & Physical Education",
    to: "/khel-vidya",
    ctaLabel: "Explore Khel Vidya",
    columns: [
      {
        title: "Coaching & Outdoor Sports",
        badges: ["Sports Related", "25 Areas"],
        items: [
          "Professional Coaching and Training",
          "Indoor and Outdoor Sports Facilities",
          "Inter-School Competitions and Tournaments",
          "Physical Education Curriculum & Sports Day",
          "Cricket, Football, Basketball & Volleyball",
          "Kho-Kho, Kabaddi, Skating & Horse Riding",
          "Adventure and Outdoor Activities",
        ],
      },
      {
        title: "Indoor, Wellness & Olympic Sports",
        badges: ["Indoor Games", "Olympic Sports"],
        items: [
          "Chess, Table Tennis, Badminton & Carrom",
          "Indoor Games & Recreation",
          "Aerobics, Yoga & Meditation",
          "Dance and Movement & Martial Arts",
          "Athletics & Archery",
          "Swimming & Gymnastics",
          "Other Olympic Sports",
        ],
      },
    ],
  },
  {
    id: "anubhav-vidya",
    label: "Anubhav Vidya",
    subtitle: "Skills, Labs & Competitive Edge",
    to: "/anubhav-vidya",
    ctaLabel: "Explore Anubhav Vidya",
    columns: [
      {
        title: "Experiential Zones & Laboratories",
        badges: ["Skill Related", "13+ Labs & 9 Zones"],
        items: [
          "Virtual Reality (VR) & Augmented Reality (AR) Rooms",
          "Astronomy & Space Exploration Zone & Lab",
          "Physics, Chemistry, Biology & Mathematics Labs",
          "Computer Science, Coding & Programming Lab",
          "Robotics, AI & Machine Learning Labs",
          "Electronics Prototyping, STEM & Tinkering Labs",
          "Innovation, Discovery & Maker Space Design Lab",
          "Entrepreneurship & Business Simulation Centre",
        ],
      },
      {
        title: "Skills, Olympiads & Competitive Exams",
        badges: ["Future Skills", "Global Exposure"],
        items: [
          "Critical Thinking, Problem-Solving & Innovation",
          "Career Awareness and Counselling",
          "Olympiad Preparation (IMO, NSO, IEO, ICSO, IGKO & MUN)",
          "Early NEET and JEE Foundation (Grade 6 onwards)",
          "Digital SAT, ACT, PSAT, AP, Cambridge, TOEFL & IELTS",
          "Science Exhibitions & Robotics Competitions",
          "Educational Excursions & International Tour (NASA, ISRO, Singapore)",
        ],
      },
    ],
  },
  {
    id: "samskriti-vidya",
    label: "Samskriti Vidya",
    subtitle: "Art, Culture, Clubs & Events",
    to: "/samskriti-vidya",
    ctaLabel: "Explore Samskriti Vidya",
    columns: [
      {
        title: "Arts, Heritage & Student Clubs",
        badges: ["Art & Culture", "Creative Expression"],
        items: [
          "Creative Arts and Design Studio",
          "Heritage and Cultural Learning Zone",
          "Music, Performing Arts, Theatre & Drama",
          "Art and Craft & Photography and Film Club",
          "Debate, Public Speaking & Creative Writing Clubs",
          "Reading, Literary & Entrepreneurship Clubs",
        ],
      },
      {
        title: "Leadership, Celebrations & Culture",
        badges: ["Events & Clubs", "Community"],
        items: [
          "Annual Day Celebrations & Cultural Festivals",
          "Personality Development & Emotional Intelligence",
          "Leadership, Team-Building & Student Leadership Council",
          "Community Service Initiatives",
          "Workshops, Guest Lectures & School Newsletters",
          "Student Awards, Recognition & Initiatives",
        ],
      },
    ],
  },
  {
    id: "student-welfare",
    label: "Student Welfare & Facilities",
    to: "/campus",
    ctaLabel: "Explore Campus & Facilities",
    columns: [
      {
        title: "Learning & Campus Infrastructure",
        badges: ["8 Areas", "Campus"],
        items: [
          "Smart Classrooms",
          "Library and Reading Spaces",
          "Transportation Facilities",
          "Cafeteria and Dining Facilities",
        ],
      },
      {
        title: "Health, Support & Safety",
        badges: ["Wellbeing", "Safe Campus"],
        items: [
          "Medical and First-Aid Facilities / Medical Room",
          "Counselling and Student Support",
          "Hygiene and Sanitation",
          "Safety and Security Measures",
        ],
      },
    ],
  },
  {
    id: "additional-services",
    label: "Additional Services",
    to: "/campus-life",
    ctaLabel: "Explore Campus Life",
    columns: [
      {
        title: "After-School, Camps & Care",
        badges: ["Extended Support", "Proposed"],
        items: [
          "After-school programmes",
          "Sports coaching",
          "Summer and winter camps",
          "Weekend workshops",
          "Day care and extended care",
        ],
      },
      {
        title: "Enrichment & Parent Sessions",
        badges: ["Skill Building", "Community"],
        items: [
          "Music and dance classes",
          "Spoken English and language classes",
          "Remedial and booster classes",
          "Parent workshops",
        ],
      },
    ],
  },
];
