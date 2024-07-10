import TypeIt from "typeit-react"

function App() {

  return (
    <>

  <h1>
    <TypeIt
    options={{
      strings: ['Hi Christian Naira', 'hello'],
      speed: 50, 
      waitUntilVisible: true,
      loop: true,
    }}
    >
    </TypeIt>

  </h1>

  <TypeIt as={"h3"} options={{
      loop: true,
      speed: 60,
    }}>
      This will be typed in an H3 tag.
    </TypeIt>

    </>
  )
}

export default App
