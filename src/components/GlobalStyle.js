import { createGlobalStyle } from 'styled-components'
import TodoTemplate from './TodoTemplate'
import TodoHead from './TodoHead'
import TodoList from './TodoList'
import TodoCreate from './TodoCreate'

const GlobalStyleComp = createGlobalStyle`
body{
  background: #e9ecef;
}
`

function GlobalStyle() {
    return (
        <>
            <GlobalStyleComp />
            <TodoTemplate>
                <TodoHead />
                <TodoList />
                <TodoCreate />
            </TodoTemplate>
        </>
    )
}

export default GlobalStyle
