import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Sidebar } from "@/components/layout/Sidebar";
import PatientDashboard from "./PatientDashboard";
import DoctorDashboard from "./DoctorDashboard";
import GovernmentDashboard from "./GovernmentDashboard";

export default function Dashboard() {
  const [userRole, setUserRole] = useState<string | null>(null);
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    const role = localStorage.getItem('userRole');
    const name = localStorage.getItem('userName');
    
    setUserRole(role);
    setUserName(name || '');
  }, []);

  // Redirect to login if not authenticated
  if (!userRole) {
    return <Navigate to="/login" replace />;
  }

  const renderDashboard = () => {
    switch (userRole) {
      case 'patient':
        return <PatientDashboard userName={userName} />;
      case 'doctor':
        return <DoctorDashboard userName={userName} />;
      case 'government':
        return <GovernmentDashboard userName={userName} />;
      default:
        return <Navigate to="/login" replace />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-background via-accent/10 to-secondary/5">
      <Sidebar userRole={userRole as 'patient' | 'doctor' | 'government'} />
      <main className="flex-1 ml-64 transition-all duration-300">
        {renderDashboard()}
      </main>
    </div>
  );
}