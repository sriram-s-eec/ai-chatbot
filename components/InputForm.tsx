
import React from 'react';

interface InputFormProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

export const InputForm: React.FC<InputFormProps> = ({ value, onChange, onSubmit, isLoading }) => {
  return (
    <div className="bg-base-200 p-6 rounded-lg shadow-lg">
      <label htmlFor="issue-description" className="block text-lg font-semibold text-text-primary mb-2">
        Describe the Issue
      </label>
      <p className="text-sm text-text-secondary mb-4">
        Enter maintenance logs, PLC error codes, sensor data, or a description of the problem.
      </p>
      <textarea
        id="issue-description"
        className="w-full h-40 p-3 border border-base-300 rounded-md focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition duration-200 ease-in-out resize-y"
        placeholder="e.g., Machine A stopped during cooling cycle; PLC shows error code 403; vibration sensor spiked before shutdown."
        value={value}
        onChange={onChange}
        disabled={isLoading}
      />
      <div className="mt-4 flex justify-end">
        <button
          onClick={onSubmit}
          disabled={isLoading || !value.trim()}
          className="px-6 py-3 bg-brand-primary text-white font-bold rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-300 flex items-center"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Analyzing...
            </>
          ) : (
            'Analyze Issue'
          )}
        </button>
      </div>
    </div>
  );
};
