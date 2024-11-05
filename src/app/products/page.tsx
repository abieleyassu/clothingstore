import Navigation from "@/components/navigation";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <div className="grid grid-cols-3 items-center justify-between p-10">
      <div>
        <h1 className="text-2xl font-serif">Clothing Company</h1>
      </div>
      <div className="flex justify-center">
        <Navigation />
      </div>

      <div>
        <Button>My Account</Button>
      </div>
    </div>
  );
}
