import { Info } from "./Info";
import { Buttons } from "./Buttons";
import { img } from "../assetss/Saly-8.svg";

export function Main(props) {
  return (
    <main className={props.class}>
      <Info class="Name">
        Hey there 👋 <br />I am Amirhossein
      </Info>
      <Info class="Abouts">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Info>
      <Buttons class="Button" />
      <div className="image1">
        <img src={require("../assetss/Saly-8.svg").default} />
      </div>
      <div className="image2">
        <img src={require("../assetss/Saly-13.svg").default} />
      </div>
    </main>
  );
}

export function Main2(props) {
  return (
    <main className={props.class}>
      <div className="top">
        <div className="image3">
          <img src={require("../assetss/Saly-10.svg").default} />
        </div>
        <Info class="Name">
          I’m Amirhossein Meydani A Backend and Android Programmer and UI/UX
          Designer
        </Info>
      </div>
      <Info class="Abouts">
        The standard Lorem Ipsum passage, used since the 1500s
      </Info>
      <Info class="Abouts">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </Info>
      <Info class="Abouts">
        Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in
        45 BC
      </Info>
      <Info class="Abouts">
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?"
      </Info>
      <Info class="Abouts">1914 translation by H. Rackham</Info>
      <Info class="Abouts">
        "But I must explain to you how all this mistaken idea of denouncing
        pleasure and praising pain was born and I will give you a complete
        account of the system, and expound the actual teachings of the great
        explorer of the truth, the master-builder of human happiness. No one
        rejects, dislikes, or avoids pleasure itself, because it is pleasure.
      </Info>
    </main>
  );
}

export function Main3(props) {
  return (
    <main className={props.class}>
      <div className="image4">
        <img src={require("../assetss/Saly-14.svg").default} />
      </div>
      <div className="Info">
        <Info class="Name">You can reach me any time🙂</Info>
        <Info class="Abouts">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor. <br /> <br />
           Twitter:amirhwsin <br /> <br /> Github: amireshoon <br /> <br /> Dribble: amireshoon <br /> <br /> Telegram: GeekDreamer <br /> <br />
          Email: amirhwsin@outlook.com
        </Info>
      </div>
    </main>
  );
}
