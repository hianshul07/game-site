import ListGroup from "./components/ListGroup"

// import Message from "./Message"

const App = () => {
  const hehes = ['hehe', 'haha', 'hihi'];

  return (
    <div>
      <ListGroup items={hehes} heading={'cities'}/>
    </div>
  )
}
export default App