export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 items-center">
                    <div className="mr-4 hidden md:flex">
                        <a className="mr-6 flex items-center space-x-2" href="/">
                            <span className="hidden font-bold sm:inline-block">
                                Insight ERP
                            </span>
                        </a>
                        <nav className="flex items-center space-x-6 text-sm font-medium">
                            <a
                                className="transition-colors hover:text-foreground/80 text-foreground"
                                href="/dashboard"
                            >
                                Dashboard
                            </a>
                            <a
                                className="transition-colors hover:text-foreground/80 text-foreground/60"
                                href="/dashboard/accounting"
                            >
                                Accounting
                            </a>
                            <a
                                className="transition-colors hover:text-foreground/80 text-foreground/60"
                                href="/dashboard/sales"
                            >
                                Sales
                            </a>
                        </nav>
                    </div>
                </div>
            </header>
            <main className="flex-1 space-y-4 p-8 pt-6">{children}</main>
        </div>
    )
}
