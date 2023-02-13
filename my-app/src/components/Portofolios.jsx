import { Portolist } from "./portolist"
import { Portocon } from "./portocon"
// import { Navbar } from "./Navbar";

function Portofolios (){
    return(
     <div>
        <main>
            <section className="Portosec">
                <Portocon list={Portolist} name="There is more than you know" > 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                </Portocon>
            </section>
        </main>
     </div>
    )
}
export default Portofolios;