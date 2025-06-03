import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
export const DashboardCard = ({ title, subtitle, value, status = "Total", onClick, variant = "default", }) => {
    // Graph variant - simple display
    if (variant === "graph") {
        return (_jsxs(Card, { className: "hover:shadow-md transition-all", children: [_jsx(CardHeader, { className: "pb-2", children: _jsx(CardTitle, { className: "text-lg", children: title }) }), _jsxs(CardContent, { children: [_jsx("p", { className: "text-2xl font-bold", children: value }), _jsx("p", { className: "text-sm text-muted-foreground", children: status })] })] }));
    }
    // Summary variant - for the three top cards
    if (variant === "summary") {
        return (_jsxs(Card, { onClick: onClick, className: "hover:shadow-md transition-all cursor-pointer", children: [_jsx(CardHeader, { className: "pb-2", children: _jsx(CardTitle, { className: "text-lg", children: title }) }), _jsxs(CardContent, { children: [_jsx("p", { className: "text-sm text-muted-foreground", children: subtitle }), _jsxs("div", { className: "mt-4 bg-muted/50 rounded-lg p-4 flex justify-between items-center", children: [_jsx("p", { className: "text-xl font-bold", children: value }), _jsx("p", { className: "text-sm text-muted-foreground", children: status })] })] })] }));
    }
    // Default variant - with arrow and full styling
    return (_jsxs(Card, { onClick: onClick, className: "hover:shadow-md transition-all cursor-pointer", children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex justify-between items-center", children: [_jsx(CardTitle, { className: "text-lg", children: title }), _jsx(ArrowRight, { className: "w-4 h-4 text-muted-foreground" })] }) }), _jsxs(CardContent, { className: "space-y-4", children: [_jsx("p", { className: "text-sm text-muted-foreground", children: subtitle }), _jsxs("div", { className: "bg-muted/50 rounded-lg p-4 flex justify-between items-center", children: [_jsx("p", { className: "text-xl font-bold", children: value }), _jsx("p", { className: "text-sm text-muted-foreground", children: status })] })] })] }));
};
