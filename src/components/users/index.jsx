import { useEffect, useState } from "react"

export default function Users() {

    const [userLists, setUserLists] = useState([])

    const [pending, setPending] = useState(false)

    async function fecthAllUsers() {
        try {
            setPending(true)
            const apiResponse = await fetch("http://dummyjson.com/users")
            const result = await apiResponse.json()

            if (result?.users) {
                setUserLists(result?.users)
                setPending(false)
            } else {
                setUserLists([])
                setPending(false)
            }

        } catch (err) {
            console.log(err);
            setPending(false)
        }
    }

    function handleFetchListOfUsers() {
        fecthAllUsers()
    }

    // useEffect(() => {
    //     fecthAllUsers()
    // }, [])

    console.log(userLists);

    if (pending) return <h1>Fetching users, please wait.</h1>

    return (
        <div>
            <h1>All Users List</h1>
            <button onClick={handleFetchListOfUsers}>Fetch users</button>
            <ul>
                {
                    userLists && userLists.length > 0 ?
                        userLists.map(userItems =>
                            <li key={userItems?.id}>
                                <p>{userItems?.firstName} {userItems?.lastName}</p>
                            </li>
                        ) : <h1>No users found.</h1>
                }
            </ul>
        </div>
    )
}