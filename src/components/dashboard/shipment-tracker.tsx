import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusBadge } from "@/components/ui/status-badge";
import { Button } from "@/components/ui/button";
import { MapPin, Package, Clock, Thermometer } from "lucide-react";

interface Shipment {
  id: string;
  product: string;
  origin: string;
  destination: string;
  status: 'shipped' | 'in-transit' | 'delivered' | 'delayed';
  temperature: string;
  eta: string;
  blockchain_hash: string;
}

const mockShipments: Shipment[] = [
  {
    id: "SH-2024-001",
    product: "Automotive Parts",
    origin: "Shanghai, China",
    destination: "Detroit, USA",
    status: "in-transit",
    temperature: "22°C",
    eta: "2024-01-15",
    blockchain_hash: "0x7d8f9a2b..."
  },
  {
    id: "SH-2024-002",
    product: "Electronics Components",
    origin: "Mumbai, India",
    destination: "Frankfurt, Germany",
    status: "shipped",
    temperature: "18°C",
    eta: "2024-01-12",
    blockchain_hash: "0x3e5c8d1a..."
  },
  {
    id: "SH-2024-003",
    product: "Pharmaceutical Supplies",
    origin: "São Paulo, Brazil",
    destination: "Miami, USA",
    status: "delayed",
    temperature: "4°C",
    eta: "2024-01-18",
    blockchain_hash: "0x9f2a6c4e..."
  }
];

const getStatusVariant = (status: string) => {
  switch (status) {
    case 'shipped': return 'shipped';
    case 'in-transit': return 'active';
    case 'delivered': return 'active';
    case 'delayed': return 'warning';
    default: return 'default';
  }
};

export const ShipmentTracker = () => {
  return (
    <Card className="bg-gradient-card border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Package className="h-5 w-5" />
          Real-Time Shipment Tracking
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {mockShipments.map((shipment) => (
          <div key={shipment.id} className="border border-border/50 rounded-lg p-4 bg-card/50">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="font-semibold text-foreground">{shipment.id}</h4>
                <p className="text-sm text-muted-foreground">{shipment.product}</p>
              </div>
              <StatusBadge variant={getStatusVariant(shipment.status)}>
                {shipment.status.replace('-', ' ')}
              </StatusBadge>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">From:</span>
                <span className="text-foreground">{shipment.origin}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">To:</span>
                <span className="text-foreground">{shipment.destination}</span>
              </div>
              <div className="flex items-center gap-2">
                <Thermometer className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Temp:</span>
                <span className="text-foreground">{shipment.temperature}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">ETA:</span>
                <span className="text-foreground">{shipment.eta}</span>
              </div>
            </div>
            
            <div className="mt-3 pt-3 border-t border-border/50 flex items-center justify-between">
              <div className="text-xs">
                <span className="text-muted-foreground">Blockchain: </span>
                <code className="text-accent font-mono">{shipment.blockchain_hash}</code>
              </div>
              <Button variant="outline" size="sm">
                View History
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};