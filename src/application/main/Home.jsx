import { useAuth } from "react-oidc-context";
import Loading from "../../Components/Loading";
import ShowAlert from "../../Components/ShowAlert";

const Home = () => {
  const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = "2dg48q604ous6dkvpca3e5gsi8";
    const logoutUri = "http://localhost:5173/hello";
    const cognitoDomain = "https://ap-south-1daud84iew.auth.ap-south-1.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  if (auth.isLoading) {
    return <Loading />;
  }

  if (auth.error) {
    return 
    <div>
      <ShowAlert 
        message={`Encountering error... ${auth.error.message}`}
        triggerKey={auth.error.message}
        type="error"
        duration={4000}
      />
    </div>;
  }

  if (auth.isAuthenticated) {
    return (
      <div>{console.log("User Info:", auth)}
        <pre>Hello: {auth.user?.profile?.email}</pre>

        <button onClick={signOutRedirect}>Sign out</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => auth.signinRedirect()}>Sign in</button>
    </div>
  );
};

export default Home
