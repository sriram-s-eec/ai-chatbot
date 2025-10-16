
import React from 'react';

const InfoIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const InitialState: React.FC = () => {
    return (
        <div className="text-center p-8 bg-base-200 rounded-lg shadow-md border-2 border-dashed border-base-300">
            <InfoIcon className="h-12 w-12 text-brand-primary mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-text-primary">Ready for Analysis</h2>
            <p className="mt-2 text-text-secondary max-w-2xl mx-auto">
                Enter details about the machine failure in the text box above and click "Analyze Issue" to get an AI-powered root cause analysis.
            </p>
            <div className="mt-6 text-left max-w-md mx-auto bg-base-100 p-4 rounded-lg">
                <h4 className="font-semibold text-sm text-text-primary">Example Input:</h4>
                <p className="text-xs text-text-secondary mt-1 font-mono">
                    "Machine A stopped during cooling cycle; PLC shows error code 403; vibration sensor spiked before shutdown."
                </p>
            </div>
        </div>
    );
}
