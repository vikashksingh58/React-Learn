function ErrorMessage({items}){
    return <>{!items.length && <p className='text-center'>No food available.</p>}</>;
}
export default ErrorMessage;