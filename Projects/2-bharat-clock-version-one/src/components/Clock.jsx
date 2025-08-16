function Clock() {
    let now = new Date();
    let todayDate = now.toLocaleDateString();
    let todayTime = now.toLocaleTimeString();
    return (
        <p className="lead">This is the current time: {todayDate} - {todayTime}</p>
    );
}
export default Clock;