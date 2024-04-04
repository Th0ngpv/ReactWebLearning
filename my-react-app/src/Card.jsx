import profilePic from './assets/question_piegion.jpg'

function Card() {
    return (
        <div className="card">
            <img className='card-image' src={profilePic} alt="profile picture" />
            <h2 className='card-title'>Thong Pham</h2>
            <p className='card-text'>I study and practice web development</p>
        </div>
    );
}

export default Card;