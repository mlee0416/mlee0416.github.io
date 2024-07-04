import { LoginButton } from "@/components/auth/login/LoginButton";
import { Button } from "@/components/ui/button";

const App = () => {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-semibold drop-shadow-md">
          Authentication
        </h1>
        <p className="text-lg text-center">A simple authentication</p>
        <div>
          <LoginButton>
            <Button variant="secondary" size="lg">
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
};

export default App;
