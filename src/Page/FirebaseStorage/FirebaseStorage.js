import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import firebase from "../../utils/firebase";
import { v4 as uuidv4 } from "uuid";
const FirebaseStorage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const ref = firebase.firestore().collection("Sach");
  console.log(ref);
  const fetchDataFirebase = () => {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const item = [];
      querySnapshot.forEach((doc) => {
        item.push(doc.data());
      });
      setData(item);
      setLoading(false);
    });
  };
  const addSchool = (newSchool) => {
    ref
      //.doc():sử dụng nếu vì lý do nào đó mà bạn muốn firestore tạo id
      .doc(newSchool.id)
      .set(newSchool)
      .catch((err) => {
        console.error(err);
      });
  };
  const deleteSchool = (item) => {
    ref
      .doc(item.id)
      .delete()
      .catch((err) => {
        console.error(err);
      });
  };
  function editSchool(updatedSchool) {
    setLoading();
    ref
      .doc(updatedSchool.id)
      .update(updatedSchool)
      .catch((err) => {
        console.error(err);
      });
  }
  useEffect(() => {
    fetchDataFirebase();
  }, []);
  if (loading) return <h2>Loading...😶</h2>;
  return (
    <div className="container">
      <div className="inputBox">
        <h3>Add New</h3>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea value={desc} onChange={(e) => setDesc(e.target.value)} />
        <button onClick={() => addSchool({ title, desc, id: uuidv4() })}>
          Submit
        </button>
      </div>
      <hr />
      <h1>Fetch data Firebase 🙂</h1>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.author}</h2>
          <p>{item.title}</p>
          <button onClick={() => deleteSchool(item)}>X</button>
          <button
            onClick={() =>
              editSchool({
                title: item.title,
                desc,
                id: item.id,
              })
            }
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
};

export default FirebaseStorage;
