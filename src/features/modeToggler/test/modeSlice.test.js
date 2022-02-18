import mode, {toggleMode} from '../modeSlice'

test('returns initial state', ()=>{
    const initialState = mode(undefined, {})
    expect(initialState).toEqual('light')
})

test('toogleMode change initial state to `dark`',()=>{
    const initialState = mode(undefined,toggleMode())
    expect(initialState).toEqual('dark')
})

