import Link from 'next/link'

const Nav = async () => {
    return (
        <nav>
            <Link href={'/'}>
                <h1>Send It</h1>
            </Link>
        </nav>
    )
}

export default Nav