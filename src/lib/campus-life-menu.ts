export type MegaMenuColumn = {
  title: string;
  to: string;
  badges: string[];
  items: string[];
};

export type CampusLifeCategory = {
  id: string;
  label: string;
  subtitle?: string;
  to: string;
  ctaLabel: string;
  columns: [MegaMenuColumn, MegaMenuColumn];
};

export const CAMPUS_LIFE_MEGA_MENU: CampusLifeCategory[] = [
  {
    id: "experiential-learning",
    label: "Experiential Learning",
    to: "/experiential-learning",
    ctaLabel: "Explore Experiential Learning",
    columns: [
      {
        title: "Immersive & Discovery Zones",
        to: "/campus-life/immersive-discovery-zones",
        badges: ["9 Areas", "Hands-On"],
        items: [
          "Virtual Reality (VR) Room",
          "Augmented Reality (AR) Learning Room",
          "Astronomy and Space Exploration Zone",
          "Innovation and Discovery Centre",
          "Environmental and Sustainability Learning Zone",
        ],
      },
      {
        title: "Creative, Speech & Enterprise",
        to: "/campus-life/creative-speech-enterprise",
        badges: ["Studios & Centres", "All Grades"],
        items: [
          "Creative Arts and Design Studio",
          "Entrepreneurship and Business Simulation Centre",
          "Public Speaking and Debate Centre",
          "Heritage and Cultural Learning Zone",
        ],
      },
    ],
  },
  {
    id: "laboratories",
    label: "Laboratories",
    to: "/campus-life/laboratories",
    ctaLabel: "Explore All Laboratories",
    columns: [
      {
        title: "Core Science & Math Labs",
        to: "/campus-life/core-science-math-labs",
        badges: ["13+ Labs", "Practical Learning"],
        items: [
          "Physics Laboratory",
          "Chemistry Laboratory",
          "Biology Laboratory",
          "Mathematics Laboratory",
          "Astronomy Laboratory",
          "Environmental Science Laboratory",
          "STEM Labs",
        ],
      },
      {
        title: "Technology, AI & Maker Labs",
        to: "/campus-life/technology-ai-maker-labs",
        badges: ["Future Skills", "STEM & Robotics"],
        items: [
          "Computer Science Laboratory",
          "Robotics Laboratory",
          "Artificial Intelligence and Machine Learning Lab",
          "Coding and Programming Lab",
          "Electronics and Electronics Prototyping Lab",
          "Tinkering / Innovation Laboratory",
          "Maker Space and Design Lab",
        ],
      },
    ],
  },
  {
    id: "olympiad-preparation",
    label: "Olympiad Preparation",
    to: "/campus-life/olympiad-preparation",
    ctaLabel: "Explore Olympiad Preparation",
    columns: [
      {
        title: "Preparation & Grade 4+ Tracks",
        to: "/campus-life/olympiad-tracks",
        badges: ["15 Areas", "Grade 4 Onwards"],
        items: [
          "Olympiad Preparation Methodology",
          "Subject-wise Preparation",
          "Practice Tests and Mock Examinations",
          "Student Achievements and Recognition",
          "Science Olympiad (Grade 4 onwards)",
          "Mathematics Olympiad (Grade 4 onwards)",
          "English Olympiad (Grade 4 onwards)",
          "Cyber Olympiad (Grade 4 onwards)",
          "General Knowledge Olympiad (Grade 4 onwards)",
        ],
      },
      {
        title: "International Olympiads & MUN",
        to: "/campus-life/international-olympiads-mun",
        badges: ["Global Benchmarks", "Competitions"],
        items: [
          "International Mathematics Olympiad (IMO)",
          "National Science Olympiad (NSO)",
          "International English Olympiad (IEO)",
          "International Computer Science Olympiad (ICSO)",
          "International General Knowledge Olympiad (IGKO)",
          "Model United Nations (MUN)",
        ],
      },
    ],
  },
  {
    id: "sports-pe",
    label: "Sports & Physical Education",
    to: "/sports",
    ctaLabel: "Explore Sports & Fitness",
    columns: [
      {
        title: "Coaching & Outdoor Sports",
        to: "/campus-life/outdoor-sports",
        badges: ["25 Areas", "Outdoor & PE"],
        items: [
          "Professional Coaching and Training",
          "Indoor and Outdoor Sports Facilities",
          "Inter-School Competitions and Tournaments",
          "Physical Education Curriculum",
          "Cricket, Football, Basketball & Volleyball",
          "Kho-Kho & Kabaddi",
          "Skating & Horse Riding",
          "Adventure and Outdoor Activities",
        ],
      },
      {
        title: "Indoor, Wellness & Olympic Sports",
        to: "/campus-life/indoor-wellness-olympic-sports",
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
    id: "competitive-exams",
    label: "Competitive Exams",
    to: "/competitive-exams",
    ctaLabel: "Explore Competitive Exams",
    columns: [
      {
        title: "National Exams & Foundations",
        to: "/campus-life/national-exams",
        badges: ["National Exams", "Grade 6 Onwards"],
        items: [
          "Integrated Competitive Examination Preparation",
          "Early NEET and JEE Foundation Programmes (Grade 6+)",
          "Examination-wise Preparation Modules",
          "Academic and Aptitude Development",
          "Mock Tests and Performance Assessments",
        ],
      },
      {
        title: "International Exams & Admissions",
        to: "/campus-life/international-exams",
        badges: ["International Exams", "14 Areas"],
        items: [
          "Guidance for International University Admissions",
          "Digital SAT (DSAT)",
          "ACT & PSAT",
          "AP (Advanced Placement) Examinations",
          "Cambridge English Qualifications",
          "TOEFL & IELTS",
        ],
      },
    ],
  },
  {
    id: "student-development",
    label: "Student Development & Clubs",
    to: "/campus-life/student-development",
    ctaLabel: "Explore Student Development",
    columns: [
      {
        title: "Leadership & Life Skills",
        to: "/campus-life/leadership-life-skills",
        badges: ["21 Areas", "Whole Child"],
        items: [
          "Personality Development Programmes",
          "Leadership and Team-Building Activities",
          "Communication and Public Speaking",
          "Critical Thinking and Problem-Solving",
          "Creativity, Innovation & Emotional Intelligence",
          "Career Awareness and Counselling",
          "Life Skills Education - Organic Farming, Horticulture",
          "Community Engagement & Service Initiatives",
          "Student Leadership Council",
        ],
      },
      {
        title: "Clubs, Arts & Expression",
        to: "/campus-life/clubs-arts-expression",
        badges: ["Student Clubs", "Co-Curricular"],
        items: [
          "Debate and Public Speaking Club",
          "Creative Writing Club",
          "Reading and Literary Club",
          "Environmental Club",
          "Entrepreneurship Club",
          "Photography and Film Club",
          "Music and Performing Arts",
          "Theatre and Drama",
          "Art and Craft",
        ],
      },
    ],
  },
  {
    id: "student-welfare",
    label: "Student Welfare & Facilities",
    to: "/campus-life/student-welfare",
    ctaLabel: "Explore Student Welfare & Facilities",
    columns: [
      {
        title: "Learning & Campus Infrastructure",
        to: "/campus-life/learning-campus-infrastructure",
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
        to: "/campus-life/health-support-safety",
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
    id: "events-achievements",
    label: "Events & Achievements",
    to: "/campus-life/events-achievements",
    ctaLabel: "Explore Events & Achievements",
    columns: [
      {
        title: "Celebrations, Exhibitions & Trips",
        to: "/campus-life/celebrations-exhibitions-trips",
        badges: ["15 Areas", "Annual Calendar"],
        items: [
          "Annual Day Celebrations & Sports Day",
          "Cultural Festivals & Pet Day",
          "Science Exhibitions",
          "Robotics and Innovation Competitions",
          "Inter-School Competitions",
          "Educational Excursions and Field Trips",
          "Workshops and Guest Lectures",
        ],
      },
      {
        title: "Recognition, Tours & Initiatives",
        to: "/campus-life/recognition-tours-initiatives",
        badges: ["Achievements", "Global Exposure"],
        items: [
          "Olympiad Achievements",
          "Academic Achievements",
          "Student Awards and Recognition",
          "International Educational Tour (NASA, ISRO, Kennedy Space Centre, Singapore, Malaysia)",
          "School Newsletters",
          "Student Projects and Initiatives",
        ],
      },
    ],
  },
  {
    id: "additional-services",
    label: "Additional Services",
    to: "/campus-life/additional-services",
    ctaLabel: "Explore Additional Services",
    columns: [
      {
        title: "After-School, Camps & Care",
        to: "/campus-life/after-school-camps-care",
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
        to: "/campus-life/enrichment-parent-sessions",
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
