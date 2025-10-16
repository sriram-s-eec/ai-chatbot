import React from 'react';
import type { AnalysisResponse } from '../types';

interface AnalysisResultProps {
  result: AnalysisResponse;
}

// Fix: Changed `JSX.Element` to `React.ReactElement` to resolve "Cannot find namespace 'JSX'" error.
const ResultSection: React.FC<{ title: string; icon: React.ReactElement; children: React.ReactNode }> = ({ title, icon, children }) => (
    <div className="bg-white p-6 rounded-lg border border-base-300 shadow-sm">
        <div className="flex items-center mb-3">
            <div className="flex-shrink-0 bg-brand-primary text-white rounded-full p-2 mr-4">
                {icon}
            </div>
            <h3 className="text-xl font-semibold text-text-primary">{title}</h3>
        </div>
        <p className="text-text-secondary whitespace-pre-wrap">{children}</p>
    </div>
);

const RootCauseIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const EvidenceIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

const FixIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.5A6.5 6.5 0 105.5 12a6.5 6.5 0 006.5 6.5z" />
    </svg>
);

export const AnalysisResult: React.FC<AnalysisResultProps> = ({ result }) => {
  return (
    <div className="space-y-6 animate-fade-in">
        <ResultSection title="Likely Root Cause(s)" icon={<RootCauseIcon />}>
            {result.rootCause}
        </ResultSection>
        <ResultSection title="Evidence / Reasoning" icon={<EvidenceIcon />}>
            {result.evidence}
        </ResultSection>
        <ResultSection title="Recommended Fix or Action Steps" icon={<FixIcon />}>
            {result.recommendation}
        </ResultSection>
    </div>
  );
};