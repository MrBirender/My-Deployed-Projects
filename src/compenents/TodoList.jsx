import Card from "./Card";

export default function TodoList({ todo, handleDelete, handleEdit }) {
  return (
    <div className="flex flex-wrap gap-4 ml-10 mt-10">
      {todo.map((task, index) => {
        return <Card key={index} index={index} task={task} handleDelete={handleDelete} handleEdit={handleEdit}/>;
      })}
    </div>
  );
}
