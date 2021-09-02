import PropTypes from 'prop-type'

const Home = (props) => {
    return (
        <header>
            <h1 style={{ color: 'white', textAlign: "center", backgroundColor: 'black'}}>{props.title}</h1>
            <h2 style={{ text: '20px', color: 'white', textAlign: "center", backgroundColor: 'black'}}>{props.subtitle}</h2>
        <button className='btn'>Signup</button>
        </header>
    )
}

export default Home
