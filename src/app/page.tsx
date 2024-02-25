import Image from "next/image";
import GridExample from "../../components/Grid";
import LineChart from "../../components/LineChart";

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-7xl flex-col items-center p-10 mx-auto">
      <div className="z-10 max-w-7xl w-full items-center justify-between font-mono text-sm lg:flex mb-20">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Vector DB Comparison by Superlinked &nbsp;
          <code className="font-mono font-bold">
            https://superlinked.com/vector-db-comparison/
          </code>
        </p>
        <div className="flex bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <div className="font-bold flex place-items-center gap-2 p-8 lg:p-0">
            <div>Swapneel & Daniel & Marianna</div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Data to enrich your online business
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>
      </div>
      {/* <GridExample /> */}
      <LineChart />
    </main>
  );
}
