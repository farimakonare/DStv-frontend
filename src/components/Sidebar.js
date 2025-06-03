import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { X } from "lucide-react";
export default function Sidebar({ isOpen, toggleSidebar }) {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: ` z-50 top-0 left-0 h-screen w-[170px] bg-[#1E429F] text-white p-6
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:flex lg:flex-col`, children: [_jsxs("div", { className: "flex justify-between items-start mb-8", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-bold", children: "Dstv" }), _jsx("p", { className: "text-sm font-normal mt-1", children: "Feel every moment" })] }), _jsx("button", { onClick: toggleSidebar, className: "lg:hidden text-white hover:bg-blue-700 rounded-lg p-1.5", children: _jsx(X, { className: "w-5 h-5" }) })] }), _jsx("div", { className: "space-y-2", children: ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4', 'Tab 5'].map((label, i) => (_jsxs("button", { className: `w-[150px] text-left px-4 py-3 rounded-md flex items-center
                ${label === "Tab 1"
                            ? "bg-white text-blue-900 font-2xl"
                            : "text-blue-100 hover:bg-blue-800"}`, children: [_jsx("span", { className: "block w-5 h-5 rounded border border-blue-300 mr-3" }), label] }, i))) })] }) }));
}
