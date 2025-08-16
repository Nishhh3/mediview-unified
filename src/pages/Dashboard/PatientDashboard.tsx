import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  Activity, 
  Heart, 
  Upload, 
  Mic, 
  Calendar,
  FileText,
  Pill,
  TestTube,
  AlertCircle,
  TrendingUp
} from "lucide-react";

interface PatientDashboardProps {
  userName: string;
}

export default function PatientDashboard({ userName }: PatientDashboardProps) {
  const healthTimeline = [
    {
      date: "2024-01-15",
      type: "Prescription",
      title: "Blood Pressure Medication",
      doctor: "Dr. Sarah Wilson",
      description: "Prescribed Lisinopril 10mg daily for hypertension management",
      icon: Pill,
      color: "bg-secondary"
    },
    {
      date: "2024-01-10",
      type: "Lab Result",
      title: "Blood Work - Complete Panel",
      doctor: "Dr. Mike Johnson",
      description: "Cholesterol levels improved, continue current diet plan",
      icon: TestTube,
      color: "bg-success"
    },
    {
      date: "2024-01-05",
      type: "Diagnosis",
      title: "Hypertension - Stage 1",
      doctor: "Dr. Sarah Wilson",
      description: "Mild high blood pressure, lifestyle changes recommended",
      icon: AlertCircle,
      color: "bg-warning"
    },
    {
      date: "2024-01-01",
      type: "Check-up",
      title: "Annual Physical Examination",
      doctor: "Dr. Sarah Wilson",
      description: "Overall health good, blood pressure slightly elevated",
      icon: Heart,
      color: "bg-primary"
    }
  ];

  const vitals = [
    { label: "Blood Pressure", value: "128/82", unit: "mmHg", trend: "down" },
    { label: "Heart Rate", value: "72", unit: "bpm", trend: "stable" },
    { label: "Weight", value: "165", unit: "lbs", trend: "down" },
    { label: "BMI", value: "24.1", unit: "", trend: "stable" }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, {userName}!
          </h1>
          <p className="text-muted-foreground">Here's your health overview</p>
        </div>
        <div className="flex gap-3 mt-4 lg:mt-0">
          <Button variant="outline">
            <Upload className="w-4 h-4 mr-2" />
            Upload Report
          </Button>
          <Button variant="medical">
            <Mic className="w-4 h-4 mr-2" />
            Voice Update
          </Button>
        </div>
      </div>

      {/* Profile Card */}
      <Card className="healthcare-card">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <Avatar className="w-20 h-20">
              <AvatarImage src="/placeholder-avatar.jpg" alt={userName} />
              <AvatarFallback className="medical-gradient text-white text-lg">
                {userName.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-foreground">{userName}</h2>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="secondary">Age: 34</Badge>
                <Badge variant="secondary">Male</Badge>
                <Badge variant="secondary">Patient ID: P-2024-001</Badge>
              </div>
              <p className="text-muted-foreground mt-2">
                Member since January 2024 • Last visit: Jan 15, 2024
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Health Score</div>
              <div className="text-3xl font-bold medical-gradient bg-clip-text text-transparent">85</div>
              <div className="text-xs text-success flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                +5 this month
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {vitals.map((vital, index) => (
          <Card key={index} className="healthcare-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{vital.label}</p>
                  <p className="text-2xl font-bold text-foreground">
                    {vital.value}
                    <span className="text-sm text-muted-foreground ml-1">{vital.unit}</span>
                  </p>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  vital.trend === 'down' ? 'bg-success/20' : 
                  vital.trend === 'up' ? 'bg-warning/20' : 'bg-accent'
                }`}>
                  <Activity className={`w-4 h-4 ${
                    vital.trend === 'down' ? 'text-success' : 
                    vital.trend === 'up' ? 'text-warning' : 'text-primary'
                  }`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Health Timeline */}
      <Card className="healthcare-card">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            Health Timeline
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {healthTimeline.map((event, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className={`w-10 h-10 rounded-full ${event.color} flex items-center justify-center flex-shrink-0`}>
                  <event.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-foreground">{event.title}</h3>
                    <span className="text-sm text-muted-foreground">{event.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">by {event.doctor}</p>
                  <p className="text-sm text-foreground mt-1">{event.description}</p>
                  <Badge variant="outline" className="mt-2">{event.type}</Badge>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Button variant="outline">
              <FileText className="w-4 h-4 mr-2" />
              View Complete History
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="healthcare-card cursor-pointer hover:scale-105 transition-transform">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 rounded-xl medical-gradient mx-auto mb-4 flex items-center justify-center">
              <Upload className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Upload Medical Report</h3>
            <p className="text-sm text-muted-foreground">Add new lab results, prescriptions, or medical documents</p>
          </CardContent>
        </Card>

        <Card className="healthcare-card cursor-pointer hover:scale-105 transition-transform">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 rounded-xl healing-gradient mx-auto mb-4 flex items-center justify-center">
              <Mic className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Voice Health Update</h3>
            <p className="text-sm text-muted-foreground">Record symptoms, medication updates, or health notes</p>
          </CardContent>
        </Card>

        <Card className="healthcare-card cursor-pointer hover:scale-105 transition-transform">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-warning to-orange-500 mx-auto mb-4 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Schedule Appointment</h3>
            <p className="text-sm text-muted-foreground">Book your next check-up or consultation</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}