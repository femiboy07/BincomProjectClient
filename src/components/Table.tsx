"use client"
import * as React from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { CheckIcon, DotsVerticalIcon } from "@radix-ui/react-icons";

import { cn } from "../lib/utils";

// Table Root
const Table = ({ className, children, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="w-full overflow-auto">
        <table className={cn("w-full border-collapse bg-white text-sm", className)} {...props}>
            {children}
        </table>
    </div>
);
Table.displayName = "Table";

// Table Header
const TableHeader = ({ className, children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className={cn("bg-gray-100", className)} {...props}>
        {children}
    </thead>
);
TableHeader.displayName = "TableHeader";

// Table Row
const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
    ({ className, ...props }, ref) => (
        <tr ref={ref} className={cn("border-b hover:bg-gray-50", className)} {...props} />
    )
);
TableRow.displayName = "TableRow";

// Table Head (Column Names)
const TableHead = React.forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(
    ({ className, ...props }, ref) => (
        <th ref={ref} className={cn("px-4 py-2 text-left font-medium text-gray-600", className)} {...props} />
    )
);
TableHead.displayName = "TableHead";

// Table Body
const TableBody = ({ className, children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <tbody className={cn("divide-y", className)} {...props}>
        {children}
    </tbody>
);
TableBody.displayName = "TableBody";

// Table Cell (Data)
const TableCell = React.forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(
    ({ className, ...props }, ref) => (
        <td ref={ref} className={cn("px-4 py-2", className)} {...props} />
    )
);
TableCell.displayName = "TableCell";

// Radix Checkbox (Row Selection)
const TableCheckbox = React.forwardRef<
    React.ElementRef<typeof Checkbox.Root>,
    React.ComponentPropsWithoutRef<typeof Checkbox.Root>
>(({ className, ...props }, ref) => (
    <Checkbox.Root
        ref={ref}
        className={cn(
            "flex h-5 w-5 items-center justify-center rounded border border-gray-300 bg-white",
            "focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
            className
        )}
        {...props}
    >
        <Checkbox.Indicator>
            <CheckIcon className="h-4 w-4 text-blue-600" />
        </Checkbox.Indicator>
    </Checkbox.Root>
));
TableCheckbox.displayName = "TableCheckbox";

// Radix Dropdown Menu (Row Actions)
const TableActions = () => (
    <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
            <button className="p-2 rounded hover:bg-gray-200">
                <DotsVerticalIcon className="h-5 w-5 text-gray-600" />
            </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className="border rounded-md bg-white p-2 shadow-md">
            <DropdownMenu.Item className="cursor-pointer px-4 py-2 hover:bg-gray-100">Edit</DropdownMenu.Item>
            <DropdownMenu.Item className="cursor-pointer px-4 py-2 hover:bg-gray-100">Delete</DropdownMenu.Item>
        </DropdownMenu.Content>
    </DropdownMenu.Root>
);
TableActions.displayName = "TableActions";

export { Table, TableHeader, TableRow, TableHead, TableBody, TableCell, TableCheckbox, TableActions };