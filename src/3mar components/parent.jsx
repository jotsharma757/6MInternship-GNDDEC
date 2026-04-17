import Child from "./children";

function parent() {

  const message = "Hello Child Component";

  return (
    <div>
      <h1>Parent Component</h1>

      <Child text={message} />

    </div>
  );
}

export default parent;