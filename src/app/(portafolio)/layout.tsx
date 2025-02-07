import { BackGround } from "@/components/background/BackGround";
import { Footer } from "@/components/footer/Footer";
import { NavBar } from "@/components/navbar/NavBar";

export default async function PortafolioLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen">
            <NavBar />
            <div className="px-0 sm:px-10 min-h-[90dvh] ">
                {children}
            </div>
            <Footer />
        </main>
    );
}