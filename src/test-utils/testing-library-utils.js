import {render} from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../app/store'

function AllProviders({ children }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

const renderWithProvider = (ui, options) => render(ui, { wrapper: AllProviders, ...options})

//re-export everything
export * from '@testing-library/react'

//overide render method
export {renderWithProvider as render}

//for detail insutrction: https://testing-library.com/docs/react-testing-library/setup/