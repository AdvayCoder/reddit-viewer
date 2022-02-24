import React from 'react';
import { MdOutlineClear } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux';
import { Flex, Icon, Input, IconButton } from '@chakra-ui/react';
import { setSearch, clearSearch, selectSearch } from './searchSlice';

const Search = ({flexGrow}) => {

    const dispatch = useDispatch();
    const search = useSelector(selectSearch);

    const onChange = (e) => {
        dispatch(setSearch(e.target.value));
    }

    const onClear = () => {
        dispatch(clearSearch());
    }

    return (
        
        <Flex align='center' border='3px solid black' borderRadius={10} sx={{flexGrow}} >  
            <Icon
                as={ BiSearch }
                w={10} 
                h={10} 
            />
            <Input
                variant='unstyled' 
                flexGrow={2} 
                placeholder='Search Posts' 
                type='text'
                value={search}
                onChange={onChange}
                id='search'
                _placeholder={{color: '#33363E'}}
            />
            {search?.length > 0 && (
                <IconButton 
                    aria-label="Clear Search"
                    title='Clear Search'
                    icon={<MdOutlineClear size='sm' />}
                    onClick={onClear}
                    variant='ghost'

                />
            )}
        </Flex>
    )
}

export default Search;