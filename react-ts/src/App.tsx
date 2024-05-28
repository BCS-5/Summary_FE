// App.tsx

import { FC } from "react";
import Box from "./components/Box";

const App: FC = () => {
  return (
    <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center gap-20">
      <Box name="banana" bgColor="bg-yellow-300" isRounded={false} />
      <Box name="apple" bgColor="bg-red-300" isRounded={true} />
      <Box name="melon" bgColor="bg-green-300" isRounded={false} />
    </div>
  );
};

export default App;
