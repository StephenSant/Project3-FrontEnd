const Header = () => {
  return(
    <header>
      <h1 className="header">Xeno-biological Database</h1>
      <h2 className="header">Planet: 2526B</h2>
      <nav>
        <a href="/planet">Planet Info</a>
        <a href="/system">Star System</a>
        <a href="/creatures">Creature Database</a>
        <a href="/logs">Mission Logs</a>
        <a href="/">Home</a>
      </nav>
    </header>
  )
}

Header.defaultProps = { database: 'Welcome' }

export default Header