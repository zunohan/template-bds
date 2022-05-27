import Menu from "./components/Menu"
import Break1 from "./components/Break1"
import Introduction from "./components/Introduction"
import Spec from "./components/Spec"

import Register from "./components/Register"
import Utility from "./components/Utility"
import Contact from "./components/Contact"

const App: React.FC = () => {
    return (
        <div className="mx-auto">
            <Menu />
            <Break1 />
            {/* <Introduction /> */}
            <Spec />
            <Register />
            <Utility />
            <Contact />
        </div>
    )
}

export default App
