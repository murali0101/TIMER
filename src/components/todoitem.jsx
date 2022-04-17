import "../App.css";
function TodoItem({ val }) {
  return (
    <div className="item">
      {val.map((ele,ind) => {
        return <div  className="whiteItem" key={ind}>{ele}</div>;
      })}
    </div>
  );
}
export default TodoItem;
