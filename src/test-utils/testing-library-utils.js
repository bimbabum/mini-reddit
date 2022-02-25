import {render} from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../app/store'
import {BrowserRouter} from 'react-router-dom'

function AllProviders({ children }) {
    return (
        <BrowserRouter>
            <Provider store={store}>
                {children}
            </Provider>
        </BrowserRouter>
    )
}

const renderWithProvider = (ui, options) => render(ui, { wrapper: AllProviders, ...options})

//re-export everything
export * from '@testing-library/react'

//overide render method
export {renderWithProvider as render}

//for detail instruction: https://testing-library.com/docs/react-testing-library/setup/