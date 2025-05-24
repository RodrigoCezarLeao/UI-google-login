import { jwtDecode } from "jwt-decode";
import type { GoogleJwtPayload } from "../GoogleJwtPayload";

interface PersonalDataProps {
    setIsLogged: React.Dispatch<React.SetStateAction<boolean>>
}

export const PersonalData = (props: PersonalDataProps) => {
    const {setIsLogged} = props;

    let data = {
        name: "",
        mail: "",
        imageUrl: "",
    }

    const token = sessionStorage.getItem("JWT_TOKEN");
    if (!token) setIsLogged(false);
    else {
        const decoded = jwtDecode<GoogleJwtPayload>(token);
        data.name = decoded.name;
        data.mail = decoded.email;
        data.imageUrl = decoded.picture;
    }
    

    return <div>
        <p>Nome: {data.name}</p>
        <p>E-mail: {data.mail}</p>
        <img src={data.imageUrl} />
    </div>
}

