import React from "react";
import { Form, Nav, FormControl } from "react-bootstrap";
import { Search } from "@material-ui/icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from "../../../../redux-toolkit/features/Search/SearchSlice";
import { useHistory } from "react-router-dom";

const SearchBar = () => {
  const [phoneNameField, setPhoneNameField] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const handleEnterSearchForm = (e) => {
    setPhoneNameField(e.target.value);
  };

  const handleClickSearchButton = (e) => {
    e.preventDefault();
    dispatch(searchByName(phoneNameField));
    history.push("/search");
  };

  return (
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Bạn muốn mua gì?"
        aria-label="Search"
        value={phoneNameField}
        onChange={(e) => handleEnterSearchForm(e)}
      />
      <Nav.Link
        href="/search"
        className="search"
        onClick={(e) => handleClickSearchButton(e)}
        // value={phoneNameField}
        // onClick={(e) => handleClickSearchForm(e)}
      >
        <Search />
      </Nav.Link>
    </Form>
  );
};

export default SearchBar;
