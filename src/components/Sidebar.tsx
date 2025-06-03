import { X } from "lucide-react";

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  return (
    <>
      {/* Drawer */}
      <div
        className={` z-50 top-0 left-0 h-screen w-[170px] bg-[#1E429F] text-white p-6
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:flex lg:flex-col`}
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-2xl font-bold">Dstv</h1>
            <p className="text-sm font-normal mt-1">Feel every moment</p>
          </div>
          
          <button 
            onClick={toggleSidebar} 
            className="lg:hidden text-white hover:bg-blue-700 rounded-lg p-1.5"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="space-y-2">
          {['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4', 'Tab 5'].map((label, i) => (
            <button
              key={i}
              className={`w-[150px] text-left px-4 py-3 rounded-md flex items-center
                ${label === "Tab 1" 
                  ? "bg-white text-blue-900 font-2xl" 
                  : "text-blue-100 hover:bg-blue-800"}`}
            >
              <span className="block w-5 h-5 rounded border border-blue-300 mr-3"></span>
              {label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}