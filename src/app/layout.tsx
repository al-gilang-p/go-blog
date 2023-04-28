import './globals.css'

export const metadata = {
    title: 'Go Blog',
    description: 'Blog App From Vercel Tutorial',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="bg-gray-200 container mx-10 my-5">
                <nav>
                    <h5 className="font-bold text-gray-500">Feed</h5>
                </nav>
                {children}
            </body>
        </html>
    )
}
