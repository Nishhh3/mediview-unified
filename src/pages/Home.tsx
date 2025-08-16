import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Activity, 
  Shield, 
  Users, 
  BarChart3, 
  FileText, 
  Heart,
  Phone,
  Mail,
  MapPin,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-secondary/10">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Unified Digital
              <span className="medical-gradient bg-clip-text text-transparent"> Health Records</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Secure, comprehensive, and accessible healthcare management for patients, doctors, and government officials. 
              Your health data, unified and protected.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button variant="medical" size="lg" className="min-w-40">
                  <Users className="w-5 h-5 mr-2" />
                  Get Started
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg" className="min-w-40">
                  <Activity className="w-5 h-5 mr-2" />
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Healthcare Management
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Designed for three key user types with role-based access and specialized features
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Patient Features */}
            <Card className="healthcare-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl medical-gradient flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">For Patients</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Complete health timeline
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Upload medical reports
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Voice health updates
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Secure data access
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Doctor Features */}
            <Card className="healthcare-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl healing-gradient flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">For Doctors</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Patient search & access
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Voice prescriptions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Auto-suggestions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Real-time notifications
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Government Features */}
            <Card className="healthcare-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-warning to-orange-500 flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">For Government</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Health data analytics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Disease trend monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Data export tools
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Regional statistics
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Security & Trust */}
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">HIPAA Compliant</h3>
              <p className="text-sm text-muted-foreground">Full compliance with healthcare privacy regulations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent mx-auto mb-4 flex items-center justify-center">
                <Activity className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Real-time Sync</h3>
              <p className="text-sm text-muted-foreground">Instant updates across all authorized users</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent mx-auto mb-4 flex items-center justify-center">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Digital Records</h3>
              <p className="text-sm text-muted-foreground">Complete digitization of medical documents</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent mx-auto mb-4 flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Analytics</h3>
              <p className="text-sm text-muted-foreground">Powerful insights for better healthcare decisions</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-gradient-to-r from-accent/30 to-secondary/20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Revolutionizing Healthcare Data Management
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our unified digital health record system bridges the gap between patients, healthcare providers, 
              and government health agencies. With role-based access control, comprehensive data visualization, 
              and cutting-edge security measures, we're creating a healthier future for everyone.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To democratize access to health information while maintaining the highest standards 
                  of privacy and security. We believe that connected health data leads to better outcomes 
                  for individuals and communities.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Why Choose Us</h3>
                <p className="text-muted-foreground">
                  Built by healthcare professionals and technology experts, our platform combines 
                  clinical expertise with modern technology to deliver a seamless, secure, and 
                  comprehensive health management experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have questions about our digital health platform? We're here to help.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl medical-gradient mx-auto mb-3 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl healing-gradient mx-auto mb-3 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <p className="text-muted-foreground">support@healthrecord.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-warning to-orange-500 mx-auto mb-3 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Address</h3>
                <p className="text-muted-foreground">123 Health St, Medical City</p>
              </div>
            </div>

            <Button variant="medical" size="lg">
              <Mail className="w-5 h-5 mr-2" />
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border bg-accent/20">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 rounded-lg medical-gradient flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-foreground">HealthRecord</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 HealthRecord Digital Platform. All rights reserved. 
            <br className="sm:hidden" />
            Secure • Compliant • Trusted
          </p>
        </div>
      </footer>
    </div>
  );
}