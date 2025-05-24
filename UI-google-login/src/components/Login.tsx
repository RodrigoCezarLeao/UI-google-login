import { GoogleLogin } from '@react-oauth/google';

interface LoginProps {
    setIsLogged: React.Dispatch<React.SetStateAction<boolean>>
}

const Login = (props: LoginProps) => {
  const {setIsLogged} = props;
    
  const handleLoginSuccess = (credentialResponse: any) => {
    const token = credentialResponse.credential;
    sessionStorage.setItem("JWT_TOKEN", token);
    setIsLogged(true);
};

  return (
    <div>
      <GoogleLogin onSuccess={handleLoginSuccess} onError={() => {
            console.log("Erro no login");
            setIsLogged(false);
        }
    }/>
    </div>
  );
};

export default Login;
