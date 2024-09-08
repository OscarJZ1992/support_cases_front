import useLoginBears from './bears/components/Login/Login.bears';
import Alert from './components/Shared/Alert';
import Layout from './components/Shared/Layout';
import Routes from './routers/Routes';
import './App.css';

function App() {
  const { getState } = useLoginBears();

  return (
      <div className='app-container xl:container p-4 flex space-x-3'>
        <Alert />
        <div>
          {getState().value && <Layout />}
        </div>
        <div style={{margin: 0}} className={`w-full ${getState().value ? 'border-gray-700 my-0 mx-0 p-4 container-app-child text-gray-600' : 'flex items-center justify-center m-0 bg-gray-200 shadow-xl'}`}>
          <Routes />
        </div>
      </div>
  )
}

export default App;