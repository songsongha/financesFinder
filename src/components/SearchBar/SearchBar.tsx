import { Box, InputAdornment, TextField } from '@mui/material'
import { Search } from '@mui/icons-material'
import { debounce } from 'lodash'

export function SearchBar({ setSearchQuery }: { setSearchQuery: React.Dispatch<React.SetStateAction<string>> }) {
    const handleSearch = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value)
    }, 300)
    return (
        <Box className='search'>
            <TextField
                label='Search by Name or Symbol'
                id='search'
                placeholder='i.e. AAPL'
                size='small'
                InputProps={{
                    startAdornment: (
                        <InputAdornment position='start'>
                            <Search />
                        </InputAdornment>
                    )
                }}
                onInput={handleSearch}
            />
        </Box>
    )
}

export default SearchBar
