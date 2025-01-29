

export const UserCard =({UserData})=>{

    return <div>
        Informations 
        <p>
            nom : {UserData.name}
        </p>
        <p>
            Prénom : {UserData.surname}
        </p>
        <p>
            Téléphone : {UserData.tel}
        </p>
        <p>
            Profession : Programmeur
        </p>
     </div>
}

