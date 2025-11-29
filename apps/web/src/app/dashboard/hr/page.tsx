import { Button } from "@/components/ui/button"

export default function HrPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">HR & Payroll</h2>
                <div className="flex items-center space-x-2">
                    <Button variant="outline">Attendance</Button>
                    <Button>Add Employee</Button>
                </div>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
                    <h3 className="font-semibold leading-none tracking-tight">Total Employees</h3>
                    <div className="mt-4 text-2xl font-bold">45</div>
                </div>
                <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
                    <h3 className="font-semibold leading-none tracking-tight">Present Today</h3>
                    <div className="mt-4 text-2xl font-bold text-green-600">42</div>
                </div>
                <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
                    <h3 className="font-semibold leading-none tracking-tight">Payroll Status</h3>
                    <div className="mt-4 text-2xl font-bold">Pending</div>
                </div>
            </div>
        </div>
    )
}
