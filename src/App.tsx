import TypeIt from "typeit-react"



function App() {

  const SuperStrong = ({children}) => {
    return <strong style={{fontSize: '80px'}}>{children}</strong>
  };

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

    <TypeIt>
      Weak text. <SuperStrong>Super strong text.</SuperStrong>
    </TypeIt>

    </>
  )
}

export default App
