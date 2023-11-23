import React, {  useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, switchTodo } from "../redux/modules/todos";
import { useNavigate } from "react-router-dom";

const HomeBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TitleInput = styled.input`
  margin: 10px;
  font-size: 20px;
  padding-left: 10px;
`;

const TitleBox = styled.div`
  margin: 20px;
`;

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Card = styled.div`
  border: 2px solid blue;
  width: 200px;
  height: 200px;
`;

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.todos);


  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addClick = () => {
    console.log(title, content);
    dispatch(addTodo(title, content));
    setTitle("");
    setContent("");
  };

  const deleteClick = (id) => {
    dispatch(deleteTodo(id));
  };

  const switchClick = (id) => {
    dispatch(switchTodo(id));
  };


  return (
    <HomeBox>
      <TitleBox>
        <TitleInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목"
        ></TitleInput>
        <TitleInput
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="할 일"
        ></TitleInput>
        <button onClick={addClick}>추가</button>
      </TitleBox>
      <ListBox>
        할일
        {todos
          .filter((todo) => todo.isDone === false)
          .map((todo, index) => (
            <Card key={index}>
              <div>제목{todo.title}</div>
              <div>내용{todo.content}</div>
              <button onClick={() => deleteClick(todo.id)}>삭제</button>
              <button onClick={() => switchClick(todo.id)}>완료</button>
              <button onClick={() => navigate("/detail:id")}>상세보기</button>
            </Card>
          ))}
      </ListBox>
      <ListBox>
        완료
        {todos
          .filter((todo) => todo.isDone === true)
          .map((todo, index) => (
            <Card key={index}>
              <div>제목{todo.title}</div>
              <div>내용{todo.content}</div>
              <button onClick={() => deleteClick(todo.id)}>삭제</button>
              <button onClick={() => switchClick(todo.id)}>취소</button>
            </Card>
          ))}
      </ListBox>
    </HomeBox>
  );
};

export default Home;
