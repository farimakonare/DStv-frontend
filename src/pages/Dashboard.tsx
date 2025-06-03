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

  return (
    <div className="min-h-screen">
      <Navbar toggleSidebar={toggleSidebar} />
      
      <div className="flex">
        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto">
        <br/>
        <br/>
          
          {/* Top 3 Cards */}
          <div className="flex flex-wrap gap-6 justify-center">
            {cardData.slice(0, 3).map((card, i) => (
              <div key={i} className="flex-1 flex-grow min-w-[250px]">
                <DashboardCard {...card} />
              </div>
            ))}
          </div>

          {/* Graph and Bottom Cards */}
          <div className="flex flex-wrap gap-6 justify-center ">
            {/* Graph Card */}
            <div className="flex-grow basis-[66%] min-w-[270px] gap-6">
              <GraphCard value="GHS 12,790.77" data={graphData} title={"Graph Card"} />
            </div>

            {/* Bottom Cards (4,5) */}
            <div className="flex flex-col gap-6 flex-grow basis-[32%] min-w-[250px]">
              {cardData.slice(3).map((card, i) => (
                <DashboardCard key={i + 3} {...card} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
