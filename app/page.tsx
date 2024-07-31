import Transaction from "@/views/app/transaction";
import Total from "@/views/app/total";
import Image from "next/image";
import Debt from "@/views/app/debt";

export default function Home() {
  return (
    <main>
      <div className="flex">
        <div className="flex flex-col w-2/5 mr-5">
          <Total />
          <Transaction />
        </div>
        <div className="flex flex-col w-2/5">
          <Debt />
        </div>
      </div>
    </main>
  );
}
