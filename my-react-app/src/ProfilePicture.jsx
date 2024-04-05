
function ProfilePicture () {
    const imgUrl = './src/assets/question_pigeon.jpg';

    const handleClick = (e) => {
        e.target.style.display = "none";
    };
    return (
        <img className="profile-picture" onClick={(e) => handleClick(e)} src={imgUrl} alt="profile picture" />
    );
}

export default ProfilePicture