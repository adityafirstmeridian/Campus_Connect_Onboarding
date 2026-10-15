export interface SkillMatrixItem {
  highestQualification: 'UG' | 'PG' | 'Diploma' | 'ITI';
  degreeCategory: string;
  departmentSpecialization: string;
  specificSkills: string[];
  recommendedRoles: string;
}

export const SKILLS_MATRIX_DATA: SkillMatrixItem[] = [
  // ==================== ITI (Industrial Training) ====================
  {
    highestQualification: 'ITI',
    degreeCategory: 'ITI Certificate / Trade',
    departmentSpecialization: 'ITI Electrician',
    specificSkills: [
      'House Wiring',
      'Panel Wiring',
      'Motor Rewinding',
      'Transformer Testing',
      'Electrical Safety & Earthing',
      'Circuit Troubleshooting',
      'Single & 3-Phase Systems',
    ],
    recommendedRoles: 'Industrial Electrician, Wireman, Maintenance Technician',
  },
  {
    highestQualification: 'ITI',
    degreeCategory: 'ITI Certificate / Trade',
    departmentSpecialization: 'ITI Fitter',
    specificSkills: [
      'Bench Fitting',
      'Lathe Machine Operation',
      'Precision Vernier & Micrometer Measurement',
      'Welding & Grinding',
      'Drilling & Tapping',
      'Mechanical Assembly',
    ],
    recommendedRoles: 'Mechanical Fitter, Assembly Line Technician, Tool Room Fitter',
  },
  {
    highestQualification: 'ITI',
    degreeCategory: 'ITI Certificate / Trade',
    departmentSpecialization: 'ITI Machinist',
    specificSkills: [
      'CNC Milling',
      'Conventional Lathe Operations',
      'Surface Grinding',
      'Tool Setting & Offset',
      'Engineering Blueprint Reading',
      'Tolerance & GD&T',
    ],
    recommendedRoles: 'CNC Operator, Machinist, Die Maker, Tool Setter',
  },
  {
    highestQualification: 'ITI',
    degreeCategory: 'ITI Certificate / Trade',
    departmentSpecialization: 'ITI COPA (Computer Operator & Programming Assistant)',
    specificSkills: [
      'Computer Operations',
      'Fast Data Entry',
      'MS Office (Excel, Word, PowerPoint)',
      'Basic HTML & CSS',
      'PC Hardware Troubleshooting',
      'Network Cables & LAN Setup',
    ],
    recommendedRoles: 'Data Entry Operator, Office Assistant, Junior IT Support',
  },
  {
    highestQualification: 'ITI',
    degreeCategory: 'ITI Certificate / Trade',
    departmentSpecialization: 'ITI Welder',
    specificSkills: [
      'ARC Welding (SMAW)',
      'TIG Welding (GTAW)',
      'MIG Welding (GMAW)',
      'Oxy-Acetylene Gas Cutting',
      'Sheet Metal Fabrication',
      'Weld Defect Inspection',
    ],
    recommendedRoles: 'Certified Welder, Pipe Welder, Structural Fabricator',
  },
  {
    highestQualification: 'ITI',
    degreeCategory: 'ITI Certificate / Trade',
    departmentSpecialization: 'ITI Turner',
    specificSkills: [
      'Lathe Turning Operations',
      'Thread Cutting & Pitching',
      'Taper Turning',
      'Facing & Chamfering',
      'Boring & Reaming',
      'Precision Dial Gauge & Micrometer',
    ],
    recommendedRoles: 'Turner Operator, Lathe Craftsman, Precision Machinist',
  },
  {
    highestQualification: 'ITI',
    degreeCategory: 'ITI Certificate / Trade',
    departmentSpecialization: 'ITI Mechanic Motor Vehicle (MMV)',
    specificSkills: [
      'Engine Overhaul & Diagnostics',
      'Brake Systems & Bleeding',
      'Suspension & Steering Overhaul',
      'Auto Electricals & Battery Diagnostics',
      'Manual & Automatic Transmission Repair',
      'OBD Scanner Usage',
    ],
    recommendedRoles: 'Automobile Mechanic, Service Center Technician, Fleet Inspector',
  },
  {
    highestQualification: 'ITI',
    degreeCategory: 'ITI Certificate / Trade',
    departmentSpecialization: 'ITI Electronic Mechanic',
    specificSkills: [
      'Soldering & De-soldering (Through-Hole & SMD)',
      'PCB Inspection & Track Repair',
      'Oscilloscope & Multimeter Handling',
      'Power Supply & Inverter Repair',
      'Digital & Analog Circuit Testing',
    ],
    recommendedRoles: 'Electronic Assembly Technician, Hardware Testing Specialist',
  },
  {
    highestQualification: 'ITI',
    degreeCategory: 'ITI Certificate / Trade',
    departmentSpecialization: 'Other ITI Trades (Plumber / RAC / Draughtsman)',
    specificSkills: [
      'Industrial Safety & PPE Protocols',
      'Hand & Power Tool Handling',
      'Preventive Maintenance',
      'Quality Inspection Checklists',
      'Equipment Calibration & Operation',
    ],
    recommendedRoles: 'Maintenance Assistant, Workshop Technician, General Tradesman',
  },

  // ==================== DIPLOMA (Polytechnic) ====================
  {
    highestQualification: 'Diploma',
    degreeCategory: 'Polytechnic Diploma',
    departmentSpecialization: 'Computer Engineering / Computer Science',
    specificSkills: [
      'C & C++ Programming',
      'Java Basics',
      'HTML5, CSS3 & JavaScript',
      'Relational Databases & SQL Queries',
      'Operating Systems (Linux/Windows)',
      'Git Version Control',
      'Computer Networking (TCP/IP)',
    ],
    recommendedRoles: 'Junior Web Developer, Technical Support Engineer, QA Junior Tester',
  },
  {
    highestQualification: 'Diploma',
    degreeCategory: 'Polytechnic Diploma',
    departmentSpecialization: 'Information Technology (IT)',
    specificSkills: [
      'Web Application Basics',
      'Python Scripting',
      'Database Management Systems',
      'System & Network Administration',
      'Cloud Fundamentals (AWS/Azure Basics)',
      'Technical Documentation',
    ],
    recommendedRoles: 'IT Helpdesk Analyst, Junior SysAdmin, Database Support Tech',
  },
  {
    highestQualification: 'Diploma',
    degreeCategory: 'Polytechnic Diploma',
    departmentSpecialization: 'Mechanical Engineering',
    specificSkills: [
      '2D/3D CAD (AutoCAD, SolidWorks Basics)',
      'Machine Drawing & GD&T',
      'Manufacturing Processes & CNC Basics',
      'Fluid Mechanics & Pneumatics',
      'Workshop Inspection & Measurement',
      '5S & Lean Manufacturing Basics',
    ],
    recommendedRoles: 'Junior CAD Drafter, Quality Control Inspector, Production Supervisor',
  },
  {
    highestQualification: 'Diploma',
    degreeCategory: 'Polytechnic Diploma',
    departmentSpecialization: 'Electrical Engineering',
    specificSkills: [
      'AutoCAD Electrical',
      'Industrial Wiring & Single Line Diagrams',
      'PLC & SCADA Basics (Siemens / Allen Bradley)',
      'Switchgear & Protection Equipment',
      'Substation & Transformer Maintenance',
      'Electrical Safety Standards',
    ],
    recommendedRoles: 'Junior Electrical Engineer, Substation Operator, PLC Field Tech',
  },
  {
    highestQualification: 'Diploma',
    degreeCategory: 'Polytechnic Diploma',
    departmentSpecialization: 'Civil Engineering',
    specificSkills: [
      'AutoCAD Civil Drafting',
      'Total Station & Land Surveying',
      'Building Material Testing & Concrete Tech',
      'Quantity Estimation & Costing',
      'Site Supervision & Bar Bending Schedule (BBS)',
      'Structural Layout Reading',
    ],
    recommendedRoles: 'Site Supervisor, Quantity Surveyor Assistant, Civil Drafter',
  },
  {
    highestQualification: 'Diploma',
    degreeCategory: 'Polytechnic Diploma',
    departmentSpecialization: 'Electronics & Telecommunication (ECE)',
    specificSkills: [
      'Embedded C Fundamentals',
      'Microcontroller Interfacing (8051, Arduino)',
      'PCB Layout & Eagle / KiCAD',
      'Digital Signal Transmission Basics',
      'RF & Telecom Test Equipment Handling',
      'Troubleshooting Electronic Hardware',
    ],
    recommendedRoles: 'Electronics Field Engineer, Telecom Tower Tech, Hardware QA',
  },
  {
    highestQualification: 'Diploma',
    degreeCategory: 'Polytechnic Diploma',
    departmentSpecialization: 'Automobile Engineering',
    specificSkills: [
      'Internal Combustion Engine Overhauls',
      'Chassis & Transmission Troubleshooting',
      'Auto Electrical & ECU Diagnostics',
      'AutoCAD Mechanical',
      'Vehicle Inspection Checklists',
    ],
    recommendedRoles: 'Automotive Service Advisor, QA Inspector, Assembly Supervisor',
  },
  {
    highestQualification: 'Diploma',
    degreeCategory: 'Polytechnic Diploma',
    departmentSpecialization: 'Other Diploma Specializations',
    specificSkills: [
      'Standard Operating Procedures (SOP)',
      'Equipment Handling & Safety',
      'Technical Report Writing',
      'Root Cause Analysis',
      'Basic Microsoft Excel & Office',
    ],
    recommendedRoles: 'Operations Trainee, Maintenance Trainee, Quality Associate',
  },

  // ==================== UNDERGRADUATE (UG) ====================
  {
    highestQualification: 'UG',
    degreeCategory: 'B.Tech / B.E (Engineering)',
    departmentSpecialization: 'Computer Science & Engineering (CSE) / IT',
    specificSkills: [
      'Data Structures & Algorithms',
      'JavaScript, TypeScript & React.js',
      'Python / Java Core Programming',
      'Node.js & REST API Development',
      'SQL & Relational Databases (PostgreSQL / MySQL)',
      'Git, GitHub & CI/CD Basics',
      'Object-Oriented Design & Clean Code',
    ],
    recommendedRoles: 'Software Development Engineer (SDE-1), Full Stack Developer, Frontend/Backend Engineer',
  },
  {
    highestQualification: 'UG',
    degreeCategory: 'B.Tech / B.E (Engineering)',
    departmentSpecialization: 'Artificial Intelligence & Data Science (AI/DS)',
    specificSkills: [
      'Python Programming',
      'Pandas, NumPy & Scikit-learn',
      'Machine Learning Models (Supervised/Unsupervised)',
      'SQL Query Optimization & Data Modeling',
      'Data Visualization (Power BI / Tableau / Matplotlib)',
      'Deep Learning Fundamentals (PyTorch / TensorFlow)',
      'Feature Engineering & Exploratory Data Analysis',
    ],
    recommendedRoles: 'Data Analyst, Associate Data Scientist, ML Engineer Trainee',
  },
  {
    highestQualification: 'UG',
    degreeCategory: 'B.Tech / B.E (Engineering)',
    departmentSpecialization: 'Mechanical Engineering',
    specificSkills: [
      'SolidWorks & CATIA 3D Modeling',
      'AutoCAD Mechanical Drafting',
      'Finite Element Analysis (FEA / ANSYS)',
      'Thermodynamics & Heat Transfer',
      'Geometric Dimensioning & Tolerancing (GD&T)',
      'Lean Six Sigma & Kaizen Practices',
      'CNC / DNC Programming & G-Codes',
    ],
    recommendedRoles: 'Design Engineer, Production Engineer, Quality Assurance Engineer, Maintenance Lead',
  },
  {
    highestQualification: 'UG',
    degreeCategory: 'B.Tech / B.E (Engineering)',
    departmentSpecialization: 'Electrical & Electronics Engineering (EEE)',
    specificSkills: [
      'MATLAB & Simulink Modeling',
      'PLC & SCADA Programming',
      'Circuit Simulation (LTspice / Multisim)',
      'Power Systems & Grid Distribution',
      'Control Systems Engineering',
      'Motor Drives & Inverters',
      'Industrial Safety & National Electrical Code (NEC)',
    ],
    recommendedRoles: 'Electrical Design Engineer, Automation Engineer, Power Systems Specialist',
  },
  {
    highestQualification: 'UG',
    degreeCategory: 'B.Tech / B.E (Engineering)',
    departmentSpecialization: 'Electronics & Communication Engineering (ECE)',
    specificSkills: [
      'Embedded C / C++ Programming',
      'ARM Cortex & Microcontrollers (ESP32, STM32)',
      'VLSI Design & Verilog / VHDL Basics',
      'PCB Layout Design (Altium / KiCad)',
      'Internet of Things (IoT) Protocols (MQTT, HTTP)',
      'Signal Processing & MATLAB',
      'Hardware Debugging (Logic Analyzers)',
    ],
    recommendedRoles: 'Embedded Systems Engineer, IoT Developer, Firmware Engineer, Hardware Design Tech',
  },
  {
    highestQualification: 'UG',
    degreeCategory: 'B.Tech / B.E (Engineering)',
    departmentSpecialization: 'Civil Engineering',
    specificSkills: [
      'AutoCAD Civil 3D & 2D Drafting',
      'STAAD.Pro & ETABS Structural Analysis',
      'Autodesk Revit (BIM Modeling)',
      'Total Station Site Surveying & GIS',
      'Construction Project Quantity Estimation & BOQ',
      'Reinforced Concrete (RCC) & Steel Design',
      'Construction Scheduling (MS Project)',
    ],
    recommendedRoles: 'Structural Design Trainee, Site Engineer, Estimation Engineer, BIM Modeler',
  },
  {
    highestQualification: 'UG',
    degreeCategory: 'BCA (Computer Applications)',
    departmentSpecialization: 'Computer Applications / Software',
    specificSkills: [
      'Core Java & Object-Oriented Principles',
      'Web Development (HTML5, CSS3, JavaScript)',
      'Database Management & SQL Queries',
      'Python for Scripting',
      'PHP / Node.js Backend Basics',
      'Software Testing Fundamentals',
      'Git Version Control',
    ],
    recommendedRoles: 'Junior Software Engineer, Web Developer, Application Support Specialist',
  },
  {
    highestQualification: 'UG',
    degreeCategory: 'B.Sc (Science & IT)',
    departmentSpecialization: 'Computer Science / Information Technology',
    specificSkills: [
      'C++ / Java Programming',
      'Linux Shell Scripting & Command Line',
      'Data Structures & Algorithms',
      'Relational Database Design (RDBMS)',
      'Computer Networks (OSI Model, Routing)',
      'Web Technologies & API Testing (Postman)',
    ],
    recommendedRoles: 'Junior Programmer, IT Support Analyst, System Administrator Trainee',
  },
  {
    highestQualification: 'UG',
    degreeCategory: 'B.Com (Commerce)',
    departmentSpecialization: 'Accounting, Finance & Taxation',
    specificSkills: [
      'Financial Accounting & Double Entry Bookkeeping',
      'Advanced Microsoft Excel (VLOOKUP, Pivot Tables, Macros)',
      'Tally Prime & ERP 9',
      'GST Filing & Income Tax Computation',
      'Cost Accounting & Budgeting',
      'Bank Reconciliation & Financial Auditing',
    ],
    recommendedRoles: 'Accounts Executive, Junior Auditor, Tax Assistant, Financial Operations Analyst',
  },
  {
    highestQualification: 'UG',
    degreeCategory: 'BBA / BMS (Business Administration)',
    departmentSpecialization: 'Marketing, Finance, HR & Operations',
    specificSkills: [
      'Business Communication & Presentation',
      'Market Research & Competitor Analysis',
      'Digital Marketing Basics (SEO, Social Ads)',
      'Advanced Excel & Data Summarization',
      'Project Planning & Coordination',
      'Client Relationship Management (CRM)',
      'Talent Sourcing & HR Principles',
    ],
    recommendedRoles: 'Business Development Executive, Marketing Trainee, HR Recruiter, Operations Analyst',
  },
  {
    highestQualification: 'UG',
    degreeCategory: 'B.Des (Design)',
    departmentSpecialization: 'UI/UX & Graphic Design',
    specificSkills: [
      'Figma & FigJam Prototyping',
      'UI/UX Wireframing & User Journey Mapping',
      'Adobe Photoshop & Illustrator',
      'Design Systems & Component Libraries',
      'Typography & Color Theory',
      'User Research & Usability Testing',
    ],
    recommendedRoles: 'UI/UX Designer, Visual Designer, Product Design Associate',
  },
  {
    highestQualification: 'UG',
    degreeCategory: 'B.Pharm',
    departmentSpecialization: 'Pharmaceutical Sciences',
    specificSkills: [
      'Pharmacology & Medicinal Chemistry',
      'HPLC & Spectrophotometry Analysis',
      'Drug Formulation & Compounding',
      'Good Manufacturing Practices (GMP) Guidelines',
      'Clinical Trial Protocols & Pharmacovigilance',
      'Quality Control & Assurance in Pharma',
    ],
    recommendedRoles: 'Quality Control Chemist, Formulation Scientist, Medical Representative, Regulatory Trainee',
  },
  {
    highestQualification: 'UG',
    degreeCategory: 'BA (Bachelor of Arts)',
    departmentSpecialization: 'English, Journalism & Mass Communication',
    specificSkills: [
      'Content Writing & Copywriting',
      'Proofreading & Editorial Guidelines',
      'Search Engine Optimization (SEO) Content',
      'Social Media Management & Strategy',
      'Public Relations & Media Outreach',
      'Qualitative Research & Fact-Checking',
    ],
    recommendedRoles: 'Content Writer, Communications Associate, Digital Content Creator, PR Executive',
  },

  // ==================== POSTGRADUATE (PG) ====================
  {
    highestQualification: 'PG',
    degreeCategory: 'M.Tech / M.E (Engineering)',
    departmentSpecialization: 'Computer Science, AI & Machine Learning',
    specificSkills: [
      'Deep Learning & Neural Networks (PyTorch / TensorFlow)',
      'Natural Language Processing (NLP & Transformers)',
      'Distributed Computing & Microservices Architecture',
      'Cloud Architecture (AWS / GCP Solutions)',
      'Big Data Processing (Apache Spark / Kafka)',
      'High-Performance Algorithms & Optimization',
      'MLOps & Containerization (Docker, Kubernetes)',
    ],
    recommendedRoles: 'Senior Software Engineer, Machine Learning Specialist, AI Solutions Architect',
  },
  {
    highestQualification: 'PG',
    degreeCategory: 'M.Tech / M.E (Engineering)',
    departmentSpecialization: 'VLSI & Embedded Systems',
    specificSkills: [
      'SystemVerilog & UVM Verification',
      'Verilog / VHDL Digital Synthesis',
      'Cadence / Synopsys EDA Tools',
      'ASIC Design & Static Timing Analysis (STA)',
      'Real-Time Operating Systems (RTOS / FreeRTOS)',
      'Low-Power SoC Architecture',
    ],
    recommendedRoles: 'VLSI Design Engineer, Verification Specialist, ASIC Engineer, Firmware Lead',
  },
  {
    highestQualification: 'PG',
    degreeCategory: 'MCA (Master of Computer Applications)',
    departmentSpecialization: 'Software Engineering & Cloud Architecture',
    specificSkills: [
      'Full Stack Development (MERN / Spring Boot + React)',
      'RESTful & GraphQL API Design',
      'Microservices & Distributed Caching (Redis)',
      'Cloud Deployment & Serverless Functions',
      'SQL & NoSQL Databases (PostgreSQL, MongoDB)',
      'DevOps CI/CD Pipelines (GitHub Actions / Jenkins)',
      'System Security & OWASP Top 10 Standards',
    ],
    recommendedRoles: 'Senior Full Stack Developer, Backend Architect, Tech Lead, DevOps Engineer',
  },
  {
    highestQualification: 'PG',
    degreeCategory: 'MBA / PGDM (Management)',
    departmentSpecialization: 'Finance & Banking',
    specificSkills: [
      'Financial Modeling (Discounted Cash Flow, LBO)',
      'Corporate Valuation & Equity Research',
      'Investment Banking Analysis',
      'Mergers & Acquisitions (M&A) Evaluation',
      'Advanced Financial Excel & Power BI Dashboards',
      'Credit Risk Analysis & Portfolio Management',
      'Financial Regulations & IFRS Reporting',
    ],
    recommendedRoles: 'Financial Analyst, Investment Banking Associate, Corporate Finance Manager',
  },
  {
    highestQualification: 'PG',
    degreeCategory: 'MBA / PGDM (Management)',
    departmentSpecialization: 'Marketing & Digital Strategy',
    specificSkills: [
      'Go-To-Market (GTM) Strategy',
      'Digital Marketing & Performance Media (Google Ads, Meta)',
      'Marketing Analytics & Attribution Modeling',
      'Brand Management & Campaign Positioning',
      'Customer Relationship Management (Salesforce / HubSpot)',
      'Market Segmentation & Consumer Insights',
    ],
    recommendedRoles: 'Brand Manager, Product Marketing Manager, Growth Strategist, Marketing Lead',
  },
  {
    highestQualification: 'PG',
    degreeCategory: 'MBA / PGDM (Management)',
    departmentSpecialization: 'Human Resource Management (HRM)',
    specificSkills: [
      'Strategic Talent Acquisition & Headhunting',
      'HR Analytics & People Dashboards (Power BI)',
      'Compensation & Benefits (C&B) Structuring',
      'Employee Engagement & Retention Strategy',
      'Statutory Compliance & Indian Labor Laws',
      'Performance Management Systems (OKRs / KPIs)',
      'HRIS & Payroll Management (Workday, Darwinbox)',
    ],
    recommendedRoles: 'HR Business Partner (HRBP), Talent Acquisition Lead, Compensation & Benefits Manager',
  },
  {
    highestQualification: 'PG',
    degreeCategory: 'MBA / PGDM (Management)',
    departmentSpecialization: 'Operations & Supply Chain Management',
    specificSkills: [
      'Supply Chain Optimization & Logistics',
      'Lean Six Sigma (Green Belt Methodologies)',
      'Enterprise Resource Planning (SAP SCM / Oracle)',
      'Demand Forecasting & Inventory Optimization',
      'Procurement & Vendor Negotiations',
      'Warehouse Management Systems (WMS)',
    ],
    recommendedRoles: 'Supply Chain Manager, Operations Head, Logistics Strategist, Procurement Lead',
  },
  {
    highestQualification: 'PG',
    degreeCategory: 'M.Sc (Master of Science)',
    departmentSpecialization: 'Data Science & Applied Statistics',
    specificSkills: [
      'Statistical Hypothesis Testing & Bayesian Methods',
      'Python & R for Advanced Statistical Computing',
      'Time Series Analysis & Econometrics',
      'Predictive Modeling & Feature Engineering',
      'Data Storytelling & Interactive Visuals (Tableau / Power BI)',
      'SQL & Big Data Querying',
    ],
    recommendedRoles: 'Data Scientist, Quantitative Analyst, Predictive Modeler, Research Statistician',
  },
  {
    highestQualification: 'PG',
    degreeCategory: 'M.Com (Master of Commerce)',
    departmentSpecialization: 'Corporate Accounting & International Taxation',
    specificSkills: [
      'International Financial Reporting Standards (IFRS)',
      'Corporate Tax Planning & Transfer Pricing',
      'Internal & Statutory Auditing Standards',
      'Advanced Cost Control & Variance Analysis',
      'Financial Management & Treasury Operations',
      'Corporate Law & Company Secretarial Basics',
    ],
    recommendedRoles: 'Senior Accountant, Tax Consultant, Audit Manager, Finance Controller Assistant',
  },
  {
    highestQualification: 'PG',
    degreeCategory: 'MA (Master of Arts)',
    departmentSpecialization: 'Corporate Communication, Media & PR',
    specificSkills: [
      'Crisis Communication Management',
      'Executive Ghostwriting & Speechwriting',
      'Corporate Brand Storytelling',
      'Media Relations & Press Conference Handling',
      'Internal Corporate Communications',
      'Brand Perception & Sentiment Analysis',
    ],
    recommendedRoles: 'Corporate Communications Head, PR Manager, Senior Editorial Strategist',
  },
];

/**
 * Downloads the complete Skills Matrix as an Excel-compatible CSV file with UTF-8 BOM
 */
export const downloadSkillsMatrixExcel = () => {
  const headers = [
    'Highest Qualification',
    'Degree / Category',
    'Department / Specialization / Trade',
    'Specific Core Skills',
    'Recommended Job Roles / Domain',
  ];

  const escapeCSV = (val: string): string => {
    const escaped = val.replace(/"/g, '""');
    return `"${escaped}"`;
  };

  const csvRows = [
    headers.map(escapeCSV).join(','),
    ...SKILLS_MATRIX_DATA.map((item) =>
      [
        escapeCSV(item.highestQualification),
        escapeCSV(item.degreeCategory),
        escapeCSV(item.departmentSpecialization),
        escapeCSV(item.specificSkills.join(', ')),
        escapeCSV(item.recommendedRoles),
      ].join(',')
    ),
  ];

  // \uFEFF is the UTF-8 Byte Order Mark (BOM) ensuring Microsoft Excel opens it with proper UTF-8 column mapping
  const blob = new Blob(['\uFEFF' + csvRows.join('\r\n')], {
    type: 'text/csv;charset=utf-8;',
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', 'Qualification_Department_Skills_Matrix.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
