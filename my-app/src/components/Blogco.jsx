function Blogco(props) {
  return (
    <div className="Blogco">
      <img src={props.img} alt="" />
      <h3>{props.name}</h3>
      <p>{props.detail}</p>
      <span>{props.end}</span>
    </div>
  );
}


export default Blogco;