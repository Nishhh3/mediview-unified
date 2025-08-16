import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Search, 
  Users, 
  Mic, 
  FileText, 
  Bell,
  Calendar,
  Stethoscope,
  Plus,
  Clock,
  UserCheck
} from "lucide-react";

interface DoctorDashboardProps {
  userName: string;
}

export default function DoctorDashboard({ userName }: DoctorDashboardProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const todayStats = [
    { label: "Patients Today", value: "12", icon: Users, color: "medical-gradient" },
    { label: "Pending Reviews", value: "5", icon: FileText, color: "healing-gradient" },
    { label: "Notifications", value: "8", icon: Bell, color: "bg-warning" },
    { label: "Next Appointment", value: "2:30 PM", icon: Clock, color: "bg-secondary" }
  ];

  const recentPatients = [
    {
      id: "P-001",
      name: "John Smith",
      age: 34,
      lastVisit: "Today, 10:30 AM",
      condition: "Hypertension",
      status: "Active",
      avatar: ""
    },
    {
      id: "P-002", 
      name: "Sarah Johnson",
      age: 28,
      lastVisit: "Today, 11:15 AM",
      condition: "Diabetes Type 2",
      status: "Follow-up",
      avatar: ""
    },
    {
      id: "P-003",
      name: "Mike Wilson",
      age: 45,
      lastVisit: "Yesterday",
      condition: "Arthritis",
      status: "Treatment",
      avatar: ""
    },
    {
      id: "P-004",
      name: "Emma Davis",
      age: 31,
      lastVisit: "2 days ago",
      condition: "Migraine",
      status: "Monitoring",
      avatar: ""
    }
  ];

  const notifications = [
    {
      type: "Lab Result",
      patient: "John Smith",
      message: "Blood work results available for review",
      time: "10 min ago",
      priority: "high"
    },
    {
      type: "Prescription",
      patient: "Sarah Johnson",
      message: "Prescription refill request pending",
      time: "25 min ago",
      priority: "medium"
    },
    {
      type: "Appointment",
      patient: "Mike Wilson",
      message: "Requested appointment rescheduling",
      time: "1 hour ago",
      priority: "low"
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Good morning, Dr. {userName}!
          </h1>
          <p className="text-muted-foreground">Here's your medical practice overview</p>
        </div>
        <div className="flex gap-3 mt-4 lg:mt-0">
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule
          </Button>
          <Button variant="medical">
            <Plus className="w-4 h-4 mr-2" />
            New Prescription
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {todayStats.map((stat, index) => (
          <Card key={index} className="healthcare-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                </div>
                <div className={`w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Patient Search & Access */}
        <div className="lg:col-span-2 space-y-6">
          {/* Search Bar */}
          <Card className="healthcare-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Search className="w-5 h-5 mr-2" />
                Patient Search
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search by name, ID, or condition..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button variant="medical">Search</Button>
              </div>
              <div className="mt-4 flex gap-2 flex-wrap">
                <Badge variant="outline" className="cursor-pointer hover:bg-accent">Recent Patients</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-accent">High Priority</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-accent">Lab Results Pending</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Recent Patients */}
          <Card className="healthcare-card">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Recent Patients
                </span>
                <Button variant="outline" size="sm">View All</Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentPatients.map((patient) => (
                  <div key={patient.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-accent/50 cursor-pointer transition-colors">
                    <Avatar>
                      <AvatarImage src={patient.avatar} alt={patient.name} />
                      <AvatarFallback className="medical-gradient text-white">
                        {patient.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-foreground">{patient.name}</h3>
                        <span className="text-sm text-muted-foreground">{patient.lastVisit}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {patient.id} • Age {patient.age} • {patient.condition}
                      </p>
                    </div>
                    <Badge variant={
                      patient.status === 'Active' ? 'default' : 
                      patient.status === 'Follow-up' ? 'secondary' : 'outline'
                    }>
                      {patient.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Voice Prescription */}
          <Card className="healthcare-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mic className="w-5 h-5 mr-2" />
                Voice Prescription Entry
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full healing-gradient mx-auto mb-4 flex items-center justify-center">
                  <Mic className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Quick Voice Entry</h3>
                <p className="text-muted-foreground mb-4">
                  Dictate prescriptions with auto-suggestions and verification
                </p>
                <div className="flex gap-3 justify-center">
                  <Button variant="healing">
                    <Mic className="w-4 h-4 mr-2" />
                    Start Recording
                  </Button>
                  <Button variant="outline">
                    <FileText className="w-4 h-4 mr-2" />
                    Manual Entry
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Notifications Sidebar */}
        <div className="space-y-6">
          <Card className="healthcare-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="w-5 h-5 mr-2" />
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notifications.map((notification, index) => (
                  <div key={index} className={`p-3 rounded-lg border-l-4 ${
                    notification.priority === 'high' ? 'border-l-destructive bg-destructive/5' :
                    notification.priority === 'medium' ? 'border-l-warning bg-warning/5' :
                    'border-l-primary bg-primary/5'
                  }`}>
                    <div className="flex justify-between items-start mb-1">
                      <Badge variant="outline" className="text-xs">{notification.type}</Badge>
                      <span className="text-xs text-muted-foreground">{notification.time}</span>
                    </div>
                    <p className="text-sm font-medium text-foreground">{notification.patient}</p>
                    <p className="text-xs text-muted-foreground">{notification.message}</p>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Notifications
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="healthcare-card">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Stethoscope className="w-4 h-4 mr-2" />
                New Consultation
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="w-4 h-4 mr-2" />
                Generate Report
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <UserCheck className="w-4 h-4 mr-2" />
                Patient Referral
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Follow-up
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}