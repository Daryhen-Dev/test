import './App.css'
import { InputText } from 'primereact/inputtext';
 
function App() {

  return (
    <div className='container'>

<span className="p-float-label">
    <InputText id="in" className='inputText' />
    <label htmlFor="in">Username</label>
</span>
 
        </div>
  )
}

export default App
