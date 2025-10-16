
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { InputForm } from './components/InputForm';
import { AnalysisResult } from './components/AnalysisResult';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage';
import { analyzeIssue } from './services/geminiService';
import type { AnalysisResponse } from './types';
import { InitialState } from './components/InitialState';

const App: React.FC = () => {
  const [issueDescription, setIssueDescription] = useState<string>('');
  const [analysisResult, setAnalysisResult] = useState<AnalysisResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = useCallback(async () => {
    if (!issueDescription.trim()) {
      setError('Please provide a description of the issue.');
      return;
    }
    
    setIsLoading(true);
    setError(null);
    setAnalysisResult(null);

    try {
      const result = await analyzeIssue(issueDescription);
      setAnalysisResult(result);
    } catch (err) {
      console.error('Analysis failed:', err);
      setError('Failed to analyze the issue. The AI model may be overloaded. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [issueDescription]);

  return (
    <div className="min-h-screen font-sans text-text-primary">
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <InputForm
            value={issueDescription}
            onChange={(e) => setIssueDescription(e.target.value)}
            onSubmit={handleAnalyze}
            isLoading={isLoading}
          />
          <div className="mt-8">
            {isLoading && <LoadingSpinner />}
            {error && <ErrorMessage message={error} />}
            {analysisResult && <AnalysisResult result={analysisResult} />}
            {!isLoading && !error && !analysisResult && <InitialState />}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
