function Home({isLoggedIn}){
    return (
        <>
        {isLoggedIn?<h1>Logged In</h1>:<h1>User needs to login</h1>}
            <div>Home</div>
        </>
    )
}
export default Home