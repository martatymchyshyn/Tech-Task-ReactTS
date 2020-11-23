import Headlines from "./headlines";

const Hero = ({handleLogout}) => {
    const handleUserPage = () => (window.location.href = '/profile');

    return (
        <>
            <div className='header'>
        <a href="" className='logo'>New York Times News </a>
    <div className='header right'>
    <button onClick={handleLogout} className='active'>Logout</button>
        <button onClick={handleUserPage} className='active'>Profile</button>

        </div>
        </div>
        <div className='title'>
        <h1>Popular articles on NYTimes.com</h1>
    </div>
    <Headlines/>
    </>
)
}

export default Hero;