import styled from 'styled-components'
import TodoItem from './TodoItem'

const TodoListBlock = styled.div`
    flex: 1; /* 자신이 차지할 수 있는 영역을 꽉 채움 */
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
    //background: gray; /* 사이즈 조정이 잘 되고 있는지 확인하기 위한 임시 스타일 */
`

function TodoList() {
    return (
        <TodoListBlock>
            <TodoItem text="프로젝트 생성하기" done />
            <TodoItem text="컴포넌트 스타일링 하기" done />
            <TodoItem text="Context 만들기" done={false} />
            <TodoItem text="기능 구현하기" done={false} />
        </TodoListBlock>
    )
}

export default TodoList
