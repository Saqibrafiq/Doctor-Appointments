import { Appointment, User } from '../redux/types';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import Image from '../assets/images/user-12.jpg';

export const user: User = {
  id: uuidv4(),
  firstName: 'Saqib',
  lastName: 'Rafiq',
  email: 'Abc@abc.com',
  memberSince: moment(new Date()).subtract(10, 'days').calendar(),
  dateOfBirth: '08/08/1992',
  insurance: 'Aok',
  img: Image,
};

export const initialAppointments: Appointment[] = [
  {
    id: uuidv4(),
    title: 'Dentist',
    date: moment(new Date()).format('MMM Do YY'),
    time: moment(new Date().getTime()).format('LT'),
    user: `${user.firstName} ${user.lastName}`,
    doctor: 'Dr. Patrick',
    description: 'remember to bring x-ray',
  },
  {
    id: uuidv4(),
    title: 'General Practitioner',
    date: moment(new Date()).format('MMM Do YY'),
    time: moment(new Date().getTime()).format('LT'),
    user: `${user.firstName} ${user.lastName}`,
    doctor: 'Dr. Michael',
    description: 'ask for prescription',
  },
  {
    id: uuidv4(),
    title: 'Ophtalmologist',
    date: moment(new Date()).format('MMM Do YY'),
    time: moment(new Date().getTime()).format('LT'),
    user: `${user.firstName} ${user.lastName}`,
    doctor: 'Dr. John Michael',
    description: 'need new glasses',
  },
];
