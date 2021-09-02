const Header = (props) => {
    return (
        <header>
            <h1 style={{ color: 'white', textAlign: "center", backgroundColor: 'black'}}>{props.title}</h1>
            <h2 style={{ text: '20px', flex: '50px', color: 'white', textAlign: "center", backgroundBorder: '45px', backgroundColor: 'black'}}>{props.subtitle}</h2>
        </header>
    )
}

export default Header
