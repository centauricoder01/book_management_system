import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  //   NOW WHEN EVER USER REFERSH THE PAGE WE HAVE TO PERSIS THE DATA ON THE UI, SO FOR THAT WE WILL USE SEARCHPARAMS AND KEEP THE DATA IN THE URL
  // "SEARCHPARAMS IS USE TO PERSIS THE DATA EVEN THE PAGE IS REFRESHED.."
  // FIRST WE WILL CHECK IF THERE IS ANY DATA IN THE URL AND BASED ON THAT DATA WE WILL SET YOUR CATEGORY.. LIKE THIS.

  const initial_category = searchParams.getAll("category");
  const initial_sort = searchParams.getAll("sort");

  const [category, setCategory] = useState(initial_category || []);

  const [sort, setSort] = useState(initial_sort[0] || "");

  const handleCheckBox = (e) => {
    const newcategories = [...category];
    if (newcategories.includes(e.target.value)) {
      newcategories.splice(newcategories.indexOf(e.target.value), 1);
    } else {
      newcategories.push(e.target.value);
    }
    setCategory(newcategories);
  };
  //   useSearchParams logic has been applided from here
  useEffect(() => {
    let params = {};
    params.category = category;
    sort && (params.sort = sort);
    setSearchParams(params);
  }, [category, setSearchParams, sort]);

  const Handlesortchange = (e) => {
    setSort(e.target.value);
  };
  return (
    <div>
      <h1>Select Your Category</h1>
      <div
        style={{
          width: "35%",
          margin: "auto",
          textAlign: "left",
        }}
      >
        <div
          style={{
            width: "100%",
            margin: "auto",
          }}
        >
          <input
            type="checkbox"
            value={"Novel"}
            onChange={handleCheckBox}
            checked={category.includes("Novel")} // we are checking if the value is present the category if yes then it is checked otherwise it will not checked.
          />
          <label>Novel</label>
        </div>
        <div
          style={{
            width: "100%",
            margin: "auto",
          }}
        >
          <input
            type="checkbox"
            value={"Science_Fiction"}
            onChange={handleCheckBox}
            checked={category.includes("Science_Fiction")} // we are checking if the value is present the category if yes then it is checked otherwise it will not checked.
          />
          <label>Science Fiction</label>
        </div>
        <div
          style={{
            width: "100%",
            margin: "auto",
          }}
        >
          <input
            type="checkbox"
            value={"Thriller"}
            onChange={handleCheckBox}
            checked={category.includes("Thriller")} // we are checking if the value is present the category if yes then it is checked otherwise it will not checked.
          />
          <label>Thriller</label>
        </div>
        <div
          style={{
            width: "100%",
            margin: "auto",
          }}
        >
          <input
            type="checkbox"
            value={"Motivational"}
            onChange={handleCheckBox}
            checked={category.includes("Motivational")} // we are checking if the value is present the category if yes then it is checked otherwise it will not checked.
          />
          <label>Motivational</label>
        </div>
      </div>
      <h1>Sorting The Book Data</h1>
      <div onChange={Handlesortchange}>
        <input
          type="radio"
          value={"asc"}
          name="sortBy"
          defaultChecked={sort === "asc"}
        />
        <label>Ascending</label>
        <br />
        <input
          type="radio"
          value={"desc"}
          name="sortBy"
          defaultChecked={sort === "desc"}
        />
        <label>Desceding</label>
      </div>
    </div>
  );
};

export default Filter;
