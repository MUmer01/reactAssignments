import React from "react";
import axios from "axios";

const CallAPI = () => {
  const [list, setList] = React.useState([]);
  const [singleItem, setSingleItem] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [loading2, setLoading2] = React.useState(false);
  const [newItem, setNewItem] = React.useState("");
  let isMounted = React.useRef(true);

  const getSingleItem = async (id) => {
    try {
      setLoading2(true);
      // const res = await fetch(`http://localhost:3333/list/${id}`);
      // const data = await res.json();

      const res = await axios(`http://localhost:3333/list/${id}`);
      const data = res.data;

      if (isMounted.current) {
        setLoading2(false);
        setSingleItem(data);
      }
    } catch (error) {
      setLoading2(false);
      console.log(error);
    }
  };

  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:3333/list/${id}`);
      setList((prev) => {
        const data = prev.filter((item) => {
          return item.id !== id;
        });
        return data;
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addItem = async () => {
    if (newItem !== "") {
      /* Fetch method start */
      // const res = await fetch("http://localhost:3333/list", {
      //   method: "post",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ item: newItem }),
      // });
      // const data = await res.json();
      /* Fetch method end */

      /* axios 1st method start */
      // const res = await axios({
      //   url: "http://localhost:3333/list",
      //   method: "post",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   data: JSON.stringify({ item: newItem }),
      // });
      // const data = res.data;
      /* axios 1st method end */

      /* axios 2nd method start */
      const res = await axios.post(
        "http://localhost:3333/list",
        JSON.stringify({ item: newItem }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = res.data;
      /* axios 2nd method end */

      if (isMounted.current) {
        setNewItem("");
        setList((prev) => {
          return [...prev, data];
        });
      }
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
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
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
                    <td>|</td>
                    <td>
                      <button onClick={() => deleteItem(item.id)}>
                        Delete Item
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
