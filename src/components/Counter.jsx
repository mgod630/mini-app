import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../feature/counter/counterSlice";

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);
    return (
        <div className="my-4 flex justify-center items-center">
            <button
                onClick={() => dispatch(increment())}
                className="bg-blue-400 text-white rounded px-3 py-2"
            >
                +
            </button>
            <p className="mx-3">{count}</p>
            <button
                onClick={() => dispatch(decrement())}
                className="bg-red-400 text-white rounded px-3 py-2"
            >
                -
            </button>
        </div>
    );
};

export default Counter;
