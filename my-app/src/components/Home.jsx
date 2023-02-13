import { Navbar } from "./Navbar";
import {Main} from "./Main"
import {Footer} from "./Footer";




function Home (){
    return(
<div>
<Navbar className="Navbar"/>

<Main class="main" ></Main>
<Footer className="footer"></Footer>
</div>
    )
}
export default Home;