
import React from 'react';

const WrenchIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.608.63a4.5 4.5 0 00-2.288 2.288c-.53.738-.716 1.59-.63 2.608a5.25 5.25 0 01-6.756 5.472.75.75 0 01-.313-1.248l3.319-3.32c-.063-.475-.276-.934-.641-1.299-.365-.365-.824-.578-1.3-.64L4.51 21.49a.75.75 0 01-1.248-.313A5.25 5.25 0 018.734 15c1.018.086 1.87-.1 2.608-.63a4.5 4.5 0 002.288-2.288c.53-.738.716-1.59.63-2.608z" clipRule="evenodd" />
    </svg>
);


export const Header: React.FC = () => {
  return (
    <header className="bg-brand-primary shadow-md">
      <div className="container mx-auto px-4 md:px-8 py-4 flex items-center justify-center text-center">
        <WrenchIcon className="h-10 w-10 text-brand-secondary mr-4" />
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            AI Root Cause Analysis Bot
          </h1>
          <p className="text-sm text-gray-300 mt-1">
            Your assistant for diagnosing factory equipment issues.
          </p>
        </div>
      </div>
    </header>
  );
};
