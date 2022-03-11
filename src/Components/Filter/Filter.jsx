import React from 'react'
import InputGrey from '../../UI/InputGrey/InputGrey'
import SelectGrey from '../../UI/SelectGrey/SelectGrey'
import classes from './Filter.module.css'

const Filter = ({ filter, setFilter }) => {
  return (
    <div className={classes.wrapper}>
      <InputGrey
        type="text"
        placeholder="Search"
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <SelectGrey
        options={[
          { name: 'By name', value: 'title' },
          { name: 'By description', value: 'body' },
        ]}
        defaultValue="Sorted"
        value={filter.sort}
        onChange={(sortPosts) => setFilter({ ...filter, sort: sortPosts })}
      />
    </div>
  )
}

export default Filter
