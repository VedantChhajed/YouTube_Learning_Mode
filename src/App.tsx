import React, { useState } from 'react';
import Layout from './components/Layout';
import VideoPage from './pages/VideoPage';
import { LearningModeProvider } from './contexts/LearningModeContext';

function App() {
  return (
    <LearningModeProvider>
      <Layout>
        <VideoPage />
      </Layout>
    </LearningModeProvider>
  );
}

export default App;