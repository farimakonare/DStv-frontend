import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "@/lib/utils";
export function Button({ className, children, ...props }) {
    return (_jsx("button", { className: cn("px-4 py-2 rounded-md bg-blue-600 text-white", className), ...props, children: children }));
}
