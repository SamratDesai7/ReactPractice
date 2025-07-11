import "./App.css";

function App() {
  let arr = [
    { Name: "samrat", Address: {add : "hii",add2:"hii2"}},
    { Name: "samrat", Address: { add: "hello", add2: "hello2" } },
  ];

  return (
    <>
      <table border={3}>
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((element, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{element.Name}</td>
              <td>
                <tr>
                  <td>{element.Address.add}</td>
                  <td>{element.Address.add2}</td>
                </tr>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
