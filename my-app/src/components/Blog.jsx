import Blogco from "./Blogco"
import Blogarrays from "./blogarrays"
import { Navbar } from "./Navbar";

function Createblog(arr){
return(
    <Blogco
    key="salam"
    img={arr.img}
    name={arr.name}
    detail={arr.detail}
    end={arr.end}
    />
);
}

function Blog() {
    return (
      <div className="Containerblog">
      <Navbar/>
          <div className="Blog">
         {Blogarrays.map(Createblog)}   
        </div>
      </div>
    )  
}


export default Blog;

