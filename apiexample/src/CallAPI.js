import React from "react";

const CallAPI = () => {
  const [list, setList] = React.useState([]);
  const [singleItem, setSingleItem] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [loading2, setLoading2] = React.useState(false);
  const [newItem, setNewItem] = React.useState("");
  let isMounted = React.useRef(true);

  const getSingleItem = (id) => {
    setLoading2(true);
    fetch(`http://localhost:3333/list/${id}`)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        if (isMounted.current) {
          setLoading2(false);
          setSingleItem(data);
        }
      });
  };

  const addItem = () => {
    if (newItem !== "") {
      fetch("http://localhost:3333/list", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ item: newItem }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (isMounted.current) {
            setNewItem("");
            setList((prev) => {
              return [...prev, data];
            });
          }
        });
    }
  };

  React.useEffect(() => {
    isMounted.current = true;
    setLoading(true);

    fetch("http://localhost:3333/list")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (isMounted.current) {
          setList(data);
          setLoading(false);
        }
      });

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>My List</p>
          <table>
            <tbody>
              {list.map((item) => {
                return (
                  <tr key={`list-${item.id}`}>
                    <td>{item.id}</td>
                    <td>|</td>
                    <td>{item.item}</td>
                    <td>|</td>
                    <td>
                      <button onClick={() => getSingleItem(item.id)}>
                        Get Single
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div>
            <input
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
            />
            <button onClick={addItem}>Submit</button>
          </div>
        </>
      )}

      {loading2 ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>Item</p>
          <table>
            <tbody>
              <tr key={`list-${singleItem.id}`}>
                <td>{singleItem.id}</td>
                <td>|</td>
                <td>{singleItem.item}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default CallAPI;
