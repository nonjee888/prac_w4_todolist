import React , {useState} from "react";
import { useDispatch } from "react-redux";
import { create_todos } from "../../redux/modules/todo";
import styled from "styled-components";

let id=2;
function Layout() {      

    // const todo = useSelector((state) => state.todo)
    
    const dispatch = useDispatch();
    
    const [inputTodo, setInputTodo] = useState({
        id:2,
        title: "",
        body: "",
        isDone: false
    })
    
    const onChangeHandler=(event)=>{
        const {value, name} = event.target
        // console.log(value,name)
        setInputTodo({...inputTodo, [name]: value})
    }

    const onSubmitHandler=(event)=>{
        dispatch(create_todos({...inputTodo, id:id++}))
        event.preventDefault()
        setInputTodo({...inputTodo, title: '', body: ''})
    }

    return (
    <div>
        <Layout1>
            <Header>
                <HeaderText>GETTING BETTER</HeaderText>
            </Header>

            <Form onSubmit={onSubmitHandler}>
                <Inputgroup>
                    <FormLabel>
                        제목</FormLabel>
                    <Addinput1
                        type='text'
                        name='title'
                        value={inputTodo.title}        //input1의 value값은 inputTodo의 title
                        onChange={onChangeHandler}
                        required
                        />
                    <FormLabel>
                        내용</FormLabel>
                    <Addinput2
                        type="text"
                        name="body"
                        value={inputTodo.body}         //input2의 value값은 inputTodo의 body
                        onChange={onChangeHandler}
                        />
                </Inputgroup>
            <Button
                    className="addTodos"
                    type="submit"
                >
                    추가하기
                </Button>
                </Form>        
        </Layout1>
        </div>
    )

}

export default Layout;

const Layout1 = styled.div`
    margin : 0 auto;
    max-width : 1200px;
    min-width : 800px;
`

const Header = styled.div`

    display: flex;
    justify-content: space-between;
    height: 50px;
    align-items: center;
    padding-inline: 20px;
    max-width : 1200px;
    background-image : url("https://u7.uidownload.com/vector/141/115/vector-gradient-wallpaper-background-eps.jpg");
    background-size : cover;
    font-family:'Nanum Gothic', sans-serif;
    @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');
`;

const HeaderText = styled.div`
    text-align: right;
    color: white;
`

const Form = styled.form`
    background-color:  #b9c2e8;
    height: 50px;
    margin: 0 auto;
    padding: 30px;
    justify-content: space-between;
    display :flex;
    align-items: center;
    background-image : url("https://u7.uidownload.com/vector/141/115/vector-gradient-wallpaper-background-eps.jpg");
    background-size : cover;
`;

const Inputgroup = styled.div`
    align-items: center;
    display: flex;
    gap: 20px;
    font-family:'Nanum Gothic', sans-serif;
    @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');
`;

const FormLabel = styled.label`
    font-size: 16px;
    font-weight: 700;
    color: white;
    font-family:'Nanum Gothic', sans-serif;
    @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');
`;
const Addinput1 = styled.input`
    height: 40px;
    width: 240px;
    border: none;
    border-radius: 12px;
`;
const Addinput2 = styled.input`
    height: 40px;
    width: 240px;
    border: none;
    border-radius: 12px;
`;
const Button = styled.button`
    background-color:  #261957;
    border: none;
    border-radius: 10px;
    font-weight: 700;
    height: 40px;
    width: 140px;
    color: white;
`;