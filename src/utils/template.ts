export const downloadTemplate = () => {
  const headers = [
    'Candidate Type', 'Full Name', 'Phone', 'Email', 'DOB', 'Preferred Location',
    'Designation', 'Fresher Status', 'Highest Qualification', 'Degree', 'Department / Specialization',
    '12th Stream', 'ITI Trade', 'Skills (Optional)', 'Board', 'Other Board Name', 'College / Institute Name',
    'Score Type', 'Score Value', 'Grade Score', 'Passing Year', 'Immediate Joining',
    'Current Year / Semester', 'Expected Graduation', 'Expected Passing Year', 'Job Type'
  ];

  const csvContent = headers.join(',') + '\n';
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', 'candidate_onboarding_template.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
