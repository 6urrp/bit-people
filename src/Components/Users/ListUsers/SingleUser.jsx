import { hideEmail } from "../../../utilities/hideEmail";

import "./SingleUser.css"

const SingleUser = props => {
    return (
        <div className="d-flex">
            <div className="me-2">
                <img className="rounded-circle" src={props.userData.picture.thumbnail} alt="" />
            </div>
            <div className="userInfo">
                <p className="m">{props.userData.name.first} {props.userData.name.last}</p>
                <p className="m"><i class="fas fa-envelope"></i> email: {hideEmail(props.userData.email)} </p>
                <p><i class="fas fa-birthday-cake"></i> 23.10.1990</p>
            </div>
        </div>
    )
};

export default SingleUser