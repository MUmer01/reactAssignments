import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const capitalizeFLetter = (string) => {
  return string[0].toUpperCase() + string.slice(1);
};
const Home = () => {
  const [loading, setLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(20);
  const [list, setList] = React.useState([]);

  const getData = React.useCallback(async () => {
    setLoading(true);
    try {
      const data = localStorage.getItem(`users?l=${limit}&p=${page}`);
      if (data) {
        setList(JSON.parse(data));
      } else {
        const res = await axios(
          `https://dummyapi.io/data/api/user?limit=${limit}&page=${page}`,
          {
            headers: {
              "app-id": "60df955aaa692a07e8c549f2",
            },
          }
        );
        localStorage.setItem(
          `users?l=${limit}&p=${page}`,
          JSON.stringify(res.data.data)
        );
        setList(res.data.data);
      }
    } catch (error) {}
    setLoading(false);
  }, [page, limit]);

  React.useEffect(() => {
    getData();
  }, [getData]);

  React.useEffect(() => {
    const p = localStorage.getItem(`page`);
    const l = localStorage.getItem(`limit`);
    if (p) setPage(parseInt(p));
    if (l) setLimit(l);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    localStorage.setItem(`page`, page);
    localStorage.setItem(`limit`, limit);
  }, [page, limit]);

  return (
    <div style={{ width: 960, margin: "auto", marginTop: 50 }}>
      <div
        style={{
          marginBottom: 50,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <button
            disabled={page === 1 || loading}
            onClick={() => {
              setPage((p) => p - 1);
            }}
            className="btn btn-primary"
          >
            Prev
          </button>
          <b>{` << ${page} >> `}</b>
          <button
            disabled={loading}
            onClick={() => {
              setPage((p) => parseInt(p) + 1);
            }}
            className="btn btn-primary"
          >
            Next
          </button>
        </div>
        <div>
          <select
            disabled={loading}
            onChange={(e) => {
              setLimit(e.target.value);
            }}
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              border: "1px solid",
              borderRadius: "5px",
              padding: "10px 15px 10px 10px",
            }}
            value={limit}
          >
            <option>10</option>
            <option>20</option>
            <option>30</option>
            <option>40</option>
            <option>50</option>
          </select>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {loading ? (
          <h4>Loading...</h4>
        ) : list?.length ? (
          list.map((user, i) => {
            return (
              <div
                key={i}
                style={{
                  width: "20%",
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: 30,
                }}
              >
                <div
                  style={{
                    width: "80%",
                    padding: 10,
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  }}
                >
                  <img
                    src={user.picture}
                    alt={user.firstName}
                    style={{ width: "100%" }}
                  />
                  <p style={{ height: 35 }}>
                    <Link
                      style={{
                        fontWeight: "bold",
                        color: "blue",
                        textDecoration: "none",
                      }}
                      to={`/user/${user.id}`}
                    >
                      {capitalizeFLetter(
                        `${user.title}. ${user.firstName} ${user.lastName}`
                      )}
                    </Link>
                  </p>
                  <p style={{ wordBreak: "break-all" }}>{user.email}</p>
                </div>
              </div>
            );
          })
        ) : null}
      </div>
    </div>
  );
};

export { Home };
