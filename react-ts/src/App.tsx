// App.tsx

import { FC, useState } from "react";
import Box from "./components/Box";

const App: FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <div className="bg-red-100 flex justify-center items-center gap-20 py-40 font-bold text-4xl">
        <button onClick={() => setCount(count - 1)}>-</button>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center gap-20">
        <Box name="banana" bgColor="bg-yellow-100" isRounded={false} />
        <Box name="apple" bgColor="bg-red-300" isRounded={true} />
        <Box name="melon" bgColor="bg-green-300" isRounded={false} />
        <Box name="mango" bgColor="bg-yellow-300" />
        <Box name="grape" bgColor="bg-purple-500" />
      </div>
    </>
  );
};

export default App;
