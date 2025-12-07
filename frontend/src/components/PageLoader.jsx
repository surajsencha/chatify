import { LoaderIcon } from "lucide-react";
function PageLoader() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <LoaderIcon className="size-10 animate-spin" />
      </div>
    </div>
  );
}

export default PageLoader;
