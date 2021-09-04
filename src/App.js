import './App.css';
import SingleUser from './Components/Users/SingleUser';
import SingleGridUser from './Components/Users/GridUsers/SingleGridUser';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

    return (
        <div>
        <SingleGridUser />
        <SingleUser />
        </div>
    )
}

export default App;
