import type { Client } from '@/lib/types'

export const clients: Client[] = [
  { id: 'CL-1001', firstName: 'James', lastName: 'Carter', phone: '+1 202 555 0143', email: 'james.carter@mail.com', address: '218 Oakwood Ave, Springfield', vehicleCount: 2, totalRepairs: 11, totalSpent: 4820, registeredAt: '2022-03-14', status: 'Active' },
  { id: 'CL-1002', firstName: 'Sophia', lastName: 'Nguyen', phone: '+1 202 555 0178', email: 'sophia.nguyen@mail.com', address: '77 Maple Street, Riverside', vehicleCount: 1, totalRepairs: 6, totalSpent: 2135, registeredAt: '2022-06-02', status: 'Active' },
  { id: 'CL-1003', firstName: 'Liam', lastName: 'Okafor', phone: '+1 202 555 0110', email: 'liam.okafor@mail.com', address: '5 Birch Lane, Lakeside', vehicleCount: 3, totalRepairs: 19, totalSpent: 9310, registeredAt: '2021-11-20', status: 'Active' },
  { id: 'CL-1004', firstName: 'Emma', lastName: 'Rossi', phone: '+1 202 555 0199', email: 'emma.rossi@mail.com', address: '412 Cedar Blvd, Hillcrest', vehicleCount: 1, totalRepairs: 3, totalSpent: 780, registeredAt: '2023-01-09', status: 'Active' },
  { id: 'CL-1005', firstName: 'Noah', lastName: 'Meyer', phone: '+1 202 555 0155', email: 'noah.meyer@mail.com', address: '90 Pine Hollow, Greenville', vehicleCount: 2, totalRepairs: 8, totalSpent: 3420, registeredAt: '2022-09-27', status: 'Active' },
  { id: 'CL-1006', firstName: 'Olivia', lastName: 'Santos', phone: '+1 202 555 0122', email: 'olivia.santos@mail.com', address: '333 Elm Court, Fairview', vehicleCount: 1, totalRepairs: 2, totalSpent: 540, registeredAt: '2023-04-18', status: 'Inactive' },
  { id: 'CL-1007', firstName: 'William', lastName: 'Dubois', phone: '+1 202 555 0166', email: 'william.dubois@mail.com', address: '18 Willow Way, Ashford', vehicleCount: 2, totalRepairs: 14, totalSpent: 6120, registeredAt: '2021-07-11', status: 'Active' },
  { id: 'CL-1008', firstName: 'Ava', lastName: 'Kowalski', phone: '+1 202 555 0188', email: 'ava.kowalski@mail.com', address: '256 Aspen Drive, Brookline', vehicleCount: 1, totalRepairs: 5, totalSpent: 1890, registeredAt: '2022-12-01', status: 'Active' },
  { id: 'CL-1009', firstName: 'Benjamin', lastName: 'Silva', phone: '+1 202 555 0133', email: 'benjamin.silva@mail.com', address: '61 Walnut Street, Westport', vehicleCount: 2, totalRepairs: 9, totalSpent: 4075, registeredAt: '2022-02-23', status: 'Active' },
  { id: 'CL-1010', firstName: 'Mia', lastName: 'Ahmed', phone: '+1 202 555 0144', email: 'mia.ahmed@mail.com', address: '7 Sycamore Ln, Danbury', vehicleCount: 1, totalRepairs: 4, totalSpent: 1260, registeredAt: '2023-06-30', status: 'Active' },
  { id: 'CL-1011', firstName: 'Lucas', lastName: 'Fischer', phone: '+1 202 555 0102', email: 'lucas.fischer@mail.com', address: '145 Chestnut Rd, Kingsport', vehicleCount: 3, totalRepairs: 21, totalSpent: 10480, registeredAt: '2020-10-05', status: 'Active' },
  { id: 'CL-1012', firstName: 'Isabella', lastName: 'Moreau', phone: '+1 202 555 0117', email: 'isabella.moreau@mail.com', address: '29 Poplar Ave, Milton', vehicleCount: 1, totalRepairs: 1, totalSpent: 320, registeredAt: '2023-08-12', status: 'Inactive' },
  { id: 'CL-1013', firstName: 'Henry', lastName: 'Petrov', phone: '+1 202 555 0129', email: 'henry.petrov@mail.com', address: '380 Magnolia St, Carmel', vehicleCount: 2, totalRepairs: 12, totalSpent: 5560, registeredAt: '2021-05-16', status: 'Active' },
  { id: 'CL-1014', firstName: 'Charlotte', lastName: 'Bianchi', phone: '+1 202 555 0161', email: 'charlotte.bianchi@mail.com', address: '52 Juniper Blvd, Auburn', vehicleCount: 1, totalRepairs: 7, totalSpent: 2740, registeredAt: '2022-08-04', status: 'Active' },
  { id: 'CL-1015', firstName: 'Daniel', lastName: 'Larsson', phone: '+1 202 555 0175', email: 'daniel.larsson@mail.com', address: '11 Redwood Ct, Newton', vehicleCount: 2, totalRepairs: 10, totalSpent: 4390, registeredAt: '2021-12-19', status: 'Active' },
]

export function getClientById(id: string) {
  return clients.find((client) => client.id === id)
}
