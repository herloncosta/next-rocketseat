import { cookies, headers } from 'next/headers'
import Link from 'next/link'

export default function Information() {
    const informationCookies = cookies()
    const informationHeaders = headers()

    return (
        <>
            <header className="container mx-auto pt-10 flex flex-col items-center gap-4">
                <h1 className="text-3xl font-bold">Session Informations</h1>

                <Link className="" href={'/'}>
                    Página Inicial
                </Link>
            </header>

            <main className="container mx-auto p-10">
                <div className="flex flex-col gap-10">
                    <div>
                        <h2 className="font-2xl font-semibold">Cookies</h2>
                        <pre>{JSON.stringify(informationCookies, null, 2)}</pre>
                    </div>

                    <div>
                        <h2 className="font-2xl font-semibold">Headers</h2>
                        <pre>{JSON.stringify(informationHeaders, null, 2)}</pre>
                    </div>
                </div>
            </main>
        </>
    )
}
