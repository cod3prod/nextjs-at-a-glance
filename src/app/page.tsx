import Examples from "../components/examples";
import Essentials from "../components/essentials";
import Header from "../components/header";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <>
      <Header />
      <main className="container mx-auto max-w-4xl px-4 grow">
        <Essentials />
        <Examples />
      </main>
      <Footer />
    </>
  );
}
