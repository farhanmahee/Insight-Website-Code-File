import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SalesPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Sales</h2>
                <div className="flex items-center space-x-2">
                    <Link href="/dashboard/sales/orders">
                        <Button variant="outline">Orders</Button>
                    </Link>
                    <Link href="/dashboard/sales/customers">
                        <Button variant="outline">Customers</Button>
                    </Link>
                    <Link href="/pos">
                        <Button>Open POS</Button>
                    </Link>
                </div>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
                    <h3 className="font-semibold leading-none tracking-tight">Total Sales</h3>
                    <div className="mt-4 text-2xl font-bold">$12,345.00</div>
                </div>
                <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
                    <h3 className="font-semibold leading-none tracking-tight">Orders</h3>
                    <div className="mt-4 text-2xl font-bold">150</div>
                </div>
                <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
                    <h3 className="font-semibold leading-none tracking-tight">Customers</h3>
                    <div className="mt-4 text-2xl font-bold">89</div>
                </div>
            </div>
        </div>
    )
}
