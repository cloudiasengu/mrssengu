import Image from "next/image";
import Head from "next/head";
import SelectSchema from "@/components/SelectSchema";

export default function Home() {
  return (
    <>
    <Head>
      <title>Home</title>
    </Head>
    <SelectSchema />
    </>
  );
}
