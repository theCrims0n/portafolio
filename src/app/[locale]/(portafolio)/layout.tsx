import { Footer } from "@/components/footer/Footer";
import { NavBar } from "@/components/navbar/NavBar";
import { SideBar } from "@/components/sidebar/SideBar";

export default async function PortafolioLayout({ children }: {
    children: React.ReactNode;
}) {

    return (
        <main >
            <SideBar />
            <NavBar />
            <div className="px-0 sm:px-10 min-h-[90dvh] ">
                {children}
            </div>
            <Footer />
        </main>
    );
}