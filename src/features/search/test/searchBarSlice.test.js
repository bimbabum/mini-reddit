import {configureStore} from '@reduxjs/toolkit'
import searchTerm, { setSearchTerm } from '../searchBarSlice'


test('setSearchTerm',()=>{
    const store = configureStore(
        {reducer:
            searchTerm
        }
    )
    store.dispatch(setSearchTerm('party'))
    const expectedState = 'party'
    const state = store.getState()
    expect(state).toEqual(expectedState)
})