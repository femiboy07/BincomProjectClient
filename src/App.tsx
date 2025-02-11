import './App.css'
import { Link } from 'react-router';
import { SelectContent, SelectTrigger, Select } from './components/Select';
import { useQuery } from '@tanstack/react-query';
import { fetchPollingUnits, pollingUnitProps } from './services/api_service';
import { baseUrl } from './services/api';


function App() {

  const { data, isLoading } = useQuery({
    queryKey: ['pollingNames'],
    queryFn: () => fetchPollingUnits()
  });

  const { data: lga, isLoading: lgaLoading } = useQuery({
    queryKey: ['Lga'],
    queryFn: async () => {
      const res = await baseUrl.get('lgas');
      return res.data;
    }
  })

  if (isLoading && lgaLoading) {
    return <div>loading</div>
  }

  const resultdata = data;

  return (
    <div className='max-w-full mx-auto w-full h-full flex flex-col  items-center justify-center'>
      <h1 className='text-center'>Welcome</h1>
      <div className='flex flex-col mx-auto w-full justify-center items-center'>
        <Select >
          <SelectTrigger className='w-64 text-black ' title='polling-point name' content='Choose polling point' >
            Select Polling unit
          </SelectTrigger>
          <SelectContent className='flex flex-col w-full  overflow-y-auto'>
            {resultdata.map((item: pollingUnitProps, index: number) => (
              <Link className='block  w-full ' key={index} to={`polling_unit_results/${item.polling_unit_uniqueid}`}>
                {item.polling_unit_name}
              </Link>
            ))}
          </SelectContent>
        </Select>


      </div>
      <Select>
        <SelectTrigger className='w-64 text-black ' title='polling-point name' content='Choose polling point'>Summed Total,select lga</SelectTrigger>
        <SelectContent className='flex flex-col w-full  overflow-y-auto'>
          {lga.map((item, index: number) => (
            <Link key={index} to={`lga-results/${item.lga_id}`} className='z-[2] block w-full'>
              {item.lga_name}
            </Link>
          ))}
        </SelectContent>
      </Select>

      <Link to={'newpollingunit'}>
        new-polling-unit
      </Link>
    </div >
  )
}

export default App
