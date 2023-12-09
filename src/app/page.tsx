import Link from 'next/link'

export default function Home() {
    return (
        <div className="h-screen flex items-center flex-col pt-10">
            <h1 className="text-2xl font-semibold">Hello Next</h1>
            <div className="mt-10 flex gap-4">
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/login">Login</Link>
                <Link href="/products/10">Produto 10</Link>
                <Link href="/products/11">Produto não encontrado</Link>
                <Link href="/github/herloncosta">Github Profile</Link>
                <Link href="/information">Page Informations</Link>
            </div>
        </div>
    )
}
