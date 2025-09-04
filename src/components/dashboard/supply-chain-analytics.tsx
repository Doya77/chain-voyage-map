import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusBadge } from "@/components/ui/status-badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line } from 'recharts';
import { TrendingUp, AlertTriangle, Factory } from "lucide-react";

const inventoryData = [
  { name: 'Jan', value: 2400 },
  { name: 'Feb', value: 2210 },
  { name: 'Mar', value: 2290 },
  { name: 'Apr', value: 2000 },
  { name: 'May', value: 2181 },
  { name: 'Jun', value: 2500 },
];

const demandData = [
  { name: 'Week 1', predicted: 2400, actual: 2200 },
  { name: 'Week 2', predicted: 2210, actual: 2300 },
  { name: 'Week 3', predicted: 2290, actual: 2250 },
  { name: 'Week 4', predicted: 2000, actual: 1950 },
];

const riskFactors = [
  { location: "Shanghai Hub", risk: "low", factor: "Weather delay potential" },
  { location: "Mumbai Port", risk: "medium", factor: "High demand concentration" },
  { location: "Frankfurt Center", risk: "low", factor: "Optimal capacity" },
  { location: "São Paulo Facility", risk: "high", factor: "Single supplier dependency" },
];

const getRiskVariant = (risk: string) => {
  switch (risk) {
    case 'low': return 'active';
    case 'medium': return 'warning';
    case 'high': return 'destructive';
    default: return 'default';
  }
};

export const SupplyChainAnalytics = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Inventory Levels */}
      <Card className="bg-gradient-card border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart className="h-5 w-5" />
            Inventory Levels
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={inventoryData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Demand Prediction */}
      <Card className="bg-gradient-card border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Demand Prediction vs Actual
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={demandData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Line 
                type="monotone" 
                dataKey="predicted" 
                stroke="hsl(var(--primary))" 
                strokeWidth={2}
                dot={{ fill: "hsl(var(--primary))" }}
              />
              <Line 
                type="monotone" 
                dataKey="actual" 
                stroke="hsl(var(--accent))" 
                strokeWidth={2}
                dot={{ fill: "hsl(var(--accent))" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Risk Analysis */}
      <Card className="bg-gradient-card border-border/50 md:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Supply Chain Risk Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {riskFactors.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-border/50 rounded-lg bg-card/50">
                <div className="flex items-center gap-3">
                  <Factory className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-foreground">{item.location}</p>
                    <p className="text-sm text-muted-foreground">{item.factor}</p>
                  </div>
                </div>
                <StatusBadge variant={getRiskVariant(item.risk)}>
                  {item.risk} risk
                </StatusBadge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};