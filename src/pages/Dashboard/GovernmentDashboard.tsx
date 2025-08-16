import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  MapPin,
  Download,
  AlertTriangle,
  Activity,
  FileText,
  Globe,
  Shield
} from "lucide-react";

interface GovernmentDashboardProps {
  userName: string;
}

export default function GovernmentDashboard({ userName }: GovernmentDashboardProps) {
  const keyMetrics = [
    { 
      label: "Total Registered Citizens", 
      value: "2.4M", 
      change: "+5.2%", 
      icon: Users, 
      color: "medical-gradient" 
    },
    { 
      label: "Active Healthcare Providers", 
      value: "12,847", 
      change: "+2.1%", 
      icon: Activity, 
      color: "healing-gradient" 
    },
    { 
      label: "Health Records Processed", 
      value: "45.2K", 
      change: "+12.3%", 
      icon: FileText, 
      color: "bg-warning" 
    },
    { 
      label: "Regional Health Centers", 
      value: "1,234", 
      change: "+0.8%", 
      icon: MapPin, 
      color: "bg-secondary" 
    }
  ];

  const diseaseAlerts = [
    {
      disease: "Influenza",
      region: "Northern District",
      cases: 234,
      trend: "up",
      priority: "medium",
      lastUpdated: "2 hours ago"
    },
    {
      disease: "COVID-19",
      region: "Central Region",
      cases: 12,
      trend: "down",
      priority: "low",
      lastUpdated: "1 hour ago"
    },
    {
      disease: "Dengue Fever",
      region: "Coastal Areas",
      cases: 67,
      trend: "up",
      priority: "high",
      lastUpdated: "30 min ago"
    }
  ];

  const regionalStats = [
    { region: "Northern District", population: "890K", healthScore: 85, facilities: 234 },
    { region: "Central Region", population: "1.2M", healthScore: 92, facilities: 345 },
    { region: "Southern Province", population: "310K", healthScore: 78, facilities: 156 },
    { region: "Coastal Areas", population: "280K", healthScore: 88, facilities: 123 }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Government Health Analytics
          </h1>
          <p className="text-muted-foreground">
            Welcome, {userName} • Department of Health Statistics
          </p>
        </div>
        <div className="flex gap-3 mt-4 lg:mt-0">
          <Button variant="outline">
            <Shield className="w-4 h-4 mr-2" />
            Security Report
          </Button>
          <Button variant="medical">
            <Download className="w-4 h-4 mr-2" />
            Export Data
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {keyMetrics.map((metric, index) => (
          <Card key={index} className="healthcare-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                  <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                  <p className="text-sm text-success flex items-center mt-1">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {metric.change} this month
                  </p>
                </div>
                <div className={`w-10 h-10 rounded-xl ${metric.color} flex items-center justify-center`}>
                  <metric.icon className="w-5 h-5 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Disease Trend Monitoring */}
        <div className="lg:col-span-2 space-y-6">
          {/* Disease Alerts */}
          <Card className="healthcare-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Disease Trend Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {diseaseAlerts.map((alert, index) => (
                  <div key={index} className={`p-4 rounded-lg border-l-4 ${
                    alert.priority === 'high' ? 'border-l-destructive bg-destructive/5' :
                    alert.priority === 'medium' ? 'border-l-warning bg-warning/5' :
                    'border-l-success bg-success/5'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-foreground">{alert.disease}</h3>
                      <div className="flex items-center space-x-2">
                        <Badge variant={
                          alert.priority === 'high' ? 'destructive' :
                          alert.priority === 'medium' ? 'default' : 'secondary'
                        }>
                          {alert.priority.toUpperCase()}
                        </Badge>
                        <span className={`flex items-center text-sm ${
                          alert.trend === 'up' ? 'text-destructive' : 'text-success'
                        }`}>
                          <TrendingUp className={`w-3 h-3 mr-1 ${
                            alert.trend === 'down' ? 'rotate-180' : ''
                          }`} />
                          {alert.cases} cases
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {alert.region}
                      </span>
                      <span>Updated {alert.lastUpdated}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Regional Statistics */}
          <Card className="healthcare-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="w-5 h-5 mr-2" />
                Regional Health Statistics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {regionalStats.map((region, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg hover:bg-accent/30 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-foreground">{region.region}</h3>
                      <Badge variant="outline">{region.facilities} facilities</Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Population</p>
                        <p className="font-medium text-foreground">{region.population}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Health Score</p>
                        <p className="font-medium text-foreground flex items-center">
                          {region.healthScore}/100
                          <span className={`ml-2 w-2 h-2 rounded-full ${
                            region.healthScore >= 85 ? 'bg-success' :
                            region.healthScore >= 70 ? 'bg-warning' : 'bg-destructive'
                          }`}></span>
                        </p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Status</p>
                        <p className={`font-medium ${
                          region.healthScore >= 85 ? 'text-success' :
                          region.healthScore >= 70 ? 'text-warning' : 'text-destructive'
                        }`}>
                          {region.healthScore >= 85 ? 'Excellent' :
                           region.healthScore >= 70 ? 'Good' : 'Needs Attention'}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Analytics & Export */}
        <div className="space-y-6">
          {/* Data Visualization */}
          <Card className="healthcare-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="w-5 h-5 mr-2" />
                Data Visualization
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="aspect-square bg-accent rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="w-12 h-12 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Interactive charts</p>
                    <p className="text-xs text-muted-foreground">showing health trends</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-center p-2 bg-primary/10 rounded">
                    <div className="font-medium text-primary">↗ 15%</div>
                    <div className="text-muted-foreground">Vaccination Rate</div>
                  </div>
                  <div className="text-center p-2 bg-success/10 rounded">
                    <div className="font-medium text-success">↘ 8%</div>
                    <div className="text-muted-foreground">Hospital Admissions</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Export Options */}
          <Card className="healthcare-card">
            <CardHeader>
              <CardTitle>Data Export</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <FileText className="w-4 h-4 mr-2" />
                Health Statistics Report
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <BarChart3 className="w-4 h-4 mr-2" />
                Disease Trend Analysis
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <MapPin className="w-4 h-4 mr-2" />
                Regional Health Data
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Globe className="w-4 h-4 mr-2" />
                Public Health Metrics
              </Button>
            </CardContent>
          </Card>

          {/* System Status */}
          <Card className="healthcare-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                System Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Data Security</span>
                  <Badge variant="secondary" className="bg-success/20 text-success">Online</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Last Backup</span>
                  <span className="text-sm text-foreground">2 hours ago</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Access Level</span>
                  <Badge variant="outline">Read-Only</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Compliance</span>
                  <Badge variant="secondary" className="bg-success/20 text-success">HIPAA Certified</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}