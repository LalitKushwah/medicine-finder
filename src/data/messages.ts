export interface DistributorInfo {
  address: string;
  city: string;
  distributorID: number;
  distributorName: string;
  medicineName: string;
  phoneNumber: Array<string>;
  state: string;
}


let distributorList: DistributorInfo[] = [];

export const getDistributorList = () => distributorList;

export const setDistributorList = (list: DistributorInfo[])  =>  { distributorList = list };

export const getDistributor = (id: number) => distributorList.find(m => m.distributorID === id);
