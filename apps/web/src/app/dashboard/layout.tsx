"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem("accessToken")
        if (!token) {
            router.push("/auth/login")
        }
    }, [router])

    return (
        <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 items-center">
                    <div className="mr-4 hidden md:flex">
                        <Link className="mr-6 flex items-center space-x-2" href="/">
                            <span className="hidden font-bold sm:inline-block">
                                Insight ERP
                            </span>
                        </Link>
                        <nav className="flex items-center space-x-6 text-sm font-medium">
                            <Link
                                className="transition-colors hover:text-foreground/80 text-foreground"
                                href="/dashboard"
                            >
                                Dashboard
                            </Link>
                            <Link
                                className="transition-colors hover:text-foreground/80 text-foreground/60"
                                href="/dashboard/accounting"
                            >
                                Accounting
                            </Link>
                            <Link
                                className="transition-colors hover:text-foreground/80 text-foreground/60"
                                href="/dashboard/sales"
                            >
                                Sales
                            </Link>
                            <Link
                                className="transition-colors hover:text-foreground/80 text-foreground/60"
                                href="/dashboard/inventory"
                            >
                                Inventory
                            </Link>
                            <Link
                                className="transition-colors hover:text-foreground/80 text-foreground/60"
                                href="/dashboard/hr"
                            >
                                HR
                            </Link>
                        </nav>
                    </div>
                    <div className="ml-auto flex items-center space-x-4">
                         <button 
                            onClick={() => {
                                localStorage.removeItem("accessToken")
                                router.push("/auth/login")
                            }}
                            className="text-sm font-medium text-muted-foreground hover:text-primary"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </header>
            <main className="flex-1 space-y-4 p-8 pt-6">{children}</main>
        </div>
    )
}
