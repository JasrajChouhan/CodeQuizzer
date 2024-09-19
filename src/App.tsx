import { ModeToggle } from './components/mode-toggle';
import { Button } from './components/ui/button';
import './index.css';
function App() {
  return (
    <div>
      <ModeToggle />

      <Button variant={'outline'} className='ml-5 mt-0' >
        Creat
      </Button>

    </div>
  );
}

export default App;
