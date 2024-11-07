import React, { useEffect, useState } from 'react'
import User from './model/User.ts';


const Practice38 = (props: Props) => {
    const [userArray, setUserArray] = useState<Array<User>>([])
    const [currentUser, setCurrentUser] = useState(0);

    useEffect(() => {
        const user1 = new User("Ana");
        user1.id = 1;
        const user2 = new User("Aristarco");
        user2.id = 2;
        let auxArr = [user1, user2];
        
        setUserArray(auxArr);

    }, [])

    function changeCurrentUser(user : User){
        setCurrentUser(user.id);
    }


    function modifyUser(user : User){
        let auxArr = userArray;
        auxArr[user.id-1] = user;
        setUserArray([...auxArr]);
    }


    return (
        <>
            <h2>Component A</h2>
            <br/>
            <br />
            <br />
            {
                userArray.map((user, index) => (
                    <div key={index}>
                        <button onClick={() => changeCurrentUser(user)}>Modify {user.name}</button>
                    </div>
                ))
            }
            {
                (currentUser != 0) ?
                <ComponenteHijo user={userArray[currentUser-1]} modifyUserParent={modifyUser}  />
                :
                <p>No user selected</p>
            }

        </>
    )
}

export default Practice38


type Props = {
    user : User
    modifyUserParent: (user : User) => void ;
}


const ComponenteHijo = (props: Props) => {
    const [newName, setNewName] = useState("");

    useEffect(() => {
        setNewName(props.user.name);
    }, [props.user])
    
    function handleModify(){
        const { modifyUserParent } = props;
        let user = new User(newName);
        user.id = props.user.id;
        //console.log(user.id);
        user.name = newName;
        console.log(user);
        modifyUserParent(user);
    }

    return (
        <>
            <br />
            <h2>Component B</h2>
            <input type="text" onChange={(e) => setNewName(e.target.value)} value={newName} />
            <br/>
            <button onClick={handleModify}> Modify</button>
            <br/>
        </>
    )
}
