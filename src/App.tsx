import React, { useState } from 'react';
import { TopNav } from './components/TopNav';
import { Sidebar } from './components/Sidebar';
import { OnboardingForm } from './components/OnboardingForm';
import { SubmissionSuccess } from './components/SubmissionSuccess';
import {
  CandidateFormData,
  CandidateRecord,
  INITIAL_FORM_DATA,
} from './types/candidate';
import { saveNewCandidate } from './utils/storage';

export default function App() {
  const [formData, setFormData] = useState<CandidateFormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedCandidate, setSubmittedCandidate] = useState<CandidateRecord | null>(null);

  const updateField = <K extends keyof CandidateFormData>(
    key: K,
    value: CandidateFormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    if (errors[key as string]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key as string];
        return next;
      });
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    // 1. Essential Personal Fields (Required for all)
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.dob.trim()) newErrors.dob = 'Date of birth is required';
    if (!formData.preferredLocation.trim())
      newErrors.preferredLocation = 'Preferred location is required';

    // 2. If Experienced: Designation is required
    if (formData.candidateType === 'experienced') {
      if (!formData.designation.trim()) {
        newErrors.designation = 'Designation is required';
      }
    }

    // 3. If Fresher: Educational branch validation
    if (formData.candidateType === 'fresher') {
      const qual = formData.highestQualification;
      const isPassed = formData.fresherStatus === 'passed_out';

      // Skills validation: mandatory (at least one skill) for UG, PG, Diploma, and ITI
      if (['UG', 'PG', 'Diploma', 'ITI'].includes(qual)) {
        if (!formData.skills || !formData.skills.trim()) {
          newErrors.skills = 'Please enter or select at least one skill';
        }
      }

      if (qual === '10th') {
        if (isPassed) {
          if (!formData.passingYear.trim())
            newErrors.passingYear = 'Passing year is required';
        }
      } else if (qual === '12th') {
        if (isPassed) {
          if (!formData.passingYear.trim())
            newErrors.passingYear = 'Passing year is required';
        }
      } else if (qual === 'ITI') {
        if (!formData.collegeName.trim())
          newErrors.collegeName = 'ITI Institute name is required';
        if (isPassed) {
          if (!formData.passingYear.trim())
            newErrors.passingYear = 'Passing year is required';
        } else {
          if (!formData.expectedGraduation.trim())
            newErrors.expectedGraduation = 'Expected completion date is required';
        }
      } else if (qual === 'Diploma') {
        if (!formData.degree.trim() && !formData.department.trim())
          newErrors.degree = 'Department / Specialization is required';
        if (!formData.collegeName.trim())
          newErrors.collegeName = 'Polytechnic name is required';
        if (isPassed) {
          if (!formData.passingYear.trim())
            newErrors.passingYear = 'Passing year is required';
        } else {
          if (!formData.expectedGraduation.trim())
            newErrors.expectedGraduation = 'Expected completion date is required';
        }
      } else {
        // UG or PG
        if (!formData.department.trim())
          newErrors.department = 'Department is required';
        if (!formData.collegeName.trim())
          newErrors.collegeName = 'College / University name is required';
        if (isPassed) {
          if (!formData.passingYear.trim())
            newErrors.passingYear = 'Passing year is required';
        } else {
          if (!formData.expectedGraduation.trim())
            newErrors.expectedGraduation = 'Expected graduation date is required';
        }
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      window.scrollTo({ top: 120, behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      // Ensure gradeScore is populated if scoreValue is present
      const submissionData = {
        ...formData,
        gradeScore:
          formData.scoreValue && !formData.gradeScore
            ? formData.scoreType === 'percentage'
              ? `${formData.scoreValue}%`
              : `${formData.scoreValue} CGPA`
            : formData.gradeScore,
      };
      const record = saveNewCandidate(submissionData);
      setSubmittedCandidate(record);
      setIsSubmitting(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 350);
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM_DATA);
    setErrors({});
    setSubmittedCandidate(null);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans">
      <div className="md:grid md:grid-cols-2">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Right Content */}
        <main className="flex-1 w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <TopNav onResetForm={handleReset} />
          
          <div className="mt-8">
            {submittedCandidate ? (
              <SubmissionSuccess
                candidate={submittedCandidate}
                onReset={handleReset}
              />
            ) : (
              <div>
                {/* Header Title */}
                <div className="mb-6">
                  <h1 className="text-3xl font-extrabold tracking-tight text-[#1e3a8a]">
                    Candidate Onboarding
                  </h1>
                  <p className="mt-2 text-[#1e3a8a]/80">
                    You are now joining the FirstMeridian Business Services Talent Network!
                  </p>
                </div>

                {/* Single Step Onboarding Form */}
                <OnboardingForm
                  formData={formData}
                  updateField={updateField}
                  onSubmit={handleSubmit}
                  errors={errors}
                  isSubmitting={isSubmitting}
                />
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
