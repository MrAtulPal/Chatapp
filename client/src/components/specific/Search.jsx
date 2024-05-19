import { Dialog, DialogTitle, Stack, TextField } from '@mui/material'
import React from 'react'
import { useInputValidation } from '6pp'

const Search = () => {
  const search = useInputValidation()
  return (
    <Dialog open>
      <Stack p={'2rem'} direction={'column'} width={'25rem'}>
        <DialogTitle textAlign={'center'}>Find People</DialogTitle>
        <TextField label="" value={search.value} onChange={search.changeHandler}/>
      </Stack>
    </Dialog>
  )
}

export default Search