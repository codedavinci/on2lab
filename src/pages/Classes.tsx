import { useEffect, useState } from "react";
import Header from "../components/Header";
import Events from "../components/Events";
import { IClass } from "../types ";

import { getClasses } from "../api";

export default function products() {
  const [classes, setClasses] = useState<IClass[]>([]);

  useEffect(() => {
    async function fetchClasses() {
      const classes = await getClasses();

      setClasses(classes);
    }

    fetchClasses();
  }, []);

  return (
    <div className="p-3">
      <Header />

      <div className="flex flex-col">
        <div className="self-center">
          <h2 className="font-poppins text-6xl font-semibold m-8 tracking-tighter">
            <i>CLA</i>
            <i className="text-secondary">SSES</i>
          </h2>
        </div>
        <div className="">
          <Events classes={classes} />
        </div>
      </div>
    </div>
  );
}
