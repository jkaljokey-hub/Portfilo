import './App.css';
import Head from './Head';
import Projecttext from './Projecttext';
import Text from './Text';
import TextAlshifa from './TextAlshifa';
import TextFlowes from './TextFlowes';
import Textmyflower from './Textmyflower';
import Texttow from './Texttow';
function App() {
  return (<>
<div class="  bg-gradient-to-r from-slate-950 from-10% via-slate-820 via-30% to-zinc-600 to-90% ... ">


<Head/>
<div className='mr-3 ml-3' >
<div className=' flex h-1/2 justify-center'>
 <div className='w-96 pl-6 pt-3 '><Text/></div>

<div className='w-96 pl-6 mt-16 '><Texttow/></div>
</div>
<Projecttext/>

<TextAlshifa/>
<div className=' mt-10' style={{}}>
<div className='mb- flex justify-end'>
<TextFlowes/>
</div>
</div>
<div className='flex justify-center mt-16'>
<Textmyflower/>
</div>
</div>

</div>

</>
  );
}

export default App;
