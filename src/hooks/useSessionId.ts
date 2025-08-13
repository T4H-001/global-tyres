import { useState, useEffect } from 'react';

export const useSessionId = () => {
  const [sessionId, setSessionId] = useState<string>('');

  useEffect(() => {
    // Check if we already have a session ID in localStorage
    let existingSessionId = localStorage.getItem('tlrs_session_id');
    
    if (!existingSessionId) {
      // Generate a new session ID
      existingSessionId = `session_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
      localStorage.setItem('tlrs_session_id', existingSessionId);
    }
    
    setSessionId(existingSessionId);
  }, []);

  return sessionId;
};