function WelcomeMessage({addPosts}) {
    return (
        <center className="welcomeText">
            <div className="spinner-border" style={{ width: "5rem", height: "5rem" }} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            {/* <p>No Post found...</p>
            <button className="btn btn-success" onClick={addPosts}>Fetch post from server</button> */}
        </center>
    );
}

export default WelcomeMessage;