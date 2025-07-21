import { ThemeProvider } from "./theme/ThemeProvider";
import ThemeSelector from "./theme/ThemeSelector";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryclient";
import { Button } from "./components/ui/button";
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Toaster position="top-right" reverseOrder={true} />
        <div className="flex min-h-svh flex-col items-center justify-center">
          <img src={"src/assets/temp.png"}/>
          <Button className="mb-4"
            onClick={() => {
              toast((t) => (
                <span>
                  Try <b>Kiwi</b> It's cheap
                  <Button className="ml-2" onClick={() => toast.dismiss(t.id)}>
                    Close
                  </Button>
                </span>
              ));
            }}
          >
            Say! Kiwi
          </Button>

          <ThemeSelector />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
