import { ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

type DashboardCardProps = {
  title: string;
  subtitle?: string;
  value: string;
  status?: string;
  onClick?: () => void;
  variant?: "default" | "graph" | "summary";
};

export const DashboardCard = ({
  title,
  subtitle,
  value,
  status = "Total",
  onClick,
  variant = "default",
}: DashboardCardProps) => {
  // Graph variant - simple display
  if (variant === "graph") {
    return (
      <Card className="hover:shadow-md transition-all">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{value}</p>
          <p className="text-sm text-muted-foreground">{status}</p>
        </CardContent>
      </Card>
    );
  }

  // Summary variant - for the three top cards
  if (variant === "summary") {
    return (
      <Card 
        onClick={onClick}
        className="hover:shadow-md transition-all cursor-pointer"
      >
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
          <div className="mt-4 bg-muted/50 rounded-lg p-4 flex justify-between items-center">
            <p className="text-xl font-bold">{value}</p>
            <p className="text-sm text-muted-foreground">{status}</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Default variant - with arrow and full styling
  return (
    <Card 
      onClick={onClick}
      className="hover:shadow-md transition-all cursor-pointer"
    >
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg">{title}</CardTitle>
          <ArrowRight className="w-4 h-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{subtitle}</p>
        <div className="bg-muted/50 rounded-lg p-4 flex justify-between items-center">
          <p className="text-xl font-bold">{value}</p>
          <p className="text-sm text-muted-foreground">{status}</p>
        </div>
      </CardContent>
    </Card>
  );
};