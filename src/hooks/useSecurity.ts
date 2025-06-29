import { useEffect } from 'react';
import { preventClickjacking } from '@/utils/security';

/**
 * Custom hook for implementing security measures
 */
export const useSecurity = () => {
  useEffect(() => {
    // Prevent clickjacking attacks
    preventClickjacking();
    
    // Disable right-click context menu in production
    if (process.env.NODE_ENV === 'production') {
      const handleContextMenu = (e: MouseEvent) => {
        e.preventDefault();
        return false;
      };
      
      document.addEventListener('contextmenu', handleContextMenu);
      
      return () => {
        document.removeEventListener('contextmenu', handleContextMenu);
      };
    }
  }, []);

  useEffect(() => {
    // Disable F12, Ctrl+Shift+I, Ctrl+U in production
    if (process.env.NODE_ENV === 'production') {
      const handleKeyDown = (e: KeyboardEvent) => {
        // Disable F12
        if (e.key === 'F12') {
          e.preventDefault();
          return false;
        }
        
        // Disable Ctrl+Shift+I (Developer Tools)
        if (e.ctrlKey && e.shiftKey && e.key === 'I') {
          e.preventDefault();
          return false;
        }
        
        // Disable Ctrl+U (View Source)
        if (e.ctrlKey && e.key === 'u') {
          e.preventDefault();
          return false;
        }
        
        // Disable Ctrl+Shift+C (Inspect Element)
        if (e.ctrlKey && e.shiftKey && e.key === 'C') {
          e.preventDefault();
          return false;
        }
      };
      
      document.addEventListener('keydown', handleKeyDown);
      
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, []);

  useEffect(() => {
    // Console warning for unauthorized access attempts
    if (process.env.NODE_ENV === 'production') {
      console.clear();
      console.log(
        '%cSTOP!',
        'color: red; font-size: 50px; font-weight: bold;'
      );
      console.log(
        '%cThis is a browser feature intended for developers. Unauthorized access attempts are logged and monitored.',
        'color: red; font-size: 16px;'
      );
    }
  }, []);
};