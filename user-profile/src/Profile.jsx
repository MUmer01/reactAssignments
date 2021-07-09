import React from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const capitalizeFLetter = (string) => {
  return string[0].toUpperCase() + string.slice(1);
};
const date = (t, s) => {
  let a = [{ day: "numeric" }, { month: "short" }, { year: "numeric" }];
  function format(m) {
    let f = new Intl.DateTimeFormat("en", m);
    return f.format(t);
  }
  return a.map(format).join(s);
};

const Profile = () => {
  const params = useParams();
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState({});

  const getData = React.useCallback(async () => {
    setLoading(true);
    try {
      const data = localStorage.getItem(`user?id=${params.id}`);
      if (data) {
        setUser(JSON.parse(data));
      } else {
        const res = await axios(
          `https://dummyapi.io/data/api/user/${params.id}`,
          {
            headers: {
              "app-id": "60df955aaa692a07e8c549f2",
            },
          }
        );
        localStorage.setItem(`user?id=${params.id}`, JSON.stringify(res.data));
        setUser(res.data);
      }
    } catch (error) {}
    setLoading(false);
  }, [params.id]);

  React.useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div style={{ width: 960, margin: "auto", marginTop: 50 }}>
      <div
        style={{
          marginBottom: 50,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link
          to="/"
          style={{ textDecoration: "none", color: "blue", fontWeight: "bold" }}
        >
          Goto Home
        </Link>
      </div>
      {loading ? (
        <h4 style={{ textAlign: "center" }}>Loading...</h4>
      ) : user?.id ? (
        <div
          style={{
            boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)",
            padding: 20,
            borderRadius: 10,
            display: "flex",
          }}
        >
          <img
            src={user.picture}
            alt={user.firstName}
            style={{ width: 240, marginRight: 80 }}
          />

          <div>
            <div>{user.id}</div>
            <div>
              <b>
                {capitalizeFLetter(
                  `${user.title}. ${user.firstName} ${user.lastName}`
                )}
              </b>
            </div>
            <div>
              <b>Gender: </b>
              {user.gender}
            </div>
            <div>
              <b>Date Of Birth: </b>
              {date(new Date(user.dateOfBirth), "-")}
            </div>
            <div>
              <b>Register Date: </b>
              {date(new Date(user.registerDate), "-")}
            </div>
            <br />
            <div>
              <b>Email: </b>
              {user.email}
            </div>
            <div>
              <b>Phone: </b>
              {user.phone}
            </div>
            <br />
            <div>
              <b>Address: </b>
              <br />
              {user.location.country}, {user.location.state},{" "}
              {user.location.city}
              <br />
              {user.location.street}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export { Profile };
