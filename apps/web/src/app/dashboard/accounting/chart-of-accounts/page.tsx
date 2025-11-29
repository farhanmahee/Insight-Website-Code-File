import { Button } from "@/components/ui/button"

export default function ChartOfAccountsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Chart of Accounts</h2>
                <Button>Add Account</Button>
            </div>
            <div className="rounded-md border">
                <div className="p-4">
                    <table className="w-full text-sm text-left">
                        <thead className="text-muted-foreground border-b">
                            <tr>
                                <th className="pb-3 font-medium">Code</th>
                                <th className="pb-3 font-medium">Name</th>
                                <th className="pb-3 font-medium">Type</th>
                                <th className="pb-3 font-medium text-right">Balance</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            <tr className="group">
                                <td className="py-3">1001</td>
                                <td className="py-3">Cash on Hand</td>
                                <td className="py-3">Asset</td>
                                <td className="py-3 text-right">$5,000.00</td>
                            </tr>
                            <tr className="group">
                                <td className="py-3">1002</td>
                                <td className="py-3">Bank Account</td>
                                <td className="py-3">Asset</td>
                                <td className="py-3 text-right">$115,000.00</td>
                            </tr>
                            {/* Add more rows */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
