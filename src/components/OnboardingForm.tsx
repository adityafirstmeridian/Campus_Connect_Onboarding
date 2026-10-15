import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  GraduationCap,
  Briefcase,
  User,
  Phone,
  Mail,
  Calendar,
  MapPin,
  Building,
  Award,
  BookOpen,
  CheckCircle2,
  Send,
  Percent,
  Tag,
  Plus,
  Check,
} from 'lucide-react';
import { CandidateFormData, HighestQualification } from '../types/candidate';

interface OnboardingFormProps {
  formData: CandidateFormData;
  updateField: <K extends keyof CandidateFormData>(key: K, value: CandidateFormData[K]) => void;
  onSubmit: (e: React.FormEvent) => void;
  errors: Record<string, string>;
  isSubmitting: boolean;
}

const BOARDS = [
  'CBSE',
  'ICSE',
  'State Board',
  'NIOS',
  'CISCE',
  'International Baccalaureate (IB)',
  'Cambridge (IGCSE)',
  'Other Board',
];

const TWELFTH_STREAMS = [
  'Science (PCM - Physics, Chemistry, Maths)',
  'Science (PCB - Physics, Chemistry, Biology)',
  'Science (PCMB - Math & Biology)',
  'Commerce (with Maths)',
  'Commerce (without Maths)',
  'Arts / Humanities',
  'Vocational Stream',
  'Other Stream',
];

const ITI_TRADES = [
  'ITI Electrician',
  'ITI Fitter',
  'ITI Machinist',
  'ITI COPA (Computer Operator & Programming Assistant)',
  'ITI Welder',
  'ITI Turner',
  'ITI Mechanic Motor Vehicle',
  'ITI Electronic Mechanic',
  'Other ITI Trade',
];

const QUALIFICATIONS: { id: HighestQualification; label: string; desc: string }[] = [
  { id: 'UG', label: 'UG', desc: 'B.Tech, BCA, B.Sc, B.Com, etc.' },
  { id: 'PG', label: 'PG', desc: 'M.Tech, MCA, MBA, M.Sc, etc.' },
  { id: 'Diploma', label: 'Diploma', desc: 'Polytechnic, Technical' },
  { id: '12th', label: '12th', desc: 'Higher Secondary / +2' },
  { id: '10th', label: '10th', desc: 'Secondary / SSC' },
  { id: 'ITI', label: 'ITI', desc: 'Industrial Training' },
];

const DEGREES_BY_QUALIFICATION: Record<HighestQualification, string[]> = {
  UG: [
    'B.Tech / B.E (Engineering)',
    'BCA (Computer Applications)',
    'B.Sc (Computer Science / IT / General)',
    'B.Com (Commerce)',
    'BBA / BMS (Business Administration)',
    'BA (Bachelor of Arts)',
    'B.Des (Design)',
    'B.Pharm',
    'Other UG Degree',
  ],
  PG: [
    'M.Tech / M.E (Engineering)',
    'MCA (Master of Computer Apps)',
    'M.Sc (Computer Science / IT / Science)',
    'MBA / PGDM (Management)',
    'M.Com (Commerce)',
    'MA (Master of Arts)',
    'MS (Master of Science)',
    'Other PG Degree',
  ],
  Diploma: [
    'Polytechnic Diploma in Computer Engineering',
    'Diploma in Information Technology',
    'Diploma in Mechanical Engineering',
    'Diploma in Electrical Engineering',
    'Diploma in Civil Engineering',
    'Diploma in Electronics & Telecomm',
    'Other Diploma',
  ],
  '12th': [],
  '10th': [],
  ITI: [],
};

const PASSING_YEARS = [
  '2026',
  '2025',
  '2024',
  '2023',
  '2022',
  '2021',
  '2020',
  '2019',
  '2018',
  '2017',
  '2016',
  '2015',
];

const EXPECTED_PURSUING_YEARS = ['2026', '2027', '2028', '2029', '2030'];

const getSuggestedSkills = (
  qualification: HighestQualification,
  degree: string,
  department: string,
  itiTrade: string
): string[] => {
  if (qualification === 'ITI') {
    const trade = itiTrade.toLowerCase();
    if (trade.includes('electrician')) {
      return ['House Wiring', 'Panel Wiring', 'Motor Rewinding', 'Transformer Testing', 'Electrical Safety', 'Circuit Troubleshooting'];
    }
    if (trade.includes('fitter')) {
      return ['Bench Fitting', 'Lathe Machine', 'Precision Measurement', 'Welding', 'Drilling & Tapping', 'Assembly'];
    }
    if (trade.includes('machinist')) {
      return ['CNC Milling', 'Lathe Operations', 'Grinding Machine', 'Tool Setting', 'Blueprint Reading'];
    }
    if (trade.includes('copa')) {
      return ['Computer Operations', 'Data Entry', 'MS Office & Excel', 'HTML/CSS', 'Hardware Troubleshooting'];
    }
    if (trade.includes('welder')) {
      return ['ARC Welding', 'TIG Welding', 'MIG Welding', 'Gas Cutting', 'Fabrication', 'Welding Inspection'];
    }
    if (trade.includes('turner')) {
      return ['Lathe Turning', 'Threading', 'Taper Turning', 'Facing', 'Boring', 'Precision Micrometer'];
    }
    if (trade.includes('motor vehicle') || trade.includes('mechanic')) {
      return ['Engine Diagnostics', 'Brake Systems', 'Suspension Overhaul', 'Auto Electricals', 'Transmission Repair'];
    }
    if (trade.includes('electronic')) {
      return ['Soldering & De-soldering', 'PCB Repair', 'SMD Components', 'Oscilloscope', 'Circuit Testing'];
    }
    return ['Industrial Safety', 'Tools Handling', 'Preventive Maintenance', 'Quality Inspection', 'Equipment Operation'];
  }

  // For UG, PG, Diploma
  const text = `${degree} ${department}`.toLowerCase();

  if (
    text.includes('computer') ||
    text.includes('software') ||
    text.includes('it') ||
    text.includes('cse') ||
    text.includes('bca') ||
    text.includes('mca') ||
    text.includes('coding')
  ) {
    return ['JavaScript', 'React', 'Python', 'Java', 'SQL / Databases', 'Node.js', 'HTML & CSS', 'Git & GitHub', 'Data Structures'];
  }
  if (text.includes('data') || text.includes('ai') || text.includes('machine learning') || text.includes('analytics')) {
    return ['Python', 'SQL', 'Power BI', 'Machine Learning', 'Data Analysis', 'Pandas & NumPy', 'Tableau', 'Excel Analytics'];
  }
  if (text.includes('mechanical') || text.includes('automobile') || text.includes('production') || text.includes('mechatronics')) {
    return ['AutoCAD', 'SolidWorks', 'CATIA', 'ANSYS', 'CNC Programming', 'Thermodynamics', 'GD&T', 'Lean Manufacturing'];
  }
  if (text.includes('electrical') || text.includes('eee') || text.includes('power system')) {
    return ['Circuit Design', 'MATLAB', 'PLC & SCADA', 'Electrical Wiring', 'Power Systems', 'AutoCAD Electrical', 'Control Systems'];
  }
  if (text.includes('electronics') || text.includes('telecomm') || text.includes('ece') || text.includes('embedded')) {
    return ['Embedded C', 'Microcontrollers (Arduino/8051)', 'VLSI Design', 'Digital Electronics', 'IoT', 'PCB Design', 'MATLAB'];
  }
  if (text.includes('civil') || text.includes('construction') || text.includes('structural')) {
    return ['AutoCAD Civil 3D', 'STAAD.Pro', 'Revit', 'Site Surveying', 'Quantity Estimation', 'Concrete Technology', 'Structural Analysis'];
  }
  if (text.includes('commerce') || text.includes('b.com') || text.includes('m.com') || text.includes('finance') || text.includes('accounting')) {
    return ['Financial Accounting', 'Advance Excel', 'Tally Prime', 'GST & Taxation', 'Financial Modeling', 'Cost Accounting', 'Auditing'];
  }
  if (text.includes('management') || text.includes('mba') || text.includes('bba') || text.includes('bms') || text.includes('business')) {
    if (text.includes('marketing')) {
      return ['Digital Marketing', 'SEO & SEM', 'Market Research', 'Social Media Strategy', 'Content Marketing', 'Google Analytics'];
    }
    if (text.includes('hr') || text.includes('human resource')) {
      return ['Talent Acquisition', 'Payroll Processing', 'Employee Relations', 'HR Policies', 'Recruitment Portals', 'Performance Management'];
    }
    return ['Business Analysis', 'Project Management', 'Advance Excel', 'Strategic Planning', 'Market Research', 'Client Relations'];
  }
  if (text.includes('pharm') || text.includes('chemistry') || text.includes('biology')) {
    return ['Pharmacology', 'HPLC', 'Drug Formulation', 'Clinical Research', 'GMP Guidelines', 'Quality Assurance (QA)'];
  }
  if (text.includes('design') || text.includes('b.des') || text.includes('graphics') || text.includes('ui') || text.includes('ux')) {
    return ['Figma', 'UI/UX Design', 'Adobe Photoshop', 'Illustrator', 'Wireframing', 'Prototyping', 'Design Systems'];
  }
  if (text.includes('arts') || text.includes('humanities') || text.includes('content') || text.includes('english')) {
    return ['Content Writing', 'Copywriting', 'Communication', 'Research & Analysis', 'Social Media', 'Proofreading & Editing'];
  }

  // Fallback broad professional skills
  return ['Communication', 'Problem Solving', 'Data Analysis', 'Project Management', 'MS Excel', 'Team Leadership', 'Critical Thinking'];
};

export const OnboardingForm: React.FC<OnboardingFormProps> = ({
  formData,
  updateField,
  onSubmit,
  errors,
  isSubmitting,
}) => {
  const isFresher = formData.candidateType === 'fresher';
  const isPassedOut = formData.fresherStatus === 'passed_out';
  const qual = formData.highestQualification;

  const isTenthOrTwelfth = qual === '10th' || qual === '12th';
  const isTenth = qual === '10th';
  const isTwelfth = qual === '12th';
  const isITI = qual === 'ITI';
  const isDiploma = qual === 'Diploma';
  const isDegreeBased = qual === 'UG' || qual === 'PG';

  const currentDegrees = DEGREES_BY_QUALIFICATION[qual] || [];

  const handleToggleSkill = (skill: string) => {
    const raw = formData.skills || '';
    const current = raw
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    const exists = current.some((s) => s.toLowerCase() === skill.toLowerCase());
    let next: string[];
    if (exists) {
      next = current.filter((s) => s.toLowerCase() !== skill.toLowerCase());
    } else {
      next = [...current, skill];
    }
    updateField('skills', next.join(', '));
  };

  const isSkillSelected = (skill: string) => {
    if (!formData.skills) return false;
    return formData.skills
      .split(',')
      .map((s) => s.trim().toLowerCase())
      .includes(skill.toLowerCase());
  };

  const handleQualificationChange = (newQual: HighestQualification) => {
    updateField('highestQualification', newQual);
    if (newQual === '10th' || newQual === '12th') {
      updateField('degree', '');
      updateField('department', '');
      if (!formData.board) {
        updateField('board', 'CBSE');
      }
      if (newQual === '12th' && !formData.twelfthStream) {
        updateField('twelfthStream', TWELFTH_STREAMS[0]);
      }
    } else if (newQual === 'ITI') {
      updateField('degree', '');
      updateField('department', '');
      if (!formData.itiTrade) {
        updateField('itiTrade', ITI_TRADES[0]);
      }
    } else if (newQual === 'Diploma') {
      const degrees = DEGREES_BY_QUALIFICATION.Diploma;
      if (degrees && degrees.length > 0) {
        updateField('degree', degrees[0]);
        updateField('department', degrees[0]);
      }
    } else {
      const newDegrees = DEGREES_BY_QUALIFICATION[newQual];
      if (newDegrees && newDegrees.length > 0) {
        updateField('degree', newDegrees[0]);
      }
    }
  };

  const handleScoreTypeChange = (type: 'percentage' | 'cgpa') => {
    updateField('scoreType', type);
    if (formData.scoreValue) {
      updateField(
        'gradeScore',
        type === 'percentage' ? `${formData.scoreValue}%` : `${formData.scoreValue} CGPA`
      );
    }
  };

  const handleScoreValueChange = (val: string) => {
    updateField('scoreValue', val);
    if (val) {
      updateField(
        'gradeScore',
        formData.scoreType === 'percentage' ? `${val}%` : `${val} CGPA`
      );
    } else {
      updateField('gradeScore', '');
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6 sm:space-y-8">
      {/* ============================================================== */}
      {/* 1. CLASSIFICATION: FRESHER OR EXPERIENCED                      */}
      {/* ============================================================== */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-xs">
        <div className="mb-4">
          <h2 className="text-lg sm:text-xl font-bold text-[#1e3a8a] tracking-tight">
            Are you a Fresher or Experienced Candidate? <span className="text-rose-500">*</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Card: Fresher */}
          <button
            type="button"
            onClick={() => updateField('candidateType', 'fresher')}
            className={`p-4 rounded-xl border text-left transition-all relative flex items-start gap-4 cursor-pointer ${
              isFresher
                ? 'bg-indigo-50/70 border-indigo-500 ring-2 ring-indigo-500/20 shadow-xs'
                : 'bg-white border-[#1e3a8a]/10 hover:border-[#1e3a8a]/30'
            }`}
          >
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                isFresher ? 'bg-indigo-600 text-white' : 'bg-white border border-[#1e3a8a]/10 text-[#1e3a8a]'
              }`}
            >
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[#1e3a8a] text-base">Fresher</span>
                {isFresher && <CheckCircle2 className="w-4 h-4 text-indigo-600" />}
              </div>
              <p className="text-xs text-[#1e3a8a]/70 mt-0.5">
                School/college graduate, student, or entry-level applicant.
              </p>
            </div>
          </button>

          {/* Card: Experienced */}
          <button
            type="button"
            onClick={() => updateField('candidateType', 'experienced')}
            className={`p-4 rounded-xl border text-left transition-all relative flex items-start gap-4 cursor-pointer ${
              !isFresher
                ? 'bg-indigo-50/70 border-indigo-500 ring-2 ring-indigo-500/20 shadow-xs'
                : 'bg-white border-[#1e3a8a]/10 hover:border-[#1e3a8a]/30'
            }`}
          >
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                !isFresher ? 'bg-indigo-600 text-white' : 'bg-white border border-[#1e3a8a]/10 text-[#1e3a8a]'
              }`}
            >
              <Briefcase className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[#1e3a8a] text-base">Experienced</span>
                {!isFresher && <CheckCircle2 className="w-4 h-4 text-indigo-600" />}
              </div>
              <p className="text-xs text-[#1e3a8a]/70 mt-0.5">
                Working professional with prior corporate or industry experience.
              </p>
            </div>
          </button>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. PERSONAL INFORMATION                                        */}
      {/* ============================================================== */}
      <div className="bg-white border border-[#1e3a8a]/10 rounded-2xl p-5 sm:p-6 space-y-4">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-[#1e3a8a] tracking-tight">
            Personal Information
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          {/* 1. Full Name */}
          <div className="space-y-1.5 sm:col-span-2">
            <label className="block text-xs font-semibold text-[#1e3a8a]/90 tracking-wide uppercase">
              Full Name <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <User className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => updateField('fullName', e.target.value)}
                placeholder="e.g. Vikram Malhotra"
                className={`w-full pl-10 pr-4 py-2.5 text-sm bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-colors ${
                  errors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                }`}
              />
            </div>
            {errors.fullName && <p className="text-xs text-rose-500">{errors.fullName}</p>}
          </div>

          {/* 2. Phone Number */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-700 tracking-wide uppercase">
              Phone Number <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Phone className="w-4 h-4" />
              </div>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                placeholder="+91 98765 43210"
                className={`w-full pl-10 pr-4 py-2.5 text-sm bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-colors ${
                  errors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                }`}
              />
            </div>
            {errors.phone && <p className="text-xs text-rose-500">{errors.phone}</p>}
          </div>

          {/* 3. Email Address */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-700 tracking-wide uppercase">
              Email Address <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Mail className="w-4 h-4" />
              </div>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
                placeholder="candidate@company.com"
                className={`w-full pl-10 pr-4 py-2.5 text-sm bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-colors ${
                  errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                }`}
              />
            </div>
            {errors.email && <p className="text-xs text-rose-500">{errors.email}</p>}
          </div>

          {/* 4. Date of Birth (DOB) */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-700 tracking-wide uppercase">
              Date of Birth (DOB) <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Calendar className="w-4 h-4" />
              </div>
              <input
                type="date"
                value={formData.dob}
                onChange={(e) => updateField('dob', e.target.value)}
                className={`w-full pl-10 pr-4 py-2.5 text-sm bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 font-mono tabular-nums transition-colors ${
                  errors.dob ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                }`}
              />
            </div>
            {errors.dob && <p className="text-xs text-rose-500">{errors.dob}</p>}
          </div>

          {/* Preferred Location */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-700 tracking-wide uppercase">
              Preferred Location <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <MapPin className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={formData.preferredLocation}
                onChange={(e) => updateField('preferredLocation', e.target.value)}
                placeholder="Up to 10 locations"
                className={`w-full pl-10 pr-4 py-2.5 text-sm bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-colors ${
                  errors.preferredLocation ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                }`}
              />
            </div>
            {errors.preferredLocation && (
              <p className="text-xs text-rose-500">{errors.preferredLocation}</p>
            )}
          </div>

          {/* 7. Designation (Requested for Experienced candidates) */}
          {!isFresher && (
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-slate-700 tracking-wide uppercase">
                Designation / Current Role <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Briefcase className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={formData.designation}
                  onChange={(e) => updateField('designation', e.target.value)}
                  placeholder="e.g. Senior Software Engineer"
                  className={`w-full pl-10 pr-4 py-2.5 text-sm bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-colors ${
                    errors.designation ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                  }`}
                />
              </div>
              {errors.designation && (
                <p className="text-xs text-rose-500">{errors.designation}</p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ============================================================== */}
      {/* 3. EDUCATIONAL FIELDS (FOR FRESHERS ONLY)                      */}
      {/* ============================================================== */}
      <AnimatePresence>
        {isFresher && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="bg-slate-50/80 border border-slate-200/90 rounded-2xl p-5 sm:p-6 space-y-6">
              {/* Passed Out vs Still Pursuing */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight mb-3">
                  Are you Passed Out or Still Pursuing? <span className="text-rose-500">*</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => updateField('fresherStatus', 'passed_out')}
                    className={`p-3.5 rounded-xl border text-left transition-all flex items-start gap-3 cursor-pointer ${
                      isPassedOut
                        ? 'bg-white border-emerald-500 ring-2 ring-emerald-500/20 shadow-xs'
                        : 'bg-white/70 border-slate-200 hover:bg-white text-slate-600'
                    }`}
                  >
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                        isPassedOut ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-slate-900">Passed Out (Graduated)</div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        Completed studies and received marks/certificate.
                      </div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => updateField('fresherStatus', 'still_pursuing')}
                    className={`p-3.5 rounded-xl border text-left transition-all flex items-start gap-3 cursor-pointer ${
                      !isPassedOut
                        ? 'bg-white border-sky-500 ring-2 ring-sky-500/20 shadow-xs'
                        : 'bg-white/70 border-slate-200 hover:bg-white text-slate-600'
                    }`}
                  >
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                        !isPassedOut ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-slate-900">Still Pursuing</div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        Currently enrolled and studying.
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {/* HIGHEST QUALIFICATION SELECTOR (UG, PG, Diploma, 12th, 10th, ITI) */}
              <div className="space-y-2 pt-2 border-t border-slate-200">
                <label className="block text-xs font-semibold text-slate-700 tracking-wide uppercase">
                  Highest Qualification <span className="text-rose-500">*</span>
                </label>
                <select
                  value={formData.highestQualification}
                  onChange={(e) => handleQualificationChange(e.target.value as HighestQualification)}
                  className="w-full px-3.5 py-3 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-colors"
                >
                  <option value="" disabled>Select your highest qualification</option>
                  {QUALIFICATIONS.filter(q => isPassedOut || (q.id !== '10th' && q.id !== '12th')).map((q) => (
                    <option key={q.id} value={q.id}>
                      {q.label} - {q.desc}
                    </option>
                  ))}
                </select>
              </div>

              {/* ============================================================== */}
              {/* CONDITIONAL BRANCH A: 10TH STANDARD                            */}
              {/* No Degree, No Department, No Semesters/Academic Stage          */}
              {/* Fields: Board, School Name, Passing Year, Marks (CGPA or %)   */}
              {/* ============================================================== */}
              {isTenth && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-1">


                  {/* If Passed Out: Year of Passing & Marks in CGPA or Percentage */}
                  {isPassedOut ? (
                    <>
                      {/* Year of Passing */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold text-slate-700">
                          Year of Passing <span className="text-rose-500">*</span>
                        </label>
                        <select
                          value={formData.passingYear}
                          onChange={(e) => updateField('passingYear', e.target.value)}
                          className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 font-mono tabular-nums"
                        >
                          {PASSING_YEARS.map((y) => (
                            <option key={y} value={y}>
                              {y}
                            </option>
                          ))}
                        </select>
                        {errors.passingYear && (
                          <p className="text-xs text-rose-500">{errors.passingYear}</p>
                        )}
                      </div>


                    </>
                  ) : (
                    /* If Still Pursuing 10th */
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-700">
                        Expected 10th Completion Year <span className="text-rose-500">*</span>
                      </label>
                      <select
                        value={formData.expectedPassingYear || '2026'}
                        onChange={(e) => updateField('expectedPassingYear', e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 font-mono tabular-nums"
                      >
                        {EXPECTED_PURSUING_YEARS.map((y) => (
                          <option key={y} value={y}>
                            {y}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>
              )}

              {/* ============================================================== */}
              {/* CONDITIONAL BRANCH B: 12TH STANDARD                            */}
              {/* No Degree, No Department, No Semesters/Academic Stage          */}
              {/* Fields: 12th Stream, Board, School/College Name, Passing Year, */}
              {/* Marks (CGPA or Percentage)                                     */}
              {/* ============================================================== */}
              {isTwelfth && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-1">






                  {/* If Passed Out: Year of Passing & Marks in CGPA or Percentage */}
                  {isPassedOut ? (
                    <>
                      {/* Year of Passing */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold text-slate-700">
                          Year of Passing <span className="text-rose-500">*</span>
                        </label>
                        <select
                          value={formData.passingYear}
                          onChange={(e) => updateField('passingYear', e.target.value)}
                          className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 font-mono tabular-nums"
                        >
                          {PASSING_YEARS.map((y) => (
                            <option key={y} value={y}>
                              {y}
                            </option>
                          ))}
                        </select>
                        {errors.passingYear && (
                          <p className="text-xs text-rose-500">{errors.passingYear}</p>
                        )}
                      </div>


                    </>
                  ) : (
                    /* If Still Pursuing 12th */
                    <div className="space-y-1.5 sm:col-span-2">
                      <label className="block text-xs font-semibold text-slate-700">
                        Expected 12th Completion Year <span className="text-rose-500">*</span>
                      </label>
                      <select
                        value={formData.expectedPassingYear || '2026'}
                        onChange={(e) => updateField('expectedPassingYear', e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 font-mono tabular-nums"
                      >
                        {EXPECTED_PURSUING_YEARS.map((y) => (
                          <option key={y} value={y}>
                            {y}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>
              )}

              {/* ============================================================== */}
              {/* CONDITIONAL BRANCH C: ITI (Industrial Training)                */}
              {/* Fields: ITI Trade, ITI Institute, Passing Year, Marks          */}
              {/* ============================================================== */}
              {isITI && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-1">
                  {/* ITI Trade */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700">
                      ITI Trade / Department <span className="text-rose-500">*</span>
                    </label>
                    <select
                      value={formData.itiTrade}
                      onChange={(e) => updateField('itiTrade', e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                    >
                      {ITI_TRADES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Skills Field (Mandatory: at least one skill, based on ITI Trade/Department) */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <label className="block text-xs font-semibold text-slate-700">
                        Skills / Technical Proficiencies <span className="text-rose-500">*</span>
                      </label>
                      <span className="text-[11px] text-indigo-600 font-medium flex items-center gap-1">
                        <Tag className="w-3 h-3 text-indigo-500" />
                        Suggested for {formData.itiTrade || 'Trade'}
                      </span>
                    </div>
                    <input
                      type="text"
                      value={formData.skills || ''}
                      onChange={(e) => updateField('skills', e.target.value)}
                      placeholder="e.g. House Wiring, Circuit Troubleshooting (type or click suggestions below)"
                      className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 ${
                        errors.skills ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                      }`}
                    />
                    {errors.skills && (
                      <p className="text-xs text-rose-500">{errors.skills}</p>
                    )}
                    <div className="pt-0.5">
                      <p className="text-[11px] text-slate-500 mb-1.5">
                        Suggested skills for your trade (click to add/remove):
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {getSuggestedSkills(
                          formData.highestQualification,
                          formData.degree,
                          formData.department,
                          formData.itiTrade
                        ).map((skill) => {
                          const selected = isSkillSelected(skill);
                          return (
                            <button
                              key={skill}
                              type="button"
                              onClick={() => handleToggleSkill(skill)}
                              className={`px-2.5 py-1 text-xs rounded-lg transition-all cursor-pointer inline-flex items-center gap-1 border ${
                                selected
                                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-2xs font-medium'
                                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                              }`}
                            >
                              <span>{skill}</span>
                              {selected ? (
                                <Check className="w-3 h-3 text-white" />
                              ) : (
                                <Plus className="w-3 h-3 text-slate-400" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* ITI Institute Name */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700">
                      ITI Institute / College Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Building className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        value={formData.collegeName}
                        onChange={(e) => updateField('collegeName', e.target.value)}
                        placeholder="e.g. Government ITI, Bangalore"
                        className={`w-full pl-10 pr-4 py-2.5 text-sm bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 ${
                          errors.collegeName ? 'border-rose-400' : 'border-slate-200'
                        }`}
                      />
                    </div>
                    {errors.collegeName && (
                      <p className="text-xs text-rose-500">{errors.collegeName}</p>
                    )}
                  </div>

                  {/* If Passed Out vs Pursuing */}
                  {isPassedOut ? (
                    <>
                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold text-slate-700">
                          Year of Passing <span className="text-rose-500">*</span>
                        </label>
                        <select
                          value={formData.passingYear}
                          onChange={(e) => updateField('passingYear', e.target.value)}
                          className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 font-mono tabular-nums"
                        >
                          {PASSING_YEARS.map((y) => (
                            <option key={y} value={y}>
                              {y}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Marks in CGPA or Percentage */}
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <label className="block text-xs font-semibold text-slate-700">
                            Marks in CGPA or Percentage
                          </label>
                          <div className="inline-flex items-center p-0.5 bg-slate-200/90 rounded-lg text-[11px] font-medium">
                            <button
                              type="button"
                              onClick={() => handleScoreTypeChange('percentage')}
                              className={`px-2 py-0.5 rounded-md transition-all cursor-pointer ${
                                formData.scoreType === 'percentage'
                                  ? 'bg-white text-indigo-700 shadow-2xs font-semibold'
                                  : 'text-slate-600 hover:text-slate-900'
                              }`}
                            >
                              Percentage (%)
                            </button>
                            <button
                              type="button"
                              onClick={() => handleScoreTypeChange('cgpa')}
                              className={`px-2 py-0.5 rounded-md transition-all cursor-pointer ${
                                formData.scoreType === 'cgpa'
                                  ? 'bg-white text-indigo-700 shadow-2xs font-semibold'
                                  : 'text-slate-600 hover:text-slate-900'
                              }`}
                            >
                              CGPA
                            </button>
                          </div>
                        </div>
                        <input
                          type="number"
                          step="0.01"
                          value={formData.scoreValue}
                          onChange={(e) => handleScoreValueChange(e.target.value)}
                          placeholder={formData.scoreType === 'percentage' ? 'e.g. 82.5' : 'e.g. 8.2'}
                          className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 font-mono"
                        />
                      </div>
                    </>
                  ) : (
                    <div className="space-y-1.5 sm:col-span-2">
                      <label className="block text-xs font-semibold text-slate-700">
                        Expected ITI Completion Date <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="month"
                        value={formData.expectedGraduation}
                        onChange={(e) => updateField('expectedGraduation', e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 font-mono"
                      />
                    </div>
                  )}
                </div>
              )}

              {/* ============================================================== */}
              {/* CONDITIONAL BRANCH D: UG, PG, DIPLOMA                          */}
              {/* Degree, Department, College Name, Passing Year / Semester      */}
              {/* Marks in CGPA or Percentage                                    */}
              {/* ============================================================== */}
              {(isDegreeBased || isDiploma) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-1">
                  {/* Degree / Course or Diploma Department/Specialization */}
                  <div className={`space-y-1.5 ${isDiploma ? 'sm:col-span-2' : ''}`}>
                    <label className="block text-xs font-semibold text-slate-700">
                      {isDiploma ? 'Department / Specialization' : `Degree (${formData.highestQualification})`}{' '}
                      <span className="text-rose-500">*</span>
                    </label>
                    <select
                      value={formData.degree}
                      onChange={(e) => {
                        updateField('degree', e.target.value);
                        if (isDiploma) {
                          updateField('department', e.target.value);
                        }
                      }}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                    >
                      {currentDegrees.map((deg) => (
                        <option key={deg} value={deg}>
                          {deg}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Department / Specialization (Only for UG / PG, removed for Diploma) */}
                  {!isDiploma && (
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-700">
                        Department / Specialization <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.department}
                        onChange={(e) => updateField('department', e.target.value)}
                        placeholder="e.g. Computer Science, Mechanical, Finance"
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 ${
                          errors.department ? 'border-rose-400' : 'border-slate-200'
                        }`}
                      />
                      {errors.department && (
                        <p className="text-xs text-rose-500">{errors.department}</p>
                      )}
                    </div>
                  )}

                  {/* Skills Field (Mandatory: at least one skill, based on Education and Department) */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <label className="block text-xs font-semibold text-slate-700">
                        Skills / Technical Proficiencies <span className="text-rose-500">*</span>
                      </label>
                      <span className="text-[11px] text-indigo-600 font-medium flex items-center gap-1">
                        <Tag className="w-3 h-3 text-indigo-500" />
                        Suggested for {formData.department || formData.degree || qual}
                      </span>
                    </div>
                    <input
                      type="text"
                      value={formData.skills || ''}
                      onChange={(e) => updateField('skills', e.target.value)}
                      placeholder="e.g. Java, Python, React, SQL (type or click suggestions below)"
                      className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 ${
                        errors.skills ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                      }`}
                    />
                    {errors.skills && (
                      <p className="text-xs text-rose-500">{errors.skills}</p>
                    )}
                    <div className="pt-0.5">
                      <p className="text-[11px] text-slate-500 mb-1.5">
                        Suggested skills for your department (click to add/remove):
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {getSuggestedSkills(
                          formData.highestQualification,
                          formData.degree,
                          formData.department,
                          formData.itiTrade
                        ).map((skill) => {
                          const selected = isSkillSelected(skill);
                          return (
                            <button
                              key={skill}
                              type="button"
                              onClick={() => handleToggleSkill(skill)}
                              className={`px-2.5 py-1 text-xs rounded-lg transition-all cursor-pointer inline-flex items-center gap-1 border ${
                                selected
                                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-2xs font-medium'
                                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                              }`}
                            >
                              <span>{skill}</span>
                              {selected ? (
                                <Check className="w-3 h-3 text-white" />
                              ) : (
                                <Plus className="w-3 h-3 text-slate-400" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* College / University Name */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700">
                      {isDiploma ? 'Polytechnic / Institute Name' : 'College / University Name'}{' '}
                      <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Building className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        value={formData.collegeName}
                        onChange={(e) => updateField('collegeName', e.target.value)}
                        placeholder={
                          isDiploma
                            ? 'e.g. Government Polytechnic, Pune'
                            : 'e.g. National Institute of Technology, Karnataka'
                        }
                        className={`w-full pl-10 pr-4 py-2.5 text-sm bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 ${
                          errors.collegeName ? 'border-rose-400' : 'border-slate-200'
                        }`}
                      />
                    </div>
                    {errors.collegeName && (
                      <p className="text-xs text-rose-500">{errors.collegeName}</p>
                    )}
                  </div>

                  {/* If Passed Out: Year of Passing & Marks */}
                  {isPassedOut ? (
                    <>
                      {/* Year of Passing */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold text-slate-700">
                          Year of Passing <span className="text-rose-500">*</span>
                        </label>
                        <select
                          value={formData.passingYear}
                          onChange={(e) => updateField('passingYear', e.target.value)}
                          className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 font-mono tabular-nums"
                        >
                          {PASSING_YEARS.map((y) => (
                            <option key={y} value={y}>
                              {y}
                            </option>
                          ))}
                        </select>
                      </div>


                    </>
                  ) : (
                    /* If Still Pursuing UG/PG/Diploma: Expected Date */
                    <div className="space-y-1.5 sm:col-span-2">
                      <label className="block text-xs font-semibold text-slate-700">
                        Expected Graduation (Month & Year) <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="month"
                        value={formData.expectedGraduation}
                        onChange={(e) => updateField('expectedGraduation', e.target.value)}
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 font-mono tabular-nums ${
                          errors.expectedGraduation ? 'border-rose-400' : 'border-slate-200'
                        }`}
                      />
                      {errors.expectedGraduation && (
                        <p className="text-xs text-rose-500">{errors.expectedGraduation}</p>
                      )}
                    </div>
                  )}

                  {/* Job Preference */}
                  <div className="space-y-2 pt-4 border-t border-slate-100">
                    <label className="block text-xs font-semibold text-slate-700">
                      What kind of job are you looking for? <span className="text-rose-500">*</span>
                    </label>
                    <div className="flex gap-4">
                      {['Full-time', 'Part-time', 'Internship'].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => updateField('jobType', type as any)}
                          className={`px-4 py-2 text-sm rounded-xl border transition-all ${
                            formData.jobType === type
                              ? 'bg-indigo-600 text-white border-indigo-600'
                              : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ============================================================== */}
      {/* 4. SUBMIT ACTION                                               */}
      {/* ============================================================== */}
      <div className="pt-2 flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm rounded-xl shadow-xs transition-all cursor-pointer ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : 'active:scale-98'
          }`}
        >
          <Send className="w-4 h-4" />
          <span>{isSubmitting ? 'Submitting Form...' : 'Submit Onboarding Form'}</span>
        </button>
      </div>
    </form>
  );
};
