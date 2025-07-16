// Standalone college data file
window.COLLEGE_DATA = {
  colleges: [
    {
      name: "JC Bose University of Science and Technology, YMCA",
      slug: "ymca",
      id: "ymca",
      description: "Explore branches and Previous Year Question Papers",
      ranking: {
        overall: 1,
        established: 1969,
        location: "Faridabad, Haryana",
        nirf_rank: 101,
        category: "Government",
        total_students: 8000,
        accreditation: "NAAC A+"
      },
      branches: [
        {
          name: "computer-engineering",
          slug: "computer-engineering",
          id: "computer-engineering",
          description: "Computer Engineering Branch",
          icon: "laptop-code",
          semesters: [
            {
              number: 3,
              slug: "sem3",
              id: "sem3",
              description: "Subjects for Semester 3",
              subjects: [
                {
                  name: "Analog Electronic Circuit",
                  description: "Study of electronic circuits and devices",
                  slug: "aec",
                  id: "aec",
                  pyqs: [
                    {
                      year: 2024,
                      file: "ymca-aec-2024.pdf",
                      id: "ymca-aec-2024",
                      difficulty: "intermediate",
                      exam_type: "semester",
                      pages: 3,
                      title: "Applied Electronic Circuit 2024"
                    },
                    {
                      year: 2023,
                      file: "ymca-aec-2023.pdf",
                      id: "ymca-aec-2023",
                      pages: 3,
                      title: "Applied Electronic Circuit 2023"
                    },
                    {
                      year: 2019,
                      file: "ymca-aec-2019.pdf",
                      id: "ymca-aec-2019",
                      pages: 3,
                      title: "Applied Electronic Circuit 2019"
                    }
                  ]
                },
                {
                  name: "Calculus and Ordinary Differential Equations",
                  description: "Mathematical concepts in engineering",
                  icon: "calculator",
                  slug: "cde",
                  id: "cde",
                  pyqs: [
                    {
                      year: 2023,
                      file: "ymca-cde-2023.pdf",
                      id: "ymca-cde-2023",
                      pages: 3,
                      title: "Calculus and Ordinary Differential Equations 2023"
                    }
                  ]
                },
                {
                  name: "Digital electronics",
                  description: "Fundamentals of digital systems",
                  icon: "memory",
                  slug: "digital-electronics",
                  id: "digital-electronics",
                  pyqs: [
                    {
                      year: 2018,
                      file: "ymca-digital-electronics-2018.pdf",
                      id: "ymca-digital-electronics-2018",
                      pages: 3,
                      title: "Digital Electronics 2018"
                    },
                    {
                      year: 2019,
                      file: "ymca-digital-electronics-2019.pdf",
                      id: "ymca-digital-electronics-2019",
                      pages: 3,
                      title: "Digital Electronics 2019"
                    },
                    {
                      year: 2023,
                      file: "ymca-digital-electronics-2023.pdf",
                      id: "ymca-digital-electronics-2023",
                      pages: 3,
                      title: "Digital Electronics 2023"
                    },
                    {
                      year: 2024,
                      file: "ymca-digital-electronics-2024.pdf",
                      id: "ymca-digital-electronics-2024",
                      pages: 3,
                      title: "Digital Electronics 2024"
                    }
                  ]
                },
                {
                  name: "Data Structures and Algorithms",
                  description: "Core concepts in data organization",
                  icon: "code",
                  slug: "dsa",
                  id: "dsa",
                  pyqs: [
                    {
                      year: 2024,
                      file: "ymca-dsa-2024.pdf",
                      id: "ymca-dsa-2024",
                      pages: 3,
                      title: "Data Structures and Algorithms 2024"
                    },
                    {
                      year: 2018,
                      file: "ymca-dsa-2018.pdf",
                      id: "ymca-dsa-2018",
                      pages: 3,
                      title: "Data Structures and Algorithms 2018"
                    }
                  ]
                },
                {
                  name: "Effective Technical Communication",
                  description: "Skills for effective communication in technical fields",
                  icon: "comment-dots",
                  slug: "etc",
                  id: "etc",
                  pyqs: [
                    {
                      year: 2023,
                      file: "ymca-etc-2023.pdf",
                      id: "ymca-etc-2023",
                      pages: 3,
                      title: "Effective Technical Communication 2023"
                    },
                    {
                      year: 2024,
                      file: "ymca-etc-2024.pdf",
                      id: "ymca-etc-2024",
                      pages: 3,
                      title: "Effective Technical Communication 2024"
                    }
                  ]
                }
              ]
            },
            {
              number: 4,
              slug: "sem4",
              id: "sem4",
              description: "Subjects for Semester 4",
              subjects: [
                {
                  name: "Computer Organization and Architecture",
                  id: "coa",
                  description: "Fundamentals of computer systems",
                  icon: "desktop",
                  slug: "coa",
                  pyqs: [
                    {
                      year: 2024,
                      file: "ymca-coa-2024.pdf",
                      id: "ymca-coa-2024",
                      pages: 3,
                      title: "Computer Organization and Architecture 2024"
                    },
                    {
                      year: 2019,
                      file: "ymca-coa-2019.pdf",
                      id: "ymca-coa-2019",
                      pages: 3,
                      title: "Computer Organization and Architecture 2019"
                    }
                  ]
                },
                {
                  name: "Design and Analysis of Algorithms",
                  id: "daa",
                  description: "Techniques for algorithm design and analysis",
                  icon: "project-diagram",
                  slug: "daa",
                  pyqs: [
                    {
                      year: 2015,
                      file: "ymca-daa-2015.pdf",
                      id: "ymca-daa-2015",
                      pages: 3,
                      title: "Design and Analysis of Algorithms 2015"
                    },
                    {
                      year: 2016,
                      file: "ymca-daa-2016.pdf",
                      id: "ymca-daa-2016",
                      pages: 3,
                      title: "Design and Analysis of Algorithms 2016"
                    },
                    {
                      year: 2019,
                      file: "ymca-daa-2019.pdf",
                      id: "ymca-daa-2019",
                      pages: 3,
                      title: "Design and Analysis of Algorithms 2019"
                    },
                    {
                      year: 2022,
                      file: "ymca-daa-2022.pdf",
                      id: "ymca-daa-2022",
                      pages: 3,
                      title: "Design and Analysis of Algorithms 2022"
                    },
                    {
                      year: 2023,
                      file: "ymca-daa-2023.pdf",
                      id: "ymca-daa-2023",
                      pages: 3,
                      title: "Design and Analysis of Algorithms 2023"
                    },
                    {
                      year: 2024,
                      file: "ymca-daa-2024.pdf",
                      id: "ymca-daa-2024",
                      pages: 3,
                      title: "Design and Analysis of Algorithms 2024"
                    }
                  ]
                },
                {
                  name: "Discrete Mathematics",
                  id: "discrete-mathematics",
                  description: "Mathematical foundations for computer science",
                  icon: "abacus",
                  slug: "discrete-mathematics",
                  pyqs: [
                    {
                      year: 2019,
                      file: "ymca-discrete-mathematics-2019.pdf",
                      id: "ymca-discrete-mathematics-2019",
                      pages: 3,
                      title: "Discrete Mathematics 2019"
                    },
                    {
                      year: 2020,
                      file: "ymca-discrete-mathematics-2020.pdf",
                      id: "ymca-discrete-mathematics-2020",
                      pages: 3,
                      title: "Discrete Mathematics 2020"
                    },
                    {
                      year: 2024,
                      file: "ymca-discrete-mathematics-2024.pdf",
                      id: "ymca-discrete-mathematics-2024",
                      pages: 3,
                      title: "Discrete Mathematics 2024"
                    }
                  ]
                },
                {
                  name: "Economic",
                  id: "economic",
                  description: "Economic principles in engineering",
                  icon: "chart-line",
                  slug: "economic",
                  pyqs: [
                    {
                      year: 2023,
                      file: "ymca-economic-2023.pdf",
                      id: "ymca-economic-2023",
                      pages: 3,
                      title: "Economic 2023"
                    },
                    {
                      year: 2024,
                      file: "ymca-economic-2024.pdf",
                      id: "ymca-economic-2024",
                      pages: 3,
                      title: "Economic 2024"
                    },
                    {
                      year: 2019,
                      file: "ymca-economic-2019.pdf",
                      id: "ymca-economic-2019",
                      pages: 3,
                      title: "Economic 2019"
                    },
                    {
                      year: 2020,
                      file: "ymca-economic-2020.pdf",
                      id: "ymca-economic-2020",
                      pages: 3,
                      title: "Economic 2020"
                    },
                    {
                      year: 2018,
                      file: "ymca-economic-2018.pdf",
                      id: "ymca-economic-2018",
                      pages: 3,
                      title: "Economic 2018"
                    }
                  ]
                },
                {
                  name: "Environmental science",
                  id: "environmental-science",
                  description: "Study of environmental issues and solutions",
                  icon: "leaf",
                  slug: "environmental-science",
                  pyqs: [
                    {
                      year: 2023,
                      file: "ymca-environmental-science-2023.pdf",
                      id: "ymca-environmental-science-2023",
                      pages: 3,
                      title: "Environmental Science 2023"
                    },
                    {
                      year: 2024,
                      file: "ymca-environmental-science-2024.pdf",
                      id: "ymca-environmental-science-2024",
                      pages: 3,
                      title: "Environmental Science 2024"
                    },
                    {
                      year: 2022,
                      file: "ymca-environmental-science-2022.pdf",
                      id: "ymca-environmental-science-2022",
                      pages: 3,
                      title: "Environmental Science 2022"
                    }
                  ]
                },
                {
                  name: "Operating system",
                  id: "os",
                  description: "Principles of operating systems",
                  icon: "server",
                  slug: "os",
                  pyqs: [
                    {
                      year: 2019,
                      file: "ymca-os-2019.pdf",
                      id: "ymca-os-2019",
                      pages: 3,
                      title: "Operating System 2019"
                    }
                  ]
                }
              ]
            },
            {
              number: 5,
              slug: "sem5",
              id: "sem5",
              description: "Subjects for Semester 5",
              subjects: [
                {
                  name: "Database Management Systems",
                  id: "dbms",
                  description: "Principles of database systems",
                  icon: "database",
                  slug: "dbms",
                  pyqs: [
                    {
                      year: 2023,
                      file: "ymca-dbms-2023.pdf",
                      id: "ymca-dbms-2023",
                      pages: 3,
                      title: "Database Management Systems 2023"
                    },
                    {
                      year: 2018,
                      file: "ymca-dbms-2018.pdf",
                      id: "ymca-dbms-2018",
                      pages: 3,
                      title: "Database Management Systems 2018"
                    },
                    {
                      year: 2019,
                      file: "ymca-dbms-2019.pdf",
                      id: "ymca-dbms-2019",
                      pages: 3,
                      title: "Database Management Systems 2019"
                    }
                  ]
                },
                {
                  name: "Biology",
                  id: "biology",
                  description: "Biological concepts in engineering",
                  icon: "flask",
                  slug: "biology",
                  pyqs: [
                    {
                      year: 2023,
                      file: "ymca-biology-2023.pdf",
                      id: "ymca-biology-2023",
                      pages: 3,
                      title: "Biology 2023"
                    },
                    {
                      year: 2024,
                      file: "ymca-biology-2024.pdf",
                      id: "ymca-biology-2024",
                      pages: 3,
                      title: "Biology 2024"
                    }
                  ]
                },
                {
                  name: "Compiler Design",
                  id: "compiler-design",
                  description: "Principles of compiler design",
                  icon: "file-code",
                  slug: "compiler-design",
                  pyqs: [
                    {
                      year: 2023,
                      file: "ymca-compiler-design-2023.pdf",
                      id: "ymca-compiler-design-2023",
                      pages: 3,
                      title: "Compiler Design 2023"
                    }
                  ]
                },
                {
                  name: "Constitution",
                  id: "constitution",
                  description: "Study of the Indian Constitution",
                  icon: "gavel",
                  slug: "constitution",
                  pyqs: [
                    {
                      year: 2023,
                      file: "ymca-constitution-2023.pdf",
                      id: "ymca-constitution-2023",
                      pages: 3,
                      title: "Constitution 2023"
                    }
                  ]
                },
                {
                  name: "Signal and Systems",
                  id: "sns",
                  description: "Fundamentals of signals and systems",
                  icon: "signal",
                  slug: "sns",
                  pyqs: [
                    {
                      year: 2023,
                      file: "ymca-sns-2023.pdf",
                      id: "ymca-sns-2023",
                      pages: 3,
                      title: "Signal and Systems 2023"
                    },
                    {
                      year: 2019,
                      file: "ymca-sns-2019.pdf",
                      id: "ymca-sns-2019",
                      pages: 3,
                      title: "Signal and Systems 2019"
                    }
                  ]
                },
                {
                  name: "Universal Human Values",
                  id: "universal-human-values",
                  description: "Study of human values and ethics",
                  icon: "heart",
                  slug: "universal-human-values",
                  pyqs: [
                    {
                      year: 2023,
                      file: "ymca-universal-human-values-2023.pdf",
                      id: "ymca-universal-human-values-2023",
                      pages: 3,
                      title: "Universal Human Values 2023"
                    }
                  ]
                }
              ]
            },
            {
              number: 6,
              slug: "sem6",
              id: "sem6",
              description: "Subjects for Semester 6",
              subjects: [
                {
                  name: "Computer Networks",
                  id: "computer-networks",
                  description: "Principles of computer networking",
                  icon: "network-wired",
                  slug: "computer-networks",
                  pyqs: [
                    {
                      year: 2017,
                      file: "ymca-computer-networks-2017.pdf",
                      id: "ymca-computer-networks-2017",
                      pages: 3,
                      title: "Computer Networks 2017"
                    },
                    {
                      year: 2018,
                      file: "ymca-computer-networks-2018.pdf",
                      id: "ymca-computer-networks-2018",
                      pages: 3,
                      title: "Computer Networks 2018"
                    },
                    {
                      year: 2023,
                      file: "ymca-computer-networks-2023.pdf",
                      id: "ymca-computer-networks-2023",
                      pages: 3,
                      title: "Computer Networks 2023"
                    },
                    {
                      year: 2024,
                      file: "ymca-computer-networks-2024.pdf",
                      id: "ymca-computer-networks-2024",
                      pages: 3,
                      title: "Computer Networks 2024"
                    }
                  ]
                },
                {
                  name: "AI Expert System",
                  id: "ai-exp-system",
                  description: "Fundamentals of AI and expert systems",
                  icon: "brain",
                  slug: "ai-exp-system",
                  pyqs: [
                    {
                      year: 2019,
                      file: "ymca-ai-exp-system-2019.pdf",
                      id: "ymca-ai-exp-system-2019",
                      pages: 3,
                      title: "AI Expert System 2019"
                    }
                  ]
                },
                {
                  name: "Bhagavad Gita",
                  id: "bhagavad-gita",
                  description: "Study of the Bhagavad Gita",
                  icon: "book-open",
                  slug: "bhagavad-gita",
                  pyqs: [
                    {
                      year: 2024,
                      file: "ymca-bhagavad-gita-2024.pdf",
                      id: "ymca-bhagavad-gita-2024",
                      pages: 3,
                      title: "Bhagavad Gita 2024"
                    }
                  ]
                },
                {
                  name: "Big Data",
                  id: "big-data",
                  description: "Concepts and technologies in big data",
                  icon: "database",
                  slug: "big-data",
                  pyqs: [
                    {
                      year: 2024,
                      file: "ymca-big-data-2024.pdf",
                      id: "ymca-big-data-2024",
                      pages: 3,
                      title: "Big Data 2024"
                    }
                  ]
                },
                {
                  name: "Client Server Technology",
                  id: "client-server-technology",
                  description: "Principles of client-server architecture",
                  icon: "server",
                  slug: "client-server-technology",
                  pyqs: [
                    {
                      year: 2019,
                      file: "ymca-client-server-technology-2019.pdf",
                      id: "ymca-client-server-technology-2019",
                      pages: 3,
                      title: "Client Server Technology 2019"
                    }
                  ]
                },
                {
                  name: "Cloud Computing",
                  id: "cloud-computing",
                  description: "Concepts and technologies in cloud computing",
                  icon: "cloud",
                  slug: "cloud-computing",
                  pyqs: [
                    {
                      year: 2019,
                      file: "ymca-cloud-computing-2019.pdf",
                      id: "ymca-cloud-computing-2019",
                      pages: 3,
                      title: "Cloud Computing 2019"
                    }
                  ]
                },
                {
                  name: "Data Mining",
                  id: "data-mining",
                  description: "Techniques and applications of data mining",
                  icon: "database",
                  slug: "data-mining",
                  pyqs: [
                    {
                      year: 2018,
                      file: "ymca-data-mining-2018.pdf",
                      id: "ymca-data-mining-2018",
                      pages: 3,
                      title: "Data Mining 2018"
                    }
                  ]
                },
                {
                  name: "Digital System Design",
                  id: "digital-system-design",
                  description: "Principles of digital system design",
                  icon: "circuit-board",
                  slug: "digital-system-design",
                  pyqs: [
                    {
                      year: 2019,
                      file: "ymca-digital-system-design-2019.pdf",
                      id: "ymca-digital-system-design-2019",
                      pages: 3,
                      title: "Digital System Design 2019"
                    }
                  ]
                },
                {
                  name: "Electronic devices",
                  id: "electronic-devices",
                  description: "Study of electronic devices and circuits",
                  icon: "microchip",
                  slug: "electronic-devices",
                  pyqs: [
                    {
                      year: 2024,
                      file: "ymca-electronic-devices-2024.pdf",
                      id: "ymca-electronic-devices-2024",
                      pages: 3,
                      title: "Electronic Devices 2024"
                    }
                  ]
                },
                {
                  name: "HR Management",
                  id: "hr-management",
                  description: "Principles of human resource management",
                  icon: "users",
                  slug: "hr-management",
                  pyqs: [
                    {
                      year: 2023,
                      file: "ymca-hr-management-2023.pdf",
                      id: "ymca-hr-management-2023",
                      pages: 3,
                      title: "HR Management 2023"
                    },
                    {
                      year: 2024,
                      file: "ymca-hr-management-2024.pdf",
                      id: "ymca-hr-management-2024",
                      pages: 3,
                      title: "HR Management 2024"
                    }
                  ]
                },
                {
                  name: "Internet and Web Technologies",
                  id: "int-n-web-technologies",
                  description: "Principles of internet and web technologies",
                  icon: "globe",
                  slug: "int-n-web-technologies",
                  pyqs: [
                    {
                      year: 2024,
                      file: "ymca-int-n-web-technologies-2024.pdf",
                      id: "ymca-int-n-web-technologies-2024",
                      pages: 3,
                      title: "Internet and Web Technologies 2024"
                    }
                  ]
                },
                {
                  name: "Intelligent Systems",
                  id: "intelligent-systems",
                  description: "Concepts in intelligent systems",
                  icon: "brain",
                  slug: "intelligent-systems",
                  pyqs: [
                    {
                      year: 2017,
                      file: "ymca-intelligent-systems-2017.pdf",
                      id: "ymca-intelligent-systems-2017",
                      pages: 3,
                      title: "Intelligent Systems 2017"
                    },
                    {
                      year: 2018,
                      file: "ymca-intelligent-systems-2018.pdf",
                      id: "ymca-intelligent-systems-2018",
                      pages: 3,
                      title: "Intelligent Systems 2018"
                    },
                    {
                      year: 2024,
                      file: "ymca-intelligent-systems-2024.pdf",
                      id: "ymca-intelligent-systems-2024",
                      pages: 3,
                      title: "Intelligent Systems 2024"
                    }
                  ]
                },
                {
                  name: "Operations Research",
                  id: "operations-research",
                  description: "Techniques in operations research",
                  icon: "chart-bar",
                  slug: "operations-research",
                  pyqs: [
                    {
                      year: 2024,
                      file: "ymca-operations-research-2024.pdf",
                      id: "ymca-operations-research-2024",
                      pages: 3,
                      title: "Operations Research 2024"
                    }
                  ]
                },
                {
                  name: "Real Time System",
                  id: "real-time-system",
                  description: "Principles of real-time system",
                  icon: "clock",
                  slug: "real-time-system",
                  pyqs: [
                    {
                      year: 2018,
                      file: "ymca-real-time-system-2018.pdf",
                      id: "ymca-real-time-system-2018",
                      pages: 3,
                      title: "Real Time System 2018"
                    },
                    {
                      year: 2021,
                      file: "ymca-real-time-system-2021.pdf",
                      id: "ymca-real-time-system-2021",
                      pages: 3,
                      title: "Real Time System 2021"
                    }
                  ]
                },
                {
                  name: "Soft Skills",
                  id: "soft-skills",
                  description: "Development of soft skills for professionals",
                  icon: "user-tie",
                  slug: "soft-skills",
                  pyqs: [
                    {
                      year: 2024,
                      file: "ymca-soft-skills-2024.pdf",
                      id: "ymca-soft-skills-2024",
                      pages: 3,
                      title: "Soft Skills 2024"
                    }
                  ]
                },
                {
                  name: "Software Engineering",
                  id: "software-engineering",
                  description: "Principles of software engineering",
                  icon: "code-branch",
                  slug: "software-engineering",
                  pyqs: [
                    {
                      year: 2024,
                      file: "ymca-software-engineering-2024.pdf",
                      id: "ymca-software-engineering-2024",
                      pages: 3,
                      title: "Software Engineering 2024"
                    },
                    {
                      year: 2019,
                      file: "ymca-software-engineering-2019.pdf",
                      id: "ymca-software-engineering-2019",
                      pages: 3,
                      title: "Software Engineering 2019"
                    }
                  ]
                },
                {
                  name: "Unix Shell",
                  id: "unix-shell",
                  description: "Fundamentals of Unix shell programming",
                  icon: "terminal",
                  slug: "unix-shell",
                  pyqs: [
                    {
                      year: 2019,
                      file: "ymca-unix-shell-2019.pdf",
                      id: "ymca-unix-shell-2019",
                      pages: 3,
                      title: "Unix Shell 2019"
                    },
                    {
                      year: 2018,
                      file: "ymca-unix-shell-2018.pdf",
                      id: "ymca-unix-shell-2018",
                      pages: 3,
                      title: "Unix Shell 2018"
                    }
                  ]
                }
              ]
            },
            {
              number: 7,
              slug: "sem7",
              id: "sem7",
              description: "Subjects for Semester 7",
              subjects: [
                {
                  name: "Advance Operating System",
                  id: "adv-os",
                  description: "Advanced concepts in operating systems",
                  icon: "server",
                  slug: "adv-os",
                  pyqs: [
                    {
                      year: 2023,
                      file: "ymca-adv-os-2023.pdf",
                      id: "ymca-adv-os-2023",
                      pages: 3,
                      title: "Advance Operating System 2023"
                    },
                    {
                      year: 2021,
                      file: "ymca-adv-os-2021.pdf",
                      id: "ymca-adv-os-2021",
                      pages: 3,
                      title: "Advance Operating System 2021"
                    }
                  ]
                },
                {
                  name: "Business Intelligence",
                  id: "business-intelligence",
                  description: "Concepts in business intelligence",
                  icon: "chart-pie",
                  slug: "business-intelligence",
                  pyqs: [
                    {
                      year: 2023,
                      file: "ymca-business-intelligence-2023.pdf",
                      id: "ymca-business-intelligence-2023",
                      pages: 3,
                      title: "Business Intelligence 2023"
                    }
                  ]
                },
                {
                  name: "Cloud Computing",
                  id: "cloud-computing",
                  description: "Advanced concepts in cloud computing",
                  icon: "cloud",
                  slug: "cloud-computing",
                  pyqs: [
                    {
                      year: 2023,
                      file: "ymca-cloud-computing-2023.pdf",
                      id: "ymca-cloud-computing-2023",
                      pages: 3,
                      title: "Cloud Computing 2023"
                    }
                  ]
                },
                {
                  name: "Computer Graphics",
                  id: "computer-graphics",
                  description: "Principles of computer graphics",
                  icon: "image",
                  slug: "computer-graphics",
                  pyqs: [
                    {
                      year: 2018,
                      file: "ymca-computer-graphics-2018.pdf",
                      id: "ymca-computer-graphics-2018",
                      pages: 3,
                      title: "Computer Graphics 2018"
                    }
                  ]
                },
                {
                  name: "Cryptography",
                  id: "cryptography",
                  description: "Principles of cryptography",
                  icon: "lock",
                  slug: "cryptography",
                  pyqs: [
                    {
                      year: 2021,
                      file: "ymca-cryptography-2021.pdf",
                      id: "ymca-cryptography-2021",
                      pages: 3,
                      title: "Cryptography 2021"
                    },
                    {
                      year: 2023,
                      file: "ymca-cryptography-2023.pdf",
                      id: "ymca-cryptography-2023",
                      pages: 3,
                      title: "Cryptography 2023"
                    }
                  ]
                },
                {
                  name: "Data Analytics",
                  id: "data-analytics",
                  description: "Techniques in data analytics",
                  icon: "chart-line",
                  slug: "data-analytics",
                  pyqs: [
                    {
                      year: 2023,
                      file: "ymca-data-analytics-2023.pdf",
                      id: "ymca-data-analytics-2023",
                      pages: 3,
                      title: "Data Analytics 2023"
                    }
                  ]
                },
                {
                  name: "Data Learning and Image Processing",
                  id: "dl-n-image-processing",
                  description: "Concepts in data learning and image processing",
                  icon: "image",
                  slug: "dl-n-image-processing",
                  pyqs: [
                    {
                      year: 2023,
                      file: "ymca-dl-n-image-processing-2023.pdf",
                      id: "ymca-dl-n-image-processing-2023",
                      pages: 3,
                      title: "Data Learning and Image Processing 2023"
                    }
                  ]
                },
                {
                  name: "Economic Policies",
                  id: "economic-policies",
                  description: "Study of economic policies",
                  icon: "chart-bar",
                  slug: "economic-policies",
                  pyqs: [
                    {
                      year: 2023,
                      file: "ymca-economic-policies-2023.pdf",
                      id: "ymca-economic-policies-2023",
                      pages: 3,
                      title: "Economic Policies 2023"
                    }
                  ]
                },
                {
                  name: "Financial Management",
                  id: "financial-management",
                  description: "Principles of financial management",
                  icon: "money-bill-wave",
                  slug: "financial-management",
                  pyqs: [
                    {
                      year: 2023,
                      file: "ymca-financial-management-2023.pdf",
                      id: "ymca-financial-management-2023",
                      pages: 3,
                      title: "Financial Management 2023"
                    }
                  ]
                },
                {
                  name: "Network programming",
                  id: "network-programming",
                  description: "Principles of network programming",
                  icon: "network-wired",
                  slug: "network-programming",
                  pyqs: [
                    {
                      year: 2018,
                      file: "ymca-network-programming-2018.pdf",
                      id: "ymca-network-programming-2018",
                      pages: 3,
                      title: "Network Programming 2018"
                    }
                  ]
                },
                {
                  name: "Neural Network and Deep Learning",
                  id: "neural-network-n-dl",
                  description: "Concepts in neural networks and deep learning",
                  icon: "brain",
                  slug: "neural-network-n-dl",
                  pyqs: [
                    {
                      year: 2023,
                      file: "ymca-neural-network-n-dl-2023.pdf",
                      id: "ymca-neural-network-n-dl-2023",
                      pages: 3,
                      title: "Neural Network and Deep Learning 2023"
                    }
                  ]
                },
                {
                  name: "Object Oriented System Design",
                  id: "object-oriented-system-design",
                  description: "Principles of object-oriented system design",
                  icon: "project-diagram",
                  slug: "object-oriented-system-design",
                  pyqs: [
                    {
                      year: 2018,
                      file: "ymca-object-oriented-system-design-2018.pdf",
                      id: "ymca-object-oriented-system-design-2018",
                      pages: 3,
                      title: "Object Oriented System Design 2018"
                    }
                  ]
                },
                {
                  name: "Object Oriented System Development",
                  id: "object-oriented-system-development",
                  description: "Principles of object-oriented system development",
                  icon: "project-diagram",
                  slug: "object-oriented-system-development",
                  pyqs: [
                    {
                      year: 2018,
                      file: "ymca-object-oriented-system-development-2018.pdf",
                      id: "ymca-object-oriented-system-development-2018",
                      pages: 3,
                      title: "Object Oriented System Development 2018"
                    }
                  ]
                },
                {
                  name: "Organizational Behaviour",
                  id: "org-behaviour",
                  description: "Study of organizational behaviour",
                  icon: "users",
                  slug: "org-behaviour",
                  pyqs: [
                    {
                      year: 2019,
                      file: "ymca-org-behaviour-2019.pdf",
                      id: "ymca-org-behaviour-2019",
                      pages: 3,
                      title: "Organizational Behaviour 2019"
                    },
                    {
                      year: 2021,
                      file: "ymca-org-behaviour-2021.pdf",
                      id: "ymca-org-behaviour-2021",
                      pages: 3,
                      title: "Organizational Behaviour 2021"
                    }
                  ]
                },
                {
                  name: "Real Time System",
                  id: "real-time-system",
                  description: "Principles of real-time systems",
                  icon: "clock",
                  slug: "real-time-system",
                  pyqs: [
                    {
                      year: 2018,
                      file: "ymca-real-time-system-2018.pdf",
                      id: "ymca-real-time-system-2018",
                      pages: 3,
                      title: "Real Time System 2018"
                    },
                    {
                      year: 2021,
                      file: "ymca-real-time-system-2021.pdf",
                      id: "ymca-real-time-system-2021",
                      pages: 3,
                      title: "Real Time System 2021"
                    }
                  ]
                },
                {
                  name: "Security of Information System",
                  id: "security-of-information-system",
                  description: "Principles of information system security",
                  icon: "shield-alt",
                  slug: "security-of-information-system",
                  pyqs: [
                    {
                      year: 2018,
                      file: "ymca-security-of-information-system-2018.pdf",
                      id: "ymca-security-of-information-system-2018",
                      pages: 3,
                      title: "Security of Information System 2018"
                    }
                  ]
                },
                {
                  name: "Software Testing",
                  id: "software-testing",
                  description: "Principles of software testing",
                  icon: "bug",
                  slug: "software-testing",
                  pyqs: [
                    {
                      year: 2017,
                      file: "ymca-software-testing-2017.pdf",
                      id: "ymca-software-testing-2017",
                      pages: 3,
                      title: "Software Testing 2017"
                    },
                    {
                      year: 2018,
                      file: "ymca-software-testing-2018.pdf",
                      id: "ymca-software-testing-2018",
                      pages: 3,
                      title: "Software Testing 2018"
                    }
                  ]
                },
                {
                  name: "Speech and Natural Language Processing",
                  id: "speech-n-nlp",
                  description: "Concepts in speech and natural language processing",
                  icon: "comment-dots",
                  slug: "speech-n-nlp",
                  pyqs: [
                    {
                      year: 2023,
                      file: "ymca-speech-n-nlp-2023.pdf",
                      id: "ymca-speech-n-nlp-2023",
                      pages: 3,
                      title: "Speech and Natural Language Processing 2023"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "VIT Bhopal",
      slug: "vit-bhopal",
      id: "vit-bhopal",
      description: "Explore branches and Previous Year Question Papers",
      ranking: {
        overall: 2,
        established: 2017,
        location: "Bhopal, Madhya Pradesh",
        nirf_rank: 45,
        category: "Private",
        total_students: 12000,
        accreditation: "NAAC A"
      },
      branches: [
        {
          name: "computer-engineering",
          slug: "computer-engineering",
          id: "computer-engineering",
          description: "Computer Engineering Branch",
          icon: "microchip",
          semesters: [
            {
              number: 6,
              slug: "sem6",
              id: "sem6",
              description: "Subjects for Semester 6",
              subjects: [
                {
                  name: "Digital Logic Design",
                  slug: "digital-logic-design",
                  id: "digital-logic-design",
                  description: "Fundamentals of digital circuits",
                  icon: "circuit-board",
                  pyqs: [
                    {
                      year: 2022,
                      file: "vit-bhopal-digital-logic-design-2022.pdf",
                      id: "vit-bhopal-digital-logic-design-2022",
                      pages: 10,
                      title: "Digital Logic Design"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
