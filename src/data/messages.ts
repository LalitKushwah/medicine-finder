export interface DistributorInfo {
  address: string;
  city: string;
  distributorID: number;
  distributorName: string;
  medicineName: string;
  phoneNumber: Array<string>;
  state: string;
}


let distributorList: DistributorInfo[] = [
  // {
  //   "address": "Shop No/Plot No.:Plot No. 160-161Pu 4,Sch No. 54,Ab Road,Indore,INDORE (M P),INDORE,452010",
  //   "city": "INDORE",
  //   "distributorID": 189,
  //   "distributorName": "DHRUVI PHARMA PVT LTD (IND)",
  //   "medicineName": "Remdesivir",
  //   "phoneNumber": ['9303277446'],
  //   "state": "Madhya Pradesh"
  // }
];

export const getDistributorList = () => distributorList;

export const setDistributorList = (list: DistributorInfo[])  =>  { distributorList = list };

export const getDistributor = (id: number) => distributorList.find(m => m.distributorID === id);
