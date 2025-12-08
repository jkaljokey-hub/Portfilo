import './App.css';
import Head from './Head';
import MaintenanceWebsite from './MyText';

function App() {
  return (
    <div className="h-screen bg-gradient-to-r from-slate-950 from-10% via-slate-820 via-30% to-zinc-600 to-90% flex flex-col items-center justify-start overflow-auto">
      <Head />
      <MaintenanceWebsite />
    </div>
  );
}
export default App;
