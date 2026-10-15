import React, { useState } from 'react';
import {
  CheckCircle2,
  Download,
  Copy,
  Check,
  RotateCcw,
} from 'lucide-react';
import { CandidateRecord } from '../types/candidate';
import { exportSingleCandidateJSON } from '../utils/storage';

interface SubmissionSuccessProps {
  candidate: CandidateRecord;
  onReset: () => void;
}

export const SubmissionSuccess: React.FC<SubmissionSuccessProps> = ({
  candidate,
  onReset,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyId = () => {
    navigator.clipboard.writeText(candidate.id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isFresher = candidate.candidateType === 'fresher';

  return (
    <div className="max-w-2xl mx-auto py-8 text-center space-y-6">
      {/* Animated Success Badge */}
      <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-xs">
        <CheckCircle2 className="w-9 h-9" />
      </div>

      <div>
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
          Onboarding Form Submitted Successfully!
        </h2>
        <p className="text-sm text-slate-500 mt-2 max-w-md mx-auto">
          Thank you, <span className="font-semibold text-slate-800">{candidate.fullName}</span>. Your onboarding record has been logged in the candidate database.
        </p>
      </div>

      {/* Candidate Dossier Overview Card */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 text-left shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-2">
          <div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
              Candidate Reference ID
            </div>
            <div className="text-lg font-bold font-mono text-slate-900 tabular-nums mt-0.5">
              {candidate.id}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyId}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy ID'}</span>
            </button>

            <button
              type="button"
              onClick={() => exportSingleCandidateJSON(candidate)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 rounded-lg transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Record</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
          <div>
            <span className="text-slate-400 block mb-0.5">Candidate Type</span>
            <span className="font-semibold text-slate-800 text-sm capitalize">
              {isFresher
                ? candidate.fresherStatus === 'passed_out'
                  ? 'Fresher · Graduated'
                  : 'Fresher · Pursuing'
                : 'Experienced Professional'}
            </span>
          </div>
          {candidate.gender ? (
            <div>
              <span className="text-slate-400 block mb-0.5">Gender</span>
              <span className="font-semibold text-slate-800 text-sm">{candidate.gender}</span>
            </div>
          ) : null}
          {candidate.designation ? (
            <div>
              <span className="text-slate-400 block mb-0.5">Designation</span>
              <span className="font-semibold text-slate-800 text-sm">{candidate.designation}</span>
            </div>
          ) : null}
          <div>
            <span className="text-slate-400 block mb-0.5">Preferred Location</span>
            <span className="font-semibold text-slate-800 text-sm">
              {candidate.preferredLocation}
            </span>
          </div>
          <div>
            <span className="text-slate-400 block mb-0.5">Date of Birth (DOB)</span>
            <span className="font-medium text-slate-700 font-mono tabular-nums">
              {candidate.dob}
            </span>
          </div>
          <div>
            <span className="text-slate-400 block mb-0.5">Phone Number</span>
            <span className="font-medium text-slate-700">{candidate.phone}</span>
          </div>
          <div>
            <span className="text-slate-400 block mb-0.5">Email Address</span>
            <span className="font-medium text-slate-700 truncate block">{candidate.email}</span>
          </div>

          {isFresher && (
            <div className="sm:col-span-3 pt-3 border-t border-slate-100 space-y-1 text-slate-600">
              <div className="font-semibold text-slate-900 text-xs">
                {candidate.highestQualification === '10th' ? (
                  <span>10th Standard · {candidate.board}</span>
                ) : candidate.highestQualification === '12th' ? (
                  <span>
                    12th Standard · {candidate.twelfthStream} ({candidate.board})
                  </span>
                ) : candidate.highestQualification === 'ITI' ? (
                  <span>ITI · {candidate.itiTrade}</span>
                ) : candidate.highestQualification === 'Diploma' ? (
                  <span>Diploma · {candidate.degree || candidate.department}</span>
                ) : (
                  <span>
                    {candidate.highestQualification} · {candidate.degree}{' '}
                    {candidate.department ? `(${candidate.department})` : ''}
                  </span>
                )}
              </div>
              <div className="text-[11px] text-slate-500">
                <span>{candidate.collegeName}</span>
                {candidate.fresherStatus === 'passed_out' ? (
                  <span>
                    {' '}· Passed Out in {candidate.passingYear}

                  </span>
                ) : (
                  <span>
                    {candidate.highestQualification === '10th' || candidate.highestQualification === '12th'
                      ? ` · Expected Completion: ${candidate.expectedPassingYear || '2026'}`
                      : `${candidate.currentYearSemester ? ` · Stage: ${candidate.currentYearSemester}` : ''} · Expected: ${candidate.expectedGraduation}`}
                  </span>
                )}
              </div>

              {candidate.skills && (
                <div className="pt-2 flex flex-wrap gap-1.5 items-center">
                  <span className="text-[11px] font-medium text-slate-500">Key Skills:</span>
                  {candidate.skills
                    .split(',')
                    .map((s) => s.trim())
                    .filter(Boolean)
                    .map((skill, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 text-[11px] font-medium border border-indigo-100"
                      >
                        {skill}
                      </span>
                    ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Navigation & Next Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
        <button
          type="button"
          onClick={onReset}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white text-sm font-semibold rounded-xl shadow-xs transition-colors cursor-pointer"
        >
          <RotateCcw className="w-4 h-4 text-white/80" />
          <span>Submit Another Candidate</span>
        </button>
      </div>
    </div>
  );
};
