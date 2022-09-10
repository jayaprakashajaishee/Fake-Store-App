import React, { useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useDispatch, useSelector } from "react-redux";
import { onGetCategories } from "../redux/actions";

function Categories() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onGetCategories());
  }, [dispatch]);

  const Categories = useSelector((state) => state.categories);
  const { loading, error, categories } = Categories;
  return loading ? (
    <div>loading...</div>
  ) : error ? (
    <div>Error...</div>
  ) : (
    categories && (
      <div className="categories">
        <h3>Categories</h3>
        <FormGroup>
          {categories.map((category, i) => (
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(e) => console.log(e.target.name)}
                  name={category}
                />
              }
              label={category}
              key={i}
            />
          ))}
        </FormGroup>
      </div>
    )
  );
}

export default Categories;
