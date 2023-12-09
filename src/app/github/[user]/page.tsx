import Image from 'next/image'
import Link from 'next/link'

interface UserParams {
    params: {
        user: string
    }
}

const URL = 'https://api.github.com/users/'

export default async function Github({ params }: UserParams) {
    const response = await fetch(`${URL}${params.user}`, {
        next: {
            revalidate: 60 * 5, // revalidate every 5 minutes
        },
    })
    const { id, login, name, avatar_url } = await response.json()

    return (
        <section className="h-screen bg-slate-900 flex flex-col items-center justify-center">
            <div
                className="group bg-slate-300 border-4 border-white p-4 rounded-lg 
                flex flex-col items-center justify-center cursor-pointer"
            >
                <Image
                    src={avatar_url}
                    alt="profile photo from Github"
                    width={200}
                    height={200}
                    className="rounded-full border-2 border-indigo-500 group-hover:border-4"
                />

                <div className="text-center p-4">
                    <p className="text-sm font-semibold text-indigo-700">
                        ID: {id}
                    </p>
                    <p className="font-semibold text-indigo-700">
                        User: {name}
                    </p>
                </div>
            </div>

            <div>
                <p className="mt-5 text-white">
                    Visit on Github:{' '}
                    <Link
                        className="text-indigo-400 hover:text-indigo-700"
                        target="_blank"
                        href={`https://github.com/${login}`}
                    >
                        {name}
                    </Link>
                </p>
            </div>
        </section>
    )
}
