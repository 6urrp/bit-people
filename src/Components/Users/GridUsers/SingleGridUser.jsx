import { Fragment } from "react/cjs/react.production.min";

import "./SingleGridUser.css";

const SingleGridUser = () => {
    return (
        <div>
            <div className="img-container">
                <img src="https://upload.wikimedia.org/wikipedia/sr/8/8b/Avatar_2_logo.jpg" alt="avatar" />
                <p className="username">USERNAME</p>
            </div>
            <div className="data-container">
                <p>mail </p>
                <p>Date of birth: </p>
            </div>
        </div>
    )
};

export default SingleGridUser;