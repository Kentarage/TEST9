import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        // Sign up as a guest user if no session exists
        const { data: { session } } = await supabase.auth.getSession();
        
        if (!session) {
          const { error: signUpError } = await supabase.auth.signUp({
            email: `guest_${Date.now()}@temporary.com`,
            password: `guest${Date.now()}`,
          });
          
          if (signUpError) throw signUpError;
        }
      } catch (error) {
        console.error('Auth error:', error);
        toast.error('Failed to initialize session');
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return <>{children}</>;
}