import React, { useContext, useState } from "react";
import styles from "./Filters.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import { Context } from "../../state/context";
import {
  Label,
  EMPTY_VALUE,
  Theme,
  ButtonType
} from "../../constants";

const Filters = ({ opened, toggleFilterHandler }) => {
  const [filters, setFilters] = useState([
    { label: Label.NAME, value: EMPTY_VALUE },
    { label: Label.STATUS, value: EMPTY_VALUE },
    { label: Label.SPECIES, value: EMPTY_VALUE },
    { label: Label.TYPE, value: EMPTY_VALUE },
    { label: Label.GENDER, value: EMPTY_VALUE }
  ]);

  const { loadData, setPage, setQuery } = useContext(Context);

  const classes = [styles.filters];

  if (opened) classes.push(styles.opened);

  const filterChangeHandler = (value, index) => {
    const newFilter = { ...filters[index] };
    newFilter.value = value;
    const newFilters = [...filters];
    newFilters[index] = newFilter;
    setFilters(newFilters);
  };

  const buttonAction = (query) => {
    setPage(1);
    setQuery(query);
    loadData({ page: 1, query });

    toggleFilterHandler();
  };

  const resetHandler = () => {
    const newFilters = [...filters].map(filter => ({ ...filter, value: `` }));
    setFilters(newFilters);

    buttonAction(``);
  };

  const submitHandler = () => {
    const query = `&` + filters
      .map(filter => `${filter.label.toLowerCase()}=${filter.value.toLowerCase()}`)
      .join(`&`);

    buttonAction(query);
  };

  return (
    <form className={ classes.join(` `) } onSubmit={ event => event.preventDefault() }>
      {
        filters.map((filter, index) => (
          <Input
            key={ `${filter.label}_${index}` }
            index={ index }
            className={ styles.input }
            onChange={ filterChangeHandler }
            { ...filter }
          />
        ))
      }
      <div className={ styles.wrapper }>
        <Button onClick={ submitHandler } theme={ Theme.DARK } type={ ButtonType.SUBMIT }>Filter</Button>
        <Button onClick={ resetHandler }>Reset</Button>
      </div>
    </form>
  );
};

export default Filters;
