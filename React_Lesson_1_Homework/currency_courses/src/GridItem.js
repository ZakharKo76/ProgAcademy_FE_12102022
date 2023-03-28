function GridItem(props) {
  return (
	  <div className="grid__item">
		  
      <div className="grid__txt">{props.txt}</div>
      <div className="grid__cc">{props.cc}</div>
   	<div className="grid__rate">{props.rate}</div>
    </div>
  );
}
export default GridItem;
