import { LoginButton } from "@/components/auth/LoginButton";
import { EMode } from "@/components/auth/types/EMode";
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
          <LoginButton mode={EMode.MODAL}>
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
