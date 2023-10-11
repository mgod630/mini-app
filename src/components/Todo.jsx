import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Form from "./Form";
import { t } from "i18next";

const Todo = () => {
    if (!localStorage.getItem("todos")) {
        localStorage.setItem("todos", "[]");
    }
    const [newTodo, setNewTodo] = useState("");
    const [todos, setTodos] = useState(
        JSON.parse(localStorage.getItem("todos"))
    );
    const addTodo = (e) => {
        e.preventDefault();
        let newItemId = Math.random();
        let newItemText = newTodo;
        setTodos([...todos, { id: newItemId, text: newItemText }]);
        localStorage.setItem(
            "todos",
            JSON.stringify([...todos, { id: newItemId, text: newItemText }])
        );
        setNewTodo("");
    };
    const deleteItem = (id) => {
        let newList = todos.filter((item) => item.id !== id);
        localStorage.setItem("todos", JSON.stringify(newList));
        setTodos(newList);
    };
    return (
        <div className="flex flex-col items-center">
            <Form className="mb-3" onSubmit={addTodo}>
                <Input
                    placeholder="write your todos"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <Button text={t("Add")} className="bg-blue-500 py-1" />
            </Form>
            <ul>
                {todos.length !== 0 &&
                    todos.map((todo) => {
                        return (
                            <div
                                key={todo.id}
                                className="flex justify-between sm:w-56 w-36 my-2"
                            >
                                <li>{todo.text}</li>
                                <Button
                                    onClick={() => deleteItem(todo.id)}
                                    text="x"
                                    className="bg-red-500"
                                />
                            </div>
                        );
                    })}
            </ul>
        </div>
    );
};

export default Todo;
