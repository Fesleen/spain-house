import React from 'react'
import styles from "./style.module.css"
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
  {
    value: 'USD',
    label: 'Все типы',
  },
  {
    value: 'EUR',
    label: 'Тип недвижимости',
  },
  {
    value: 'BTC',
    label: 'Квартира',
  },
  {
    value: 'JPY',
    label: 'Таунхаус',
  },
  {
    value: 'DM',
    label: 'Дом',
  },
];

const Select = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.cards}>
          <Box sx={{ '& > :not(style)': { m: 1 } }} className={styles.Box}>
            <FormControl className={styles.input} variant="standard">
              <InputLabel htmlFor="input-with-icon-adornment">
                Артикул
              </InputLabel>
              <Input
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>
          <TextField className={styles.select}
            id="outlined-select-currency-native"
            select
            defaultValue="EUR"
            SelectProps={{
              native: true,
            }}
          >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          <div className={styles.card__button}>
          <button className={styles.button}>поиск</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Select