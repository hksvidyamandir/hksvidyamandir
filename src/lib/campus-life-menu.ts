export type MegaMenuColumn = {
  title: string;
  badges: string[];
  items: string[];
};

export type CampusLifeCategory = {
  id: string;
  label: string;
  subtitle?: string;
  to: "/experiential-learning" | "/competitive-exams" | "/sports" | "/campus-life" | "/campus";
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
    to: "/experiential-learning",
    ctaLabel: "Explore All Laboratories",
    columns: [
      {
        title: "Core Science & Math Labs",
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
    to: "/competitive-exams",
    ctaLabel: "Explore Olympiad Preparation",
    columns: [
      {
        title: "Preparation & Grade 4+ Tracks",
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
    to: "/campus-life",
    ctaLabel: "Explore Student Development",
    columns: [
      {
        title: "Leadership & Life Skills",
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
    id: "events-achievements",
    label: "Events & Achievements",
    to: "/campus-life",
    ctaLabel: "Explore Events & Community",
    columns: [
      {
        title: "Celebrations, Exhibitions & Trips",
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
    to: "/campus-life",
    ctaLabel: "Enquire About Services",
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
