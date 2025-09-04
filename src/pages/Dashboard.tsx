import { OverviewCards } from "@/components/dashboard/overview-cards";
import { ShipmentTracker } from "@/components/dashboard/shipment-tracker";
import { SupplyChainAnalytics } from "@/components/dashboard/supply-chain-analytics";
import Map from "@/components/ui/map";
import { Button } from "@/components/ui/button";
import { Globe, Bell, User, Settings } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">SupplyChain Pro</h1>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <User className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Supply Chain Overview</h2>
          <p className="text-muted-foreground">
            Monitor your global supply chain operations with real-time insights and analytics.
          </p>
        </div>

        {/* Overview Cards */}
        <OverviewCards />

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Map Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gradient-card border border-border/50 rounded-lg p-6 shadow-elegant">
              <h3 className="text-xl font-semibold text-foreground mb-4">Global Supply Chain Map</h3>
              <div className="h-96">
                <Map className="w-full h-full" />
              </div>
            </div>
            
            {/* Analytics */}
            <SupplyChainAnalytics />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <ShipmentTracker />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;