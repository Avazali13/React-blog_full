export function Portocon(props) {
  let imglist = props.list;

  return imglist.map((element) => (
    <div className="Porto">
      <div>
        <img src={element.src} alt="" />
      </div>
      <div>
        <p>{props.name}</p>
        <p>{props.children}</p>

      </div>
    </div>
  ));
}
