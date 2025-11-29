import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AccountingPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Accounting</h2>
                <div className="flex items-center space-x-2">
                    <Link href="/dashboard/accounting/chart-of-accounts">
                        <Button variant="outline">Chart of Accounts</Button>
                    </Link>
                    <Button>New Journal Entry</Button>
                </div>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
                    <h3 className="font-semibold leading-none tracking-tight">Assets</h3>
                    <div className="mt-4 text-2xl font-bold">$120,000.00</div>
                </div>
                <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
                    <h3 className="font-semibold leading-none tracking-tight">Liabilities</h3>
                    <div className="mt-4 text-2xl font-bold">$45,000.00</div>
                </div>
                <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
                    <h3 className="font-semibold leading-none tracking-tight">Equity</h3>
                    <div className="mt-4 text-2xl font-bold">$75,000.00</div>
                </div>
            </div>
        </div>
    )
}
