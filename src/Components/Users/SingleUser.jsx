import "./SingleUser.css"

const SingleUser = () => {
    return (
        <div className="d-flex">
            <div className="me-2">
                <img className="rounded-circle" src="https://avatars.githubusercontent.com/u/80161515?v=4" alt="" srcset="" />
            </div>
            <div className="userInfo">
                <p className="m">Random name</p>
                <p className="m"><i class="fas fa-envelope"></i> Email: milanmixa@yahoo.com</p>
                <p><i class="fas fa-birthday-cake"></i> 23.10.1990</p>
            </div>
        </div>
    )
};

export default SingleUser