import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import List from "./components/List";
import Task from "./components/Task";
import Data from "../public/json.json";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

const App = () => {
  const [pending, setPending] = useState(Data);
  const [active, setActive] = useState([]);
  const [done, setDone] = useState([]);

  const moveToActive = (t) =>
    !active.some((a) => a.id === t.id) &&
    (setPending((p) => p.filter((x) => x.id !== t.id)),
    setActive((a) => [{ ...t, status: "in-progress" }, ...a]));
  const markAsDone = (t) => (
    setActive((a) => a.filter((x) => x.id !== t.id)),
    setDone((d) => [{ ...t, status: "resolved" }, ...d])
  );

  return (
    <div className="bg-gray-100">
      <Navbar />
      <main className="max-w-[90%] mx-auto px-4 py-8">
        <Banner inProgressCount={active.length} resolvedCount={done.length} />
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2">
            <h3 className="text-gray-800 font-semibold mb-4">
              Customer Tickets
            </h3>
            <List tickets={pending} onSelect={moveToActive} />
          </div>
          <aside className="space-y-6">
            <Task task={active} onComplete={markAsDone} resolved={done} />
          </aside>
        </section>
      </main>
      <Footer />
      <ToastContainer position="top-left" />
    </div>
  );
};

export default App;
