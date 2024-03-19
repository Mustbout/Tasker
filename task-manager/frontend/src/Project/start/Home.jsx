import Embark from "./Embark ";
import NavBar from "./NavBar";
import Section1 from "./Section/Section1";
import Section2 from "./Section/Section2";
import Section3 from "./Section/Section3";
import Section4 from "./Section/Section4";
import Section5 from "./Section/Section5";
import Section6 from "./Section/Section6";
import Section7 from "./Section/Section7";

export default function Home() {
    return (
        <div className=" ">
            <NavBar />
            <div className=" container-fluid mx-5 md:container my-12">
                <main>
                    <Section1 />
                    <hr />
                    <Section2 />
                    <Section3 />
                    <hr />
                    <Section4 />
                    <hr />
                    <Section5 />
                    <hr />
                    <Section6 />
                    <hr />
                    <Section7 />
                    <hr />
                    
                </main>
            </div>
        </div>
    );
}
