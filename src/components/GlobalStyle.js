import { createGlobalStyle } from 'styled-components'
import TodoTemplate from './TodoTemplate'
import TodoHead from './TodoHead'
import TodoList from './TodoList'
import TodoCreate from './TodoCreate'
import { TodoProvider } from '../TodoProvider'

const GlobalStyleComp = createGlobalStyle`
body{
  background: #e9ecef;
}
`

function GlobalStyle() {
    return (
        <TodoProvider>
            <GlobalStyleComp />
            <TodoTemplate>
                <TodoHead />
                <TodoList />
                <TodoCreate />
            </TodoTemplate>
        </TodoProvider>
    )
}

export default GlobalStyle
