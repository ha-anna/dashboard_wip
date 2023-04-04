import Note from "./components/Note"
import { DragDropContext } from 'react-beautiful-dnd';


function App() {
  const onDragEnd: any = useCallback(() => {
    console.log('hu')
  }, []);


  return (
    <div className="dashboard">
      <DragDropContext
      onDragEnd={onDragEnd}
    >
      <Note />
    </DragDropContext>
    </div>
  )
}

export default App
