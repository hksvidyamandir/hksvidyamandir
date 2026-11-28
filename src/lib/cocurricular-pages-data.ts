/* Auto-generated from hks-site_(1).zip co-curricular subpages (26 pages) */

export type CoCurricularSection =
  | "sports"
  | "experiential"
  | "labs"
  | "olympiad"
  | "compete"
  | "development"
  | "welfare"
  | "events"
  | "services"
  | "overview";

export type CoCurricularWidgetConfig = {
  type:
    | "filter"
    | "explorer"
    | "flip"
    | "quiz"
    | "schedule"
    | "matrix"
    | "wheel"
    | "puzzle"
    | "robot"
    | "radar"
    | "layers"
    | "route"
    | "months"
    | "planner"
    | "motion"
    | "arcs"
    | "quadrant"
    | "tabs"
    | "checklist";
  cats?: unknown;
  items?: unknown;
  ordered?: unknown;
  hint?: unknown;
  qs?: unknown;
  results?: unknown;
  top?: unknown;
  lead?: unknown;
  empty?: unknown;
  emptyNote?: unknown;
  after?: unknown;
  rows?: unknown;
  note?: unknown;
  cols?: unknown;
  center?: unknown;
  auto?: unknown;
  walls?: unknown;
  goal?: unknown;
  title?: unknown;
  text?: unknown;
  skills?: unknown;
  stops?: unknown;
  label?: unknown;
  hot?: unknown;
  days?: unknown;
  motions?: unknown;
  pro?: unknown;
  opp?: unknown;
  btn?: unknown;
  home?: unknown;
  blobs?: unknown;
  dest?: unknown;
  ax?: unknown;
  tabs?: unknown;
  start?: unknown;
  mid?: unknown;
  done?: unknown;
  [key: string]: unknown;
};

export type CoCurricularBand =
  | {
      kind: "widget";
      ground: "paper" | "soft" | "cream";
      kicker: string;
      title: string;
      lede: string;
      widgetKey: string;
    }
  | {
      kind: "cards";
      ground: "paper" | "soft" | "cream";
      cols: 2 | 3 | 4;
      kicker: string;
      title: string;
      lede: string;
      items: { num?: string; tag?: string; title: string; desc: string }[];
    }
  | {
      kind: "steps3";
      ground: "paper" | "soft" | "cream";
      kicker: string;
      title: string;
      lede: string;
      items: { title: string; desc: string }[];
    };

export type CoCurricularPageData = {
  slug: string;
  sec: CoCurricularSection;
  seoTitle: string;
  seoDescription: string;
  name: string;
  crumbs: { label: string; to?: string }[];
  stepTag: string;
  stepSub: string;
  h1: string;
  lede: string;
  subnav: { to: string; active: boolean; label: string }[];
  heroSvg: string;
  stats: { val: string; label: string; sub: string }[];
  intro: {
    kicker: string;
    title: string;
    lede: string;
    ticks: string[];
    sideBox: { title: string; items: string[] } | null;
  } | null;
  bands: CoCurricularBand[];
  related: { to: string; kicker: string; title: string; desc: string }[];
  faqTitle: string;
  faqs: { q: string; a: string }[];
  tagline: { text: string; note?: string } | null;
  widgets: Record<string, CoCurricularWidgetConfig>;
};

export const COCURRICULAR_PAGES: Record<string, CoCurricularPageData> = {
  "additional-services": {
    "slug": "additional-services",
    "sec": "services",
    "seoTitle": "Additional services",
    "seoDescription": "Proposed after school study, sports coaching, camps, workshops, music, languages, remedial classes, parent workshops and day care at HKS Vidyamandir.",
    "name": "additional services",
    "crumbs": [
      {
        "label": "Home",
        "to": "/"
      },
      {
        "label": "Co-curricular",
        "to": "/campus-life"
      },
      {
        "label": "Additional services",
        "to": "/campus-life/additional-services"
      },
      {
        "label": "Overview"
      }
    ],
    "stepTag": "Additional services",
    "stepSub": "9 proposed services",
    "h1": "Additional services and extended programmes",
    "lede": "Extended services for busy families and extra talents, from after school study and sports coaching to camps, workshops and parent sessions.",
    "subnav": [
      {
        "to": "/campus-life/additional-services",
        "active": true,
        "label": "Overview"
      },
      {
        "to": "/campus-life/after-school-camps-care",
        "active": false,
        "label": "After school and camps"
      },
      {
        "to": "/campus-life/enrichment-parent-sessions",
        "active": false,
        "label": "Enrichment and parents"
      }
    ],
    "heroSvg": "<svg viewBox=\"0 0 520 420\" aria-hidden=\"true\">\n  <circle cx=\"380\" cy=\"110\" r=\"120\" fill=\"rgba(255,255,255,.08)\"/>\n  <circle cx=\"120\" cy=\"330\" r=\"50\" fill=\"rgba(255,255,255,.06)\"/>\n  <g transform=\"translate(260 210) rotate(0) scale(1.25)\"><g class=\"bob\"><rect x=\"-100\" y=\"-80\" width=\"200\" height=\"170\" rx=\"20\" fill=\"#fff\"/><path d=\"M-100-40h200\" stroke=\"var(--t)\" stroke-width=\"8\"/><path d=\"M-60-100v40M60-100v40\" stroke=\"#ffd27a\" stroke-width=\"12\" stroke-linecap=\"round\"/><circle cx=\"-40\" cy=\"10\" r=\"12\" fill=\"var(--t)\"/><circle cx=\"0\" cy=\"10\" r=\"12\" fill=\"#ffd27a\"/><circle cx=\"40\" cy=\"10\" r=\"12\" fill=\"var(--t)\"/><circle cx=\"-40\" cy=\"50\" r=\"12\" fill=\"#ffd27a\"/></g></g>\n  <g fill=\"#ffd27a\"><circle class=\"tw1\" cx=\"90\" cy=\"90\" r=\"7\"/><circle class=\"tw2\" cx=\"450\" cy=\"350\" r=\"5\"/><circle class=\"tw1\" cx=\"420\" cy=\"60\" r=\"4\"/></g>\n</svg>",
    "stats": [
      {
        "val": "9",
        "label": "Services",
        "sub": "Extended learning and care"
      },
      {
        "val": "Flexible",
        "label": "Timing",
        "sub": "After school and weekends"
      },
      {
        "val": "Camps",
        "label": "Holidays",
        "sub": "Summer and winter"
      },
      {
        "val": "Family",
        "label": "Support",
        "sub": "Parent workshops and day care"
      }
    ],
    "intro": {
      "kicker": "Extended learning, coaching and care",
      "title": "Introduced step by step",
      "lede": "Services are introduced gradually, as the school confirms space, specialist staff and timings.",
      "ticks": [
        "Supervised after school study, homework support and activity hours",
        "Batch sports coaching and holiday camps in sports, art and robotics",
        "Music, dance, spoken English and remedial or booster sessions",
        "Parent workshops and safe extended day care"
      ],
      "sideBox": {
        "title": "Status",
        "items": [
          "All services are proposed",
          "Each opens once confirmed",
          "Fees, if any, are shared in advance"
        ]
      }
    },
    "bands": [
      {
        "kind": "widget",
        "ground": "soft",
        "kicker": "Tell us what you'd use",
        "title": "Plan your family's week",
        "lede": "Tap the services and days your family is interested in. It helps us plan which batches to open first.",
        "widgetKey": "sv_p"
      },
      {
        "kind": "cards",
        "ground": "soft",
        "cols": 3,
        "kicker": "After school, enrichment and family support",
        "title": "Nine proposed services",
        "lede": "All marked as planned until confirmed.",
        "items": [
          {
            "num": "01",
            "title": "After school programmes",
            "desc": "Supervised study, homework help and an activity hour."
          },
          {
            "num": "02",
            "title": "Sports coaching",
            "desc": "Batch coaching in cricket, football, basketball, badminton, skating, swimming and more."
          },
          {
            "num": "03",
            "title": "Summer and winter camps",
            "desc": "Holiday camps in sports, art, coding and robotics."
          },
          {
            "num": "04",
            "title": "Weekend workshops",
            "desc": "Short sessions on art, science, public speaking and life skills."
          },
          {
            "num": "05",
            "title": "Music and dance classes",
            "desc": "Vocal music, instruments, classical and western dance."
          },
          {
            "num": "06",
            "title": "Spoken English and languages",
            "desc": "Fluency practice in English, Hindi and Kannada."
          },
          {
            "num": "07",
            "title": "Remedial and booster classes",
            "desc": "Support for fundamentals and challenge tracks for advanced learners."
          },
          {
            "num": "08",
            "title": "Parent workshops",
            "desc": "Study habits, healthy screen time and exam confidence."
          },
          {
            "num": "09",
            "title": "Day care and extended care",
            "desc": "Supervised care before and after school hours."
          }
        ]
      },
      {
        "kind": "steps3",
        "ground": "soft",
        "kicker": "Convenient, trusted support on campus",
        "title": "How services roll out",
        "lede": "Three steps.",
        "items": [
          {
            "title": "Confirm interest",
            "desc": "Services open as the school confirms spaces, staff and timings."
          },
          {
            "title": "Join structured batches",
            "desc": "Students enrol in supervised study, coaching, camps or workshops."
          }
        ]
      }
    ],
    "related": [
      {
        "to": "/campus-life/after-school-camps-care",
        "kicker": "In this section",
        "title": "After school, camps and care",
        "desc": "An afternoon after the bell"
      },
      {
        "to": "/campus-life/enrichment-parent-sessions",
        "kicker": "In this section",
        "title": "Enrichment and parent sessions",
        "desc": "Workshop themes for parents"
      },
      {
        "to": "/khel-vidya",
        "kicker": "Co-curricular track",
        "title": "Khel Vidya",
        "desc": "Coaching batches and camps"
      }
    ],
    "faqTitle": "Questions about additional services",
    "faqs": [
      {
        "q": "Are these services available now?",
        "a": "They are proposed and open step by step once the school confirms space, staff and timings."
      },
      {
        "q": "Do they cost extra?",
        "a": "Some may carry fees. Details are shared before enrolment."
      },
      {
        "q": "Can my child join more than one?",
        "a": "Yes, timetables permitting."
      }
    ],
    "tagline": {
      "text": "When school ends, *the *learning *and *the *care *don't *have *to.",
      "note": ""
    },
    "widgets": {
      "sv_p": {
        "type": "planner",
        "rows": [
          "After school study",
          "Sports coaching",
          "Music and dance",
          "Spoken English",
          "Remedial or booster",
          "Day care"
        ]
      }
    }
  },
  "after-school-camps-care": {
    "slug": "after-school-camps-care",
    "sec": "services",
    "seoTitle": "After school, camps and care",
    "seoDescription": "Proposed after school study, sports coaching, holiday camps, weekend workshops and day care at HKS Vidyamandir.",
    "name": "after school and camps",
    "crumbs": [
      {
        "label": "Home",
        "to": "/"
      },
      {
        "label": "Co-curricular",
        "to": "/campus-life"
      },
      {
        "label": "Additional services",
        "to": "/campus-life/additional-services"
      },
      {
        "label": "After school and camps"
      }
    ],
    "stepTag": "Additional services",
    "stepSub": "Extended hours",
    "h1": "After school programmes, camps and care",
    "lede": "Supervised after school study, batch sports coaching, holiday camps, weekend workshops and extended day care.",
    "subnav": [
      {
        "to": "/campus-life/additional-services",
        "active": false,
        "label": "Overview"
      },
      {
        "to": "/campus-life/after-school-camps-care",
        "active": true,
        "label": "After school and camps"
      },
      {
        "to": "/campus-life/enrichment-parent-sessions",
        "active": false,
        "label": "Enrichment and parents"
      }
    ],
    "heroSvg": "<svg viewBox=\"0 0 520 420\" aria-hidden=\"true\">\n  <circle cx=\"140\" cy=\"300\" r=\"90\" fill=\"rgba(255,255,255,.08)\"/>\n  <circle cx=\"420\" cy=\"120\" r=\"50\" fill=\"rgba(255,255,255,.06)\"/>\n  <g transform=\"translate(260 210) rotate(-8) scale(1.25)\"><g class=\"bob\"><rect x=\"-100\" y=\"-80\" width=\"200\" height=\"170\" rx=\"20\" fill=\"#fff\"/><path d=\"M-100-40h200\" stroke=\"var(--t)\" stroke-width=\"8\"/><path d=\"M-60-100v40M60-100v40\" stroke=\"#ffd27a\" stroke-width=\"12\" stroke-linecap=\"round\"/><circle cx=\"-40\" cy=\"10\" r=\"12\" fill=\"var(--t)\"/><circle cx=\"0\" cy=\"10\" r=\"12\" fill=\"#ffd27a\"/><circle cx=\"40\" cy=\"10\" r=\"12\" fill=\"var(--t)\"/><circle cx=\"-40\" cy=\"50\" r=\"12\" fill=\"#ffd27a\"/></g></g>\n  <g fill=\"#ffd27a\"><circle class=\"tw1\" cx=\"460\" cy=\"330\" r=\"7\"/><circle class=\"tw2\" cx=\"70\" cy=\"90\" r=\"5\"/><circle class=\"tw1\" cx=\"380\" cy=\"60\" r=\"4\"/></g>\n</svg>",
    "stats": [
      {
        "val": "9",
        "label": "Services",
        "sub": "Extended learning and care"
      },
      {
        "val": "Flexible",
        "label": "Timing",
        "sub": "After school and weekends"
      },
      {
        "val": "Camps",
        "label": "Holidays",
        "sub": "Summer and winter"
      },
      {
        "val": "Family",
        "label": "Support",
        "sub": "Parent workshops and day care"
      }
    ],
    "intro": {
      "kicker": "After the bell",
      "title": "Productive, joyful hours after school",
      "lede": "Extended hour programmes combine homework support, play and creative discovery, giving children structure and working parents peace of mind.",
      "ticks": [
        "Supervised homework and study hour right after classes",
        "Batch sports coaching in popular disciplines",
        "Summer and winter camps blending sports, art and robotics",
        "Supervised before and after school day care"
      ],
      "sideBox": {
        "title": "Good for",
        "items": [
          "Working parents",
          "Children who like structure",
          "Children who want more sport or art"
        ]
      }
    },
    "bands": [
      {
        "kind": "widget",
        "ground": "soft",
        "kicker": "After the bell",
        "title": "A sample afternoon",
        "lede": "How an extended day could look. Scroll through it.",
        "widgetKey": "ac_s"
      },
      {
        "kind": "cards",
        "ground": "soft",
        "cols": 3,
        "kicker": "Five extended care options",
        "title": "Choose what fits",
        "lede": "All proposed, opening as confirmed.",
        "items": [
          {
            "num": "01",
            "title": "After school programmes",
            "desc": "Supervised study, homework help and an active wind down hour."
          },
          {
            "num": "02",
            "title": "Sports coaching",
            "desc": "Batch coaching in cricket, football, basketball, badminton, skating and swimming."
          },
          {
            "num": "03",
            "title": "Summer and winter camps",
            "desc": "Holiday camps in sports, art, coding and robotics."
          },
          {
            "num": "04",
            "title": "Weekend workshops",
            "desc": "Short sessions on art, science, public speaking and life skills."
          },
          {
            "num": "05",
            "title": "Day care and extended care",
            "desc": "Supervised care before and after regular school hours."
          }
        ]
      },
      {
        "kind": "widget",
        "ground": "soft",
        "kicker": "Holiday camps",
        "title": "Two seasons, many choices",
        "lede": "Sample camp themes.",
        "widgetKey": "ac_t"
      },
      {
        "kind": "steps3",
        "ground": "paper",
        "kicker": "How services roll out",
        "title": "Three steps",
        "lede": "From interest to enrolment.",
        "items": [
          {
            "title": "Confirm interest",
            "desc": "Services open as the school confirms spaces, staff and timings."
          },
          {
            "title": "Join structured batches",
            "desc": "Students enrol in supervised study, coaching, camps or workshops."
          }
        ]
      }
    ],
    "related": [
      {
        "to": "/campus-life/additional-services",
        "kicker": "Section overview",
        "title": "Additional services",
        "desc": "Plan your family's week"
      },
      {
        "to": "/campus-life/enrichment-parent-sessions",
        "kicker": "In this section",
        "title": "Enrichment and parents",
        "desc": "Workshop themes"
      },
      {
        "to": "/sports",
        "kicker": "Sports",
        "title": "Sports and PE",
        "desc": "All disciplines"
      }
    ],
    "faqTitle": "Questions about after school and camps",
    "faqs": [
      {
        "q": "Is homework support supervised?",
        "a": "Yes. The study hour is supervised by staff."
      },
      {
        "q": "How long is extended care?",
        "a": "Timings will be shared when the service opens."
      },
      {
        "q": "Are camps open to children from other schools?",
        "a": "Details will be confirmed when camps are announced."
      }
    ],
    "tagline": null,
    "widgets": {
      "ac_s": {
        "type": "schedule",
        "rows": [
          [
            "Bell",
            "School ends",
            "Snack and a short break"
          ],
          [
            "+ 30 min",
            "Study hour",
            "Homework with a supervisor"
          ],
          [
            "+ 90 min",
            "Activity",
            "Sports coaching, art or music batch"
          ],
          [
            "+ 150 min",
            "Wind down",
            "Reading, quiet games and pickup"
          ]
        ],
        "note": "Proposed format. Timings will be confirmed by the school."
      },
      "ac_t": {
        "type": "tabs",
        "tabs": [
          [
            "Summer camp",
            [
              [
                "Multi sport",
                "Football, cricket, skating and games"
              ],
              [
                "Art and craft",
                "Painting, clay and design"
              ],
              [
                "Coding and robotics",
                "Build and program a robot"
              ]
            ]
          ],
          [
            "Winter camp",
            [
              [
                "Athletics",
                "Speed, agility and fun races"
              ],
              [
                "Theatre",
                "Short plays and performance"
              ],
              [
                "Science",
                "Experiments and maker challenges"
              ]
            ]
          ]
        ],
        "note": "Sample themes. Camps are confirmed and announced by the school."
      }
    }
  },
  "celebrations-exhibitions-trips": {
    "slug": "celebrations-exhibitions-trips",
    "sec": "events",
    "seoTitle": "Celebrations, exhibitions and trips",
    "seoDescription": "Annual Day, festivals, Pet Day, science exhibitions, robotics contests, excursions and guest lectures at HKS Vidyamandir.",
    "name": "celebrations and trips",
    "crumbs": [
      {
        "label": "Home",
        "to": "/"
      },
      {
        "label": "Co-curricular",
        "to": "/campus-life"
      },
      {
        "label": "Events",
        "to": "/campus-life/events-achievements"
      },
      {
        "label": "Celebrations and trips"
      }
    ],
    "stepTag": "Events",
    "stepSub": "Annual calendar",
    "h1": "Celebrations, exhibitions and field trips",
    "lede": "Community traditions, hands on exhibitions, inter-school contests, guest workshops and excursions.",
    "subnav": [
      {
        "to": "/campus-life/events-achievements",
        "active": false,
        "label": "Overview"
      },
      {
        "to": "/campus-life/celebrations-exhibitions-trips",
        "active": true,
        "label": "Celebrations and trips"
      },
      {
        "to": "/campus-life/recognition-tours-initiatives",
        "active": false,
        "label": "Recognition and tours"
      }
    ],
    "heroSvg": "<svg viewBox=\"0 0 520 420\" aria-hidden=\"true\">\n  <circle cx=\"140\" cy=\"300\" r=\"90\" fill=\"rgba(255,255,255,.08)\"/>\n  <circle cx=\"420\" cy=\"120\" r=\"50\" fill=\"rgba(255,255,255,.06)\"/>\n  <g transform=\"translate(260 210) rotate(-8) scale(1.25)\"><g class=\"bob\"><path d=\"M-90 90L-30-90 90 30Z\" fill=\"#fff\"/><circle cx=\"40\" cy=\"-70\" r=\"12\" fill=\"#ffd27a\"/><circle cx=\"90\" cy=\"-20\" r=\"8\" fill=\"#fff\"/><rect x=\"60\" y=\"-100\" width=\"12\" height=\"12\" fill=\"#ffd27a\" transform=\"rotate(30 66 -94)\"/><path d=\"M-50 40l40-90\" stroke=\"var(--t)\" stroke-width=\"8\"/></g></g>\n  <g fill=\"#ffd27a\"><circle class=\"tw1\" cx=\"460\" cy=\"330\" r=\"7\"/><circle class=\"tw2\" cx=\"70\" cy=\"90\" r=\"5\"/><circle class=\"tw1\" cx=\"380\" cy=\"60\" r=\"4\"/></g>\n</svg>",
    "stats": [
      {
        "val": "15",
        "label": "Areas",
        "sub": "Events, trips and awards"
      },
      {
        "val": "Annual",
        "label": "Calendar",
        "sub": "Celebrations and festivals"
      },
      {
        "val": "Showcases",
        "label": "Contests",
        "sub": "Science and robotics"
      },
      {
        "val": "Global",
        "label": "Tours",
        "sub": "Excursions and study tours"
      }
    ],
    "intro": {
      "kicker": "Memories that shape childhood",
      "title": "Learning that leaves the classroom",
      "lede": "Festivals, exhibitions and excursions bring students, teachers and parents together, and extend learning beyond the classroom.",
      "ticks": [
        "Inclusive participation so every child gets a stage",
        "Student built exhibits in science, maths, art and robotics",
        "Age appropriate trips across Bengaluru and beyond",
        "Interactive workshops and guest talks"
      ],
      "sideBox": {
        "title": "Every trip has",
        "items": [
          "A learning goal",
          "Signed parent consent",
          "Staff supervision throughout"
        ]
      }
    },
    "bands": [
      {
        "kind": "widget",
        "ground": "soft",
        "kicker": "Trips by age",
        "title": "Where children go at each stage",
        "lede": "Sample destinations that match each age. Actual trips are announced each year.",
        "widgetKey": "ct_t"
      },
      {
        "kind": "cards",
        "ground": "soft",
        "cols": 3,
        "kicker": "Events through the year",
        "title": "Seven kinds of events",
        "lede": "Celebrate, build, compete and explore.",
        "items": [
          {
            "num": "01",
            "title": "Annual Day and Sports Day",
            "desc": "Performing arts, creativity, races, games and team spirit."
          },
          {
            "num": "02",
            "title": "Cultural festivals and Pet Day",
            "desc": "Traditions, plus lessons in kindness on Pet Day."
          },
          {
            "num": "03",
            "title": "Science exhibitions",
            "desc": "Students design, demonstrate and explain working models."
          },
          {
            "num": "04",
            "title": "Robotics and innovation competitions",
            "desc": "Friendly contests in coding, robotics design and engineering."
          },
          {
            "num": "05",
            "title": "Inter-school competitions",
            "desc": "HKS representation in academic, cultural and sporting events."
          },
          {
            "num": "06",
            "title": "Educational excursions",
            "desc": "Guided trips to museums, nature and industry."
          },
          {
            "num": "07",
            "title": "Workshops and guest lectures",
            "desc": "Sessions with visiting authors, scientists and mentors."
          }
        ]
      },
      {
        "kind": "widget",
        "ground": "soft",
        "kicker": "Exhibition project",
        "title": "From idea to exhibition stand",
        "lede": "How a science exhibition project comes together.",
        "widgetKey": "ct_s"
      }
    ],
    "related": [
      {
        "to": "/campus-life/events-achievements",
        "kicker": "Section overview",
        "title": "Events and achievements",
        "desc": "The school year"
      },
      {
        "to": "/campus-life/recognition-tours-initiatives",
        "kicker": "In this section",
        "title": "Recognition and tours",
        "desc": "Study tour map"
      },
      {
        "to": "/krishi-vidya",
        "kicker": "Co-curricular track",
        "title": "Krishi Vidya",
        "desc": "Pet Day in detail"
      }
    ],
    "faqTitle": "Questions about celebrations and trips",
    "faqs": [
      {
        "q": "Are trips compulsory?",
        "a": "Trips are part of learning and strongly encouraged. Families give consent for each trip."
      },
      {
        "q": "Is there a cost for trips?",
        "a": "Any costs are shared in advance with the trip details."
      },
      {
        "q": "Who goes with the children?",
        "a": "Teachers and staff supervise every trip."
      }
    ],
    "tagline": null,
    "widgets": {
      "ct_t": {
        "type": "tabs",
        "tabs": [
          [
            "Nursery – Grade 2",
            [
              [
                "Parks and gardens",
                "Nature walks and sensory play"
              ],
              [
                "A local farm",
                "Seeing where food grows"
              ],
              [
                "Fire station or post office",
                "Meeting community helpers"
              ]
            ]
          ],
          [
            "Grades 3 – 5",
            [
              [
                "Museums",
                "History and science up close"
              ],
              [
                "Planetarium",
                "The night sky, explained"
              ],
              [
                "Lakes and parks",
                "Birds, trees and water"
              ]
            ]
          ],
          [
            "Grades 6 – 8",
            [
              [
                "Science centres",
                "Hands on exhibits and shows"
              ],
              [
                "Heritage sites",
                "Karnataka's history in person"
              ],
              [
                "Local industry",
                "How things are made"
              ]
            ]
          ],
          [
            "Grades 9 – 12",
            [
              [
                "Research institutions",
                "Labs and scientists at work"
              ],
              [
                "Universities",
                "A first look at higher education"
              ],
              [
                "Study tours",
                "International tours when announced"
              ]
            ]
          ]
        ],
        "note": "Sample destinations to show the approach."
      },
      "ct_s": {
        "type": "schedule",
        "rows": [
          [
            "Week 1",
            "Question",
            "Pick a problem worth investigating"
          ],
          [
            "Weeks 2 – 3",
            "Research",
            "Read, ask experts and plan a fair test"
          ],
          [
            "Weeks 4 – 5",
            "Build",
            "Make the model or run the experiment"
          ],
          [
            "Week 6",
            "Rehearse",
            "Practise explaining it to visitors"
          ],
          [
            "Exhibition day",
            "Present",
            "Explain, answer questions and get feedback"
          ]
        ],
        "note": "A sample timeline. Projects vary by grade."
      }
    }
  },
  "clubs-arts-expression": {
    "slug": "clubs-arts-expression",
    "sec": "development",
    "seoTitle": "Clubs, arts and expression",
    "seoDescription": "Debate, writing, literary, environmental, entrepreneurship, photography, film, music, theatre and art clubs at HKS Vidyamandir.",
    "name": "clubs",
    "crumbs": [
      {
        "label": "Home",
        "to": "/"
      },
      {
        "label": "Co-curricular",
        "to": "/campus-life"
      },
      {
        "label": "Clubs and development",
        "to": "/campus-life/student-development"
      },
      {
        "label": "Clubs and arts"
      }
    ],
    "stepTag": "Clubs and development",
    "stepSub": "9 clubs and arts",
    "h1": "Student clubs, performing and visual arts",
    "lede": "Clubs spanning debate, writing, literature, environment, entrepreneurship, photography, film, music, theatre and art.",
    "subnav": [
      {
        "to": "/campus-life/student-development",
        "active": false,
        "label": "Overview"
      },
      {
        "to": "/campus-life/leadership-life-skills",
        "active": false,
        "label": "Leadership and life skills"
      },
      {
        "to": "/campus-life/clubs-arts-expression",
        "active": true,
        "label": "Clubs and arts"
      }
    ],
    "heroSvg": "<svg viewBox=\"0 0 520 420\" aria-hidden=\"true\">\n  <circle cx=\"400\" cy=\"320\" r=\"70\" fill=\"rgba(255,255,255,.08)\"/>\n  <circle cx=\"110\" cy=\"120\" r=\"50\" fill=\"rgba(255,255,255,.06)\"/>\n  <g transform=\"translate(260 210) rotate(8) scale(1.25)\"><g class=\"bob\"><circle cx=\"-50\" cy=\"-30\" r=\"34\" fill=\"#fff\"/><circle cx=\"50\" cy=\"-30\" r=\"34\" fill=\"#ffd27a\"/><path d=\"M-110 90c10-60 50-80 60-80s50 20 60 80Z\" fill=\"#fff\"/><path d=\"M-10 90c10-60 50-80 60-80s50 20 60 80Z\" fill=\"#ffd27a\"/></g></g>\n  <g fill=\"#ffd27a\"><circle class=\"tw1\" cx=\"80\" cy=\"300\" r=\"7\"/><circle class=\"tw2\" cx=\"450\" cy=\"90\" r=\"5\"/><circle class=\"tw1\" cx=\"130\" cy=\"60\" r=\"4\"/></g>\n</svg>",
    "stats": [
      {
        "val": "21",
        "label": "Areas",
        "sub": "Life skills and clubs"
      },
      {
        "val": "9+",
        "label": "Clubs",
        "sub": "Debate, arts, film and STEM"
      },
      {
        "val": "Student led",
        "label": "Council",
        "sub": "Leadership Council"
      },
      {
        "val": "Holistic",
        "label": "Growth",
        "sub": "Mind, voice and character"
      }
    ],
    "intro": {
      "kicker": "Every interest finds a community",
      "title": "Club hours with a purpose",
      "lede": "Dedicated club hours let students pursue talents alongside peers, from writing and filmmaking to stage performance.",
      "ticks": [
        "Weekly club periods led by faculty mentors",
        "Literary, environmental, entrepreneurial and media clubs",
        "Dedicated music, dance, theatre and fine arts instruction",
        "Regular showcases at assemblies, exhibitions and Annual Day"
      ],
      "sideBox": {
        "title": "Showcases",
        "items": [
          "Assemblies",
          "Exhibitions",
          "Annual Day"
        ]
      }
    },
    "bands": [
      {
        "kind": "widget",
        "ground": "soft",
        "kicker": "Club finder",
        "title": "Which club will your child love?",
        "lede": "Three questions. Suggestions appear instantly.",
        "widgetKey": "cl_q"
      },
      {
        "kind": "widget",
        "ground": "paper",
        "kicker": "Explore our student clubs and arts",
        "title": "Nine clubs, five kinds of interest",
        "lede": "Filter by what your child enjoys.",
        "widgetKey": "cl_f"
      },
      {
        "kind": "steps3",
        "ground": "soft",
        "kicker": "How clubs shape every learner",
        "title": "Discover, practise, lead",
        "lede": "Three steps.",
        "items": [
          {
            "title": "Discover interests",
            "desc": "Explore debate, writing, reading, environment, entrepreneurship, film, music and theatre."
          },
          {
            "title": "Practise life skills",
            "desc": "Personality development, emotional intelligence, organic farming and teamwork."
          }
        ]
      }
    ],
    "related": [
      {
        "to": "/campus-life/student-development",
        "kicker": "Section overview",
        "title": "Student development",
        "desc": "The whole child compass"
      },
      {
        "to": "/campus-life/leadership-life-skills",
        "kicker": "In this section",
        "title": "Leadership and life skills",
        "desc": "Nine programmes"
      },
      {
        "to": "/samskriti-vidya",
        "kicker": "Co-curricular track",
        "title": "Samskriti Vidya",
        "desc": "Find your stage"
      }
    ],
    "faqTitle": "Questions about clubs",
    "faqs": [
      {
        "q": "How often do clubs meet?",
        "a": "Weekly club periods, led by faculty mentors."
      },
      {
        "q": "Can my child switch clubs?",
        "a": "Yes, usually at the start of a term, so children can explore different interests."
      },
      {
        "q": "Are there extra costs?",
        "a": "Club periods are part of the school week. Optional after school classes may have separate fees."
      }
    ],
    "tagline": null,
    "widgets": {
      "cl_q": {
        "type": "quiz",
        "top": 2,
        "qs": [
          [
            "At home, your child is most often...",
            [
              [
                "Talking and arguing a point",
                "speak"
              ],
              [
                "Reading or writing",
                "write"
              ],
              [
                "Making or building things",
                "make"
              ],
              [
                "Singing, dancing or acting",
                "perform"
              ],
              [
                "Outdoors with plants and animals",
                "green"
              ]
            ]
          ],
          [
            "Their dream weekend?",
            [
              [
                "A debate or quiz",
                "speak"
              ],
              [
                "A new book",
                "write"
              ],
              [
                "A craft or coding project",
                "make"
              ],
              [
                "A show or concert",
                "perform"
              ],
              [
                "A nature walk",
                "green"
              ]
            ]
          ],
          [
            "They'd be proud to...",
            [
              [
                "Win an argument fairly",
                "speak"
              ],
              [
                "See their story published",
                "write"
              ],
              [
                "Sell something they made",
                "make"
              ],
              [
                "Perform on stage",
                "perform"
              ],
              [
                "Plant a tree that grows",
                "green"
              ]
            ]
          ]
        ],
        "results": {
          "speak": {
            "t": "Debate and public speaking",
            "d": "Elocution, debates and MUN later on."
          },
          "write": {
            "t": "Creative writing or reading and literary",
            "d": "Stories, poems, book circles and the school magazine."
          },
          "make": {
            "t": "Art, photography and film, or entrepreneurship",
            "d": "Making things people can see, use or buy."
          },
          "perform": {
            "t": "Music, theatre or dance",
            "d": "Rehearsals, showcases and Annual Day."
          },
          "green": {
            "t": "Environmental club",
            "d": "Green drives, gardens and conservation, with Krishi Vidya."
          }
        },
        "lead": "Clubs to try first",
        "after": "Children can explore more than one club over the year."
      },
      "cl_f": {
        "type": "filter",
        "cats": [
          [
            "speak",
            "Speak"
          ],
          [
            "write",
            "Write"
          ],
          [
            "make",
            "Make"
          ],
          [
            "perform",
            "Perform"
          ],
          [
            "green",
            "Green"
          ]
        ],
        "items": [
          {
            "t": "Debate and public speaking",
            "d": "Structured debates, elocution and persuasive speaking",
            "cat": "speak"
          },
          {
            "t": "Creative writing",
            "d": "Stories, poetry, essays and student publications",
            "cat": "write"
          },
          {
            "t": "Reading and literary",
            "d": "Book discussions, storytelling and reading habits",
            "cat": "write"
          },
          {
            "t": "Environmental",
            "d": "Green drives and conservation campaigns",
            "cat": "green"
          },
          {
            "t": "Entrepreneurship",
            "d": "Young founder projects, pitches and business thinking",
            "cat": "make"
          },
          {
            "t": "Photography and film",
            "d": "Visual storytelling through photos, video and short films",
            "cat": "make"
          },
          {
            "t": "Music and performing arts",
            "d": "Vocals, instruments, rhythm and stage performance",
            "cat": "perform"
          },
          {
            "t": "Theatre and drama",
            "d": "Acting, scriptwriting and productions",
            "cat": "perform"
          },
          {
            "t": "Art and craft",
            "d": "Drawing, painting, sculpture and hands on craft",
            "cat": "make"
          }
        ]
      }
    }
  },
  "core-science-math-labs": {
    "slug": "core-science-math-labs",
    "sec": "labs",
    "seoTitle": "Core science and maths labs",
    "seoDescription": "Physics, chemistry, biology, mathematics, astronomy, environmental science and STEM labs at HKS Vidyamandir.",
    "name": "the science labs",
    "crumbs": [
      {
        "label": "Home",
        "to": "/"
      },
      {
        "label": "Co-curricular",
        "to": "/campus-life"
      },
      {
        "label": "Laboratories",
        "to": "/campus-life/laboratories"
      },
      {
        "label": "Core science and maths"
      }
    ],
    "stepTag": "Laboratories",
    "stepSub": "7 core labs",
    "h1": "Core science and mathematics laboratories",
    "lede": "Well equipped labs for physics, chemistry, biology, maths, astronomy, environmental science and STEM practicals.",
    "subnav": [
      {
        "to": "/campus-life/laboratories",
        "active": false,
        "label": "Overview"
      },
      {
        "to": "/campus-life/core-science-math-labs",
        "active": true,
        "label": "Core science and maths"
      },
      {
        "to": "/campus-life/technology-ai-maker-labs",
        "active": false,
        "label": "Technology, AI and maker"
      }
    ],
    "heroSvg": "<svg viewBox=\"0 0 520 420\" aria-hidden=\"true\">\n  <circle cx=\"140\" cy=\"300\" r=\"90\" fill=\"rgba(255,255,255,.08)\"/>\n  <circle cx=\"420\" cy=\"120\" r=\"50\" fill=\"rgba(255,255,255,.06)\"/>\n  <g transform=\"translate(260 210) rotate(-8) scale(1.25)\"><g class=\"bob\"><path d=\"M-30-100h60M-20-100v60L-80 70a14 14 0 0 0 12 22h136a14 14 0 0 0 12-22L20-40v-60\" fill=\"#fff\"/><path d=\"M-62 40h124l18 34a8 8 0 0 1-7 12H-69a8 8 0 0 1-7-12Z\" fill=\"var(--t)\"/><circle cx=\"-10\" cy=\"10\" r=\"8\" fill=\"#ffd27a\"/><circle cx=\"16\" cy=\"-14\" r=\"5\" fill=\"#ffd27a\"/></g></g>\n  <g fill=\"#ffd27a\"><circle class=\"tw1\" cx=\"460\" cy=\"330\" r=\"7\"/><circle class=\"tw2\" cx=\"70\" cy=\"90\" r=\"5\"/><circle class=\"tw1\" cx=\"380\" cy=\"60\" r=\"4\"/></g>\n</svg>",
    "stats": [
      {
        "val": "13+",
        "label": "Labs",
        "sub": "Science, maths, tech and maker"
      },
      {
        "val": "Guided",
        "label": "Sessions",
        "sub": "Trained lab assistants"
      },
      {
        "val": "STEM and AI",
        "label": "Equipment",
        "sub": "Future ready"
      },
      {
        "val": "Weekly",
        "label": "Practicals",
        "sub": "Scheduled hours"
      }
    ],
    "intro": {
      "kicker": "Scientific rigour",
      "title": "Making theory tangible through experiments",
      "lede": "Regular practicals help students see principles first hand, record results accurately and prepare for CBSE practicals and competitive exams.",
      "ticks": [
        "Separate CBSE compliant physics, chemistry and biology labs",
        "Visual maths lab to ease fear of abstract formulas",
        "Environmental science and astronomy labs linking science to nature",
        "Trained lab assistants who ensure safety and guided practice"
      ],
      "sideBox": {
        "title": "Practical skills",
        "items": [
          "Measuring accurately",
          "Recording observations honestly",
          "Drawing conclusions from evidence"
        ]
      }
    },
    "bands": [
      {
        "kind": "widget",
        "ground": "soft",
        "kicker": "Experiment of the week",
        "title": "One experiment from each lab",
        "lede": "Tap a lab to flip it and see a sample experiment students do there.",
        "widgetKey": "cs_fl"
      },
      {
        "kind": "widget",
        "ground": "paper",
        "kicker": "Preparing for CBSE practicals",
        "title": "From first experiment to board practical",
        "lede": "How lab work builds towards the Grade 10 and 12 practical exams.",
        "widgetKey": "cs_p"
      },
      {
        "kind": "steps3",
        "ground": "soft",
        "kicker": "Laboratory methodology",
        "title": "Three steps from curiosity to invention",
        "lede": "Observe, experiment, document.",
        "items": [
          {
            "title": "Observe and hypothesise",
            "desc": "Teachers introduce concepts with clear safety protocols."
          },
          {
            "title": "Experiment and code",
            "desc": "Hands on experiments, circuits, robot programming and prototype testing."
          }
        ]
      }
    ],
    "related": [
      {
        "to": "/campus-life/laboratories",
        "kicker": "Section overview",
        "title": "Laboratories",
        "desc": "All 14 labs"
      },
      {
        "to": "/campus-life/technology-ai-maker-labs",
        "kicker": "In this section",
        "title": "Technology, AI and maker labs",
        "desc": "Coding, robotics and invention"
      },
      {
        "to": "/high-school",
        "kicker": "Academics",
        "title": "High School",
        "desc": "Labs in Grades 6 to 10"
      }
    ],
    "faqTitle": "Questions about the science labs",
    "faqs": [
      {
        "q": "Is lab work safe for children?",
        "a": "Yes. Every practical starts with a safety briefing, with a teacher or lab assistant present throughout."
      },
      {
        "q": "Do children handle chemicals?",
        "a": "Only age appropriate materials, with supervision and protective gear when needed."
      },
      {
        "q": "How does the maths lab help?",
        "a": "Models and manipulatives make abstract ideas like fractions and geometry visible and less intimidating."
      }
    ],
    "tagline": null,
    "widgets": {
      "cs_fl": {
        "type": "flip",
        "hint": "Tap to see an experiment",
        "items": [
          {
            "k": "Physics",
            "t": "Pendulum timing",
            "back": "Change the string length and time the swings. Discover what affects the period."
          },
          {
            "k": "Chemistry",
            "t": "Acid or base?",
            "back": "Test household liquids with indicators and arrange them on a pH scale."
          },
          {
            "k": "Biology",
            "t": "Onion peel cells",
            "back": "Prepare a slide and see plant cells and their walls under the microscope."
          },
          {
            "k": "Mathematics",
            "t": "Paper Pythagoras",
            "back": "Cut and rearrange squares to see why a² + b² = c²."
          },
          {
            "k": "Astronomy",
            "t": "Moon phases",
            "back": "Use a lamp and a ball to model why the Moon seems to change shape."
          },
          {
            "k": "Environmental",
            "t": "Water quality",
            "back": "Test samples from different sources for pH and clarity, and compare."
          },
          {
            "k": "STEM",
            "t": "Paper bridge",
            "back": "Design a bridge from paper that holds the most coins. Test, improve, retest."
          },
          {
            "k": "Any lab",
            "t": "Your question",
            "back": "Students are encouraged to bring their own questions and design a fair test."
          }
        ]
      },
      "cs_p": {
        "type": "schedule",
        "rows": [
          [
            "Primary",
            "Simple experiments",
            "Observe, predict and talk about results"
          ],
          [
            "Grades 6 – 8",
            "Guided practicals",
            "Follow a method, measure and record in a notebook"
          ],
          [
            "Grade 9",
            "Practical records",
            "Keep a formal record book and learn viva style questions"
          ],
          [
            "Grade 10",
            "Board practicals",
            "Practical assessment and project work for CBSE"
          ],
          [
            "Grades 11 – 12",
            "Advanced practicals",
            "Stream specific experiments, records and board practical exams"
          ]
        ],
        "note": "The sample experiments above are typical of school science; the exact list follows the CBSE syllabus for each grade."
      }
    }
  },
  "creative-speech-enterprise": {
    "slug": "creative-speech-enterprise",
    "sec": "experiential",
    "seoTitle": "Creative, speech and enterprise",
    "seoDescription": "Art studio, debate centre, entrepreneurship centre and heritage zone at HKS Vidyamandir.",
    "name": "the creative centres",
    "crumbs": [
      {
        "label": "Home",
        "to": "/"
      },
      {
        "label": "Co-curricular",
        "to": "/campus-life"
      },
      {
        "label": "Experiential learning",
        "to": "/experiential-learning"
      },
      {
        "label": "Creative, speech and enterprise"
      }
    ],
    "stepTag": "Experiential learning",
    "stepSub": "4 centres",
    "h1": "Creative, speech and enterprise centres",
    "lede": "Studios where students express ideas through art, design, speaking, debate, business and heritage.",
    "subnav": [
      {
        "to": "/experiential-learning",
        "active": false,
        "label": "Overview"
      },
      {
        "to": "/campus-life/immersive-discovery-zones",
        "active": false,
        "label": "Immersive zones"
      },
      {
        "to": "/campus-life/creative-speech-enterprise",
        "active": true,
        "label": "Creative, speech and enterprise"
      }
    ],
    "heroSvg": "<svg viewBox=\"0 0 520 420\" aria-hidden=\"true\">\n  <circle cx=\"400\" cy=\"320\" r=\"70\" fill=\"rgba(255,255,255,.08)\"/>\n  <circle cx=\"110\" cy=\"120\" r=\"50\" fill=\"rgba(255,255,255,.06)\"/>\n  <g transform=\"translate(260 210) rotate(8) scale(1.25)\"><g class=\"bob\"><rect x=\"-110\" y=\"-60\" width=\"220\" height=\"120\" rx=\"40\" fill=\"#fff\"/><circle cx=\"-50\" cy=\"0\" r=\"30\" fill=\"var(--t)\"/><circle cx=\"50\" cy=\"0\" r=\"30\" fill=\"var(--t)\"/><path d=\"M-20 0h40\" stroke=\"var(--t-deep)\" stroke-width=\"8\"/></g></g>\n  <g fill=\"#ffd27a\"><circle class=\"tw1\" cx=\"80\" cy=\"300\" r=\"7\"/><circle class=\"tw2\" cx=\"450\" cy=\"90\" r=\"5\"/><circle class=\"tw1\" cx=\"130\" cy=\"60\" r=\"4\"/></g>\n</svg>",
    "stats": [
      {
        "val": "9",
        "label": "Zones",
        "sub": "Learning centres"
      },
      {
        "val": "K–12",
        "label": "Access",
        "sub": "Suited to each age"
      },
      {
        "val": "4",
        "label": "Centres",
        "sub": "Art, voice, enterprise, heritage"
      },
      {
        "val": "Hands on",
        "label": "Inquiry",
        "sub": "Beyond textbooks"
      }
    ],
    "intro": {
      "kicker": "Make, speak and lead",
      "title": "Building confidence to make, speak and lead",
      "lede": "Beyond science and tech, students need space to imagine, form and voice opinions, understand money and enterprise, and stay connected to their heritage.",
      "ticks": [
        "Art, craft and design studio open across grades",
        "Entrepreneurship simulations for practical financial literacy",
        "Structured debate and stage speaking",
        "Cultural modules on Karnataka and wider Indian traditions"
      ],
      "sideBox": {
        "title": "Four centres",
        "items": [
          "Creative Arts and Design Studio",
          "Entrepreneurship and Business Simulation Centre",
          "Public Speaking and Debate Centre",
          "Heritage and Cultural Learning Zone"
        ]
      }
    },
    "bands": [
      {
        "kind": "widget",
        "ground": "paper",
        "kicker": "Try the debate centre",
        "title": "Spin a motion and pick a side",
        "lede": "Debaters at HKS practise with motions like these. Try one at the dinner table.",
        "widgetKey": "ce_m"
      },
      {
        "kind": "cards",
        "ground": "soft",
        "cols": 2,
        "kicker": "Centre cards",
        "title": "Four centres for expression",
        "lede": "Each with its own facilitators and showcases.",
        "items": [
          {
            "num": "01",
            "title": "Creative Arts and Design Studio",
            "desc": "Drawing, painting, craft and design for everyday self expression."
          },
          {
            "num": "02",
            "title": "Entrepreneurship and Business Simulation Centre",
            "desc": "Student mini enterprises that teach planning, teamwork and money management."
          },
          {
            "num": "03",
            "title": "Public Speaking and Debate Centre",
            "desc": "Supportive practice in speaking, structured debate and stage presence."
          },
          {
            "num": "04",
            "title": "Heritage and Cultural Learning Zone",
            "desc": "Karnataka's and India's art, history, music and culture."
          }
        ]
      },
      {
        "kind": "widget",
        "ground": "paper",
        "kicker": "The young founder cycle",
        "title": "How a mini enterprise runs",
        "lede": "The Entrepreneurship Centre takes students round this loop. Tap a step.",
        "widgetKey": "ce_w"
      }
    ],
    "related": [
      {
        "to": "/experiential-learning",
        "kicker": "Section overview",
        "title": "Experiential learning",
        "desc": "All zones and labs"
      },
      {
        "to": "/campus-life/immersive-discovery-zones",
        "kicker": "In this section",
        "title": "Immersive and discovery zones",
        "desc": "VR, AR and astronomy"
      },
      {
        "to": "/samskriti-vidya",
        "kicker": "Co-curricular track",
        "title": "Samskriti Vidya",
        "desc": "Arts, festivals and heritage"
      }
    ],
    "faqTitle": "Questions about the creative centres",
    "faqs": [
      {
        "q": "Does my child need to be confident to join debate?",
        "a": "No. The centre is built for practice, starting with short, supportive speaking tasks."
      },
      {
        "q": "Do students handle real money in enterprise projects?",
        "a": "Projects use simulations and small, supervised market days. Teachers guide every step."
      },
      {
        "q": "Is the art studio for every grade?",
        "a": "Yes. The studio is open across grades."
      }
    ],
    "tagline": null,
    "widgets": {
      "ce_m": {
        "type": "motion",
        "motions": [
          "Homework should be optional in primary school",
          "Every school should have a vegetable garden",
          "Video games can be good for learning",
          "Children should learn three languages",
          "Plastic should be banned in every school",
          "Robots will be better teachers than humans",
          "Sport is as important as maths",
          "Every student should run a small business before Grade 10"
        ]
      },
      "ce_w": {
        "type": "wheel",
        "center": "Mini enterprise",
        "items": [
          [
            "Spot a need",
            "Notice a problem worth solving, like reusable bags for the school fair.",
            "#6d28d9",
            "Need"
          ],
          [
            "Plan",
            "Estimate costs, set a price and assign roles.",
            "#4352d1",
            "Plan"
          ],
          [
            "Make",
            "Build the product or prepare the service as a team.",
            "#0e7490",
            "Make"
          ],
          [
            "Pitch",
            "Present the idea to teachers and classmates for feedback.",
            "#ee8a2c",
            "Pitch"
          ],
          [
            "Sell",
            "Run a stall on market day and keep simple accounts.",
            "#be185d",
            "Sell"
          ],
          [
            "Reflect",
            "Count profit or loss, and decide what to change next time.",
            "#15803d",
            "Learn"
          ]
        ]
      }
    }
  },
  "enrichment-parent-sessions": {
    "slug": "enrichment-parent-sessions",
    "sec": "services",
    "seoTitle": "Enrichment and parent sessions",
    "seoDescription": "Proposed music, dance, spoken language, remedial and booster classes and parent workshops at HKS Vidyamandir.",
    "name": "enrichment and parent sessions",
    "crumbs": [
      {
        "label": "Home",
        "to": "/"
      },
      {
        "label": "Co-curricular",
        "to": "/campus-life"
      },
      {
        "label": "Additional services",
        "to": "/campus-life/additional-services"
      },
      {
        "label": "Enrichment and parents"
      }
    ],
    "stepTag": "Additional services",
    "stepSub": "Skill building",
    "h1": "Enrichment classes and parent workshops",
    "lede": "Music, dance, spoken languages, remedial and booster classes, and workshops for parents.",
    "subnav": [
      {
        "to": "/campus-life/additional-services",
        "active": false,
        "label": "Overview"
      },
      {
        "to": "/campus-life/after-school-camps-care",
        "active": false,
        "label": "After school and camps"
      },
      {
        "to": "/campus-life/enrichment-parent-sessions",
        "active": true,
        "label": "Enrichment and parents"
      }
    ],
    "heroSvg": "<svg viewBox=\"0 0 520 420\" aria-hidden=\"true\">\n  <circle cx=\"400\" cy=\"320\" r=\"70\" fill=\"rgba(255,255,255,.08)\"/>\n  <circle cx=\"110\" cy=\"120\" r=\"50\" fill=\"rgba(255,255,255,.06)\"/>\n  <g transform=\"translate(260 210) rotate(8) scale(1.25)\"><g class=\"bob\"><rect x=\"-100\" y=\"-80\" width=\"200\" height=\"170\" rx=\"20\" fill=\"#fff\"/><path d=\"M-100-40h200\" stroke=\"var(--t)\" stroke-width=\"8\"/><path d=\"M-60-100v40M60-100v40\" stroke=\"#ffd27a\" stroke-width=\"12\" stroke-linecap=\"round\"/><circle cx=\"-40\" cy=\"10\" r=\"12\" fill=\"var(--t)\"/><circle cx=\"0\" cy=\"10\" r=\"12\" fill=\"#ffd27a\"/><circle cx=\"40\" cy=\"10\" r=\"12\" fill=\"var(--t)\"/><circle cx=\"-40\" cy=\"50\" r=\"12\" fill=\"#ffd27a\"/></g></g>\n  <g fill=\"#ffd27a\"><circle class=\"tw1\" cx=\"80\" cy=\"300\" r=\"7\"/><circle class=\"tw2\" cx=\"450\" cy=\"90\" r=\"5\"/><circle class=\"tw1\" cx=\"130\" cy=\"60\" r=\"4\"/></g>\n</svg>",
    "stats": [
      {
        "val": "9",
        "label": "Services",
        "sub": "Extended learning and care"
      },
      {
        "val": "Flexible",
        "label": "Timing",
        "sub": "After school and weekends"
      },
      {
        "val": "Camps",
        "label": "Holidays",
        "sub": "Summer and winter"
      },
      {
        "val": "Family",
        "label": "Support",
        "sub": "Parent workshops and day care"
      }
    ],
    "intro": {
      "kicker": "Extra support and talent",
      "title": "Helping every learner and family thrive",
      "lede": "Enrichment meets each child at their level, whether they want to build fluency, train in the arts, catch up or go further.",
      "ticks": [
        "Vocal, instrumental, classical and western dance instruction",
        "Conversational practice in English, Hindi and Kannada",
        "Small group remedial sessions and advanced booster tracks",
        "Parent workshops on study habits, screen time and wellbeing"
      ],
      "sideBox": {
        "title": "Four programmes",
        "items": [
          "Music and dance",
          "Spoken languages",
          "Remedial and booster",
          "Parent workshops"
        ]
      }
    },
    "bands": [
      {
        "kind": "widget",
        "ground": "soft",
        "kicker": "Parent workshops",
        "title": "Topics parents ask for most",
        "lede": "Proposed workshop themes through the year.",
        "widgetKey": "ep_w"
      },
      {
        "kind": "cards",
        "ground": "soft",
        "cols": 4,
        "kicker": "Enrichment and family partnership",
        "title": "Four programmes",
        "lede": "All proposed, opening as confirmed.",
        "items": [
          {
            "num": "01",
            "title": "Music and dance classes",
            "desc": "Vocal music, instruments, classical and western dance."
          },
          {
            "num": "02",
            "title": "Spoken English and languages",
            "desc": "Confidence building practice in English, Hindi and Kannada."
          },
          {
            "num": "03",
            "title": "Remedial and booster classes",
            "desc": "Support for weak subjects, plus challenge classes for high achievers."
          },
          {
            "num": "04",
            "title": "Parent workshops",
            "desc": "Study habits, screen balance and exam stress."
          }
        ]
      },
      {
        "kind": "widget",
        "ground": "soft",
        "kicker": "Screen time at home",
        "title": "A quick family check",
        "lede": "Healthy screen habits are a popular workshop topic. How many does your family already have?",
        "widgetKey": "ep_c"
      },
      {
        "kind": "steps3",
        "ground": "paper",
        "kicker": "How services roll out",
        "title": "Three steps",
        "lede": "From interest to enrolment.",
        "items": [
          {
            "title": "Confirm interest",
            "desc": "Services open as the school confirms spaces, staff and timings."
          },
          {
            "title": "Join structured batches",
            "desc": "Students enrol in supervised study, coaching, camps or workshops."
          }
        ]
      }
    ],
    "related": [
      {
        "to": "/campus-life/additional-services",
        "kicker": "Section overview",
        "title": "Additional services",
        "desc": "Plan your family's week"
      },
      {
        "to": "/campus-life/after-school-camps-care",
        "kicker": "In this section",
        "title": "After school and camps",
        "desc": "A sample afternoon"
      },
      {
        "to": "/samskriti-vidya",
        "kicker": "Co-curricular track",
        "title": "Samskriti Vidya",
        "desc": "Music, dance and languages in school"
      }
    ],
    "faqTitle": "Questions about enrichment and parent sessions",
    "faqs": [
      {
        "q": "Who teaches enrichment classes?",
        "a": "Specialist teachers, once the school confirms staff for each class."
      },
      {
        "q": "Are parent workshops free?",
        "a": "Details will be shared when workshops are announced."
      },
      {
        "q": "Can I suggest a workshop topic?",
        "a": "Yes. Tell the admissions team or your child's class teacher."
      }
    ],
    "tagline": null,
    "widgets": {
      "ep_w": {
        "type": "months",
        "items": [
          [
            "Term 1",
            "Settling in",
            "Routines, sleep and a smooth start"
          ],
          [
            "Term 1",
            "Study habits",
            "How to support homework without doing it"
          ],
          [
            "Term 2",
            "Screen balance",
            "Healthy screen time and online safety"
          ],
          [
            "Term 2",
            "Reading at home",
            "Building a reading habit together"
          ],
          [
            "Term 3",
            "Exam confidence",
            "Calm, planned preparation"
          ],
          [
            "Term 3",
            "Growing up",
            "Emotions, friendships and the teen years"
          ]
        ],
        "note": "Proposed themes."
      },
      "ep_c": {
        "type": "checklist",
        "items": [
          "No screens at meals",
          "Devices charge outside bedrooms",
          "A screen free hour before bed",
          "We know what apps our child uses",
          "Parental controls are set",
          "Screen time has a daily limit",
          "We talk about online kindness",
          "Weekends include outdoor time"
        ],
        "start": "Small steps make a big difference.",
        "mid": "A good start. Our workshops share more ideas.",
        "done": "Excellent habits. You could share tips at a workshop."
      }
    }
  },
  "events-achievements": {
    "slug": "events-achievements",
    "sec": "events",
    "seoTitle": "Events and achievements",
    "seoDescription": "Annual Day, Sports Day, festivals, exhibitions, trips and awards at HKS Vidyamandir.",
    "name": "events",
    "crumbs": [
      {
        "label": "Home",
        "to": "/"
      },
      {
        "label": "Co-curricular",
        "to": "/campus-life"
      },
      {
        "label": "Events",
        "to": "/campus-life/events-achievements"
      },
      {
        "label": "Overview"
      }
    ],
    "stepTag": "Events",
    "stepSub": "15 areas · a lively calendar",
    "h1": "Events, celebrations and student achievements",
    "lede": "Yearly celebrations, science and robotics, educational trips and academic awards.",
    "subnav": [
      {
        "to": "/campus-life/events-achievements",
        "active": true,
        "label": "Overview"
      },
      {
        "to": "/campus-life/celebrations-exhibitions-trips",
        "active": false,
        "label": "Celebrations and trips"
      },
      {
        "to": "/campus-life/recognition-tours-initiatives",
        "active": false,
        "label": "Recognition and tours"
      }
    ],
    "heroSvg": "<svg viewBox=\"0 0 520 420\" aria-hidden=\"true\">\n  <circle cx=\"380\" cy=\"110\" r=\"120\" fill=\"rgba(255,255,255,.08)\"/>\n  <circle cx=\"120\" cy=\"330\" r=\"50\" fill=\"rgba(255,255,255,.06)\"/>\n  <g transform=\"translate(260 210) rotate(0) scale(1.25)\"><g class=\"bob\"><path d=\"M-90 90L-30-90 90 30Z\" fill=\"#fff\"/><circle cx=\"40\" cy=\"-70\" r=\"12\" fill=\"#ffd27a\"/><circle cx=\"90\" cy=\"-20\" r=\"8\" fill=\"#fff\"/><rect x=\"60\" y=\"-100\" width=\"12\" height=\"12\" fill=\"#ffd27a\" transform=\"rotate(30 66 -94)\"/><path d=\"M-50 40l40-90\" stroke=\"var(--t)\" stroke-width=\"8\"/></g></g>\n  <g fill=\"#ffd27a\"><circle class=\"tw1\" cx=\"90\" cy=\"90\" r=\"7\"/><circle class=\"tw2\" cx=\"450\" cy=\"350\" r=\"5\"/><circle class=\"tw1\" cx=\"420\" cy=\"60\" r=\"4\"/></g>\n</svg>",
    "stats": [
      {
        "val": "15",
        "label": "Areas",
        "sub": "Events, trips and awards"
      },
      {
        "val": "Annual",
        "label": "Calendar",
        "sub": "Celebrations and festivals"
      },
      {
        "val": "Showcases",
        "label": "Contests",
        "sub": "Science and robotics"
      },
      {
        "val": "Global",
        "label": "Tours",
        "sub": "Excursions and study tours"
      }
    ],
    "intro": {
      "kicker": "Celebrating milestones",
      "title": "Every child gets a stage",
      "lede": "The yearly calendar lets every student perform, exhibit projects, compete, travel and be recognised.",
      "ticks": [
        "Annual Day, Sports Day, cultural festivals and Pet Day",
        "Science exhibitions, robotics competitions and inter-school contests",
        "Educational excursions, guest lectures and international study tours",
        "Academic and Olympiad awards, newsletters and student led projects"
      ],
      "sideBox": {
        "title": "Families are welcome at",
        "items": [
          "Annual Day",
          "Sports Day",
          "Exhibitions and open days"
        ]
      }
    },
    "bands": [
      {
        "kind": "widget",
        "ground": "soft",
        "kicker": "The school year",
        "title": "A year of events, term by term",
        "lede": "Scroll sideways through a typical year.",
        "widgetKey": "ev_y"
      },
      {
        "kind": "cards",
        "ground": "soft",
        "cols": 3,
        "kicker": "Highlights of the year",
        "title": "Six kinds of moments",
        "lede": "From the stage to the honours board.",
        "items": [
          {
            "num": "01",
            "title": "Annual Day and Sports Day",
            "desc": "Flagship events for music, dance and athletics."
          },
          {
            "num": "02",
            "title": "Cultural festivals and Pet Day",
            "desc": "Heritage festivals, plus a day for empathy towards animals."
          },
          {
            "num": "03",
            "title": "Science and robotics exhibitions",
            "desc": "Hands on contests where students present inventions."
          },
          {
            "num": "04",
            "title": "Excursions and guest lectures",
            "desc": "Field trips and expert workshops that link lessons to life."
          },
          {
            "num": "05",
            "title": "Academic and Olympiad achievements",
            "desc": "Board toppers, Olympiad achievers and all round excellence."
          },
          {
            "num": "06",
            "title": "Newsletters and initiatives",
            "desc": "Regular newsletters and community projects led by students."
          }
        ]
      },
      {
        "kind": "steps3",
        "ground": "soft",
        "kicker": "The school calendar",
        "title": "Create, perform, recognise",
        "lede": "How every event comes together.",
        "items": [
          {
            "title": "Create and prepare",
            "desc": "Students rehearse, build exhibits and design community initiatives."
          },
          {
            "title": "Perform and compete",
            "desc": "Annual Day, festivals, Pet Day, exhibitions and inter-school contests."
          }
        ]
      }
    ],
    "related": [
      {
        "to": "/campus-life/celebrations-exhibitions-trips",
        "kicker": "In this section",
        "title": "Celebrations, exhibitions and trips",
        "desc": "Trips by age"
      },
      {
        "to": "/campus-life/recognition-tours-initiatives",
        "kicker": "In this section",
        "title": "Recognition and tours",
        "desc": "Awards and the study tour map"
      },
      {
        "to": "/samskriti-vidya",
        "kicker": "Co-curricular track",
        "title": "Samskriti Vidya",
        "desc": "The festival calendar and Annual Day"
      }
    ],
    "faqTitle": "Questions about events",
    "faqs": [
      {
        "q": "Can parents attend events?",
        "a": "Families are welcome at Annual Day, Sports Day, exhibitions and open days. Invitations are shared in advance."
      },
      {
        "q": "Does every child take part in Annual Day?",
        "a": "Yes. Every child has a role, on stage or behind it."
      },
      {
        "q": "How are trips organised?",
        "a": "Age appropriate trips with consent forms and staff supervision."
      }
    ],
    "tagline": {
      "text": "The moments children remember are *the *ones *they *took *part *in.",
      "note": ""
    },
    "widgets": {
      "ev_y": {
        "type": "months",
        "items": [
          [
            "Term 1",
            "New year welcome",
            "Orientation, house formation and club sign ups"
          ],
          [
            "Term 1",
            "Independence Day",
            "Patriotic songs, dance and drama"
          ],
          [
            "Term 1",
            "Field trips begin",
            "Age appropriate visits across Bengaluru"
          ],
          [
            "Term 2",
            "Festivals",
            "Dasara, Deepavali and Kannada Rajyotsava"
          ],
          [
            "Term 2",
            "Science and robotics",
            "Exhibitions and inter-school contests"
          ],
          [
            "Term 2",
            "Annual Day",
            "Our biggest stage of the year"
          ],
          [
            "Term 3",
            "Sports Day",
            "Races, relays and house trophy"
          ],
          [
            "Term 3",
            "Pet Day",
            "Kindness to animals"
          ],
          [
            "Year end",
            "Awards",
            "Academic, Olympiad and character awards"
          ]
        ],
        "note": "A sample year. The school calendar gives exact dates."
      }
    }
  },
  "experiential-learning": {
    "slug": "experiential-learning",
    "sec": "experiential",
    "seoTitle": "Experiential learning",
    "seoDescription": "Experiential learning at HKS Vidyamandir: nine zones and thirteen labs that turn lessons into experiences.",
    "name": "experiential learning",
    "crumbs": [
      {
        "label": "Home",
        "to": "/"
      },
      {
        "label": "Co-curricular",
        "to": "/campus-life"
      },
      {
        "label": "Experiential learning",
        "to": "/experiential-learning"
      },
      {
        "label": "Overview"
      }
    ],
    "stepTag": "Experiential learning",
    "stepSub": "Learn by doing",
    "h1": "Experiential learning and laboratories",
    "lede": "Applying classroom concepts in practice, to build critical thinking, engagement and lifelong curiosity.",
    "subnav": [
      {
        "to": "/experiential-learning",
        "active": true,
        "label": "Overview"
      },
      {
        "to": "/campus-life/immersive-discovery-zones",
        "active": false,
        "label": "Immersive zones"
      },
      {
        "to": "/campus-life/creative-speech-enterprise",
        "active": false,
        "label": "Creative, speech and enterprise"
      }
    ],
    "heroSvg": "<svg viewBox=\"0 0 520 420\" aria-hidden=\"true\">\n  <circle cx=\"380\" cy=\"110\" r=\"120\" fill=\"rgba(255,255,255,.08)\"/>\n  <circle cx=\"120\" cy=\"330\" r=\"50\" fill=\"rgba(255,255,255,.06)\"/>\n  <g transform=\"translate(260 210) rotate(0) scale(1.25)\"><g class=\"bob\"><rect x=\"-110\" y=\"-60\" width=\"220\" height=\"120\" rx=\"40\" fill=\"#fff\"/><circle cx=\"-50\" cy=\"0\" r=\"30\" fill=\"var(--t)\"/><circle cx=\"50\" cy=\"0\" r=\"30\" fill=\"var(--t)\"/><path d=\"M-20 0h40\" stroke=\"var(--t-deep)\" stroke-width=\"8\"/></g></g>\n  <g fill=\"#ffd27a\"><circle class=\"tw1\" cx=\"90\" cy=\"90\" r=\"7\"/><circle class=\"tw2\" cx=\"450\" cy=\"350\" r=\"5\"/><circle class=\"tw1\" cx=\"420\" cy=\"60\" r=\"4\"/></g>\n</svg>",
    "stats": [
      {
        "val": "9",
        "label": "Zones",
        "sub": "Dedicated learning centres"
      },
      {
        "val": "13+",
        "label": "Labs",
        "sub": "Science, maths, tech and maker"
      },
      {
        "val": "K–12",
        "label": "Access",
        "sub": "Matched to each age"
      },
      {
        "val": "Hands on",
        "label": "Inquiry",
        "sub": "Beyond the textbook"
      }
    ],
    "intro": {
      "kicker": "Why experiential learning matters",
      "title": "Children remember what they do",
      "lede": "When a lesson becomes an experience, the idea sticks. That is the principle behind every zone and lab at HKS.",
      "ticks": [
        "Makes abstract ideas concrete",
        "Builds critical thinking and problem solving",
        "Increases engagement through interactive activities",
        "Develops teamwork, creativity and confidence",
        "Links classroom knowledge to real world situations"
      ],
      "sideBox": {
        "title": "Zones or labs?",
        "items": [
          "Zones: immersive spaces to explore and create",
          "Labs: equipped rooms for experiments and building",
          "Both are built into the weekly timetable"
        ]
      }
    },
    "bands": [
      {
        "kind": "widget",
        "ground": "soft",
        "kicker": "Two kinds of spaces",
        "title": "Nine zones, thirteen labs",
        "lede": "Switch between experiential zones and laboratories.",
        "widgetKey": "el_t"
      },
      {
        "kind": "widget",
        "ground": "paper",
        "kicker": "Zones and labs compared",
        "title": "What happens where",
        "lede": "A quick guide for parents.",
        "widgetKey": "el_m"
      }
    ],
    "related": [
      {
        "to": "/campus-life/immersive-discovery-zones",
        "kicker": "In this section",
        "title": "Immersive and discovery zones",
        "desc": "VR, AR, astronomy, innovation and sustainability"
      },
      {
        "to": "/campus-life/creative-speech-enterprise",
        "kicker": "In this section",
        "title": "Creative, speech and enterprise",
        "desc": "Art studio, debate centre, business and heritage"
      },
      {
        "to": "/anubhav-vidya",
        "kicker": "Co-curricular track",
        "title": "Anubhav Vidya",
        "desc": "Walk the floor plan and try the stall simulator"
      }
    ],
    "faqTitle": "Questions about experiential learning",
    "faqs": [
      {
        "q": "Is this part of the timetable?",
        "a": "Yes. Zone and lab sessions are scheduled every week for every class."
      },
      {
        "q": "Are VR sessions safe for young children?",
        "a": "Sessions are short, supervised and age appropriate. Younger children mostly use AR."
      },
      {
        "q": "Does experiential learning replace the textbook?",
        "a": "No. It teaches the same CBSE topics in a hands on way so they are understood more deeply."
      },
      {
        "q": "Will my child need a device at home?",
        "a": "No. Devices stay at school."
      }
    ],
    "tagline": {
      "text": "Tell me and I forget. *Let *me *do *it *and *I *understand.",
      "note": "Every zone and lab is built on that idea."
    },
    "widgets": {
      "el_t": {
        "type": "tabs",
        "tabs": [
          [
            "Experiential zones",
            [
              [
                "Virtual Reality Room",
                "Immersive journeys through science, history and geography"
              ],
              [
                "Augmented Reality Room",
                "3D models that bring textbooks to life"
              ],
              [
                "Astronomy and Space Zone",
                "Exploring planets, stars and space science"
              ],
              [
                "Innovation and Discovery Centre",
                "Prototyping ideas and testing solutions"
              ],
              [
                "Creative Arts and Design Studio",
                "Painting, crafts, design and digital art"
              ],
              [
                "Sustainability Zone",
                "Environmental projects, organic farming and horticulture"
              ],
              [
                "Entrepreneurship Centre",
                "Business simulations and young founder projects"
              ],
              [
                "Public Speaking and Debate",
                "Voice, confidence and argument skills"
              ],
              [
                "Heritage and Culture Zone",
                "Celebrating Karnataka's and India's heritage"
              ]
            ]
          ],
          [
            "Laboratories",
            [
              [
                "Physics and Chemistry",
                "Experiments that make theory tangible"
              ],
              [
                "Biology Lab",
                "Microscopy, specimens and life science investigations"
              ],
              [
                "Mathematics Lab",
                "Manipulatives and models for visual maths"
              ],
              [
                "Computer and Coding",
                "Programming, web and app development"
              ],
              [
                "Robotics Lab",
                "Building and programming robots from Grade 4"
              ],
              [
                "AI and Machine Learning",
                "Age appropriate AI concepts and projects"
              ],
              [
                "Electronics and STEM",
                "Circuits, prototyping and tinkering"
              ],
              [
                "Maker Space",
                "Design thinking, 3D design and invention"
              ]
            ]
          ]
        ]
      },
      "el_m": {
        "type": "matrix",
        "cols": [
          "",
          "Experiential zones",
          "Laboratories"
        ],
        "rows": [
          [
            "Purpose",
            "Explore, imagine and express",
            "Experiment, measure and build"
          ],
          [
            "Feels like",
            "A studio, a stage or a journey",
            "A workshop with equipment"
          ],
          [
            "Typical session",
            "VR trip, debate, art project, market day",
            "Practical, circuit, robot, model"
          ],
          [
            "Led by",
            "Facilitators and subject teachers",
            "Subject teachers and lab assistants"
          ],
          [
            "Shows up in",
            "Exhibitions, debates, showcases",
            "Practical records, contests, CBSE practicals"
          ]
        ]
      }
    }
  },
  "health-support-safety": {
    "slug": "health-support-safety",
    "sec": "welfare",
    "seoTitle": "Health, support and safety",
    "seoDescription": "Medical room, counselling, hygiene and campus security at HKS Vidyamandir, with clear steps for everyday situations.",
    "name": "health and safety",
    "crumbs": [
      {
        "label": "Home",
        "to": "/"
      },
      {
        "label": "Co-curricular",
        "to": "/campus-life"
      },
      {
        "label": "Welfare and facilities",
        "to": "/campus-life/student-welfare"
      },
      {
        "label": "Health and safety"
      }
    ],
    "stepTag": "Welfare and facilities",
    "stepSub": "Safety and wellbeing",
    "h1": "Health, student support and campus safety",
    "lede": "Wellbeing comes first, supported by a medical room, dedicated counselling, strict sanitation and campus security.",
    "subnav": [
      {
        "to": "/campus-life/student-welfare",
        "active": false,
        "label": "Overview"
      },
      {
        "to": "/campus-life/learning-campus-infrastructure",
        "active": false,
        "label": "Campus infrastructure"
      },
      {
        "to": "/campus-life/health-support-safety",
        "active": true,
        "label": "Health and safety"
      }
    ],
    "heroSvg": "<svg viewBox=\"0 0 520 420\" aria-hidden=\"true\">\n  <circle cx=\"400\" cy=\"320\" r=\"70\" fill=\"rgba(255,255,255,.08)\"/>\n  <circle cx=\"110\" cy=\"120\" r=\"50\" fill=\"rgba(255,255,255,.06)\"/>\n  <g transform=\"translate(260 210) rotate(8) scale(1.25)\"><g class=\"bob\"><path d=\"M0-110l90 36v56c0 60-40 104-90 122-50-18-90-62-90-122v-56Z\" fill=\"#fff\"/><path d=\"M-36 6l26 26 50-56\" stroke=\"var(--t)\" stroke-width=\"16\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></g></g>\n  <g fill=\"#ffd27a\"><circle class=\"tw1\" cx=\"80\" cy=\"300\" r=\"7\"/><circle class=\"tw2\" cx=\"450\" cy=\"90\" r=\"5\"/><circle class=\"tw1\" cx=\"130\" cy=\"60\" r=\"4\"/></g>\n</svg>",
    "stats": [
      {
        "val": "8",
        "label": "Areas",
        "sub": "Infrastructure and care"
      },
      {
        "val": "Safe",
        "label": "Campus",
        "sub": "CCTV and security protocols"
      },
      {
        "val": "Wellbeing",
        "label": "Support",
        "sub": "Medical room and counsellor"
      },
      {
        "val": "Connected",
        "label": "Transport",
        "sub": "School buses"
      }
    ],
    "intro": {
      "kicker": "Peace of mind for parents",
      "title": "Protected, cared for and supported every day",
      "lede": "Standards for physical safety, emotional care and hygiene help children feel secure and give parents reassurance.",
      "ticks": [
        "Medical room and immediate first aid response",
        "Trained school counsellor for academic and emotional wellbeing",
        "Sanitised washrooms and purified drinking water stations",
        "24x7 CCTV, visitor verification and a secure perimeter"
      ],
      "sideBox": {
        "title": "If you need us",
        "items": [
          "Call the school office",
          "Message the class teacher",
          "Ask for the counsellor"
        ]
      }
    },
    "bands": [
      {
        "kind": "widget",
        "ground": "soft",
        "kicker": "What happens if...",
        "title": "Clear steps for everyday situations",
        "lede": "Pick a situation to see what the school does. Parents ask us about these most.",
        "widgetKey": "hs_e"
      },
      {
        "kind": "cards",
        "ground": "soft",
        "cols": 4,
        "kicker": "Wellbeing and security",
        "title": "Four areas of care",
        "lede": "Body, mind, hygiene and safety.",
        "items": [
          {
            "num": "01",
            "title": "Medical and first aid",
            "desc": "A dedicated room and prompt care for everyday health needs."
          },
          {
            "num": "02",
            "title": "Counselling and support",
            "desc": "Help with growth, stress and friendships."
          },
          {
            "num": "03",
            "title": "Hygiene and sanitation",
            "desc": "Sanitised washrooms, clean corridors and safe drinking water."
          },
          {
            "num": "04",
            "title": "Safety and security",
            "desc": "CCTV, trained security staff and strict entry protocols."
          }
        ]
      },
      {
        "kind": "steps3",
        "ground": "soft",
        "kicker": "Designed around safety and comfort",
        "title": "Three promises",
        "lede": "Arrival, health, communication.",
        "items": [
          {
            "title": "Safe arrival and spaces",
            "desc": "Reliable buses, perimeter checks and bright classrooms."
          },
          {
            "title": "Health and emotional support",
            "desc": "Medical room, hygienic dining, safe water and counselling."
          }
        ]
      }
    ],
    "related": [
      {
        "to": "/campus-life/student-welfare",
        "kicker": "Section overview",
        "title": "Student welfare",
        "desc": "Layers of care"
      },
      {
        "to": "/campus-life/learning-campus-infrastructure",
        "kicker": "In this section",
        "title": "Campus infrastructure",
        "desc": "A day on campus"
      },
      {
        "to": "/khel-vidya",
        "kicker": "Co-curricular",
        "title": "Khel Vidya",
        "desc": "Safety in sport"
      }
    ],
    "faqTitle": "Questions about health and safety",
    "faqs": [
      {
        "q": "What should I tell the school about my child's health?",
        "a": "Allergies, medication, conditions and emergency contacts. Share them with the class teacher at the start of the year."
      },
      {
        "q": "Is counselling confidential?",
        "a": "Counselling conversations are handled sensitively. Parents are involved where a child's safety or wellbeing needs it."
      },
      {
        "q": "How often is drinking water checked?",
        "a": "Purified drinking water stations are maintained regularly."
      },
      {
        "q": "Are there fire and safety drills?",
        "a": "Ask the school office about the current drill schedule."
      }
    ],
    "tagline": null,
    "widgets": {
      "hs_e": {
        "type": "explorer",
        "ordered": true,
        "items": [
          {
            "t": "My child feels unwell",
            "sub": "Health",
            "tag": "Steps",
            "d": "Care starts right away.",
            "list": [
              "The teacher sends the child to the medical room",
              "Trained staff give first aid and observe",
              "Parents are called if the child needs to go home or see a doctor",
              "A note is shared with the class teacher"
            ]
          },
          {
            "t": "My child is upset",
            "sub": "Wellbeing",
            "tag": "Steps",
            "d": "Feelings are taken seriously.",
            "list": [
              "The class teacher checks in privately",
              "The counsellor is available for a conversation",
              "Parents are informed when it helps the child",
              "Follow up continues until things settle"
            ]
          },
          {
            "t": "Someone else picks up",
            "sub": "Pickup",
            "tag": "Steps",
            "d": "Children leave only with registered adults.",
            "list": [
              "Inform the school in advance",
              "The person's identity is verified at the gate",
              "If not registered, the school calls parents first"
            ]
          },
          {
            "t": "A visitor arrives",
            "sub": "Security",
            "tag": "Steps",
            "d": "Every visit is checked.",
            "list": [
              "Identity is verified at the gate",
              "Visitors are logged and escorted",
              "CCTV covers the campus 24x7"
            ]
          },
          {
            "t": "The bus is late",
            "sub": "Transport",
            "tag": "Steps",
            "d": "Buses are tracked.",
            "list": [
              "The transport desk checks GPS",
              "Parents are informed of delays",
              "Staff stay with children until handover"
            ]
          }
        ]
      }
    }
  },
  "immersive-discovery-zones": {
    "slug": "immersive-discovery-zones",
    "sec": "experiential",
    "seoTitle": "Immersive and discovery zones",
    "seoDescription": "VR, AR, astronomy, innovation and sustainability zones at HKS Vidyamandir.",
    "name": "the discovery zones",
    "crumbs": [
      {
        "label": "Home",
        "to": "/"
      },
      {
        "label": "Co-curricular",
        "to": "/campus-life"
      },
      {
        "label": "Experiential learning",
        "to": "/experiential-learning"
      },
      {
        "label": "Immersive zones"
      }
    ],
    "stepTag": "Experiential learning",
    "stepSub": "5 zones",
    "h1": "Immersive and discovery zones",
    "lede": "Hands on spaces for VR, AR, astronomy, innovation and sustainability, beyond textbook learning.",
    "subnav": [
      {
        "to": "/experiential-learning",
        "active": false,
        "label": "Overview"
      },
      {
        "to": "/campus-life/immersive-discovery-zones",
        "active": true,
        "label": "Immersive zones"
      },
      {
        "to": "/campus-life/creative-speech-enterprise",
        "active": false,
        "label": "Creative, speech and enterprise"
      }
    ],
    "heroSvg": "<svg viewBox=\"0 0 520 420\" aria-hidden=\"true\">\n  <circle cx=\"140\" cy=\"300\" r=\"90\" fill=\"rgba(255,255,255,.08)\"/>\n  <circle cx=\"420\" cy=\"120\" r=\"50\" fill=\"rgba(255,255,255,.06)\"/>\n  <g transform=\"translate(260 210) rotate(-8) scale(1.25)\"><g class=\"bob\"><rect x=\"-110\" y=\"-60\" width=\"220\" height=\"120\" rx=\"40\" fill=\"#fff\"/><circle cx=\"-50\" cy=\"0\" r=\"30\" fill=\"var(--t)\"/><circle cx=\"50\" cy=\"0\" r=\"30\" fill=\"var(--t)\"/><path d=\"M-20 0h40\" stroke=\"var(--t-deep)\" stroke-width=\"8\"/></g></g>\n  <g fill=\"#ffd27a\"><circle class=\"tw1\" cx=\"460\" cy=\"330\" r=\"7\"/><circle class=\"tw2\" cx=\"70\" cy=\"90\" r=\"5\"/><circle class=\"tw1\" cx=\"380\" cy=\"60\" r=\"4\"/></g>\n</svg>",
    "stats": [
      {
        "val": "9",
        "label": "Zones",
        "sub": "Dedicated learning centres"
      },
      {
        "val": "K–12",
        "label": "Access",
        "sub": "Age appropriate"
      },
      {
        "val": "VR and AR",
        "label": "Immersive",
        "sub": "3D sessions"
      },
      {
        "val": "Hands on",
        "label": "Inquiry",
        "sub": "Beyond textbooks"
      }
    ],
    "intro": {
      "kicker": "Turning abstract into vivid",
      "title": "Explore planets, eras and ecosystems",
      "lede": "Students explore planets, revisit historical eras in VR, examine 3D models in AR, build prototypes and practise sustainable living.",
      "ticks": [
        "Guided sessions built into the weekly timetable",
        "Hands on inquiry that aids retention in science and humanities",
        "Supervised technology rooms with trained facilitators",
        "Links classroom theory to real world phenomena"
      ],
      "sideBox": {
        "title": "How students learn",
        "items": [
          "Explore and visualise",
          "Build and simulate",
          "Present and reflect"
        ]
      }
    },
    "bands": [
      {
        "kind": "widget",
        "ground": "paper",
        "kicker": "Virtual field trips",
        "title": "Where could your child go this week?",
        "lede": "Pick a subject to see the kinds of journeys our VR and AR sessions make possible.",
        "widgetKey": "iz_v"
      },
      {
        "kind": "cards",
        "ground": "soft",
        "cols": 3,
        "kicker": "Inside the zones",
        "title": "Five immersive spaces",
        "lede": "Each one built for a different kind of discovery.",
        "items": [
          {
            "num": "01",
            "title": "Virtual Reality Room",
            "desc": "VR lessons that bring science, geography and history to life."
          },
          {
            "num": "02",
            "title": "Augmented Reality Learning Room",
            "desc": "AR tools for visualising complex concepts in 3D."
          },
          {
            "num": "03",
            "title": "Astronomy and Space Exploration Zone",
            "desc": "Stars, planets, orbits and space science."
          },
          {
            "num": "04",
            "title": "Innovation and Discovery Centre",
            "desc": "Testing bold ideas, building working models and iterating."
          },
          {
            "num": "05",
            "title": "Environmental and Sustainability Zone",
            "desc": "Nature, ecology, conservation and sustainable living."
          }
        ]
      }
    ],
    "related": [
      {
        "to": "/experiential-learning",
        "kicker": "Section overview",
        "title": "Experiential learning",
        "desc": "All zones and labs"
      },
      {
        "to": "/campus-life/creative-speech-enterprise",
        "kicker": "In this section",
        "title": "Creative, speech and enterprise",
        "desc": "Art, debate, business and heritage"
      },
      {
        "to": "/krishi-vidya",
        "kicker": "Co-curricular track",
        "title": "Krishi Vidya",
        "desc": "The sustainability zone's gardens"
      }
    ],
    "faqTitle": "Questions about the discovery zones",
    "faqs": [
      {
        "q": "How long is a VR session?",
        "a": "Short, typically a few minutes inside the headset within a longer lesson, followed by discussion."
      },
      {
        "q": "Do young children use VR?",
        "a": "Younger children mostly use AR on tablets and screens. Headsets are used in later grades."
      },
      {
        "q": "Who supervises the rooms?",
        "a": "Trained facilitators and subject teachers supervise every session."
      }
    ],
    "tagline": null,
    "widgets": {
      "iz_v": {
        "type": "explorer",
        "items": [
          {
            "t": "Science",
            "sub": "VR and AR",
            "tag": "Sample journeys",
            "d": "Step inside ideas that are too small, too big or too far to see.",
            "list": [
              "Inside a plant cell",
              "Through the human heart",
              "Across the solar system"
            ]
          },
          {
            "t": "History",
            "sub": "VR",
            "tag": "Sample journeys",
            "d": "Walk through places from the past.",
            "list": [
              "The ruins of Hampi",
              "An Indus Valley city",
              "A medieval fort"
            ]
          },
          {
            "t": "Geography",
            "sub": "VR",
            "tag": "Sample journeys",
            "d": "See landforms and climates up close.",
            "list": [
              "The Western Ghats",
              "Inside a volcano",
              "A polar ice shelf"
            ]
          },
          {
            "t": "Astronomy",
            "sub": "Zone",
            "tag": "Sample journeys",
            "d": "Watch the sky and model space.",
            "list": [
              "Phases of the Moon",
              "Orbits of the planets",
              "Life cycle of a star"
            ]
          },
          {
            "t": "Sustainability",
            "sub": "Zone",
            "tag": "Sample projects",
            "d": "Hands on projects for a greener campus.",
            "list": [
              "Rainwater tracking",
              "Pollinator garden survey",
              "Waste audit"
            ]
          }
        ]
      }
    }
  },
  "index": {
    "slug": "index",
    "sec": "overview",
    "seoTitle": "Co-curricular",
    "seoDescription": "Co-curricular life at HKS Vidyamandir: the four Vidyas, sports, labs, Olympiads, clubs, welfare, events and more.",
    "name": "co-curricular life",
    "crumbs": [],
    "stepTag": "",
    "stepSub": "",
    "h1": "",
    "lede": "",
    "subnav": [],
    "heroSvg": "",
    "stats": [],
    "intro": null,
    "bands": [
      {
        "kind": "cards",
        "ground": "soft",
        "cols": 4,
        "kicker": "Holistic development",
        "title": "Skills for life",
        "lede": "Eight strands of growth that run through every track, club and classroom.",
        "items": [
          {
            "num": "01",
            "title": "Leadership and teamwork",
            "desc": "Student Leadership Council, houses and team building camps."
          },
          {
            "num": "02",
            "title": "Communication",
            "desc": "Debates, elocution and public speaking from early grades."
          },
          {
            "num": "03",
            "title": "Critical thinking",
            "desc": "Problem solving challenges and innovation projects."
          },
          {
            "num": "04",
            "title": "Emotional intelligence",
            "desc": "Mindfulness, counselling and peer support."
          },
          {
            "num": "05",
            "title": "Career counselling",
            "desc": "Guidance on streams, careers and universities."
          },
          {
            "num": "06",
            "title": "Life skills",
            "desc": "Organic farming, horticulture and practical skills."
          },
          {
            "num": "07",
            "title": "Community service",
            "desc": "Social responsibility and outreach initiatives."
          },
          {
            "num": "08",
            "title": "Creativity",
            "desc": "Art, craft, music, theatre and design."
          }
        ]
      },
      {
        "kind": "widget",
        "ground": "paper",
        "kicker": "Co-curricular directory",
        "title": "Everything beyond the classroom, in one place",
        "lede": "Nine areas, each with its own pages. Pick an area to see what's inside and jump straight there.",
        "widgetKey": "dir"
      }
    ],
    "related": [],
    "faqTitle": "",
    "faqs": [],
    "tagline": {
      "text": "Beyond marks, we measure *curiosity, *character *and *courage.",
      "note": "Every child finds a place to shine."
    },
    "widgets": {
      "dir": {
        "type": "explorer",
        "items": [
          {
            "t": "Sports",
            "sub": "3 pages",
            "tag": "Co-curricular",
            "d": "Pages in this area:",
            "list": [
              "<a class=\"underline underline-offset-4 hover:opacity-80\" style=\"color:#fff\" href=\"/sports\">Sports overview</a>",
              "<a class=\"underline underline-offset-4 hover:opacity-80\" style=\"color:#fff\" href=\"/campus-life/outdoor-sports\">Coaching and outdoor</a>",
              "<a class=\"underline underline-offset-4 hover:opacity-80\" style=\"color:#fff\" href=\"/campus-life/indoor-wellness-olympic-sports\">Indoor, wellness and Olympic</a>"
            ]
          },
          {
            "t": "Experiential learning",
            "sub": "3 pages",
            "tag": "Co-curricular",
            "d": "Pages in this area:",
            "list": [
              "<a class=\"underline underline-offset-4 hover:opacity-80\" style=\"color:#fff\" href=\"/experiential-learning\">Experiential learning overview</a>",
              "<a class=\"underline underline-offset-4 hover:opacity-80\" style=\"color:#fff\" href=\"/campus-life/immersive-discovery-zones\">Immersive zones</a>",
              "<a class=\"underline underline-offset-4 hover:opacity-80\" style=\"color:#fff\" href=\"/campus-life/creative-speech-enterprise\">Creative, speech and enterprise</a>"
            ]
          },
          {
            "t": "Laboratories",
            "sub": "3 pages",
            "tag": "Co-curricular",
            "d": "Pages in this area:",
            "list": [
              "<a class=\"underline underline-offset-4 hover:opacity-80\" style=\"color:#fff\" href=\"/campus-life/laboratories\">Laboratories overview</a>",
              "<a class=\"underline underline-offset-4 hover:opacity-80\" style=\"color:#fff\" href=\"/campus-life/core-science-math-labs\">Core science and maths</a>",
              "<a class=\"underline underline-offset-4 hover:opacity-80\" style=\"color:#fff\" href=\"/campus-life/technology-ai-maker-labs\">Technology, AI and maker</a>"
            ]
          },
          {
            "t": "Olympiads",
            "sub": "3 pages",
            "tag": "Co-curricular",
            "d": "Pages in this area:",
            "list": [
              "<a class=\"underline underline-offset-4 hover:opacity-80\" style=\"color:#fff\" href=\"/campus-life/olympiad-preparation\">Olympiads overview</a>",
              "<a class=\"underline underline-offset-4 hover:opacity-80\" style=\"color:#fff\" href=\"/campus-life/olympiad-tracks\">Grade 4+ tracks</a>",
              "<a class=\"underline underline-offset-4 hover:opacity-80\" style=\"color:#fff\" href=\"/campus-life/international-olympiads-mun\">International and MUN</a>"
            ]
          },
          {
            "t": "Competitive exams",
            "sub": "3 pages",
            "tag": "Co-curricular",
            "d": "Pages in this area:",
            "list": [
              "<a class=\"underline underline-offset-4 hover:opacity-80\" style=\"color:#fff\" href=\"/competitive-exams\">Competitive exams overview</a>",
              "<a class=\"underline underline-offset-4 hover:opacity-80\" style=\"color:#fff\" href=\"/campus-life/national-exams\">National exams</a>",
              "<a class=\"underline underline-offset-4 hover:opacity-80\" style=\"color:#fff\" href=\"/campus-life/international-exams\">International exams</a>"
            ]
          },
          {
            "t": "Clubs and development",
            "sub": "3 pages",
            "tag": "Co-curricular",
            "d": "Pages in this area:",
            "list": [
              "<a class=\"underline underline-offset-4 hover:opacity-80\" style=\"color:#fff\" href=\"/campus-life/student-development\">Clubs and development overview</a>",
              "<a class=\"underline underline-offset-4 hover:opacity-80\" style=\"color:#fff\" href=\"/campus-life/leadership-life-skills\">Leadership and life skills</a>",
              "<a class=\"underline underline-offset-4 hover:opacity-80\" style=\"color:#fff\" href=\"/campus-life/clubs-arts-expression\">Clubs and arts</a>"
            ]
          },
          {
            "t": "Welfare and facilities",
            "sub": "3 pages",
            "tag": "Co-curricular",
            "d": "Pages in this area:",
            "list": [
              "<a class=\"underline underline-offset-4 hover:opacity-80\" style=\"color:#fff\" href=\"/campus-life/student-welfare\">Welfare and facilities overview</a>",
              "<a class=\"underline underline-offset-4 hover:opacity-80\" style=\"color:#fff\" href=\"/campus-life/learning-campus-infrastructure\">Campus infrastructure</a>",
              "<a class=\"underline underline-offset-4 hover:opacity-80\" style=\"color:#fff\" href=\"/campus-life/health-support-safety\">Health and safety</a>"
            ]
          },
          {
            "t": "Events",
            "sub": "3 pages",
            "tag": "Co-curricular",
            "d": "Pages in this area:",
            "list": [
              "<a class=\"underline underline-offset-4 hover:opacity-80\" style=\"color:#fff\" href=\"/campus-life/events-achievements\">Events overview</a>",
              "<a class=\"underline underline-offset-4 hover:opacity-80\" style=\"color:#fff\" href=\"/campus-life/celebrations-exhibitions-trips\">Celebrations and trips</a>",
              "<a class=\"underline underline-offset-4 hover:opacity-80\" style=\"color:#fff\" href=\"/campus-life/recognition-tours-initiatives\">Recognition and tours</a>"
            ]
          },
          {
            "t": "Additional services",
            "sub": "3 pages",
            "tag": "Co-curricular",
            "d": "Pages in this area:",
            "list": [
              "<a class=\"underline underline-offset-4 hover:opacity-80\" style=\"color:#fff\" href=\"/campus-life/additional-services\">Additional services overview</a>",
              "<a class=\"underline underline-offset-4 hover:opacity-80\" style=\"color:#fff\" href=\"/campus-life/after-school-camps-care\">After school and camps</a>",
              "<a class=\"underline underline-offset-4 hover:opacity-80\" style=\"color:#fff\" href=\"/campus-life/enrichment-parent-sessions\">Enrichment and parents</a>"
            ]
          }
        ]
      }
    }
  },
  "indoor-wellness-olympic-sports": {
    "slug": "indoor-wellness-olympic-sports",
    "sec": "sports",
    "seoTitle": "Indoor, wellness and Olympic sports",
    "seoDescription": "Indoor games, yoga, meditation, martial arts and Olympic sports at HKS Vidyamandir.",
    "name": "indoor and wellness sports",
    "crumbs": [
      {
        "label": "Home",
        "to": "/"
      },
      {
        "label": "Co-curricular",
        "to": "/campus-life"
      },
      {
        "label": "Sports",
        "to": "/sports"
      },
      {
        "label": "Indoor, wellness and Olympic"
      }
    ],
    "stepTag": "Sports",
    "stepSub": "Indoor and Olympic",
    "h1": "Indoor games, wellness and Olympic sports",
    "lede": "Strategic indoor games, yoga and meditation, aerobics and martial arts, and Olympic disciplines from athletics to archery.",
    "subnav": [
      {
        "to": "/sports",
        "active": false,
        "label": "Overview"
      },
      {
        "to": "/campus-life/outdoor-sports",
        "active": false,
        "label": "Coaching and outdoor"
      },
      {
        "to": "/campus-life/indoor-wellness-olympic-sports",
        "active": true,
        "label": "Indoor, wellness and Olympic"
      }
    ],
    "heroSvg": "<svg viewBox=\"0 0 520 420\" aria-hidden=\"true\">\n  <circle cx=\"400\" cy=\"320\" r=\"70\" fill=\"rgba(255,255,255,.08)\"/>\n  <circle cx=\"110\" cy=\"120\" r=\"50\" fill=\"rgba(255,255,255,.06)\"/>\n  <g transform=\"translate(260 210) rotate(8) scale(1.25)\"><g class=\"bob\"><circle cx=\"0\" cy=\"0\" r=\"90\" fill=\"#fff\"/><path d=\"M-90 0h180M0-90c40 40 40 140 0 180M0-90c-40 40-40 140 0 180\" stroke=\"var(--t)\" stroke-width=\"6\" fill=\"none\"/></g></g>\n  <g fill=\"#ffd27a\"><circle class=\"tw1\" cx=\"80\" cy=\"300\" r=\"7\"/><circle class=\"tw2\" cx=\"450\" cy=\"90\" r=\"5\"/><circle class=\"tw1\" cx=\"130\" cy=\"60\" r=\"4\"/></g>\n</svg>",
    "stats": [
      {
        "val": "25",
        "label": "Areas",
        "sub": "Outdoor, indoor and Olympic"
      },
      {
        "val": "Daily",
        "label": "PE",
        "sub": "Structured fitness curriculum"
      },
      {
        "val": "Trained",
        "label": "Coaches",
        "sub": "Specialist sports coaches"
      },
      {
        "val": "All round",
        "label": "Wellness",
        "sub": "Yoga and tournaments"
      }
    ],
    "intro": {
      "kicker": "Focus, agility, discipline and calm",
      "title": "A movement practice for every temperament",
      "lede": "Students move from chess and archery to yoga, meditation and gymnastics, and find a practice they enjoy.",
      "ticks": [
        "Indoor games rooms for chess, table tennis, badminton and carrom",
        "Daily wellness routines with yoga, meditation and aerobics",
        "Martial arts and dance for self defence, rhythm and discipline",
        "Olympic disciplines including athletics, archery, swimming and gymnastics"
      ],
      "sideBox": {
        "title": "Good for",
        "items": [
          "Children who love strategy",
          "Children who need calm and focus",
          "Children building strength and flexibility"
        ]
      }
    },
    "bands": [
      {
        "kind": "widget",
        "ground": "paper",
        "kicker": "Find the right fit",
        "title": "Calm or active? Precise or powerful?",
        "lede": "Every discipline sits somewhere on these two scales. Tap one to learn more.",
        "widgetKey": "iw_q"
      },
      {
        "kind": "cards",
        "ground": "soft",
        "cols": 3,
        "kicker": "Indoor, wellness and Olympic tracks",
        "title": "Precision, strength and mindfulness",
        "lede": "Nine tracks, each with its own coach or teacher.",
        "items": [
          {
            "num": "01",
            "title": "Chess and carrom",
            "desc": "Strategy, concentration and classic indoor competition."
          },
          {
            "num": "02",
            "title": "Table tennis and badminton",
            "desc": "Reflexes, footwork, skill and tournament play."
          },
          {
            "num": "03",
            "title": "Indoor games and recreation",
            "desc": "Active breaks and peer bonding."
          },
          {
            "num": "04",
            "title": "Yoga and meditation",
            "desc": "Strength, flexibility, breathwork and focus."
          },
          {
            "num": "05",
            "title": "Aerobics, dance and movement",
            "desc": "Rhythm and endurance fitness."
          },
          {
            "num": "06",
            "title": "Martial arts",
            "desc": "Self defence, discipline, respect and confidence."
          },
          {
            "num": "07",
            "title": "Athletics and archery",
            "desc": "Track and field plus precision archery."
          },
          {
            "num": "08",
            "title": "Swimming and gymnastics",
            "desc": "Water confidence, balance, core strength and flexibility."
          },
          {
            "num": "09",
            "title": "Other Olympic sports",
            "desc": "Exposure to individual and team Olympic disciplines."
          }
        ]
      },
      {
        "kind": "widget",
        "ground": "paper",
        "kicker": "Wellness habits",
        "title": "Five minute calm, for home too",
        "lede": "Tick the habits your child already has. Yoga and meditation sessions at school build all of them.",
        "widgetKey": "iw_c"
      }
    ],
    "related": [
      {
        "to": "/sports",
        "kicker": "Section overview",
        "title": "Sports and physical education",
        "desc": "All disciplines and the sport finder"
      },
      {
        "to": "/campus-life/outdoor-sports",
        "kicker": "In this section",
        "title": "Coaching and outdoor sports",
        "desc": "Team games and adventure"
      },
      {
        "to": "/khel-vidya",
        "kicker": "Co-curricular track",
        "title": "Khel Vidya",
        "desc": "Try the breathing exercise and see a sample week"
      }
    ],
    "faqTitle": "Questions about indoor and wellness sports",
    "faqs": [
      {
        "q": "Is yoga taught every day?",
        "a": "Wellness routines with yoga, meditation and aerobics run through the week. Exact timings vary by grade."
      },
      {
        "q": "Is martial arts safe for young children?",
        "a": "Classes are age appropriate, supervised and focus on discipline, respect and controlled technique."
      },
      {
        "q": "Is swimming available?",
        "a": "Swimming is offered with available facilities. The school confirms arrangements each term."
      },
      {
        "q": "Can my child compete in chess?",
        "a": "Yes. Chess players can join school tournaments and inter-school competitions."
      }
    ],
    "tagline": null,
    "widgets": {
      "iw_q": {
        "type": "quadrant",
        "ax": [
          "Calm",
          "Energetic",
          "Precise",
          "Powerful"
        ],
        "items": [
          [
            "Chess",
            20,
            22,
            "Pure strategy and patience. Builds concentration and planning.",
            "Mind sport"
          ],
          [
            "Archery",
            28,
            38,
            "Breath, stillness and aim. Rewards focus.",
            "Olympic"
          ],
          [
            "Yoga",
            44,
            18,
            "Strength and flexibility with steady breath.",
            "Wellness"
          ],
          [
            "Meditation",
            58,
            10,
            "Quiet attention. Helps with focus and calm.",
            "Wellness"
          ],
          [
            "Carrom",
            18,
            48,
            "Touch and aim in a friendly game.",
            "Indoor"
          ],
          [
            "Table tennis",
            32,
            72,
            "Lightning reflexes and quick footwork.",
            "Indoor"
          ],
          [
            "Badminton",
            50,
            80,
            "Agility and stamina in long rallies.",
            "Indoor"
          ],
          [
            "Gymnastics",
            70,
            60,
            "Power, balance and control.",
            "Olympic"
          ],
          [
            "Martial arts",
            82,
            72,
            "Strength, discipline and self defence.",
            "Indoor"
          ],
          [
            "Aerobics",
            64,
            86,
            "High energy rhythm and endurance.",
            "Wellness"
          ],
          [
            "Athletics",
            86,
            88,
            "Speed and power on the track.",
            "Olympic"
          ]
        ]
      },
      "iw_c": {
        "type": "checklist",
        "items": [
          "Takes three slow breaths when upset",
          "Stretches in the morning",
          "Can sit quietly for two minutes",
          "Sleeps at a regular time",
          "Drinks water through the day",
          "Takes screen breaks to move",
          "Notices how their body feels",
          "Enjoys some daily movement"
        ],
        "start": "Every habit can be learned. Our wellness sessions start small.",
        "mid": "A good base. School sessions will build on these.",
        "done": "Wonderful. Your child already has strong wellbeing habits."
      }
    }
  },
  "international-exams": {
    "slug": "international-exams",
    "sec": "compete",
    "seoTitle": "International exams and admissions",
    "seoDescription": "Digital SAT, ACT, PSAT, AP, Cambridge English, TOEFL and IELTS preparation with university guidance at HKS Vidyamandir.",
    "name": "international exams",
    "crumbs": [
      {
        "label": "Home",
        "to": "/"
      },
      {
        "label": "Co-curricular",
        "to": "/campus-life"
      },
      {
        "label": "Competitive exams",
        "to": "/competitive-exams"
      },
      {
        "label": "International exams"
      }
    ],
    "stepTag": "Competitive exams",
    "stepSub": "Global track",
    "h1": "International exams and university admissions",
    "lede": "Test readiness and counselling for overseas university goals, covering major US and English proficiency exams.",
    "subnav": [
      {
        "to": "/competitive-exams",
        "active": false,
        "label": "Overview"
      },
      {
        "to": "/campus-life/national-exams",
        "active": false,
        "label": "National exams"
      },
      {
        "to": "/campus-life/international-exams",
        "active": true,
        "label": "International exams"
      }
    ],
    "heroSvg": "<svg viewBox=\"0 0 520 420\" aria-hidden=\"true\">\n  <circle cx=\"400\" cy=\"320\" r=\"70\" fill=\"rgba(255,255,255,.08)\"/>\n  <circle cx=\"110\" cy=\"120\" r=\"50\" fill=\"rgba(255,255,255,.06)\"/>\n  <g transform=\"translate(260 210) rotate(8) scale(1.25)\"><g class=\"bob\"><circle r=\"100\" fill=\"#fff\"/><circle r=\"68\" fill=\"none\" stroke=\"var(--t)\" stroke-width=\"14\"/><circle r=\"34\" fill=\"var(--t)\"/><circle r=\"10\" fill=\"#ffd27a\"/></g></g>\n  <g fill=\"#ffd27a\"><circle class=\"tw1\" cx=\"80\" cy=\"300\" r=\"7\"/><circle class=\"tw2\" cx=\"450\" cy=\"90\" r=\"5\"/><circle class=\"tw1\" cx=\"130\" cy=\"60\" r=\"4\"/></g>\n</svg>",
    "stats": [
      {
        "val": "14",
        "label": "Areas",
        "sub": "National and international"
      },
      {
        "val": "Grade 6+",
        "label": "Foundation",
        "sub": "NEET and JEE"
      },
      {
        "val": "Integrated",
        "label": "Timetable",
        "sub": "Within the school day"
      },
      {
        "val": "Global",
        "label": "Exams",
        "sub": "SAT, ACT, AP, TOEFL, IELTS"
      }
    ],
    "intro": {
      "kicker": "Opening doors worldwide",
      "title": "Universities around the world, explained",
      "lede": "Counsellors and educators guide students through subject choice, standardised tests and global applications.",
      "ticks": [
        "Shortlisting and application guidance for international universities",
        "Digital SAT, PSAT and ACT practice modules",
        "AP exam support",
        "English proficiency training for Cambridge, TOEFL and IELTS"
      ],
      "sideBox": {
        "title": "Start thinking by Grade 9",
        "items": [
          "Subjects that keep options open",
          "Activities that build a profile",
          "Practice tests before the real ones"
        ]
      }
    },
    "bands": [
      {
        "kind": "widget",
        "ground": "soft",
        "kicker": "Where students aim",
        "title": "Tests by destination",
        "lede": "Tap a destination to see the tests universities there commonly ask for. Always check each university's own requirements.",
        "widgetKey": "ie_a"
      },
      {
        "kind": "cards",
        "ground": "soft",
        "cols": 3,
        "kicker": "Preparation and counselling",
        "title": "Six international tracks",
        "lede": "From first PSAT to final application.",
        "items": [
          {
            "num": "01",
            "title": "International admissions guidance",
            "desc": "Choosing pathways, building profiles and applying abroad."
          },
          {
            "num": "02",
            "title": "Digital SAT",
            "desc": "Structured preparation for a leading US and global college entrance test."
          },
          {
            "num": "03",
            "title": "ACT and PSAT",
            "desc": "Early PSAT practice and full ACT readiness."
          },
          {
            "num": "04",
            "title": "AP Examinations",
            "desc": "College level subject depth and exam preparation."
          },
          {
            "num": "05",
            "title": "Cambridge English",
            "desc": "Internationally recognised English certification."
          },
          {
            "num": "06",
            "title": "TOEFL and IELTS",
            "desc": "Academic English coaching for study abroad."
          }
        ]
      },
      {
        "kind": "widget",
        "ground": "soft",
        "kicker": "The application timeline",
        "title": "Grade 9 to the offer letter",
        "lede": "A typical path for students aiming abroad.",
        "widgetKey": "ie_s"
      }
    ],
    "related": [
      {
        "to": "/competitive-exams",
        "kicker": "Section overview",
        "title": "Competitive exams",
        "desc": "The exam ladder"
      },
      {
        "to": "/campus-life/national-exams",
        "kicker": "In this section",
        "title": "National exams",
        "desc": "NEET, JEE and CUET"
      },
      {
        "to": "/senior-secondary",
        "kicker": "Academics",
        "title": "Senior Secondary",
        "desc": "Pathways after Grade 12"
      }
    ],
    "faqTitle": "Questions about international exams",
    "faqs": [
      {
        "q": "When should my child take the SAT?",
        "a": "Usually in Grade 11 or early Grade 12, after PSAT practice. Counsellors help plan the right timing."
      },
      {
        "q": "Is IELTS or TOEFL better?",
        "a": "It depends on the countries and universities. Many accept both; counsellors check each target."
      },
      {
        "q": "Do you help with essays and applications?",
        "a": "Yes, through university admissions guidance and counselling."
      },
      {
        "q": "Is AP available?",
        "a": "AP exam support is offered for students who choose AP subjects."
      }
    ],
    "tagline": null,
    "widgets": {
      "ie_a": {
        "type": "arcs",
        "home": [
          640,
          300
        ],
        "blobs": [
          [
            200,
            170,
            150,
            90
          ],
          [
            470,
            140,
            110,
            70
          ],
          [
            640,
            260,
            60,
            80
          ],
          [
            820,
            330,
            90,
            50
          ],
          [
            300,
            330,
            70,
            60
          ]
        ],
        "dest": [
          [
            "USA",
            180,
            160,
            "Digital SAT or ACT for many universities, AP for subject credit, and TOEFL or IELTS for English."
          ],
          [
            "UK",
            470,
            110,
            "IELTS or another English test, plus strong Class 12 results. Some courses add their own tests."
          ],
          [
            "Canada",
            230,
            100,
            "IELTS or TOEFL for English, with Class 12 results. Some universities consider SAT scores."
          ],
          [
            "Australia",
            860,
            380,
            "IELTS or TOEFL for English, with Class 12 results."
          ],
          [
            "Singapore",
            770,
            330,
            "Strong Class 12 results; some universities consider SAT and English tests."
          ]
        ]
      },
      "ie_s": {
        "type": "schedule",
        "rows": [
          [
            "Grade 9",
            "Explore",
            "Interests, subjects and early profile building"
          ],
          [
            "Grade 10",
            "PSAT practice",
            "See a baseline and plan subjects for Grade 11"
          ],
          [
            "Grade 11",
            "Main tests",
            "Digital SAT or ACT, AP subjects, English proficiency"
          ],
          [
            "Grade 12 · Term 1",
            "Applications",
            "Shortlist, essays, recommendations and submissions"
          ],
          [
            "Grade 12 · Term 2",
            "Offers and boards",
            "Decisions arrive while students finish CBSE boards"
          ]
        ],
        "note": "A typical timeline; deadlines vary by country and university."
      }
    }
  },
  "international-olympiads-mun": {
    "slug": "international-olympiads-mun",
    "sec": "olympiad",
    "seoTitle": "International Olympiads and MUN",
    "seoDescription": "Preparation for IMO, NSO, IEO, ICSO, IGKO and Model United Nations at HKS Vidyamandir.",
    "name": "international Olympiads and MUN",
    "crumbs": [
      {
        "label": "Home",
        "to": "/"
      },
      {
        "label": "Co-curricular",
        "to": "/campus-life"
      },
      {
        "label": "Olympiads",
        "to": "/campus-life/olympiad-preparation"
      },
      {
        "label": "International and MUN"
      }
    ],
    "stepTag": "Olympiads",
    "stepSub": "Global benchmarks · 6 programmes",
    "h1": "International Olympiads and Model United Nations",
    "lede": "Focused preparation for IMO, NSO, IEO, ICSO, IGKO and MUN, covering research, diplomacy and public speaking.",
    "subnav": [
      {
        "to": "/campus-life/olympiad-preparation",
        "active": false,
        "label": "Overview"
      },
      {
        "to": "/campus-life/olympiad-tracks",
        "active": false,
        "label": "Grade 4+ tracks"
      },
      {
        "to": "/campus-life/international-olympiads-mun",
        "active": true,
        "label": "International and MUN"
      }
    ],
    "heroSvg": "<svg viewBox=\"0 0 520 420\" aria-hidden=\"true\">\n  <circle cx=\"400\" cy=\"320\" r=\"70\" fill=\"rgba(255,255,255,.08)\"/>\n  <circle cx=\"110\" cy=\"120\" r=\"50\" fill=\"rgba(255,255,255,.06)\"/>\n  <g transform=\"translate(260 210) rotate(8) scale(1.25)\"><g class=\"bob\"><path d=\"M-24-110L0-40 24-110\" fill=\"#fff\"/><circle cx=\"0\" cy=\"10\" r=\"72\" fill=\"#ffd27a\" stroke=\"#fff\" stroke-width=\"10\"/><path d=\"M0-30l12 24 26 4-19 18 5 26-24-12-24 12 5-26-19-18 26-4Z\" fill=\"var(--t)\"/></g></g>\n  <g fill=\"#ffd27a\"><circle class=\"tw1\" cx=\"80\" cy=\"300\" r=\"7\"/><circle class=\"tw2\" cx=\"450\" cy=\"90\" r=\"5\"/><circle class=\"tw1\" cx=\"130\" cy=\"60\" r=\"4\"/></g>\n</svg>",
    "stats": [
      {
        "val": "15",
        "label": "Areas",
        "sub": "Tracks and benchmarks"
      },
      {
        "val": "Grade 4+",
        "label": "Start",
        "sub": "Early Olympiad exposure"
      },
      {
        "val": "5",
        "label": "Subjects",
        "sub": "Maths, Science, English, Cyber, GK"
      },
      {
        "val": "Global",
        "label": "Benchmarks",
        "sub": "IMO, NSO, IEO, ICSO, IGKO, MUN"
      }
    ],
    "intro": {
      "kicker": "On international platforms",
      "title": "Competing and speaking on the world stage",
      "lede": "Students measure their analytical skills against international Olympiad standards and represent countries at MUN conferences.",
      "ticks": [
        "Targeted training for all five flagship Olympiads",
        "Past paper analysis and higher order problem solving workshops",
        "MUN training in diplomacy and policy debate",
        "Builds confidence, articulation and global awareness"
      ],
      "sideBox": {
        "title": "MUN in one line each",
        "items": [
          "Delegate: represents a country",
          "Position paper: that country's view",
          "Resolution: the solution the committee votes on"
        ]
      }
    },
    "bands": [
      {
        "kind": "cards",
        "ground": "soft",
        "cols": 3,
        "kicker": "Six flagship programmes",
        "title": "The global benchmarks",
        "lede": "Each with its own preparation track.",
        "items": [
          {
            "num": "01",
            "title": "IMO",
            "desc": "Advanced problem solving and logical reasoning."
          },
          {
            "num": "02",
            "title": "NSO",
            "desc": "Applied science reinforced through lab inquiry."
          },
          {
            "num": "03",
            "title": "IEO",
            "desc": "Reading comprehension, grammar and vocabulary."
          },
          {
            "num": "04",
            "title": "ICSO",
            "desc": "Algorithmic thinking, digital literacy and computing."
          },
          {
            "num": "05",
            "title": "IGKO",
            "desc": "Global affairs, history, science awareness and life skills."
          },
          {
            "num": "06",
            "title": "MUN",
            "desc": "Research, diplomacy, resolution drafting and public speaking."
          }
        ]
      },
      {
        "kind": "widget",
        "ground": "paper",
        "kicker": "How MUN works",
        "title": "From country brief to final vote",
        "lede": "Follow a delegate through a Model United Nations conference.",
        "widgetKey": "im_m"
      }
    ],
    "related": [
      {
        "to": "/campus-life/olympiad-preparation",
        "kicker": "Section overview",
        "title": "Olympiad preparation",
        "desc": "The full programme"
      },
      {
        "to": "/campus-life/olympiad-tracks",
        "kicker": "In this section",
        "title": "Grade 4+ tracks",
        "desc": "Try a sample puzzle"
      },
      {
        "to": "/campus-life/creative-speech-enterprise",
        "kicker": "Experiential learning",
        "title": "Public speaking and debate",
        "desc": "Practise in the debate centre"
      }
    ],
    "faqTitle": "Questions about international Olympiads and MUN",
    "faqs": [
      {
        "q": "Which grades can join MUN?",
        "a": "MUN is for older students who are ready for research and formal debate. Teachers advise on readiness."
      },
      {
        "q": "Does MUN involve travel?",
        "a": "Conferences may be held at school or other venues. Details are shared in advance with consent forms."
      },
      {
        "q": "How is IMO different from school maths?",
        "a": "It asks for reasoning on unfamiliar problems, not just applying a known method."
      }
    ],
    "tagline": null,
    "widgets": {
      "im_m": {
        "type": "explorer",
        "ordered": true,
        "items": [
          {
            "t": "Get a country",
            "sub": "Step 1",
            "tag": "Preparation",
            "d": "Each delegate is assigned a country and a committee topic.",
            "list": [
              "Read about the country's history and interests",
              "Understand the topic, for example climate or health"
            ]
          },
          {
            "t": "Write a position paper",
            "sub": "Step 2",
            "tag": "Research",
            "d": "A short paper sets out the country's view and proposals.",
            "list": [
              "Use reliable sources",
              "Write clearly and persuasively"
            ]
          },
          {
            "t": "Opening speech",
            "sub": "Step 3",
            "tag": "Speaking",
            "d": "Delegates speak for their country in formal debate.",
            "list": [
              "Time limits and rules of procedure",
              "Respectful disagreement"
            ]
          },
          {
            "t": "Negotiate",
            "sub": "Step 4",
            "tag": "Diplomacy",
            "d": "Delegates form blocs and look for common ground.",
            "list": [
              "Listening and compromise",
              "Drafting clauses together"
            ]
          },
          {
            "t": "Vote on a resolution",
            "sub": "Step 5",
            "tag": "Outcome",
            "d": "The committee debates and votes on a final resolution.",
            "list": [
              "Amendments and voting",
              "Reflection after the conference"
            ]
          }
        ]
      }
    }
  },
  "laboratories": {
    "slug": "laboratories",
    "sec": "labs",
    "seoTitle": "Laboratories",
    "seoDescription": "Fourteen specialised laboratories at HKS Vidyamandir, from physics to robotics, AI and maker spaces.",
    "name": "the laboratories",
    "crumbs": [
      {
        "label": "Home",
        "to": "/"
      },
      {
        "label": "Co-curricular",
        "to": "/campus-life"
      },
      {
        "label": "Laboratories",
        "to": "/campus-life/laboratories"
      },
      {
        "label": "Overview"
      }
    ],
    "stepTag": "Laboratories",
    "stepSub": "13+ specialised laboratories",
    "h1": "Modern, safe, hands on laboratories",
    "lede": "Foundational science labs plus robotics, AI, coding, electronics and maker spaces, where students learn by experimenting.",
    "subnav": [
      {
        "to": "/campus-life/laboratories",
        "active": true,
        "label": "Overview"
      },
      {
        "to": "/campus-life/core-science-math-labs",
        "active": false,
        "label": "Core science and maths"
      },
      {
        "to": "/campus-life/technology-ai-maker-labs",
        "active": false,
        "label": "Technology, AI and maker"
      }
    ],
    "heroSvg": "<svg viewBox=\"0 0 520 420\" aria-hidden=\"true\">\n  <circle cx=\"380\" cy=\"110\" r=\"120\" fill=\"rgba(255,255,255,.08)\"/>\n  <circle cx=\"120\" cy=\"330\" r=\"50\" fill=\"rgba(255,255,255,.06)\"/>\n  <g transform=\"translate(260 210) rotate(0) scale(1.25)\"><g class=\"bob\"><path d=\"M-30-100h60M-20-100v60L-80 70a14 14 0 0 0 12 22h136a14 14 0 0 0 12-22L20-40v-60\" fill=\"#fff\"/><path d=\"M-62 40h124l18 34a8 8 0 0 1-7 12H-69a8 8 0 0 1-7-12Z\" fill=\"var(--t)\"/><circle cx=\"-10\" cy=\"10\" r=\"8\" fill=\"#ffd27a\"/><circle cx=\"16\" cy=\"-14\" r=\"5\" fill=\"#ffd27a\"/></g></g>\n  <g fill=\"#ffd27a\"><circle class=\"tw1\" cx=\"90\" cy=\"90\" r=\"7\"/><circle class=\"tw2\" cx=\"450\" cy=\"350\" r=\"5\"/><circle class=\"tw1\" cx=\"420\" cy=\"60\" r=\"4\"/></g>\n</svg>",
    "stats": [
      {
        "val": "13+",
        "label": "Labs",
        "sub": "Science, maths, tech and maker"
      },
      {
        "val": "Guided",
        "label": "Sessions",
        "sub": "Trained lab assistants"
      },
      {
        "val": "STEM and AI",
        "label": "Equipment",
        "sub": "Future ready"
      },
      {
        "val": "Weekly",
        "label": "Practicals",
        "sub": "Scheduled hours"
      }
    ],
    "intro": {
      "kicker": "Practical inquiry",
      "title": "Where curiosity turns into discovery",
      "lede": "Lab schedules by grade complement classroom teaching, supervised by subject teachers and lab assistants under strict safety rules.",
      "ticks": [
        "Dedicated physics, chemistry, biology, maths and environmental science labs",
        "Computer science, coding, robotics and AI labs",
        "Electronics prototyping, STEM, tinkering and maker spaces",
        "Safe equipment, structured practicals and individual hands on time"
      ],
      "sideBox": {
        "title": "Lab safety, always",
        "items": [
          "Safety briefing before every practical",
          "A teacher or lab assistant in every session",
          "Goggles and gloves when the experiment needs them"
        ]
      }
    },
    "bands": [
      {
        "kind": "widget",
        "ground": "soft",
        "kicker": "All laboratory spaces",
        "title": "14 specialised labs across campus",
        "lede": "Filter by type to see each lab.",
        "widgetKey": "lb_f"
      },
      {
        "kind": "widget",
        "ground": "paper",
        "kicker": "By grade",
        "title": "What each age does in the labs",
        "lede": "Lab work grows with your child. Pick a stage.",
        "widgetKey": "lb_g"
      },
      {
        "kind": "steps3",
        "ground": "soft",
        "kicker": "Laboratory methodology",
        "title": "Three steps from curiosity to invention",
        "lede": "The same scientific habit, at every age.",
        "items": [
          {
            "title": "Observe and hypothesise",
            "desc": "Teachers introduce concepts with clear safety protocols."
          },
          {
            "title": "Experiment and code",
            "desc": "Hands on experiments, circuits, robot programming and prototype testing."
          }
        ]
      }
    ],
    "related": [
      {
        "to": "/campus-life/core-science-math-labs",
        "kicker": "In this section",
        "title": "Core science and maths labs",
        "desc": "Seven foundational spaces"
      },
      {
        "to": "/campus-life/technology-ai-maker-labs",
        "kicker": "In this section",
        "title": "Technology, AI and maker labs",
        "desc": "Seven future ready spaces"
      },
      {
        "to": "/anubhav-vidya",
        "kicker": "Co-curricular track",
        "title": "Anubhav Vidya",
        "desc": "See all thirteen labs in a sideways scroll"
      }
    ],
    "faqTitle": "Questions about the laboratories",
    "faqs": [
      {
        "q": "How often do students use the labs?",
        "a": "Every class has scheduled practical hours each week, with more from the middle grades."
      },
      {
        "q": "Who supervises lab work?",
        "a": "Subject teachers and trained lab assistants, following strict safety protocols."
      },
      {
        "q": "Are the science labs CBSE compliant?",
        "a": "Physics, Chemistry and Biology have separate CBSE compliant labs for practicals."
      },
      {
        "q": "Can younger children use the robotics lab?",
        "a": "Robotics starts from Grade 4 with age appropriate kits."
      }
    ],
    "tagline": {
      "text": "In our labs, children don't just learn science. *They *do *science.",
      "note": ""
    },
    "widgets": {
      "lb_f": {
        "type": "filter",
        "cats": [
          [
            "sci",
            "Science"
          ],
          [
            "math",
            "Maths and STEM"
          ],
          [
            "tech",
            "Technology"
          ],
          [
            "make",
            "Maker"
          ]
        ],
        "items": [
          {
            "t": "Physics Laboratory",
            "d": "Force, light, sound, optics and energy",
            "cat": "sci"
          },
          {
            "t": "Chemistry Laboratory",
            "d": "Materials, solutions and reactions",
            "cat": "sci"
          },
          {
            "t": "Biology Laboratory",
            "d": "Microscopy, plants, animals and the human body",
            "cat": "sci"
          },
          {
            "t": "Mathematics",
            "d": "Visual learning with models and manipulatives",
            "cat": "math"
          },
          {
            "t": "Astronomy Laboratory",
            "d": "Sky observation and space science",
            "cat": "sci"
          },
          {
            "t": "Environmental Science Laboratory",
            "d": "Air, water, soil quality and ecosystems",
            "cat": "sci"
          },
          {
            "t": "STEM Labs",
            "d": "Integrated science, technology, engineering and maths",
            "cat": "math"
          },
          {
            "t": "Computer Science",
            "d": "Digital literacy, research and projects",
            "cat": "tech"
          },
          {
            "t": "Robotics",
            "d": "Building and programming working robots",
            "cat": "tech"
          },
          {
            "t": "AI and Machine Learning",
            "d": "How intelligent systems learn",
            "cat": "tech"
          },
          {
            "t": "Coding and Programming",
            "d": "Coding, apps and web projects",
            "cat": "tech"
          },
          {
            "t": "Electronics Prototyping",
            "d": "Circuits, sensors and hardware models",
            "cat": "make"
          },
          {
            "t": "Tinkering and Innovation",
            "d": "Testing ideas and inventing solutions",
            "cat": "make"
          },
          {
            "t": "Maker Space and Design",
            "d": "Prototyping with tools and design thinking",
            "cat": "make"
          }
        ]
      },
      "lb_g": {
        "type": "tabs",
        "tabs": [
          [
            "Primary",
            [
              [
                "Hands on science",
                "Simple experiments with plants, water and magnets"
              ],
              [
                "Maths lab",
                "Shapes, fractions and measurement with models"
              ],
              [
                "First coding",
                "Block coding and logic puzzles"
              ]
            ]
          ],
          [
            "Grades 4 – 5",
            [
              [
                "Robotics begins",
                "Age appropriate robotics kits from Grade 4"
              ],
              [
                "Science models",
                "Building models for the exhibition"
              ],
              [
                "Astronomy",
                "Moon phases and the solar system"
              ]
            ]
          ],
          [
            "Grades 6 – 8",
            [
              [
                "Lab practicals",
                "Physics, chemistry and biology investigations"
              ],
              [
                "Coding and apps",
                "Programs, games and simple apps"
              ],
              [
                "Electronics",
                "Circuits and sensors"
              ]
            ]
          ],
          [
            "Grades 9 – 12",
            [
              [
                "CBSE practicals",
                "Practical records, experiments and viva preparation"
              ],
              [
                "AI and machine learning",
                "Projects with real data"
              ],
              [
                "Maker projects",
                "Prototypes for competitions"
              ]
            ]
          ]
        ],
        "note": "A general guide. Lab activities follow each grade's CBSE syllabus."
      }
    }
  },
  "leadership-life-skills": {
    "slug": "leadership-life-skills",
    "sec": "development",
    "seoTitle": "Leadership and life skills",
    "seoDescription": "Personality development, leadership, communication, critical thinking, emotional intelligence and career counselling at HKS Vidyamandir.",
    "name": "life skills",
    "crumbs": [
      {
        "label": "Home",
        "to": "/"
      },
      {
        "label": "Co-curricular",
        "to": "/campus-life"
      },
      {
        "label": "Clubs and development",
        "to": "/campus-life/student-development"
      },
      {
        "label": "Leadership and life skills"
      }
    ],
    "stepTag": "Clubs and development",
    "stepSub": "10 focus areas",
    "h1": "Leadership, character and life skills",
    "lede": "Confidence, communication, critical thinking, emotional intelligence, career clarity and community responsibility.",
    "subnav": [
      {
        "to": "/campus-life/student-development",
        "active": false,
        "label": "Overview"
      },
      {
        "to": "/campus-life/leadership-life-skills",
        "active": true,
        "label": "Leadership and life skills"
      },
      {
        "to": "/campus-life/clubs-arts-expression",
        "active": false,
        "label": "Clubs and arts"
      }
    ],
    "heroSvg": "<svg viewBox=\"0 0 520 420\" aria-hidden=\"true\">\n  <circle cx=\"140\" cy=\"300\" r=\"90\" fill=\"rgba(255,255,255,.08)\"/>\n  <circle cx=\"420\" cy=\"120\" r=\"50\" fill=\"rgba(255,255,255,.06)\"/>\n  <g transform=\"translate(260 210) rotate(-8) scale(1.25)\"><g class=\"bob\"><circle cx=\"-50\" cy=\"-30\" r=\"34\" fill=\"#fff\"/><circle cx=\"50\" cy=\"-30\" r=\"34\" fill=\"#ffd27a\"/><path d=\"M-110 90c10-60 50-80 60-80s50 20 60 80Z\" fill=\"#fff\"/><path d=\"M-10 90c10-60 50-80 60-80s50 20 60 80Z\" fill=\"#ffd27a\"/></g></g>\n  <g fill=\"#ffd27a\"><circle class=\"tw1\" cx=\"460\" cy=\"330\" r=\"7\"/><circle class=\"tw2\" cx=\"70\" cy=\"90\" r=\"5\"/><circle class=\"tw1\" cx=\"380\" cy=\"60\" r=\"4\"/></g>\n</svg>",
    "stats": [
      {
        "val": "21",
        "label": "Areas",
        "sub": "Life skills and clubs"
      },
      {
        "val": "9+",
        "label": "Clubs",
        "sub": "Debate, arts, film and STEM"
      },
      {
        "val": "Student led",
        "label": "Council",
        "sub": "Leadership Council"
      },
      {
        "val": "Holistic",
        "label": "Growth",
        "sub": "Mind, voice and character"
      }
    ],
    "intro": {
      "kicker": "Skills that last a lifetime",
      "title": "Clear thinking, kind collaboration",
      "lede": "Programmes teach clear thinking, kind collaboration, emotional understanding, environmental care and community service.",
      "ticks": [
        "Personality development and communication workshops",
        "Team building and Leadership Council roles",
        "Career awareness and subject pathway counselling",
        "Life skills through organic farming and community service"
      ],
      "sideBox": {
        "title": "Built through",
        "items": [
          "Workshops",
          "Real responsibility",
          "Reflection with mentors"
        ]
      }
    },
    "bands": [
      {
        "kind": "widget",
        "ground": "soft",
        "kicker": "A conversation starter",
        "title": "Your child's skills profile",
        "lede": "Move the sliders to sketch where your child is today. Use it to talk with your child, or with their teacher at the next meeting.",
        "widgetKey": "ls_r"
      },
      {
        "kind": "cards",
        "ground": "soft",
        "cols": 3,
        "kicker": "Core programmes",
        "title": "Nine programmes",
        "lede": "Each runs through the year, matched to age.",
        "items": [
          {
            "num": "01",
            "title": "Personality development",
            "desc": "Self confidence, etiquette, poise and presentation."
          },
          {
            "num": "02",
            "title": "Leadership and team building",
            "desc": "Fair leadership, active listening and teamwork."
          },
          {
            "num": "03",
            "title": "Communication and public speaking",
            "desc": "Clear, persuasive expression."
          },
          {
            "num": "04",
            "title": "Critical thinking and problem solving",
            "desc": "Analysing questions, weighing evidence and practical solutions."
          },
          {
            "num": "05",
            "title": "Creativity and emotional intelligence",
            "desc": "Fresh ideas, self awareness and social awareness."
          },
          {
            "num": "06",
            "title": "Career awareness and counselling",
            "desc": "Guidance on strengths, subjects and careers."
          },
          {
            "num": "07",
            "title": "Organic farming and horticulture",
            "desc": "Patience, care and sustainability in campus gardens."
          },
          {
            "num": "08",
            "title": "Community engagement and service",
            "desc": "Neighbourhood and social responsibility projects."
          },
          {
            "num": "09",
            "title": "Student Leadership Council",
            "desc": "An active student voice in school life."
          }
        ]
      },
      {
        "kind": "steps3",
        "ground": "soft",
        "kicker": "How it works",
        "title": "Discover, practise, lead",
        "lede": "Three steps.",
        "items": [
          {
            "title": "Discover interests",
            "desc": "Explore debate, writing, reading, environment, entrepreneurship, film, music and theatre."
          },
          {
            "title": "Practise life skills",
            "desc": "Personality development, emotional intelligence, organic farming and teamwork."
          }
        ]
      }
    ],
    "related": [
      {
        "to": "/campus-life/student-development",
        "kicker": "Section overview",
        "title": "Student development",
        "desc": "The whole child compass"
      },
      {
        "to": "/campus-life/clubs-arts-expression",
        "kicker": "In this section",
        "title": "Clubs and arts",
        "desc": "Find your child's club"
      },
      {
        "to": "/senior-secondary",
        "kicker": "Academics",
        "title": "Senior Secondary",
        "desc": "Career counselling and the stream finder"
      }
    ],
    "faqTitle": "Questions about life skills",
    "faqs": [
      {
        "q": "At what age does career counselling start?",
        "a": "Career awareness begins in middle school; focused counselling starts around Grade 9."
      },
      {
        "q": "How is emotional intelligence taught?",
        "a": "Through discussion, role play, mindfulness and counselling, built into regular programmes."
      },
      {
        "q": "Are life skills assessed?",
        "a": "Teachers note progress in life skills on the progress card rather than giving marks."
      }
    ],
    "tagline": null,
    "widgets": {
      "ls_r": {
        "type": "radar",
        "skills": [
          "Confidence",
          "Communication",
          "Teamwork",
          "Problem solving",
          "Empathy",
          "Self management"
        ],
        "note": "A conversation starter, not an assessment."
      }
    }
  },
  "learning-campus-infrastructure": {
    "slug": "learning-campus-infrastructure",
    "sec": "welfare",
    "seoTitle": "Learning and campus infrastructure",
    "seoDescription": "Smart classrooms, library, school transport and cafeteria at the HKS Vidyamandir campus in Kengeri, Bengaluru.",
    "name": "campus infrastructure",
    "crumbs": [
      {
        "label": "Home",
        "to": "/"
      },
      {
        "label": "Co-curricular",
        "to": "/campus-life"
      },
      {
        "label": "Welfare and facilities",
        "to": "/campus-life/student-welfare"
      },
      {
        "label": "Campus infrastructure"
      }
    ],
    "stepTag": "Welfare and facilities",
    "stepSub": "Infrastructure",
    "h1": "Learning and campus infrastructure",
    "lede": "Smart classrooms, libraries, school transport and hygienic cafeteria facilities.",
    "subnav": [
      {
        "to": "/campus-life/student-welfare",
        "active": false,
        "label": "Overview"
      },
      {
        "to": "/campus-life/learning-campus-infrastructure",
        "active": true,
        "label": "Campus infrastructure"
      },
      {
        "to": "/campus-life/health-support-safety",
        "active": false,
        "label": "Health and safety"
      }
    ],
    "heroSvg": "<svg viewBox=\"0 0 520 420\" aria-hidden=\"true\">\n  <circle cx=\"140\" cy=\"300\" r=\"90\" fill=\"rgba(255,255,255,.08)\"/>\n  <circle cx=\"420\" cy=\"120\" r=\"50\" fill=\"rgba(255,255,255,.06)\"/>\n  <g transform=\"translate(260 210) rotate(-8) scale(1.25)\"><g class=\"bob\"><path d=\"M0-110l90 36v56c0 60-40 104-90 122-50-18-90-62-90-122v-56Z\" fill=\"#fff\"/><path d=\"M-36 6l26 26 50-56\" stroke=\"var(--t)\" stroke-width=\"16\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></g></g>\n  <g fill=\"#ffd27a\"><circle class=\"tw1\" cx=\"460\" cy=\"330\" r=\"7\"/><circle class=\"tw2\" cx=\"70\" cy=\"90\" r=\"5\"/><circle class=\"tw1\" cx=\"380\" cy=\"60\" r=\"4\"/></g>\n</svg>",
    "stats": [
      {
        "val": "8",
        "label": "Areas",
        "sub": "Infrastructure and care"
      },
      {
        "val": "Safe",
        "label": "Campus",
        "sub": "CCTV and security protocols"
      },
      {
        "val": "Wellbeing",
        "label": "Support",
        "sub": "Medical room and counsellor"
      },
      {
        "val": "Connected",
        "label": "Transport",
        "sub": "School buses"
      }
    ],
    "intro": {
      "kicker": "Focused learning, everyday comfort",
      "title": "A campus built for the school day",
      "lede": "The Kengeri, Bengaluru campus offers bright classrooms, digital teaching tools, reading spaces and simple daily logistics for families.",
      "ticks": [
        "Interactive digital boards in ventilated classrooms",
        "A library that encourages daily reading across grades",
        "Bus routes serving Kengeri and nearby areas",
        "Clean cafeteria and dining spaces"
      ],
      "sideBox": {
        "title": "The campus",
        "items": [
          "Survey No. 28, S.M. Krishna Rd",
          "Near Sulikere, Kengeri",
          "Bengaluru 560060"
        ]
      }
    },
    "bands": [
      {
        "kind": "widget",
        "ground": "soft",
        "kicker": "A day on campus",
        "title": "Follow your child's day",
        "lede": "Scroll and the bus moves through a typical school day.",
        "widgetKey": "ci_r"
      },
      {
        "kind": "cards",
        "ground": "soft",
        "cols": 4,
        "kicker": "Four infrastructure pillars",
        "title": "Where the day happens",
        "lede": "The spaces your child uses every day.",
        "items": [
          {
            "num": "01",
            "title": "Smart classrooms",
            "desc": "Digital classrooms with interactive boards."
          },
          {
            "num": "02",
            "title": "Library and reading spaces",
            "desc": "Quiet nooks and book collections for all ages."
          },
          {
            "num": "03",
            "title": "Transportation",
            "desc": "Reliable school buses for a safe commute."
          },
          {
            "num": "04",
            "title": "Cafeteria and dining",
            "desc": "Clean, hygienic spaces that support healthy habits."
          }
        ]
      },
      {
        "kind": "widget",
        "ground": "soft",
        "kicker": "Before the first day",
        "title": "A transport and campus checklist",
        "lede": "Things families usually sort out in the first week.",
        "widgetKey": "ci_c"
      },
      {
        "kind": "steps3",
        "ground": "paper",
        "kicker": "Everyday care",
        "title": "Three promises",
        "lede": "Arrival, health, communication.",
        "items": [
          {
            "title": "Safe arrival and spaces",
            "desc": "Reliable buses, perimeter checks and bright classrooms."
          },
          {
            "title": "Health and emotional support",
            "desc": "Medical room, hygienic dining, safe water and counselling."
          }
        ]
      }
    ],
    "related": [
      {
        "to": "/campus-life/student-welfare",
        "kicker": "Section overview",
        "title": "Student welfare",
        "desc": "Layers of care"
      },
      {
        "to": "/campus-life/health-support-safety",
        "kicker": "In this section",
        "title": "Health and safety",
        "desc": "What happens if..."
      },
      {
        "to": "/",
        "kicker": "Visit",
        "title": "Book a campus tour",
        "desc": "See the campus for yourself"
      }
    ],
    "faqTitle": "Questions about campus infrastructure",
    "faqs": [
      {
        "q": "Which areas do the buses cover?",
        "a": "Routes serve Kengeri and nearby areas of Bengaluru. Contact the transport desk for current routes."
      },
      {
        "q": "Is lunch provided?",
        "a": "Clean cafeteria and dining spaces are available. Ask admissions about current meal arrangements."
      },
      {
        "q": "Can parents visit the campus?",
        "a": "Yes. Book a campus tour through the admissions team."
      }
    ],
    "tagline": null,
    "widgets": {
      "ci_r": {
        "type": "route",
        "label": "A day on campus",
        "stops": [
          [
            "Bus pickup",
            "GPS tracked, with staff on board"
          ],
          [
            "Gate",
            "Checked in through a secure entrance"
          ],
          [
            "Smart classroom",
            "Lessons with interactive boards"
          ],
          [
            "Library",
            "Daily reading time"
          ],
          [
            "Lunch",
            "Clean, hygienic dining"
          ],
          [
            "Labs and play",
            "Practicals, sport and clubs"
          ],
          [
            "Home",
            "Safe drop with registered adults"
          ]
        ],
        "note": "A typical day. Timings vary by grade."
      },
      "ci_c": {
        "type": "checklist",
        "items": [
          "Bus route and stop confirmed",
          "Pickup contact numbers updated",
          "Emergency contact shared",
          "Medical notes given to the class teacher",
          "Library card collected",
          "Lunch and water bottle labelled",
          "Uniform and ID card ready",
          "Parent app or contact group joined"
        ],
        "start": "Start with the bus route and emergency contacts.",
        "mid": "Good progress. The admissions team can help with the rest.",
        "done": "All set for a smooth first week."
      }
    }
  },
  "national-exams": {
    "slug": "national-exams",
    "sec": "compete",
    "seoTitle": "National exams and foundations",
    "seoDescription": "NEET and JEE foundation from Grade 6 and CUET preparation, integrated into the school day at HKS Vidyamandir.",
    "name": "national exam preparation",
    "crumbs": [
      {
        "label": "Home",
        "to": "/"
      },
      {
        "label": "Co-curricular",
        "to": "/campus-life"
      },
      {
        "label": "Competitive exams",
        "to": "/competitive-exams"
      },
      {
        "label": "National exams"
      }
    ],
    "stepTag": "Competitive exams",
    "stepSub": "National track",
    "h1": "National exams and NEET, JEE foundations",
    "lede": "Concept first NEET and JEE foundation programmes from Grade 6, built into the regular school day.",
    "subnav": [
      {
        "to": "/competitive-exams",
        "active": false,
        "label": "Overview"
      },
      {
        "to": "/campus-life/national-exams",
        "active": true,
        "label": "National exams"
      },
      {
        "to": "/campus-life/international-exams",
        "active": false,
        "label": "International exams"
      }
    ],
    "heroSvg": "<svg viewBox=\"0 0 520 420\" aria-hidden=\"true\">\n  <circle cx=\"140\" cy=\"300\" r=\"90\" fill=\"rgba(255,255,255,.08)\"/>\n  <circle cx=\"420\" cy=\"120\" r=\"50\" fill=\"rgba(255,255,255,.06)\"/>\n  <g transform=\"translate(260 210) rotate(-8) scale(1.25)\"><g class=\"bob\"><circle r=\"100\" fill=\"#fff\"/><circle r=\"68\" fill=\"none\" stroke=\"var(--t)\" stroke-width=\"14\"/><circle r=\"34\" fill=\"var(--t)\"/><circle r=\"10\" fill=\"#ffd27a\"/></g></g>\n  <g fill=\"#ffd27a\"><circle class=\"tw1\" cx=\"460\" cy=\"330\" r=\"7\"/><circle class=\"tw2\" cx=\"70\" cy=\"90\" r=\"5\"/><circle class=\"tw1\" cx=\"380\" cy=\"60\" r=\"4\"/></g>\n</svg>",
    "stats": [
      {
        "val": "14",
        "label": "Areas",
        "sub": "National and international"
      },
      {
        "val": "Grade 6+",
        "label": "Foundation",
        "sub": "NEET and JEE"
      },
      {
        "val": "Integrated",
        "label": "Timetable",
        "sub": "Within the school day"
      },
      {
        "val": "Global",
        "label": "Exams",
        "sub": "SAT, ACT, AP, TOEFL, IELTS"
      }
    ],
    "intro": {
      "kicker": "Without separate coaching stress",
      "title": "Strong foundations, built gradually",
      "lede": "Analytical problem solving, aptitude work and exam specific modules are blended into regular study from Grade 6, so mastery builds year by year.",
      "ticks": [
        "Exam preparation within the school timetable",
        "Progressive NEET and JEE foundation from Grade 6",
        "Exam specific modules with clear milestones",
        "Regular mock tests, performance analytics and doubt clearing"
      ],
      "sideBox": {
        "title": "The idea",
        "items": [
          "Concepts first, shortcuts later",
          "Little and often, not last minute",
          "Boards and entrances prepared together"
        ]
      }
    },
    "bands": [
      {
        "kind": "widget",
        "ground": "soft",
        "kicker": "NEET, JEE or CUET?",
        "title": "Three national exams, side by side",
        "lede": "A quick comparison to help families plan subject choices.",
        "widgetKey": "ne_m"
      },
      {
        "kind": "cards",
        "ground": "soft",
        "cols": 3,
        "kicker": "Five pillars",
        "title": "How the national track works",
        "lede": "Integrated with CBSE, not bolted on.",
        "items": [
          {
            "num": "01",
            "title": "Integrated preparation",
            "desc": "Aligns exam readiness with CBSE coursework."
          },
          {
            "num": "02",
            "title": "Early NEET and JEE foundation",
            "desc": "Age appropriate concept building in Physics, Chemistry, Biology and Maths from Grade 6."
          },
          {
            "num": "03",
            "title": "Exam wise modules",
            "desc": "Syllabus plans tailored to each target exam."
          },
          {
            "num": "04",
            "title": "Academic and aptitude development",
            "desc": "Logical reasoning, analytical speed and quantitative aptitude."
          },
          {
            "num": "05",
            "title": "Mock tests and assessments",
            "desc": "Regular practice tests with progress feedback and mentoring."
          }
        ]
      },
      {
        "kind": "widget",
        "ground": "soft",
        "kicker": "Grade by grade",
        "title": "The road from Grade 6 to entrance day",
        "lede": "Scroll to see how the foundation deepens.",
        "widgetKey": "ne_s"
      },
      {
        "kind": "steps3",
        "ground": "paper",
        "kicker": "Progressive roadmap",
        "title": "Three stages",
        "lede": "Foundation, modules, guidance.",
        "items": [
          {
            "title": "Age appropriate foundation",
            "desc": "Early groundwork in core sciences, maths and aptitude from Grade 6."
          },
          {
            "title": "Exam wise modules and mocks",
            "desc": "Structured syllabus modules, practice tests and analytics."
          }
        ]
      }
    ],
    "related": [
      {
        "to": "/competitive-exams",
        "kicker": "Section overview",
        "title": "Competitive exams",
        "desc": "The exam ladder and sample mock report"
      },
      {
        "to": "/campus-life/international-exams",
        "kicker": "In this section",
        "title": "International exams",
        "desc": "SAT, ACT, AP and English tests"
      },
      {
        "to": "/senior-secondary",
        "kicker": "Academics",
        "title": "Senior Secondary",
        "desc": "Streams and the stream finder"
      }
    ],
    "faqTitle": "Questions about national exam preparation",
    "faqs": [
      {
        "q": "Is separate coaching needed?",
        "a": "No. Foundation and exam modules run inside the school day."
      },
      {
        "q": "Is the Grade 6 foundation too early?",
        "a": "It is concept building at the child's level, not exam drilling. The intensity grows gradually."
      },
      {
        "q": "Does this cover CUET?",
        "a": "Yes. CUET preparation is part of Senior Secondary for Science and Commerce students."
      },
      {
        "q": "How do parents see progress?",
        "a": "Mock test reports with performance analytics, plus mentor updates."
      }
    ],
    "tagline": null,
    "widgets": {
      "ne_m": {
        "type": "matrix",
        "cols": [
          "",
          "NEET UG",
          "JEE Main",
          "CUET UG"
        ],
        "rows": [
          [
            "Leads to",
            "Medical and health courses",
            "Engineering and technology courses",
            "Undergraduate courses at many central, state and private universities"
          ],
          [
            "Usual stream",
            "Science with Biology (PCB)",
            "Science with Maths (PCM)",
            "Any stream"
          ],
          [
            "Built on",
            "Class 11 and 12 Physics, Chemistry, Biology",
            "Class 11 and 12 Physics, Chemistry, Maths",
            "Class 12 subjects chosen by the student"
          ],
          [
            "At HKS",
            "NEET foundation from Grade 6",
            "JEE foundation from Grade 6",
            "Prepared in Grades 11 and 12"
          ]
        ],
        "note": "A simplified overview. Exam rules and dates are set by the testing agencies each year."
      },
      "ne_s": {
        "type": "schedule",
        "rows": [
          [
            "Grade 6",
            "Foundation begins",
            "Concept first science and maths, reasoning puzzles"
          ],
          [
            "Grades 7 – 8",
            "Deeper concepts",
            "Problem solving beyond the textbook, short tests"
          ],
          [
            "Grades 9 – 10",
            "Board plus foundation",
            "CBSE board preparation with foundation modules and mocks"
          ],
          [
            "Grade 11",
            "Exam modules",
            "Exam wise syllabus plans for NEET, JEE or CUET"
          ],
          [
            "Grade 12",
            "Full preparation",
            "Mocks, analytics and doubt clearing alongside boards"
          ]
        ],
        "note": "A general guide; pacing is adjusted for each learner."
      }
    }
  },
  "olympiad-preparation": {
    "slug": "olympiad-preparation",
    "sec": "olympiad",
    "seoTitle": "Olympiad preparation",
    "seoDescription": "Olympiad and MUN preparation at HKS Vidyamandir from Grade 4: Maths, Science, English, Cyber and GK.",
    "name": "Olympiad preparation",
    "crumbs": [
      {
        "label": "Home",
        "to": "/"
      },
      {
        "label": "Co-curricular",
        "to": "/campus-life"
      },
      {
        "label": "Olympiads",
        "to": "/campus-life/olympiad-preparation"
      },
      {
        "label": "Overview"
      }
    ],
    "stepTag": "Olympiads",
    "stepSub": "15 areas · Grade 4 onwards",
    "h1": "Structured Olympiad and MUN preparation",
    "lede": "Early analytical exposure from Grade 4 in Maths, Science, English, Cyber and GK Olympiads, plus Model United Nations.",
    "subnav": [
      {
        "to": "/campus-life/olympiad-preparation",
        "active": true,
        "label": "Overview"
      },
      {
        "to": "/campus-life/olympiad-tracks",
        "active": false,
        "label": "Grade 4+ tracks"
      },
      {
        "to": "/campus-life/international-olympiads-mun",
        "active": false,
        "label": "International and MUN"
      }
    ],
    "heroSvg": "<svg viewBox=\"0 0 520 420\" aria-hidden=\"true\">\n  <circle cx=\"380\" cy=\"110\" r=\"120\" fill=\"rgba(255,255,255,.08)\"/>\n  <circle cx=\"120\" cy=\"330\" r=\"50\" fill=\"rgba(255,255,255,.06)\"/>\n  <g transform=\"translate(260 210) rotate(0) scale(1.25)\"><g class=\"bob\"><path d=\"M-24-110L0-40 24-110\" fill=\"#fff\"/><circle cx=\"0\" cy=\"10\" r=\"72\" fill=\"#ffd27a\" stroke=\"#fff\" stroke-width=\"10\"/><path d=\"M0-30l12 24 26 4-19 18 5 26-24-12-24 12 5-26-19-18 26-4Z\" fill=\"var(--t)\"/></g></g>\n  <g fill=\"#ffd27a\"><circle class=\"tw1\" cx=\"90\" cy=\"90\" r=\"7\"/><circle class=\"tw2\" cx=\"450\" cy=\"350\" r=\"5\"/><circle class=\"tw1\" cx=\"420\" cy=\"60\" r=\"4\"/></g>\n</svg>",
    "stats": [
      {
        "val": "15",
        "label": "Areas",
        "sub": "Tracks and benchmarks"
      },
      {
        "val": "Grade 4+",
        "label": "Start",
        "sub": "Early Olympiad exposure"
      },
      {
        "val": "5",
        "label": "Subjects",
        "sub": "Maths, Science, English, Cyber, GK"
      },
      {
        "val": "Global",
        "label": "Benchmarks",
        "sub": "IMO, NSO, IEO, ICSO, IGKO, MUN"
      }
    ],
    "intro": {
      "kicker": "Confidence through structured challenge",
      "title": "Olympiads, without the pressure",
      "lede": "Preparation builds logical reasoning, speed and conceptual clarity gradually from Grade 4, woven into regular school learning.",
      "ticks": [
        "Preparation methodology and subject wise plans",
        "Regular practice worksheets and timed mock exams",
        "Grade 4+ tracks in Science, Maths, English, Cyber and GK",
        "International Olympiad preparation and MUN"
      ],
      "sideBox": {
        "title": "Why start early",
        "items": [
          "Puzzles feel like play, not pressure",
          "Exam temperament builds slowly",
          "Strong concepts pay off in every subject"
        ]
      }
    },
    "bands": [
      {
        "kind": "cards",
        "ground": "soft",
        "cols": 3,
        "kicker": "Programme tracks",
        "title": "Six parts of the programme",
        "lede": "From planning to the podium.",
        "items": [
          {
            "num": "01",
            "title": "Preparation methodology",
            "desc": "Grade specific planning and mentor guidance."
          },
          {
            "num": "02",
            "title": "Subject wise preparation",
            "desc": "Concept building plans for Maths, Science, English, Cyber and GK."
          },
          {
            "num": "03",
            "title": "Practice tests and mock exams",
            "desc": "Practice papers and timed mocks to build exam temperament."
          },
          {
            "num": "04",
            "title": "International Olympiads",
            "desc": "Targeted readiness for IMO, NSO, IEO, ICSO and IGKO."
          },
          {
            "num": "05",
            "title": "Model United Nations",
            "desc": "Diplomacy, research, policy debate and public speaking."
          },
          {
            "num": "06",
            "title": "Achievements and recognition",
            "desc": "Celebrating participation, growth, medals and milestones."
          }
        ]
      },
      {
        "kind": "widget",
        "ground": "paper",
        "kicker": "An Olympiad year",
        "title": "How a typical year unfolds",
        "lede": "Scroll sideways through the phases. Exact registration and exam dates are set by each Olympiad body.",
        "widgetKey": "op_y"
      },
      {
        "kind": "steps3",
        "ground": "soft",
        "kicker": "Preparation method",
        "title": "Three steps to Olympiad readiness",
        "lede": "Concept, practice, compete.",
        "items": [
          {
            "title": "Concept mastery",
            "desc": "Strengthens fundamentals beyond standard textbook questions."
          },
          {
            "title": "Practice and mock exams",
            "desc": "Worksheets and timed mocks build speed, accuracy and confidence."
          }
        ]
      }
    ],
    "related": [
      {
        "to": "/campus-life/olympiad-tracks",
        "kicker": "In this section",
        "title": "Grade 4+ tracks",
        "desc": "Try a sample puzzle in each subject"
      },
      {
        "to": "/campus-life/international-olympiads-mun",
        "kicker": "In this section",
        "title": "International Olympiads and MUN",
        "desc": "Six flagship programmes"
      },
      {
        "to": "/competitive-exams",
        "kicker": "Academics",
        "title": "Competitive exams",
        "desc": "The full exam ladder by grade"
      }
    ],
    "faqTitle": "Questions about Olympiad preparation",
    "faqs": [
      {
        "q": "Is Olympiad participation compulsory?",
        "a": "No. Every child is encouraged, and families choose which Olympiads to register for."
      },
      {
        "q": "Are registration fees included?",
        "a": "Olympiad bodies charge their own fees. The school shares details before each registration window."
      },
      {
        "q": "Will this add homework?",
        "a": "Preparation is woven into school learning, with short practice sets rather than heavy extra homework."
      },
      {
        "q": "When are Olympiad exams held?",
        "a": "Dates are set by each Olympiad body and shared by the school once announced."
      }
    ],
    "tagline": {
      "text": "Olympiads reward *thinking, *not *memorising. That's exactly what we practise.",
      "note": ""
    },
    "widgets": {
      "op_y": {
        "type": "months",
        "hot": 2,
        "items": [
          [
            "Term 1 start",
            "Interest and planning",
            "Teachers introduce Olympiads and families choose subjects"
          ],
          [
            "Registration",
            "Sign up",
            "School registers students for chosen Olympiads"
          ],
          [
            "Weekly practice",
            "Concept building",
            "Short practice sets alongside regular lessons"
          ],
          [
            "Mock exams",
            "Timed practice",
            "Full length mocks with feedback"
          ],
          [
            "Exam season",
            "Olympiad day",
            "Students sit the Olympiad at school or a centre"
          ],
          [
            "Results",
            "Recognition",
            "Certificates, ranks and medals celebrated at assembly"
          ]
        ],
        "note": "Dates vary by Olympiad body and year."
      }
    }
  },
  "olympiad-tracks": {
    "slug": "olympiad-tracks",
    "sec": "olympiad",
    "seoTitle": "Olympiad Grade 4+ tracks",
    "seoDescription": "Olympiad preparation methodology and Grade 4+ tracks in Science, Maths, English, Cyber and GK at HKS Vidyamandir.",
    "name": "the Grade 4+ tracks",
    "crumbs": [
      {
        "label": "Home",
        "to": "/"
      },
      {
        "label": "Co-curricular",
        "to": "/campus-life"
      },
      {
        "label": "Olympiads",
        "to": "/campus-life/olympiad-preparation"
      },
      {
        "label": "Grade 4+ tracks"
      }
    ],
    "stepTag": "Olympiads",
    "stepSub": "Grade 4 onwards",
    "h1": "Olympiad preparation and Grade 4+ tracks",
    "lede": "Step by step methodology, subject wise study plans, regular mock tests and Grade 4+ tracks across five core subjects.",
    "subnav": [
      {
        "to": "/campus-life/olympiad-preparation",
        "active": false,
        "label": "Overview"
      },
      {
        "to": "/campus-life/olympiad-tracks",
        "active": true,
        "label": "Grade 4+ tracks"
      },
      {
        "to": "/campus-life/international-olympiads-mun",
        "active": false,
        "label": "International and MUN"
      }
    ],
    "heroSvg": "<svg viewBox=\"0 0 520 420\" aria-hidden=\"true\">\n  <circle cx=\"140\" cy=\"300\" r=\"90\" fill=\"rgba(255,255,255,.08)\"/>\n  <circle cx=\"420\" cy=\"120\" r=\"50\" fill=\"rgba(255,255,255,.06)\"/>\n  <g transform=\"translate(260 210) rotate(-8) scale(1.25)\"><g class=\"bob\"><path d=\"M-24-110L0-40 24-110\" fill=\"#fff\"/><circle cx=\"0\" cy=\"10\" r=\"72\" fill=\"#ffd27a\" stroke=\"#fff\" stroke-width=\"10\"/><path d=\"M0-30l12 24 26 4-19 18 5 26-24-12-24 12 5-26-19-18 26-4Z\" fill=\"var(--t)\"/></g></g>\n  <g fill=\"#ffd27a\"><circle class=\"tw1\" cx=\"460\" cy=\"330\" r=\"7\"/><circle class=\"tw2\" cx=\"70\" cy=\"90\" r=\"5\"/><circle class=\"tw1\" cx=\"380\" cy=\"60\" r=\"4\"/></g>\n</svg>",
    "stats": [
      {
        "val": "15",
        "label": "Areas",
        "sub": "Tracks and benchmarks"
      },
      {
        "val": "Grade 4+",
        "label": "Start",
        "sub": "Early Olympiad exposure"
      },
      {
        "val": "5",
        "label": "Subjects",
        "sub": "Maths, Science, English, Cyber, GK"
      },
      {
        "val": "Global",
        "label": "Benchmarks",
        "sub": "IMO, NSO, IEO, ICSO, IGKO, MUN"
      }
    ],
    "intro": {
      "kicker": "Early foundation",
      "title": "Building logical reasoning from Grade 4",
      "lede": "An early start reduces exam anxiety and builds interest in puzzles, reasoning and conceptual questions.",
      "ticks": [
        "Step by step preparation methodology",
        "Subject wise preparation schedules",
        "Practice papers and mock exams",
        "Recognition of effort and milestones"
      ],
      "sideBox": {
        "title": "Five subject tracks",
        "items": [
          "Science",
          "Mathematics",
          "English",
          "Cyber",
          "General knowledge"
        ]
      }
    },
    "bands": [
      {
        "kind": "widget",
        "ground": "soft",
        "kicker": "Try a puzzle",
        "title": "Olympiad style questions, Grade 4 level",
        "lede": "One sample question per subject. Pick an answer to see the reasoning.",
        "widgetKey": "ot_p"
      },
      {
        "kind": "cards",
        "ground": "soft",
        "cols": 3,
        "kicker": "Methodology and Grade 4+ tracks",
        "title": "Nine components",
        "lede": "Four ways we prepare, five subjects we prepare for.",
        "items": [
          {
            "num": "01",
            "title": "Preparation methodology",
            "desc": "Planning, pacing and mentoring each student."
          },
          {
            "num": "02",
            "title": "Subject wise preparation",
            "desc": "Discipline specific roadmaps."
          },
          {
            "num": "03",
            "title": "Practice tests and mock exams",
            "desc": "Practice papers and simulated exam conditions."
          },
          {
            "num": "04",
            "title": "Achievements and recognition",
            "desc": "Progress, certificates and awards."
          },
          {
            "num": "05",
            "title": "Science Olympiad",
            "desc": "Scientific reasoning and application."
          },
          {
            "num": "06",
            "title": "Mathematics Olympiad",
            "desc": "Logic puzzles, number sense and quantitative reasoning."
          },
          {
            "num": "07",
            "title": "English Olympiad",
            "desc": "Vocabulary, comprehension and grammar."
          },
          {
            "num": "08",
            "title": "Cyber Olympiad",
            "desc": "Computer fundamentals and cyber awareness."
          },
          {
            "num": "09",
            "title": "General Knowledge Olympiad",
            "desc": "Current affairs, world awareness and analytical trivia."
          }
        ]
      },
      {
        "kind": "steps3",
        "ground": "soft",
        "kicker": "Readiness without pressure",
        "title": "Three steps, every subject",
        "lede": "The same method across all five tracks.",
        "items": [
          {
            "title": "Concept mastery",
            "desc": "Strengthens fundamentals beyond standard textbook questions."
          },
          {
            "title": "Practice and mock exams",
            "desc": "Worksheets and timed mocks build speed, accuracy and confidence."
          }
        ]
      }
    ],
    "related": [
      {
        "to": "/campus-life/olympiad-preparation",
        "kicker": "Section overview",
        "title": "Olympiad preparation",
        "desc": "The full programme"
      },
      {
        "to": "/campus-life/international-olympiads-mun",
        "kicker": "In this section",
        "title": "International Olympiads and MUN",
        "desc": "Six flagship programmes"
      },
      {
        "to": "/primary",
        "kicker": "Academics",
        "title": "Primary",
        "desc": "Olympiads start in Grade 4"
      }
    ],
    "faqTitle": "Questions about the Grade 4+ tracks",
    "faqs": [
      {
        "q": "Can my child take more than one Olympiad?",
        "a": "Yes. Many children take two or three, depending on interest."
      },
      {
        "q": "What if my child finds it hard?",
        "a": "That's normal. Olympiad questions are meant to stretch. Teachers focus on the reasoning, not just the score."
      },
      {
        "q": "Is there extra material to buy?",
        "a": "Practice papers are provided by the school. Any official workbook is optional."
      }
    ],
    "tagline": null,
    "widgets": {
      "ot_p": {
        "type": "puzzle",
        "qs": [
          {
            "k": "Maths",
            "q": "What comes next? 2, 6, 12, 20, 30, ...",
            "o": [
              "40",
              "42",
              "36",
              "44"
            ],
            "a": 1,
            "why": "The gaps grow by 2 each time: +4, +6, +8, +10, so the next gap is +12. 30 + 12 = 42."
          },
          {
            "k": "Science",
            "q": "Why does a steel spoon feel colder than a wooden spoon in the same room?",
            "o": [
              "Steel is colder",
              "Steel conducts heat away from your hand faster",
              "Wood is warmer inside",
              "Steel absorbs light"
            ],
            "a": 1,
            "why": "Both are at room temperature. Steel is a better conductor, so it draws heat from your hand faster and feels colder."
          },
          {
            "k": "English",
            "q": "Choose the word closest in meaning to 'reluctant'.",
            "o": [
              "Eager",
              "Unwilling",
              "Quick",
              "Careful"
            ],
            "a": 1,
            "why": "Reluctant means not wanting to do something, so 'unwilling' is closest."
          },
          {
            "k": "Cyber",
            "q": "Which of these is the safest password?",
            "o": [
              "password123",
              "Your name and birth year",
              "Blue!Kite7Rain",
              "123456"
            ],
            "a": 2,
            "why": "It mixes words, symbols, numbers and capitals, and isn't based on personal information."
          },
          {
            "k": "GK",
            "q": "Which river is often called the lifeline of Karnataka's south and flows past Srirangapatna?",
            "o": [
              "Ganga",
              "Kaveri",
              "Narmada",
              "Godavari"
            ],
            "a": 1,
            "why": "The Kaveri flows through southern Karnataka, past Srirangapatna, and into Tamil Nadu."
          }
        ]
      }
    }
  },
  "outdoor-sports": {
    "slug": "outdoor-sports",
    "sec": "sports",
    "seoTitle": "Coaching and outdoor sports",
    "seoDescription": "Professional coaching and outdoor sports at HKS Vidyamandir: cricket, football, basketball, kho kho, kabaddi, skating and adventure.",
    "name": "outdoor sports",
    "crumbs": [
      {
        "label": "Home",
        "to": "/"
      },
      {
        "label": "Co-curricular",
        "to": "/campus-life"
      },
      {
        "label": "Sports",
        "to": "/sports"
      },
      {
        "label": "Coaching and outdoor"
      }
    ],
    "stepTag": "Sports",
    "stepSub": "Outdoor",
    "h1": "Professional coaching and outdoor sports",
    "lede": "Trained coaches, large playgrounds, structured PE, inter-school tournaments and a wide range of outdoor team and adventure sports.",
    "subnav": [
      {
        "to": "/sports",
        "active": false,
        "label": "Overview"
      },
      {
        "to": "/campus-life/outdoor-sports",
        "active": true,
        "label": "Coaching and outdoor"
      },
      {
        "to": "/campus-life/indoor-wellness-olympic-sports",
        "active": false,
        "label": "Indoor, wellness and Olympic"
      }
    ],
    "heroSvg": "<svg viewBox=\"0 0 520 420\" aria-hidden=\"true\">\n  <circle cx=\"140\" cy=\"300\" r=\"90\" fill=\"rgba(255,255,255,.08)\"/>\n  <circle cx=\"420\" cy=\"120\" r=\"50\" fill=\"rgba(255,255,255,.06)\"/>\n  <g transform=\"translate(260 210) rotate(-8) scale(1.25)\"><g class=\"bob\"><circle cx=\"0\" cy=\"0\" r=\"90\" fill=\"#fff\"/><path d=\"M-90 0h180M0-90c40 40 40 140 0 180M0-90c-40 40-40 140 0 180\" stroke=\"var(--t)\" stroke-width=\"6\" fill=\"none\"/></g></g>\n  <g fill=\"#ffd27a\"><circle class=\"tw1\" cx=\"460\" cy=\"330\" r=\"7\"/><circle class=\"tw2\" cx=\"70\" cy=\"90\" r=\"5\"/><circle class=\"tw1\" cx=\"380\" cy=\"60\" r=\"4\"/></g>\n</svg>",
    "stats": [
      {
        "val": "25",
        "label": "Areas",
        "sub": "Outdoor, indoor and Olympic"
      },
      {
        "val": "Daily",
        "label": "PE",
        "sub": "Structured fitness curriculum"
      },
      {
        "val": "Trained",
        "label": "Coaches",
        "sub": "Specialist sports coaches"
      },
      {
        "val": "All round",
        "label": "Wellness",
        "sub": "Yoga and tournaments"
      }
    ],
    "intro": {
      "kicker": "On the field",
      "title": "Teamwork, stamina and sportsmanship",
      "lede": "Daily movement combined with specialist coaching in team games, traditional Indian sports, skating and outdoor adventure.",
      "ticks": [
        "Professional coaching and regular structured practice",
        "Well maintained grounds and courts across campus",
        "Active participation in inter-school competitions",
        "Structured PE curriculum for every grade"
      ],
      "sideBox": {
        "title": "Traditional Indian games",
        "items": [
          "Kho kho: speed, dodging and team tactics",
          "Kabaddi: strength, breath control and grit",
          "Both are played in national tournaments"
        ]
      }
    },
    "bands": [
      {
        "kind": "widget",
        "ground": "paper",
        "kicker": "Inside a coached session",
        "title": "What happens in a 60 minute practice",
        "lede": "Scroll through a typical coached session. Every block has a purpose.",
        "widgetKey": "os_s"
      },
      {
        "kind": "cards",
        "ground": "soft",
        "cols": 3,
        "kicker": "Coaching, team sports and outdoor adventure",
        "title": "Nine ways we build athletes outdoors",
        "lede": "From technique to tournaments.",
        "items": [
          {
            "num": "01",
            "title": "Professional coaching and training",
            "desc": "Trained coaches guide technique, fitness and match awareness."
          },
          {
            "num": "02",
            "title": "Indoor and outdoor facilities",
            "desc": "Courts, pitches and activity spaces for daily play."
          },
          {
            "num": "03",
            "title": "Inter-school competitions",
            "desc": "Competitive matches against leading schools."
          },
          {
            "num": "04",
            "title": "Physical education curriculum",
            "desc": "Fitness, agility and motor skills that progress each year."
          },
          {
            "num": "05",
            "title": "Cricket and football",
            "desc": "Batting, bowling, passing, match strategy and team play."
          },
          {
            "num": "06",
            "title": "Basketball and volleyball",
            "desc": "Court skills, shooting, serving, rallies and coordination."
          },
          {
            "num": "07",
            "title": "Kho kho and kabaddi",
            "desc": "Traditional Indian team sports that build speed, agility and grit."
          },
          {
            "num": "08",
            "title": "Skating and horse riding",
            "desc": "Balance, posture and confidence, with specialised outdoor training."
          },
          {
            "num": "09",
            "title": "Adventure and outdoor",
            "desc": "Challenges and camps that build resilience and teamwork."
          }
        ]
      },
      {
        "kind": "widget",
        "ground": "paper",
        "kicker": "The road to the school team",
        "title": "From practice to the inter-school final",
        "lede": "How a child moves from PE to representing HKS.",
        "widgetKey": "os_path"
      }
    ],
    "related": [
      {
        "to": "/sports",
        "kicker": "Section overview",
        "title": "Sports and physical education",
        "desc": "All 25 disciplines and the sport finder"
      },
      {
        "to": "/campus-life/indoor-wellness-olympic-sports",
        "kicker": "In this section",
        "title": "Indoor, wellness and Olympic",
        "desc": "Chess, yoga, martial arts and more"
      },
      {
        "to": "/khel-vidya",
        "kicker": "Co-curricular track",
        "title": "Khel Vidya",
        "desc": "Sports Day, the athlete pathway and a sample week"
      }
    ],
    "faqTitle": "Questions about outdoor sports",
    "faqs": [
      {
        "q": "What should my child wear?",
        "a": "PE uniform, sports shoes, a cap for outdoor sessions and a labelled water bottle."
      },
      {
        "q": "What happens in very hot weather?",
        "a": "Sessions shift to shaded areas or indoor activity, with extra water breaks."
      },
      {
        "q": "Is protective gear provided?",
        "a": "Shared equipment is provided. Coaches will advise on any personal protective gear a sport needs."
      },
      {
        "q": "How are teams selected?",
        "a": "Coaches select from regular practice, skill tests and inter-house matches."
      },
      {
        "q": "Can girls play cricket and football?",
        "a": "Yes. Every sport and team is open to all children."
      }
    ],
    "tagline": null,
    "widgets": {
      "os_s": {
        "type": "schedule",
        "rows": [
          [
            "0 – 10 min",
            "Warm up",
            "Jogging, dynamic stretches and mobility"
          ],
          [
            "10 – 25 min",
            "Skill drills",
            "Passing, catching, footwork or batting technique"
          ],
          [
            "25 – 45 min",
            "Game play",
            "Small sided games that use the new skill"
          ],
          [
            "45 – 55 min",
            "Coach's review",
            "What worked, what to practise next"
          ],
          [
            "55 – 60 min",
            "Cool down",
            "Stretching, breathing and water"
          ]
        ],
        "note": "A sample session. Coaches adapt it by age and sport."
      },
      "os_path": {
        "type": "explorer",
        "ordered": true,
        "items": [
          {
            "t": "PE for everyone",
            "sub": "All grades",
            "tag": "Step 1",
            "d": "Every child builds fitness, motor skills and the rules of many games.",
            "list": [
              "Running, throwing, catching",
              "Team games in PE periods",
              "Fitness checks through the year"
            ]
          },
          {
            "t": "Choose a sport",
            "sub": "From the middle grades",
            "tag": "Step 2",
            "d": "Children pick sports for coached practice.",
            "list": [
              "Batch coaching by age and skill",
              "Clear skill goals each term"
            ]
          },
          {
            "t": "House matches",
            "sub": "Every year",
            "tag": "Step 3",
            "d": "Inter-house games build competition and team spirit.",
            "list": [
              "Leagues and knockouts",
              "Sports Day events"
            ]
          },
          {
            "t": "School team",
            "sub": "Selected by coaches",
            "tag": "Step 4",
            "d": "Selected players train together for fixtures.",
            "list": [
              "Extra practice",
              "Match tactics and fitness"
            ]
          },
          {
            "t": "Inter-school tournaments",
            "sub": "Representing HKS",
            "tag": "Step 5",
            "d": "Competitive matches against other schools.",
            "list": [
              "Certificates for participation",
              "Leadership as captains"
            ]
          }
        ]
      }
    }
  },
  "recognition-tours-initiatives": {
    "slug": "recognition-tours-initiatives",
    "sec": "events",
    "seoTitle": "Recognition, tours and initiatives",
    "seoDescription": "Olympiad and academic awards, international study tours, newsletters and student initiatives at HKS Vidyamandir.",
    "name": "recognition and tours",
    "crumbs": [
      {
        "label": "Home",
        "to": "/"
      },
      {
        "label": "Co-curricular",
        "to": "/campus-life"
      },
      {
        "label": "Events",
        "to": "/campus-life/events-achievements"
      },
      {
        "label": "Recognition and tours"
      }
    ],
    "stepTag": "Events",
    "stepSub": "Milestones",
    "h1": "Recognition, global tours and student initiatives",
    "lede": "Olympiad and academic achievements, international tours, school newsletters and student led projects.",
    "subnav": [
      {
        "to": "/campus-life/events-achievements",
        "active": false,
        "label": "Overview"
      },
      {
        "to": "/campus-life/celebrations-exhibitions-trips",
        "active": false,
        "label": "Celebrations and trips"
      },
      {
        "to": "/campus-life/recognition-tours-initiatives",
        "active": true,
        "label": "Recognition and tours"
      }
    ],
    "heroSvg": "<svg viewBox=\"0 0 520 420\" aria-hidden=\"true\">\n  <circle cx=\"400\" cy=\"320\" r=\"70\" fill=\"rgba(255,255,255,.08)\"/>\n  <circle cx=\"110\" cy=\"120\" r=\"50\" fill=\"rgba(255,255,255,.06)\"/>\n  <g transform=\"translate(260 210) rotate(8) scale(1.25)\"><g class=\"bob\"><path d=\"M-90 90L-30-90 90 30Z\" fill=\"#fff\"/><circle cx=\"40\" cy=\"-70\" r=\"12\" fill=\"#ffd27a\"/><circle cx=\"90\" cy=\"-20\" r=\"8\" fill=\"#fff\"/><rect x=\"60\" y=\"-100\" width=\"12\" height=\"12\" fill=\"#ffd27a\" transform=\"rotate(30 66 -94)\"/><path d=\"M-50 40l40-90\" stroke=\"var(--t)\" stroke-width=\"8\"/></g></g>\n  <g fill=\"#ffd27a\"><circle class=\"tw1\" cx=\"80\" cy=\"300\" r=\"7\"/><circle class=\"tw2\" cx=\"450\" cy=\"90\" r=\"5\"/><circle class=\"tw1\" cx=\"130\" cy=\"60\" r=\"4\"/></g>\n</svg>",
    "stats": [
      {
        "val": "15",
        "label": "Areas",
        "sub": "Events, trips and awards"
      },
      {
        "val": "Annual",
        "label": "Calendar",
        "sub": "Celebrations and festivals"
      },
      {
        "val": "Showcases",
        "label": "Contests",
        "sub": "Science and robotics"
      },
      {
        "val": "Global",
        "label": "Tours",
        "sub": "Excursions and study tours"
      }
    ],
    "intro": {
      "kicker": "Recognising effort",
      "title": "Celebrating progress, not just podiums",
      "lede": "We celebrate top achievements and daily progress, keep families connected through newsletters, and encourage student led initiatives.",
      "ticks": [
        "Merit awards for academic, sporting, cultural and character excellence",
        "Olympiad and board exam achievement showcases",
        "Curated tour opportunities, including ISRO, NASA and Singapore",
        "Regular newsletters keeping parents informed"
      ],
      "sideBox": {
        "title": "Award categories",
        "items": [
          "Academic",
          "Sporting",
          "Cultural",
          "Character"
        ]
      }
    },
    "bands": [
      {
        "kind": "widget",
        "ground": "soft",
        "kicker": "International educational tours",
        "title": "Where study tours can go",
        "lede": "Planned destinations. Tours are offered only once the school confirms them.",
        "widgetKey": "rt_a"
      },
      {
        "kind": "cards",
        "ground": "soft",
        "cols": 3,
        "kicker": "Achievements, tours and student voice",
        "title": "Six milestone areas",
        "lede": "How effort becomes recognition.",
        "items": [
          {
            "num": "01",
            "title": "Olympiad achievements",
            "desc": "Participation, ranks and medals."
          },
          {
            "num": "02",
            "title": "Academic achievements",
            "desc": "Consistent excellence and board exam toppers."
          },
          {
            "num": "03",
            "title": "Awards and recognition",
            "desc": "Effort, leadership, kindness and all round talent."
          },
          {
            "num": "04",
            "title": "International educational tours",
            "desc": "Study tours such as ISRO, NASA, Kennedy Space Centre, Singapore and Malaysia."
          },
          {
            "num": "05",
            "title": "School newsletters",
            "desc": "Student stories, events and campus news."
          },
          {
            "num": "06",
            "title": "Projects and initiatives",
            "desc": "Social, green and creative projects."
          }
        ]
      },
      {
        "kind": "widget",
        "ground": "soft",
        "kicker": "Award categories",
        "title": "Four ways to be recognised",
        "lede": "Tap a card to see what each award celebrates.",
        "widgetKey": "rt_f"
      }
    ],
    "related": [
      {
        "to": "/campus-life/events-achievements",
        "kicker": "Section overview",
        "title": "Events and achievements",
        "desc": "The school year"
      },
      {
        "to": "/campus-life/celebrations-exhibitions-trips",
        "kicker": "In this section",
        "title": "Celebrations and trips",
        "desc": "Trips by age"
      },
      {
        "to": "/campus-life/olympiad-preparation",
        "kicker": "Olympiads",
        "title": "Olympiad preparation",
        "desc": "How students prepare"
      }
    ],
    "faqTitle": "Questions about recognition and tours",
    "faqs": [
      {
        "q": "Are the international tours confirmed?",
        "a": "They are planned and offered only once the school confirms them, with full details in advance."
      },
      {
        "q": "Are tours optional?",
        "a": "Yes. International tours are optional."
      },
      {
        "q": "How do parents hear about achievements?",
        "a": "Through assemblies, newsletters and school updates."
      }
    ],
    "tagline": null,
    "widgets": {
      "rt_a": {
        "type": "arcs",
        "home": [
          600,
          300
        ],
        "blobs": [
          [
            180,
            170,
            150,
            90
          ],
          [
            450,
            150,
            100,
            70
          ],
          [
            600,
            270,
            60,
            80
          ],
          [
            800,
            320,
            100,
            60
          ]
        ],
        "dest": [
          [
            "ISRO",
            620,
            250,
            "India's space agency: satellites, rockets and mission control, closer to home."
          ],
          [
            "NASA and Kennedy Space Centre",
            200,
            170,
            "The US space programme: launch sites, rockets and astronaut training."
          ],
          [
            "Singapore",
            790,
            340,
            "Science centres, sustainability and a modern city."
          ],
          [
            "Malaysia",
            760,
            300,
            "Science, culture and rainforests."
          ]
        ]
      },
      "rt_f": {
        "type": "flip",
        "hint": "Tap to flip",
        "items": [
          {
            "k": "Award",
            "t": "Academic",
            "back": "Consistent effort and excellence in studies, including board results."
          },
          {
            "k": "Award",
            "t": "Sporting",
            "back": "Skill, fitness and sportsmanship on the field."
          },
          {
            "k": "Award",
            "t": "Cultural",
            "back": "Talent and commitment in music, dance, theatre and art."
          },
          {
            "k": "Award",
            "t": "Character",
            "back": "Kindness, honesty, leadership and helping others."
          }
        ]
      }
    }
  },
  "sports": {
    "slug": "sports",
    "sec": "sports",
    "seoTitle": "Sports and physical education",
    "seoDescription": "Sports and physical education at HKS Vidyamandir: 25 areas, trained coaches, daily PE and inter-school competitions.",
    "name": "sports",
    "crumbs": [
      {
        "label": "Home",
        "to": "/"
      },
      {
        "label": "Co-curricular",
        "to": "/campus-life"
      },
      {
        "label": "Sports",
        "to": "/sports"
      },
      {
        "label": "Overview"
      }
    ],
    "stepTag": "Sports",
    "stepSub": "Sports and fitness",
    "h1": "Strong bodies, sharp minds",
    "lede": "Sport is central to holistic development at HKS, with professional coaching, large grounds and inter-school competitions.",
    "subnav": [
      {
        "to": "/sports",
        "active": true,
        "label": "Overview"
      },
      {
        "to": "/campus-life/outdoor-sports",
        "active": false,
        "label": "Coaching and outdoor"
      },
      {
        "to": "/campus-life/indoor-wellness-olympic-sports",
        "active": false,
        "label": "Indoor, wellness and Olympic"
      }
    ],
    "heroSvg": "<svg viewBox=\"0 0 520 420\" aria-hidden=\"true\">\n  <circle cx=\"380\" cy=\"110\" r=\"120\" fill=\"rgba(255,255,255,.08)\"/>\n  <circle cx=\"120\" cy=\"330\" r=\"50\" fill=\"rgba(255,255,255,.06)\"/>\n  <g transform=\"translate(260 210) rotate(0) scale(1.25)\"><g class=\"bob\"><circle cx=\"0\" cy=\"0\" r=\"90\" fill=\"#fff\"/><path d=\"M-90 0h180M0-90c40 40 40 140 0 180M0-90c-40 40-40 140 0 180\" stroke=\"var(--t)\" stroke-width=\"6\" fill=\"none\"/></g></g>\n  <g fill=\"#ffd27a\"><circle class=\"tw1\" cx=\"90\" cy=\"90\" r=\"7\"/><circle class=\"tw2\" cx=\"450\" cy=\"350\" r=\"5\"/><circle class=\"tw1\" cx=\"420\" cy=\"60\" r=\"4\"/></g>\n</svg>",
    "stats": [
      {
        "val": "25",
        "label": "Areas",
        "sub": "Outdoor, indoor and Olympic"
      },
      {
        "val": "Daily",
        "label": "PE",
        "sub": "Structured fitness curriculum"
      },
      {
        "val": "Trained",
        "label": "Coaches",
        "sub": "Specialist sports coaches"
      },
      {
        "val": "All round",
        "label": "Wellness",
        "sub": "Yoga and tournaments"
      }
    ],
    "intro": {
      "kicker": "Fitness, teamwork and character",
      "title": "Sport at HKS is taught, not just played",
      "lede": "From the first races in Nursery to inter-school tournaments, every child moves, learns the rules of the game and learns how to be a good teammate.",
      "ticks": [
        "Professional coaches for every major sport",
        "Indoor and outdoor facilities on campus",
        "Inter-school competitions and tournaments",
        "Structured physical education curriculum",
        "Adventure and outdoor activities"
      ],
      "sideBox": {
        "title": "Three arenas",
        "items": [
          "Outdoor: cricket to horse riding",
          "Indoor: chess to martial arts",
          "Wellness: yoga to inner engineering"
        ]
      }
    },
    "bands": [
      {
        "kind": "widget",
        "ground": "paper",
        "kicker": "Sport finder",
        "title": "Which sport will your child love?",
        "lede": "Four quick questions to suggest where to start. Most children try several before they settle.",
        "widgetKey": "sp_quiz"
      },
      {
        "kind": "widget",
        "ground": "soft",
        "kicker": "Every discipline",
        "title": "Twenty four ways to move",
        "lede": "Filter by arena. Every discipline here is coached or supervised on campus, or offered with available facilities.",
        "widgetKey": "sp_f"
      },
      {
        "kind": "steps3",
        "ground": "paper",
        "kicker": "How Khel Vidya develops every athlete",
        "title": "From fitness to finals",
        "lede": "A clear progression that every child moves through at their own pace.",
        "items": [
          {
            "title": "Foundational fitness",
            "desc": "Structured PE, yoga, aerobics and agility drills for stamina, balance and posture."
          },
          {
            "title": "Specialist coaching",
            "desc": "Trained coaches across team sports, indoor games, martial arts and Olympic events."
          }
        ]
      }
    ],
    "related": [
      {
        "to": "/khel-vidya",
        "kicker": "Co-curricular track",
        "title": "Khel Vidya",
        "desc": "The full sports track: pathway, sample week and Sports Day"
      },
      {
        "to": "/campus-life/outdoor-sports",
        "kicker": "In this section",
        "title": "Coaching and outdoor sports",
        "desc": "Team games, traditional sports and adventure"
      },
      {
        "to": "/campus-life/indoor-wellness-olympic-sports",
        "kicker": "In this section",
        "title": "Indoor, wellness and Olympic",
        "desc": "Chess to archery, yoga to gymnastics"
      }
    ],
    "faqTitle": "Questions about sports at HKS",
    "faqs": [
      {
        "q": "Does every child play sport?",
        "a": "Yes. Structured PE is part of every grade, and children then choose the sports they want to go further in."
      },
      {
        "q": "Who coaches the children?",
        "a": "Trained coaches guide technique, fitness and match awareness, alongside PE teachers."
      },
      {
        "q": "Are swimming and horse riding available?",
        "a": "They are offered with available facilities. The school confirms arrangements each term."
      },
      {
        "q": "How do children get into school teams?",
        "a": "Through regular practice, coach selection and inter-house matches, leading to inter-school tournaments."
      },
      {
        "q": "What about children with health conditions?",
        "a": "Share your doctor's advice with the coach. Sessions are adjusted, and the medical room keeps a copy of the plan."
      }
    ],
    "tagline": {
      "text": "Every child plays. *Every *child *learns *to *be *a *teammate.",
      "note": ""
    },
    "widgets": {
      "sp_quiz": {
        "type": "quiz",
        "qs": [
          [
            "How does your child like to play?",
            [
              [
                "With a team",
                "team"
              ],
              [
                "On their own",
                "solo"
              ],
              [
                "Calm and focused",
                "calm"
              ]
            ]
          ],
          [
            "What energises them?",
            [
              [
                "Running and chasing",
                "team,ath"
              ],
              [
                "Strategy and puzzles",
                "mind"
              ],
              [
                "Music and rhythm",
                "dance"
              ]
            ]
          ],
          [
            "Indoors or outdoors?",
            [
              [
                "Outdoors",
                "team,ath"
              ],
              [
                "Indoors",
                "mind,dance"
              ],
              [
                "Either",
                "solo"
              ]
            ]
          ],
          [
            "What should sport give them?",
            [
              [
                "Fitness and stamina",
                "ath"
              ],
              [
                "Focus and calm",
                "calm,mind"
              ],
              [
                "Confidence and friends",
                "team"
              ]
            ]
          ]
        ],
        "results": {
          "team": {
            "t": "Team sports",
            "d": "Football, cricket, basketball, volleyball, kho kho or kabaddi."
          },
          "solo": {
            "t": "Individual sports",
            "d": "Badminton, table tennis, skating, archery or swimming with available facilities."
          },
          "calm": {
            "t": "Wellness",
            "d": "Yoga, meditation and mindfulness, for strength and focus."
          },
          "mind": {
            "t": "Mind sports",
            "d": "Chess and carrom: strategy, patience and concentration."
          },
          "dance": {
            "t": "Movement and rhythm",
            "d": "Aerobics, dance and movement, or gymnastics."
          },
          "ath": {
            "t": "Athletics",
            "d": "Sprints, relays, jumps and throws on the track and field."
          }
        },
        "after": "Coaches will help your child try more than one."
      },
      "sp_f": {
        "type": "filter",
        "cats": [
          [
            "out",
            "Outdoor"
          ],
          [
            "in",
            "Indoor"
          ],
          [
            "well",
            "Wellness"
          ]
        ],
        "items": [
          {
            "t": "Cricket",
            "d": "Batting, bowling and match play",
            "cat": "out"
          },
          {
            "t": "Football",
            "d": "Passing, positioning and team play",
            "cat": "out"
          },
          {
            "t": "Basketball",
            "d": "Shooting, dribbling and court sense",
            "cat": "out"
          },
          {
            "t": "Volleyball",
            "d": "Serving, rallies and coordination",
            "cat": "out"
          },
          {
            "t": "Athletics",
            "d": "Track and field training",
            "cat": "out"
          },
          {
            "t": "Kho kho",
            "d": "Speed and agility in a traditional game",
            "cat": "out"
          },
          {
            "t": "Kabaddi",
            "d": "Strength, grit and teamwork",
            "cat": "out"
          },
          {
            "t": "Archery",
            "d": "Focus and precision",
            "cat": "out"
          },
          {
            "t": "Skating",
            "d": "Balance and confidence",
            "cat": "out"
          },
          {
            "t": "Horse riding",
            "d": "With available facilities",
            "cat": "out"
          },
          {
            "t": "Olympic sports",
            "d": "Exposure to Olympic disciplines",
            "cat": "out"
          },
          {
            "t": "Chess",
            "d": "Strategy and concentration",
            "cat": "in"
          },
          {
            "t": "Table tennis",
            "d": "Reflexes and footwork",
            "cat": "in"
          },
          {
            "t": "Badminton",
            "d": "Skill and tournament play",
            "cat": "in"
          },
          {
            "t": "Carrom",
            "d": "A classic game of touch and aim",
            "cat": "in"
          },
          {
            "t": "Gymnastics",
            "d": "Balance, core strength and flexibility",
            "cat": "in"
          },
          {
            "t": "Martial arts",
            "d": "Self defence and discipline",
            "cat": "in"
          },
          {
            "t": "Indoor games",
            "d": "Active breaks and friendships",
            "cat": "in"
          },
          {
            "t": "Yoga",
            "d": "Strength, flexibility and breath",
            "cat": "well"
          },
          {
            "t": "Meditation",
            "d": "Focus and calm",
            "cat": "well"
          },
          {
            "t": "Mindfulness",
            "d": "Noticing thoughts and feelings",
            "cat": "well"
          },
          {
            "t": "Inner engineering",
            "d": "Guided wellbeing practice",
            "cat": "well"
          },
          {
            "t": "Aerobics",
            "d": "Rhythm and endurance",
            "cat": "well"
          },
          {
            "t": "Dance and movement",
            "d": "Expression and fitness",
            "cat": "well"
          }
        ]
      }
    }
  },
  "student-development": {
    "slug": "student-development",
    "sec": "development",
    "seoTitle": "Student development and clubs",
    "seoDescription": "Life skills, leadership, the Student Leadership Council and nine student clubs at HKS Vidyamandir.",
    "name": "student development",
    "crumbs": [
      {
        "label": "Home",
        "to": "/"
      },
      {
        "label": "Co-curricular",
        "to": "/campus-life"
      },
      {
        "label": "Clubs and development",
        "to": "/campus-life/student-development"
      },
      {
        "label": "Overview"
      }
    ],
    "stepTag": "Clubs and development",
    "stepSub": "21 areas · whole child growth",
    "h1": "Student development, life skills and clubs",
    "lede": "Personality development, leadership, public speaking, emotional intelligence, organic farming, community service and student led clubs.",
    "subnav": [
      {
        "to": "/campus-life/student-development",
        "active": true,
        "label": "Overview"
      },
      {
        "to": "/campus-life/leadership-life-skills",
        "active": false,
        "label": "Leadership and life skills"
      },
      {
        "to": "/campus-life/clubs-arts-expression",
        "active": false,
        "label": "Clubs and arts"
      }
    ],
    "heroSvg": "<svg viewBox=\"0 0 520 420\" aria-hidden=\"true\">\n  <circle cx=\"380\" cy=\"110\" r=\"120\" fill=\"rgba(255,255,255,.08)\"/>\n  <circle cx=\"120\" cy=\"330\" r=\"50\" fill=\"rgba(255,255,255,.06)\"/>\n  <g transform=\"translate(260 210) rotate(0) scale(1.25)\"><g class=\"bob\"><circle cx=\"-50\" cy=\"-30\" r=\"34\" fill=\"#fff\"/><circle cx=\"50\" cy=\"-30\" r=\"34\" fill=\"#ffd27a\"/><path d=\"M-110 90c10-60 50-80 60-80s50 20 60 80Z\" fill=\"#fff\"/><path d=\"M-10 90c10-60 50-80 60-80s50 20 60 80Z\" fill=\"#ffd27a\"/></g></g>\n  <g fill=\"#ffd27a\"><circle class=\"tw1\" cx=\"90\" cy=\"90\" r=\"7\"/><circle class=\"tw2\" cx=\"450\" cy=\"350\" r=\"5\"/><circle class=\"tw1\" cx=\"420\" cy=\"60\" r=\"4\"/></g>\n</svg>",
    "stats": [
      {
        "val": "21",
        "label": "Areas",
        "sub": "Life skills and clubs"
      },
      {
        "val": "9+",
        "label": "Clubs",
        "sub": "Debate, arts, film and STEM"
      },
      {
        "val": "Student led",
        "label": "Council",
        "sub": "Leadership Council"
      },
      {
        "val": "Holistic",
        "label": "Growth",
        "sub": "Mind, voice and character"
      }
    ],
    "intro": {
      "kicker": "Confident, empathetic young leaders",
      "title": "Every child, every week",
      "lede": "All students join structured life skills programmes and interest based clubs that build voice, teamwork, creativity and social responsibility.",
      "ticks": [
        "Personality development, communication and emotional intelligence programmes",
        "Active Student Leadership Council and team building",
        "Hands on life skills in organic farming, horticulture and community service",
        "9+ clubs: debate, writing, environment, film, music, theatre"
      ],
      "sideBox": {
        "title": "Four dimensions",
        "items": [
          "Leadership and life skills",
          "Clubs and creative arts",
          "Student Leadership Council",
          "Community engagement"
        ]
      }
    },
    "bands": [
      {
        "kind": "widget",
        "ground": "soft",
        "kicker": "The whole child compass",
        "title": "Four dimensions of growth",
        "lede": "Every student grows in all four. Tap a dimension to see how.",
        "widgetKey": "dv_w"
      },
      {
        "kind": "steps3",
        "ground": "paper",
        "kicker": "Whole child growth",
        "title": "Discover, practise, lead",
        "lede": "Three steps every student moves through.",
        "items": [
          {
            "title": "Discover interests",
            "desc": "Explore debate, writing, reading, environment, entrepreneurship, film, music and theatre."
          },
          {
            "title": "Practise life skills",
            "desc": "Personality development, emotional intelligence, organic farming and teamwork."
          }
        ]
      },
      {
        "kind": "widget",
        "ground": "soft",
        "kicker": "Student Leadership Council",
        "title": "What student leaders actually do",
        "lede": "Leadership at HKS is real responsibility.",
        "widgetKey": "dv_c"
      }
    ],
    "related": [
      {
        "to": "/campus-life/leadership-life-skills",
        "kicker": "In this section",
        "title": "Leadership and life skills",
        "desc": "Nine core programmes and a skills check"
      },
      {
        "to": "/campus-life/clubs-arts-expression",
        "kicker": "In this section",
        "title": "Clubs and arts",
        "desc": "Find your child's club"
      },
      {
        "to": "/krishi-vidya",
        "kicker": "Co-curricular track",
        "title": "Krishi Vidya",
        "desc": "Life skills in the garden"
      }
    ],
    "faqTitle": "Questions about student development",
    "faqs": [
      {
        "q": "Is club participation compulsory?",
        "a": "Every student joins at least one club during weekly club periods; many join more."
      },
      {
        "q": "How are council members chosen?",
        "a": "Through nominations, speeches and a fair selection process guided by teachers."
      },
      {
        "q": "Is there counselling support?",
        "a": "Yes. A school counsellor supports emotional wellbeing, and career counselling guides older students."
      }
    ],
    "tagline": {
      "text": "We don't just prepare students for exams. *We *prepare *them *for *life.",
      "note": ""
    },
    "widgets": {
      "dv_w": {
        "type": "wheel",
        "center": "Whole child",
        "items": [
          [
            "Leadership and life skills",
            "Personality development, public speaking, critical thinking, emotional intelligence, career counselling and organic farming.",
            "#6d28d9",
            "Lead"
          ],
          [
            "Clubs and creative arts",
            "Debate, writing, literary, environmental, entrepreneurship, photography and film, music, theatre and art clubs.",
            "#be185d",
            "Create"
          ],
          [
            "Student Leadership Council",
            "Student representatives help lead assemblies, houses, events and campus initiatives.",
            "#0369a1",
            "Voice"
          ],
          [
            "Community engagement",
            "Service projects that build compassion, civic awareness and responsibility.",
            "#15803d",
            "Serve"
          ]
        ]
      },
      "dv_c": {
        "type": "tabs",
        "tabs": [
          [
            "Assemblies",
            [
              [
                "Plan the programme",
                "Choose themes, speakers and performances"
              ],
              [
                "Host",
                "Compere assemblies with confidence"
              ],
              [
                "Reflect",
                "Gather feedback and improve the next one"
              ]
            ]
          ],
          [
            "Houses",
            [
              [
                "Captains",
                "Lead house teams in sport and culture"
              ],
              [
                "Motivate",
                "Encourage every member to take part"
              ],
              [
                "Fair play",
                "Model sportsmanship in competitions"
              ]
            ]
          ],
          [
            "Events",
            [
              [
                "Organise",
                "Help run Sports Day, Annual Day and festivals"
              ],
              [
                "Coordinate",
                "Work with teachers on logistics"
              ],
              [
                "Welcome",
                "Host visitors and parents"
              ]
            ]
          ],
          [
            "Campus initiatives",
            [
              [
                "Green campus",
                "Lead recycling and energy saving drives"
              ],
              [
                "Kindness",
                "Run buddy and peer support schemes"
              ],
              [
                "Student voice",
                "Bring classmates' ideas to teachers"
              ]
            ]
          ]
        ]
      }
    }
  },
  "student-welfare": {
    "slug": "student-welfare",
    "sec": "welfare",
    "seoTitle": "Student welfare and facilities",
    "seoDescription": "Smart classrooms, library, transport, cafeteria, medical room, counselling, hygiene and security at HKS Vidyamandir.",
    "name": "welfare and safety",
    "crumbs": [
      {
        "label": "Home",
        "to": "/"
      },
      {
        "label": "Co-curricular",
        "to": "/campus-life"
      },
      {
        "label": "Welfare and facilities",
        "to": "/campus-life/student-welfare"
      },
      {
        "label": "Overview"
      }
    ],
    "stepTag": "Welfare and facilities",
    "stepSub": "8 essential areas · safe campus",
    "h1": "Student welfare, safety and modern facilities",
    "lede": "Smart classrooms, libraries, school transport, hygienic dining, medical care, counselling and campus wide safety.",
    "subnav": [
      {
        "to": "/campus-life/student-welfare",
        "active": true,
        "label": "Overview"
      },
      {
        "to": "/campus-life/learning-campus-infrastructure",
        "active": false,
        "label": "Campus infrastructure"
      },
      {
        "to": "/campus-life/health-support-safety",
        "active": false,
        "label": "Health and safety"
      }
    ],
    "heroSvg": "<svg viewBox=\"0 0 520 420\" aria-hidden=\"true\">\n  <circle cx=\"380\" cy=\"110\" r=\"120\" fill=\"rgba(255,255,255,.08)\"/>\n  <circle cx=\"120\" cy=\"330\" r=\"50\" fill=\"rgba(255,255,255,.06)\"/>\n  <g transform=\"translate(260 210) rotate(0) scale(1.25)\"><g class=\"bob\"><path d=\"M0-110l90 36v56c0 60-40 104-90 122-50-18-90-62-90-122v-56Z\" fill=\"#fff\"/><path d=\"M-36 6l26 26 50-56\" stroke=\"var(--t)\" stroke-width=\"16\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></g></g>\n  <g fill=\"#ffd27a\"><circle class=\"tw1\" cx=\"90\" cy=\"90\" r=\"7\"/><circle class=\"tw2\" cx=\"450\" cy=\"350\" r=\"5\"/><circle class=\"tw1\" cx=\"420\" cy=\"60\" r=\"4\"/></g>\n</svg>",
    "stats": [
      {
        "val": "8",
        "label": "Areas",
        "sub": "Infrastructure and care"
      },
      {
        "val": "Safe",
        "label": "Campus",
        "sub": "CCTV and security protocols"
      },
      {
        "val": "Wellbeing",
        "label": "Support",
        "sub": "Medical room and counsellor"
      },
      {
        "val": "Connected",
        "label": "Transport",
        "sub": "School buses"
      }
    ],
    "intro": {
      "kicker": "Built for learners",
      "title": "A safe, comfortable place to learn",
      "lede": "Everyday care includes digital classrooms, clean drinking water, medical readiness and GPS monitored school transport.",
      "ticks": [
        "Digital smart classrooms and age appropriate libraries",
        "School bus fleet serving Bengaluru and nearby areas",
        "On campus medical room, first aid support and counselling",
        "Strict hygiene, clean drinking water, CCTV and a secure perimeter"
      ],
      "sideBox": {
        "title": "For parents",
        "items": [
          "Know who picks up your child",
          "Know what happens if they're unwell",
          "Know who to call"
        ]
      }
    },
    "bands": [
      {
        "kind": "widget",
        "ground": "soft",
        "kicker": "Layers of care",
        "title": "Protection from the gate to the classroom",
        "lede": "Each layer adds a different kind of care. Tap a layer.",
        "widgetKey": "wf_l"
      },
      {
        "kind": "cards",
        "ground": "soft",
        "cols": 4,
        "kicker": "Everything students need",
        "title": "Eight areas of care",
        "lede": "Infrastructure and wellbeing together.",
        "items": [
          {
            "num": "01",
            "title": "Smart classrooms",
            "desc": "Interactive, engaging digital classrooms."
          },
          {
            "num": "02",
            "title": "Library and reading spaces",
            "desc": "Reading corners and books for every age."
          },
          {
            "num": "03",
            "title": "Transportation",
            "desc": "Safe, convenient buses across the city and nearby areas."
          },
          {
            "num": "04",
            "title": "Cafeteria and dining",
            "desc": "Clean, hygienic spaces with fresh, nutritious food."
          },
          {
            "num": "05",
            "title": "Medical and first aid room",
            "desc": "Dedicated medical room and trained first aid staff."
          },
          {
            "num": "06",
            "title": "Counselling and support",
            "desc": "An accessible counsellor for emotional wellbeing."
          },
          {
            "num": "07",
            "title": "Hygiene and sanitation",
            "desc": "Clean washrooms, safe drinking water and daily upkeep."
          },
          {
            "num": "08",
            "title": "Safety and security",
            "desc": "CCTV, trained security staff and a protected perimeter."
          }
        ]
      },
      {
        "kind": "steps3",
        "ground": "soft",
        "kicker": "Designed around safety and comfort",
        "title": "Three promises",
        "lede": "What every family can expect.",
        "items": [
          {
            "title": "Safe arrival and spaces",
            "desc": "Reliable buses, perimeter checks and bright classrooms."
          },
          {
            "title": "Health and emotional support",
            "desc": "Medical room, hygienic dining, safe water and counselling."
          }
        ]
      }
    ],
    "related": [
      {
        "to": "/campus-life/learning-campus-infrastructure",
        "kicker": "In this section",
        "title": "Campus infrastructure",
        "desc": "Follow a day on campus"
      },
      {
        "to": "/campus-life/health-support-safety",
        "kicker": "In this section",
        "title": "Health and safety",
        "desc": "What happens if..."
      },
      {
        "to": "/campus-life",
        "kicker": "Co-curricular",
        "title": "Overview",
        "desc": "All co-curricular areas"
      }
    ],
    "faqTitle": "Questions about welfare and safety",
    "faqs": [
      {
        "q": "Is the bus GPS tracked?",
        "a": "Yes. School transport is GPS monitored."
      },
      {
        "q": "Is there a nurse or doctor on campus?",
        "a": "There is an on campus medical room with trained first aid staff. Parents are contacted promptly when needed."
      },
      {
        "q": "Can my child talk to a counsellor?",
        "a": "Yes. The school counsellor is accessible for academic and emotional wellbeing."
      },
      {
        "q": "How are visitors managed?",
        "a": "Through visitor verification, CCTV and trained security staff."
      }
    ],
    "tagline": {
      "text": "Children learn best when they feel *safe, *known *and *cared *for.",
      "note": ""
    },
    "widgets": {
      "wf_l": {
        "type": "layers",
        "center": "Your child",
        "items": [
          [
            "Perimeter",
            "A secure boundary, trained security staff and 24x7 CCTV.",
            "#0c4a23"
          ],
          [
            "Gate",
            "Visitor verification and strict entry protocols. Children leave only with registered adults.",
            "#15803d"
          ],
          [
            "Campus",
            "Clean washrooms, safe drinking water, hygienic dining and a medical room.",
            "#22a05a"
          ],
          [
            "Classroom",
            "Bright smart classrooms and teachers who know each child.",
            "#4cc27b"
          ],
          [
            "Wellbeing",
            "A school counsellor and peer support for how children feel.",
            "#8fdcab"
          ]
        ]
      }
    }
  },
  "technology-ai-maker-labs": {
    "slug": "technology-ai-maker-labs",
    "sec": "labs",
    "seoTitle": "Technology, AI and maker labs",
    "seoDescription": "Computer science, coding, robotics, AI, electronics and maker labs at HKS Vidyamandir.",
    "name": "the tech labs",
    "crumbs": [
      {
        "label": "Home",
        "to": "/"
      },
      {
        "label": "Co-curricular",
        "to": "/campus-life"
      },
      {
        "label": "Laboratories",
        "to": "/campus-life/laboratories"
      },
      {
        "label": "Technology, AI and maker"
      }
    ],
    "stepTag": "Laboratories",
    "stepSub": "7 tech and maker labs",
    "h1": "Technology, AI and maker laboratories",
    "lede": "Future ready labs for computer science, coding, robotics, AI, electronics prototyping, tinkering and maker design.",
    "subnav": [
      {
        "to": "/campus-life/laboratories",
        "active": false,
        "label": "Overview"
      },
      {
        "to": "/campus-life/core-science-math-labs",
        "active": false,
        "label": "Core science and maths"
      },
      {
        "to": "/campus-life/technology-ai-maker-labs",
        "active": true,
        "label": "Technology, AI and maker"
      }
    ],
    "heroSvg": "<svg viewBox=\"0 0 520 420\" aria-hidden=\"true\">\n  <circle cx=\"400\" cy=\"320\" r=\"70\" fill=\"rgba(255,255,255,.08)\"/>\n  <circle cx=\"110\" cy=\"120\" r=\"50\" fill=\"rgba(255,255,255,.06)\"/>\n  <g transform=\"translate(260 210) rotate(8) scale(1.25)\"><g class=\"bob\"><path d=\"M-30-100h60M-20-100v60L-80 70a14 14 0 0 0 12 22h136a14 14 0 0 0 12-22L20-40v-60\" fill=\"#fff\"/><path d=\"M-62 40h124l18 34a8 8 0 0 1-7 12H-69a8 8 0 0 1-7-12Z\" fill=\"var(--t)\"/><circle cx=\"-10\" cy=\"10\" r=\"8\" fill=\"#ffd27a\"/><circle cx=\"16\" cy=\"-14\" r=\"5\" fill=\"#ffd27a\"/></g></g>\n  <g fill=\"#ffd27a\"><circle class=\"tw1\" cx=\"80\" cy=\"300\" r=\"7\"/><circle class=\"tw2\" cx=\"450\" cy=\"90\" r=\"5\"/><circle class=\"tw1\" cx=\"130\" cy=\"60\" r=\"4\"/></g>\n</svg>",
    "stats": [
      {
        "val": "13+",
        "label": "Labs",
        "sub": "Science, maths, tech and maker"
      },
      {
        "val": "Guided",
        "label": "Sessions",
        "sub": "Trained lab assistants"
      },
      {
        "val": "STEM and AI",
        "label": "Equipment",
        "sub": "Future ready"
      },
      {
        "val": "Weekly",
        "label": "Practicals",
        "sub": "Scheduled hours"
      }
    ],
    "intro": {
      "kicker": "Future skills",
      "title": "Building, coding and inventing from early grades",
      "lede": "Students design circuits, program robots, explore AI concepts and prototype real world inventions in maker spaces.",
      "ticks": [
        "Progressive coding and computational thinking from primary grades",
        "Robotics kits and competitions from Grade 4",
        "Age appropriate AI and machine learning foundations",
        "Open tinkering and maker spaces for prototyping"
      ],
      "sideBox": {
        "title": "The coding ladder",
        "items": [
          "Unplugged logic and block coding",
          "Text based programming",
          "Apps, data and AI projects"
        ]
      }
    },
    "bands": [
      {
        "kind": "widget",
        "ground": "soft",
        "kicker": "Try it yourself",
        "title": "Program the robot",
        "lede": "This is the kind of logic puzzle our youngest coders start with. Add commands and run.",
        "widgetKey": "tm_r"
      },
      {
        "kind": "cards",
        "ground": "soft",
        "cols": 3,
        "kicker": "Seven future ready spaces",
        "title": "Inside the tech and maker labs",
        "lede": "Where ideas become working things.",
        "items": [
          {
            "num": "01",
            "title": "Computer Science Lab",
            "desc": "Modern computers for digital skills, productivity and projects."
          },
          {
            "num": "02",
            "title": "Robotics Lab",
            "desc": "Building and programming robots for practical challenges."
          },
          {
            "num": "03",
            "title": "AI and Machine Learning Lab",
            "desc": "How intelligent machines learn, classify and assist."
          },
          {
            "num": "04",
            "title": "Coding and Programming Lab",
            "desc": "Structured programs, apps and step by step logic."
          },
          {
            "num": "05",
            "title": "Electronics Prototyping Lab",
            "desc": "Circuits, sensor boards and working electronic models."
          },
          {
            "num": "06",
            "title": "Tinkering and Innovation Lab",
            "desc": "Space to tinker, experiment, test and invent."
          },
          {
            "num": "07",
            "title": "Maker Space and Design Lab",
            "desc": "Real objects built with design thinking, tools and prototyping."
          }
        ]
      },
      {
        "kind": "widget",
        "ground": "soft",
        "kicker": "The coding ladder",
        "title": "From blocks to AI",
        "lede": "How computational thinking grows across the grades.",
        "widgetKey": "tm_s"
      }
    ],
    "related": [
      {
        "to": "/campus-life/laboratories",
        "kicker": "Section overview",
        "title": "Laboratories",
        "desc": "All 14 labs"
      },
      {
        "to": "/campus-life/core-science-math-labs",
        "kicker": "In this section",
        "title": "Core science and maths labs",
        "desc": "Seven foundational spaces"
      },
      {
        "to": "/competitive-exams",
        "kicker": "Academics",
        "title": "Olympiads and exams",
        "desc": "Cyber Olympiad and ICSO readiness"
      }
    ],
    "faqTitle": "Questions about the tech labs",
    "faqs": [
      {
        "q": "When does coding start?",
        "a": "Computational thinking starts in primary grades with unplugged activities and block coding."
      },
      {
        "q": "Is AI appropriate for school students?",
        "a": "Yes, at the right level: how machines learn from examples, with simple, safe projects."
      },
      {
        "q": "Are there robotics competitions?",
        "a": "Students take part in robotics and innovation contests from Grade 4."
      },
      {
        "q": "Is internet use supervised?",
        "a": "Yes. Computer labs use filtered, supervised internet."
      }
    ],
    "tagline": null,
    "widgets": {
      "tm_r": {
        "type": "robot",
        "goal": [
          4,
          4
        ],
        "walls": [
          [
            1,
            0
          ],
          [
            1,
            1
          ],
          [
            3,
            2
          ],
          [
            3,
            3
          ],
          [
            1,
            3
          ]
        ],
        "text": "Add Forward, Left and Right commands, then press Run. The robot starts facing right. Reach the star without hitting a dark wall."
      },
      "tm_s": {
        "type": "schedule",
        "rows": [
          [
            "Grades 1 – 3",
            "Unplugged and blocks",
            "Sequencing, patterns and block coding games"
          ],
          [
            "Grades 4 – 5",
            "Robotics begins",
            "Programming simple robots and sensors"
          ],
          [
            "Grades 6 – 8",
            "Text code and apps",
            "First programming languages, apps and web pages"
          ],
          [
            "Grades 9 – 10",
            "Electronics and AI",
            "Circuits, data and introductory machine learning"
          ],
          [
            "Grades 11 – 12",
            "Projects",
            "Independent projects and competition entries"
          ]
        ],
        "note": "A general guide to progression."
      }
    }
  }
};
