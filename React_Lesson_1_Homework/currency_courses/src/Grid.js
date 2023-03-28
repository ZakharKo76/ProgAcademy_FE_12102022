import data from "./data";
import GridItem from "./GridItem";

function Grid() {
  return (
    <>
      {data.map((item) => (
        <GridItem key={Math.random()} txt={item.txt} cc={item.cc} rate={item.rate} />
      ))}
    </>
  );
}
export default Grid;
