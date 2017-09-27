import Link from 'next/link'

export default () => (
  <nav>
  <ul>
    <li>
      <Link href="/">
        <a>Home</a>
      </Link>
    </li>
    <li>
   <Link href={{ pathname: '/posts', query: { v: '1' } }}>
        <a>Post</a>
      </Link>
    </li>
  </ul>
</nav>
)
