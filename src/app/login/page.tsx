import Link from 'next/link'

export default function Login() {
    return (
        <div className="h-screen flex items-center flex-col mt-10">
            <h1 className="text-2xl font-semibold">Login</h1>
            <div className="mt-10 flex gap-4">
                <Link href="/">Home</Link>
            </div>
        </div>
    )
}
