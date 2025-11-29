import { Button } from "@/components/ui/button"

export default function InventoryPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Inventory</h2>
                <div className="flex items-center space-x-2">
                    <Button variant="outline">Stock Moves</Button>
                    <Button>Add Product</Button>
                </div>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
                    <h3 className="font-semibold leading-none tracking-tight">Total Products</h3>
                    <div className="mt-4 text-2xl font-bold">1,234</div>
                </div>
                <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
                    <h3 className="font-semibold leading-none tracking-tight">Low Stock</h3>
                    <div className="mt-4 text-2xl font-bold text-red-500">12</div>
                </div>
                <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
                    <h3 className="font-semibold leading-none tracking-tight">Warehouses</h3>
                    <div className="mt-4 text-2xl font-bold">3</div>
                </div>
            </div>
        </div>
    )
}
