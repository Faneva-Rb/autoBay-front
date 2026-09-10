import type { RepairOrder } from '@/lib/types'

export const repairOrders: RepairOrder[] = [
  {
    id: 'RO-5001', number: 'RO-2025-0001', clientName: 'James Carter', vehicle: 'BMW 320i', registration: 'CA-119-RT',
    description: 'Engine misfire and rough idle at low RPM', diagnosis: 'Faulty ignition coils on cylinders 2 and 4, worn spark plugs.',
    mechanicName: 'Marcus Bell', priority: 'High', startDate: '2025-02-18', estimatedCompletion: '2025-02-25', progress: 65, status: 'In Progress',
    services: [
      { description: 'Ignition system diagnostic', quantity: 1, unitPrice: 90 },
      { description: 'Coil pack replacement labor', quantity: 2, unitPrice: 60 },
    ],
    parts: [
      { name: 'Ignition Coil', reference: 'IGC-0421', quantity: 2, unitPrice: 78 },
      { name: 'Spark Plug Set', reference: 'SPK-1180', quantity: 1, unitPrice: 64 },
    ],
    laborCost: 210, discount: 0, taxRate: 0.08,
  },
  {
    id: 'RO-5002', number: 'RO-2025-0002', clientName: 'Sophia Nguyen', vehicle: 'Mercedes-Benz C200', registration: 'CA-773-BN',
    description: 'Squeaking noise when braking', diagnosis: 'Front brake pads worn below 2mm, rotors within tolerance.',
    mechanicName: 'Tom Weber', priority: 'Medium', startDate: '2025-02-20', estimatedCompletion: '2025-02-22', progress: 100, status: 'Completed',
    services: [{ description: 'Brake system inspection', quantity: 1, unitPrice: 55 }],
    parts: [{ name: 'Front Brake Pad Set', reference: 'BRK-3302', quantity: 1, unitPrice: 120 }],
    laborCost: 130, discount: 15, taxRate: 0.08,
  },
  {
    id: 'RO-5003', number: 'RO-2025-0003', clientName: 'Liam Okafor', vehicle: 'Renault Clio', registration: 'CA-566-ZX',
    description: 'Check engine light and loss of power', diagnosis: 'Clogged EGR valve and dirty MAF sensor causing lean condition.',
    mechanicName: 'Aisha Khan', priority: 'High', startDate: '2025-02-19', estimatedCompletion: '2025-02-26', progress: 40, status: 'Waiting for Parts',
    services: [
      { description: 'Full engine diagnostic', quantity: 1, unitPrice: 110 },
      { description: 'EGR cleaning', quantity: 1, unitPrice: 85 },
    ],
    parts: [{ name: 'MAF Sensor', reference: 'MAF-2091', quantity: 1, unitPrice: 145 }],
    laborCost: 195, discount: 0, taxRate: 0.08,
  },
  {
    id: 'RO-5004', number: 'RO-2025-0004', clientName: 'Noah Meyer', vehicle: 'Toyota RAV4', registration: 'CA-712-LM',
    description: 'Hybrid warning light on dashboard', diagnosis: 'Hybrid battery cooling fan obstructed, module recalibration required.',
    mechanicName: 'Priya Nair', priority: 'Urgent', startDate: '2025-02-21', estimatedCompletion: '2025-02-24', progress: 80, status: 'In Progress',
    services: [
      { description: 'Hybrid system diagnostic', quantity: 1, unitPrice: 130 },
      { description: 'Battery module recalibration', quantity: 1, unitPrice: 160 },
    ],
    parts: [{ name: 'Cooling Fan Assembly', reference: 'FAN-7712', quantity: 1, unitPrice: 210 }],
    laborCost: 290, discount: 0, taxRate: 0.08,
  },
  {
    id: 'RO-5005', number: 'RO-2025-0005', clientName: 'William Dubois', vehicle: 'Peugeot 3008', registration: 'CA-876-TV',
    description: 'Routine 60,000 km service', diagnosis: 'Scheduled maintenance, all fluids and filters due for replacement.',
    mechanicName: 'Owen Murphy', priority: 'Low', startDate: '2025-02-22', estimatedCompletion: '2025-02-23', progress: 100, status: 'Completed',
    services: [{ description: 'Full service labor', quantity: 1, unitPrice: 180 }],
    parts: [
      { name: 'Oil Filter', reference: 'OIL-1002', quantity: 1, unitPrice: 18 },
      { name: 'Air Filter', reference: 'AIR-2204', quantity: 1, unitPrice: 32 },
      { name: 'Engine Oil 5W-30', reference: 'OIL-5030', quantity: 5, unitPrice: 12 },
    ],
    laborCost: 180, discount: 0, taxRate: 0.08,
  },
  {
    id: 'RO-5006', number: 'RO-2025-0006', clientName: 'Ava Kowalski', vehicle: 'Renault Megane', registration: 'CA-153-WX',
    description: 'Clunking noise over bumps', diagnosis: 'Worn front control arm bushings and one leaking shock absorber.',
    mechanicName: 'Tom Weber', priority: 'Medium', startDate: '2025-02-23', estimatedCompletion: '2025-02-27', progress: 25, status: 'In Progress',
    services: [{ description: 'Suspension repair labor', quantity: 1, unitPrice: 240 }],
    parts: [
      { name: 'Control Arm Bushing', reference: 'SUS-4401', quantity: 2, unitPrice: 45 },
      { name: 'Shock Absorber', reference: 'SUS-8890', quantity: 1, unitPrice: 130 },
    ],
    laborCost: 240, discount: 20, taxRate: 0.08,
  },
  {
    id: 'RO-5007', number: 'RO-2025-0007', clientName: 'Benjamin Silva', vehicle: 'Ford Kuga', registration: 'CA-627-YZ',
    description: 'Intermittent starting issue', diagnosis: 'Weak battery and corroded starter connections.',
    mechanicName: 'Diego Ramirez', priority: 'Medium', startDate: '2025-02-22', estimatedCompletion: '2025-02-24', progress: 90, status: 'In Progress',
    services: [{ description: 'Electrical diagnostic', quantity: 1, unitPrice: 95 }],
    parts: [{ name: 'Car Battery 70Ah', reference: 'BAT-7000', quantity: 1, unitPrice: 165 }],
    laborCost: 95, discount: 0, taxRate: 0.08,
  },
  {
    id: 'RO-5008', number: 'RO-2025-0008', clientName: 'Mia Ahmed', vehicle: 'Hyundai i30', registration: 'CA-741-CD',
    description: 'AC not cooling', diagnosis: 'Refrigerant low due to slow leak at condenser fitting.',
    mechanicName: 'Nathan Cole', priority: 'Low', startDate: '2025-02-23', estimatedCompletion: '2025-02-25', progress: 10, status: 'Pending',
    services: [{ description: 'AC recharge & leak test', quantity: 1, unitPrice: 120 }],
    parts: [{ name: 'AC Condenser', reference: 'AC-5540', quantity: 1, unitPrice: 190 }],
    laborCost: 120, discount: 0, taxRate: 0.08,
  },
  {
    id: 'RO-5009', number: 'RO-2025-0009', clientName: 'Lucas Fischer', vehicle: 'Tesla Model 3', registration: 'CA-508-EF',
    description: 'Software update and tire rotation', diagnosis: 'Firmware update available, tires show even wear.',
    mechanicName: 'Priya Nair', priority: 'Low', startDate: '2025-02-24', estimatedCompletion: '2025-02-24', progress: 0, status: 'Draft',
    services: [
      { description: 'Software update', quantity: 1, unitPrice: 60 },
      { description: 'Tire rotation', quantity: 1, unitPrice: 40 },
    ],
    parts: [],
    laborCost: 100, discount: 0, taxRate: 0.08,
  },
  {
    id: 'RO-5010', number: 'RO-2025-0010', clientName: 'Henry Petrov', vehicle: 'BMW 520d', registration: 'CA-284-IJ',
    description: 'Timing belt replacement due', diagnosis: 'Preventive timing belt and water pump replacement at interval.',
    mechanicName: 'Marcus Bell', priority: 'High', startDate: '2025-02-25', estimatedCompletion: '2025-02-28', progress: 0, status: 'Pending',
    services: [{ description: 'Timing belt kit labor', quantity: 1, unitPrice: 420 }],
    parts: [
      { name: 'Timing Belt Kit', reference: 'TBK-9001', quantity: 1, unitPrice: 280 },
      { name: 'Water Pump', reference: 'WPP-3320', quantity: 1, unitPrice: 95 },
    ],
    laborCost: 420, discount: 0, taxRate: 0.08,
  },
  {
    id: 'RO-5011', number: 'RO-2025-0011', clientName: 'Charlotte Bianchi', vehicle: 'Mercedes-Benz A180', registration: 'CA-617-KL',
    description: 'Dashboard warning lights flickering', diagnosis: 'Faulty body control module, intermittent ground fault.',
    mechanicName: 'Diego Ramirez', priority: 'Medium', startDate: '2025-02-20', estimatedCompletion: '2025-02-26', progress: 55, status: 'Waiting for Parts',
    services: [{ description: 'Electrical system diagnostic', quantity: 1, unitPrice: 110 }],
    parts: [{ name: 'Body Control Module', reference: 'BCM-6612', quantity: 1, unitPrice: 340 }],
    laborCost: 150, discount: 0, taxRate: 0.08,
  },
  {
    id: 'RO-5012', number: 'RO-2025-0012', clientName: 'Daniel Larsson', vehicle: 'Volkswagen Passat', registration: 'CA-390-AB',
    description: 'Oil leak from engine', diagnosis: 'Valve cover gasket leaking, needs replacement.',
    mechanicName: 'Owen Murphy', priority: 'Medium', startDate: '2025-02-15', estimatedCompletion: '2025-02-18', progress: 100, status: 'Completed',
    services: [{ description: 'Gasket replacement labor', quantity: 1, unitPrice: 160 }],
    parts: [{ name: 'Valve Cover Gasket', reference: 'GSK-1120', quantity: 1, unitPrice: 48 }],
    laborCost: 160, discount: 0, taxRate: 0.08,
  },
  {
    id: 'RO-5013', number: 'RO-2025-0013', clientName: 'Emma Rossi', vehicle: 'Volkswagen Golf', registration: 'CA-344-GH',
    description: 'Coolant temperature high', diagnosis: 'Thermostat stuck closed, coolant flush required.',
    mechanicName: 'Marcus Bell', priority: 'High', startDate: '2025-02-21', estimatedCompletion: '2025-02-24', progress: 70, status: 'In Progress',
    services: [
      { description: 'Cooling system service', quantity: 1, unitPrice: 90 },
      { description: 'Thermostat replacement', quantity: 1, unitPrice: 70 },
    ],
    parts: [{ name: 'Thermostat', reference: 'THS-2210', quantity: 1, unitPrice: 38 }],
    laborCost: 160, discount: 0, taxRate: 0.08,
  },
  {
    id: 'RO-5014', number: 'RO-2025-0014', clientName: 'Liam Okafor', vehicle: 'Ford Focus', registration: 'CA-901-DF',
    description: 'Gearbox slipping', diagnosis: 'Automatic transmission fluid degraded, valve body service needed.',
    mechanicName: 'Marcus Bell', priority: 'Urgent', startDate: '2025-02-16', estimatedCompletion: '2025-02-22', progress: 100, status: 'Completed',
    services: [{ description: 'Transmission service', quantity: 1, unitPrice: 320 }],
    parts: [{ name: 'ATF Fluid', reference: 'ATF-4400', quantity: 6, unitPrice: 14 }],
    laborCost: 320, discount: 30, taxRate: 0.08,
  },
  {
    id: 'RO-5015', number: 'RO-2025-0015', clientName: 'Noah Meyer', vehicle: 'Hyundai Tucson', registration: 'CA-655-JK',
    description: 'Customer cancelled after estimate', diagnosis: 'Estimate provided for clutch replacement, customer declined.',
    mechanicName: 'Tom Weber', priority: 'Low', startDate: '2025-02-14', estimatedCompletion: '2025-02-14', progress: 0, status: 'Cancelled',
    services: [{ description: 'Inspection & estimate', quantity: 1, unitPrice: 50 }],
    parts: [],
    laborCost: 50, discount: 0, taxRate: 0.08,
  },
]

export function getRepairOrderById(id: string) {
  return repairOrders.find((order) => order.id === id)
}

export function repairOrderTotals(order: RepairOrder) {
  const servicesTotal = order.services.reduce((sum, s) => sum + s.quantity * s.unitPrice, 0)
  const partsTotal = order.parts.reduce((sum, p) => sum + p.quantity * p.unitPrice, 0)
  const subtotal = servicesTotal + partsTotal + order.laborCost
  const afterDiscount = subtotal - order.discount
  const tax = afterDiscount * order.taxRate
  const grandTotal = afterDiscount + tax
  return { servicesTotal, partsTotal, subtotal, tax, grandTotal }
}
