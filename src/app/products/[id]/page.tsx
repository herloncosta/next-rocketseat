import Link from 'next/link'

interface ProductProps {
    params: {
        id: string
    }
}

export default function Product({ params }: ProductProps) {
    const render =
        params.id === '10' ? (
            <h1>Produto de número 10</h1>
        ) : (
            <h1>Produto não identificado</h1>
        )
    return (
        <div className="text-2xl text-center font-bold mt-10">
            {render}{' '}
            <div className="text-normal text-sm font-normal">
                <Link href="/">Home</Link>
            </div>
        </div>
    )
}
