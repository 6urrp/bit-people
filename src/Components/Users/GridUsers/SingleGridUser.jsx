import "./SingleGridUser.css";

const SingleGridUser = () => {
    return (
        <div className="border border-start-0">
            <div className="img-container">
                <img className="avatar" src="https://upload.wikimedia.org/wikipedia/sr/8/8b/Avatar_2_logo.jpg" alt="avatar" />
                <p className="username text-white">USERNAME</p>
            </div>
            <div className="data-container ms-4">
                <p>mail </p>
                <p>Date of birth: </p>
            </div>
        </div>
    )
};

export default SingleGridUser;