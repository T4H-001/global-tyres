import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

interface Props {
  to?: string;
}

export default function RedirectIfAuthed({ to = "/tyres" }: Props) {
  const [checking, setChecking] = useState(true);
  const [isAuthed, setIsAuthed] = useState<boolean | null>(null);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthed(!!session);
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsAuthed(!!session);
      setChecking(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (checking) return null;

  if (isAuthed) {
    return <Navigate to={to} replace />;
  }

  return <Outlet />;
}
