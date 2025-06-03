import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { DashboardCard } from "@/components/DashboardCard";
import { GraphCard } from "@/components/GraphCard";
const cardData = [
    { title: "Card 1", subtitle: "Lorem ipsum dolor sit", value: "GHS 4,476.77" },
    { title: "Card 2", subtitle: "Lorem ipsum dolor sit", value: "GHS 5,116.31" },
    { title: "Card 3", subtitle: "Lorem ipsum dolor sit", value: "GHS 3,197.69" },
    { title: "Card 4", subtitle: "Lorem ipsum dolor sit", value: "N/A" },
    { title: "Card 5", subtitle: "Lorem ipsum dolor sit", value: "N/A" }
];
const graphData = [
    { name: "0", value: 2300 },
    { name: "2020", value: 3000 },
    { name: "2021", value: 4000 },
    { name: "2022", value: 7000 },
    { name: "2023", value: 9500 },
    { name: "2024", value: 12790.77 }
];
export const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => setIsSidebarOpen(prev => !prev);
    return (_jsxs("div", { className: "min-h-screen", children: [_jsx(Navbar, { toggleSidebar: toggleSidebar }), _jsxs("div", { className: "flex", children: [_jsx(Sidebar, { isOpen: isSidebarOpen, toggleSidebar: toggleSidebar }), _jsxs("main", { className: "flex-1 p-6 overflow-auto", children: [_jsx("br", {}), _jsx("br", {}), _jsx("div", { className: "flex flex-wrap gap-6 justify-center", children: cardData.slice(0, 3).map((card, i) => (_jsx("div", { className: "flex-1 flex-grow min-w-[250px]", children: _jsx(DashboardCard, { ...card }) }, i))) }), _jsxs("div", { className: "flex flex-wrap gap-6 justify-center ", children: [_jsx("div", { className: "flex-grow basis-[66%] min-w-[270px] gap-6", children: _jsx(GraphCard, { value: "GHS 12,790.77", data: graphData, title: "Graph Card" }) }), _jsx("div", { className: "flex flex-col gap-6 flex-grow basis-[32%] min-w-[250px]", children: cardData.slice(3).map((card, i) => (_jsx(DashboardCard, { ...card }, i + 3))) })] })] })] })] }));
};
