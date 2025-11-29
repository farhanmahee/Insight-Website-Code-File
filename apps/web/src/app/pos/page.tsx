"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function POSPage() {
    const [cart, setCart] = useState<any[]>([])

    const addToCart = (product: any) => {
        setCart([...cart, product])
    }

    return (
        <div className="flex h-screen flex-col">
            <header className="flex h-14 items-center border-b px-6">
                <h1 className="text-lg font-bold">Insight POS</h1>
                <div className="ml-auto">
                    <Button variant="outline">Sync Offline Data</Button>
                </div>
            </header>
            <div className="flex flex-1 overflow-hidden">
                <main className="flex-1 overflow-y-auto p-6">
                    <div className="grid grid-cols-4 gap-4">
                        {/* Mock Products */}
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                            <div
                                key={i}
                                className="cursor-pointer rounded-lg border bg-card p-4 hover:bg-accent"
                                onClick={() => addToCart({ id: i, name: `Product ${i}`, price: 10 * i })}
                            >
                                <div className="h-24 rounded bg-muted"></div>
                                <div className="mt-2 font-medium">Product {i}</div>
                                <div className="text-sm text-muted-foreground">${10 * i}.00</div>
                            </div>
                        ))}
                    </div>
                </main>
                <aside className="w-96 border-l bg-muted/40 p-6">
                    <h2 className="mb-4 text-lg font-semibold">Current Order</h2>
                    <div className="flex flex-col gap-2">
                        {cart.map((item, index) => (
                            <div key={index} className="flex justify-between rounded bg-background p-2 shadow-sm">
                                <span>{item.name}</span>
                                <span>${item.price.toFixed(2)}</span>
                            </div>
                        ))}
                        {cart.length === 0 && (
                            <div className="text-center text-sm text-muted-foreground">
                                Cart is empty
                            </div>
                        )}
                    </div>
                    <div className="mt-auto pt-6">
                        <div className="mb-4 flex justify-between text-lg font-bold">
                            <span>Total</span>
                            <span>${cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</span>
                        </div>
                        <Button className="w-full" size="lg">
                            Checkout
                        </Button>
                    </div>
                </aside>
            </div>
        </div>
    )
}
