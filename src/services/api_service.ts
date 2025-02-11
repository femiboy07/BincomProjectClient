import { baseUrl } from "./api";



export interface pollingUnitProps{
    polling_unit_uniqueid:number;
    polling_unit_name:string;
}

export async function fetchPollingUnits(){
    
    const getPollingUnit = await baseUrl.get('pollingUnitNames');
    const data =  getPollingUnit.data;
    console.log(data)
    
    return data;
  
}  