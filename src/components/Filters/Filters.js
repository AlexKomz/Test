import React, { useContext, useState } from "react";
import styles from "./Filters.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import { Context } from "../../state/context";

const Filters = ({ opened, toggleFilterHandler }) => {
  const [filters, setFilters] = useState([
    { label: `Name`, value: `` },
    { label: `Status`, value: `` },
    { label: `Species`, value: `` },
    { label: `Type`, value: `` },
    { label: `Gender`, value: `` }
  ]);

  const { loadData, setQuery } = useContext(Context);

  const classes = [styles.filters];

  if (opened) classes.push(styles.opened);

  const filterChangeHandler = (value, index) => {
    const newFilter = { ...filters[index] };
    newFilter.value = value;
    const newFilters = [...filters];
    newFilters[index] = newFilter;
    setFilters(newFilters);
  };

  const resetHandler = () => {
    const newFilters = [...filters].map(filter => ({ ...filter, value: `` }));
    setFilters(newFilters);

    setQuery(``);
    loadData({ query: `` });

    toggleFilterHandler();
  };

  const submitHandler = () => {
    const query = `&` + filters
      .map(filter => `${filter.label.toLowerCase()}=${filter.value.toLowerCase()}`)
      .join(`&`);

    setQuery(query);
    loadData({ query });

    toggleFilterHandler();
  };

  return (
    <div className={ classes.join(` `) }>
      {
        filters.map((filter, index) => (
          <Input
            key={ `${filter.label}_${index}` }
            index={ index }
            className={ styles.input }
            onChange={ filterChangeHandler }
            { ...filter }/>
        ))
      }
      <div className={ styles.wrapper }>
        <Button onClick={ submitHandler } theme={ `dark` }>Filter</Button>
        <Button onClick={ resetHandler }>Reset</Button>
      </div>
    </div>
  );
};

export default Filters;
