import { IconButton, TextField } from '@mui/material'
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { useContext } from 'react';
import {dataContext} from '../../../context/DataContext';

const SearchProducts = () => {
    const {data, SetSearchResults} = useContext(dataContext);
    
    const { register, handleSubmit, reset } = useForm()

    const onSubmit = (formData) => {
        const searchQuery = formData.titleSearch.toLowerCase();
        const filteredResults = data.filter((product) =>product.title.toLowerCase().includes(searchQuery) || product.model.toLowerCase().includes(searchQuery) || product.category.toLowerCase().includes(searchQuery));
        SetSearchResults(filteredResults);
        reset()
      };

  return (
    
    <form onSubmit={handleSubmit(onSubmit)}>
        <TextField id="outlined-basic" label="Buscar..." variant="outlined"  type="text" autoComplete='off' size="small"{...register("titleSearch")} 
          InputProps={{
            endAdornment: (
              <IconButton type="submit" aria-label="Search">
                <ContentPasteSearchIcon/>
              </IconButton>
            ),
          }}/>
    </form>
    
  )
}

export default SearchProducts