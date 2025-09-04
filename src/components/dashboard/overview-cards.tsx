import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusBadge } from "@/components/ui/status-badge";
import { Package, Truck, AlertTriangle, TrendingUp } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: React.ComponentType<any>;
}

const MetricCard = ({ title, value, change, changeType, icon: Icon }: MetricCardProps) => (
  <Card className="bg-gradient-card border-border/50 hover:shadow-elegant transition-smooth">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
      <Icon className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold text-foreground">{value}</div>
      <p className={`text-xs ${
        changeType === 'positive' ? 'text-success' : 
        changeType === 'negative' ? 'text-destructive' : 
        'text-muted-foreground'
      }`}>
        {change}
      </p>
    </CardContent>
  </Card>
);

export const OverviewCards = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <MetricCard
        title="Total Inventory"
        value="2,847"
        change="+12% from last month"
        changeType="positive"
        icon={Package}
      />
      <MetricCard
        title="Active Shipments"
        value="156"
        change="+8% from last week"
        changeType="positive"
        icon={Truck}
      />
      <MetricCard
        title="Supply Chain Alerts"
        value="3"
        change="-40% from last week"
        changeType="positive"
        icon={AlertTriangle}
      />
      <MetricCard
        title="Demand Forecast"
        value="98.2%"
        change="+2.1% accuracy"
        changeType="positive"
        icon={TrendingUp}
      />
    </div>
  );
};