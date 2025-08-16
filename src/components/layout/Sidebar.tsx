import { useState } from "react";
import { 
  Home, 
  User, 
  Settings, 
  LogOut, 
  Menu,
  Activity,
  FileText,
  Users,
  BarChart3,
  Stethoscope
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  userRole: 'patient' | 'doctor' | 'government' | null;
}

export function Sidebar({ userRole }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session (implement your logout logic here)
    localStorage.removeItem('userRole');
    localStorage.removeItem('userName');
    navigate('/');
  };

  const getNavItems = () => {
    const baseItems = [
      { to: `/dashboard`, icon: Home, label: "Dashboard" },
      { to: `/profile`, icon: User, label: "Profile" },
    ];

    const roleItems = {
      patient: [
        { to: `/health-timeline`, icon: Activity, label: "Health Timeline" },
        { to: `/reports`, icon: FileText, label: "My Reports" },
      ],
      doctor: [
        { to: `/patients`, icon: Users, label: "Patients" },
        { to: `/prescriptions`, icon: Stethoscope, label: "Prescriptions" },
      ],
      government: [
        { to: `/analytics`, icon: BarChart3, label: "Analytics" },
        { to: `/data-export`, icon: FileText, label: "Data Export" },
      ]
    };

    return [...baseItems, ...(userRole ? roleItems[userRole] : [])];
  };

  const navItems = getNavItems();

  return (
    <div className={cn(
      "fixed left-0 top-0 h-full bg-white border-r border-border transition-all duration-300 z-40",
      isCollapsed ? "w-16" : "w-64"
    )}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between">
            {!isCollapsed && (
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg medical-gradient flex items-center justify-center">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold text-foreground">HealthRecord</span>
              </div>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-2"
            >
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200",
                    isActive
                      ? "medical-gradient text-white shadow-md"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )
                }
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {!isCollapsed && <span className="font-medium">{item.label}</span>}
              </NavLink>
            ))}
          </div>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-border">
          <div className="space-y-2">
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200",
                  isActive
                    ? "medical-gradient text-white shadow-md"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                )
              }
            >
              <Settings className="w-5 h-5 flex-shrink-0" />
              {!isCollapsed && <span className="font-medium">Settings</span>}
            </NavLink>
            
            <Button
              variant="ghost"
              onClick={handleLogout}
              className={cn(
                "w-full justify-start text-muted-foreground hover:text-foreground",
                isCollapsed && "px-3"
              )}
            >
              <LogOut className="w-5 h-5 flex-shrink-0" />
              {!isCollapsed && <span className="ml-3 font-medium">Logout</span>}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}