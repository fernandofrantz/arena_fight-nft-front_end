import { Route, Routes } from "react-router-dom";
import { Landing } from "../pages/Landing";
import { MyGym } from "../pages/MyGym";
import { PlayNow } from "../pages/PlayNow";
import { PreSale } from "../pages/PreSale";
import { Lutador } from "../pages/Lutador";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/my-gym" element={<MyGym />} />
      <Route path="/play" element={<PlayNow />} />
      <Route path="/lutador" element={<Lutador />} />
      <Route path="/pre-sale" element={<PreSale />} />
    </Routes>
  );
};
