const Container = ({children}) => {
    return (
    <div className="card" style={{width: "500px"}}>
        <div className="card-body">
            {children}
        </div>
    </div>
    )
}

export default Container;