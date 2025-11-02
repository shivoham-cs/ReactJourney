import Card from "./components/Card"

function App() {

  return (
    <>
      <div className="cardMain">
        <Card 
          imgUrl="https://placehold.co/100" 
          btnText="Click Me" 
          discr="This card contains some informations related to its origin." 
        />
        <Card 
          imgUrl="https://placehold.co/100" 
          btnText="Click Me" 
          discr="This card contains some informations related to its origin." 
        />
        <Card 
          imgUrl="https://placehold.co/100" 
          btnText="Click Me" 
          discr="This card contains some informations related to its origin." 
        />
        <Card 
          imgUrl="https://placehold.co/100" 
          btnText="Click Me" 
          discr="This card contains some informations related to its origin." 
        />
      </div>
    </>
  )
}

export default App
