import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Shield, TrendingUp } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple demo login - in production, this would authenticate with a backend
    if (email && password) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
        {/* Hero Section */}
        <div className="text-center lg:text-left space-y-6">
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
            
            <div className="p-3 bg-primary-foreground/10 rounded-xl">
              <Globe className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold text-primary-foreground">zyntrack</h1>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight">
            Global Supply Chain
            <br />
            <span className="text-accent-foreground">Intelligence Platform</span>
          </h2>
          
          <p className="text-xl text-primary-foreground/80 max-w-2xl">
            Track, monitor, and optimize your entire supply chain with real-time visibility, 
            and AI-powered predictive analytics.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary-foreground/10 rounded-lg">
                <Globe className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-foreground">Global Tracking</h3>
                <p className="text-sm text-primary-foreground/70">Real-time visibility</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary-foreground/10 rounded-lg">
                <Shield className="h-5 w-5 text-primary-foreground" />
              </div>
  
            </div>
            
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary-foreground/10 rounded-lg">
                <TrendingUp className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-foreground">AI Analytics</h3>
                <p className="text-sm text-primary-foreground/70">Predictive insights</p>
              </div>
            </div>
          </div>
        </div>

        {/* Login Form */}
        <div className="flex justify-center lg:justify-end">
          <Card className="w-full max-w-md bg-card/95 backdrop-blur-sm border-border/50 shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Welcome Back</CardTitle>
              <p className="text-center text-muted-foreground">
                Sign in to access your supply chain dashboard
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="admin@supplychain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Sign In
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  Demo: Use any email and password to continue
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
