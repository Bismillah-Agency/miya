import { Education } from 'internal/schemas';

const bodyJson = {
  patient: {
    idType: 'PAS',
    idNumber: 'aa',
    firstName: 'aa',
    lastName: 'aa',
    birthPlace: 'aa',
    birthDate: '2022-11-14',
    gender: 'MALE',
    addressDets: [
      {
        countryId: 'ADA',
        provinceId: '12',
        districtId: '1202',
      },
      {
        countryId: 'AFG',
        provinceId: 'Jawa Barat',
        districtId: 'Bandung',
        subDistrictId: 'Cimahi Tengah',
        rt: '11',
        rw: '11',
        postalCode: '11',
        addressLine: '11',
      },
    ],
    contact: {
      telecom: {
        phone: '11',
        email: 'asdasd',
      },
    },
    religion: 'Kristen',
    education: 'EDU-005',
    job: 'JOB-005',
  },
  fixMeLater: 'aa',
  escortName: '1',
};

export class CreateEncounterDto {}
