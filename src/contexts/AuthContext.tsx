import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signUp: (email: string, password: string, fullName: string, phoneNumber: string) => Promise<{ error: any }>;
  signIn: (emailOrPhone: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Helper function to detect if input is email or phone
const isEmail = (input: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(input);
};

// Helper function to normalize phone number
const normalizePhoneNumber = (phone: string): string => {
  // Remove all non-digits
  const digits = phone.replace(/\D/g, '');
  
  // If it starts with 1 and has 11 digits, keep as is
  if (digits.length === 11 && digits.startsWith('1')) {
    return digits;
  }
  
  // If it has 10 digits, add country code 1
  if (digits.length === 10) {
    return '1' + digits;
  }
  
  // Return as is for other formats
  return digits;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signUp = async (email: string, password: string, fullName: string, phoneNumber: string) => {
    const redirectUrl = `${window.location.origin}/`;
    
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: redirectUrl,
        data: {
          full_name: fullName,
          phone_number: phoneNumber
        }
      }
    });
    
    return { error };
  };

  const signIn = async (emailOrPhone: string, password: string) => {
    let email = emailOrPhone;
    
    // If input is not an email, treat it as phone number and look up email
    if (!isEmail(emailOrPhone)) {
      const normalizedPhone = normalizePhoneNumber(emailOrPhone);
      
      // Look up email by phone number in users table
      const { data, error } = await supabase
        .from('users')
        .select('email')
        .eq('phone_number', normalizedPhone)
        .single();
      
      if (error || !data) {
        return { error: { message: 'Phone number not found. Please check your phone number or register first.' } };
      }
      
      email = data.email;
    }
    
    // Authenticate with email and password
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    
    return { error };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  const value = {
    user,
    session,
    loading,
    signUp,
    signIn,
    signOut
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
