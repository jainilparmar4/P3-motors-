export type Language = 'hi' | 'en';

export interface CarServiceItem {
  id: string;
  titleEn: string;
  titleHi: string;
  shortDescEn: string;
  shortDescHi: string;
  fullDescEn: string;
  fullDescHi: string;
  image?: string;
  startingPrice: number;
  durationEn: string;
  durationHi: string;
  featuresEn: string[];
  featuresHi: string[];
  category: 'maintenance' | 'repairs' | 'diagnostics' | 'bodywork' | 'emergency';
}

export interface ServicePackage {
  id: string;
  nameEn: string;
  nameHi: string;
  taglineEn: string;
  taglineHi: string;
  priceHatchback: number;
  priceSedan: number;
  priceSuv: number;
  recommendedKm: string;
  featuresEn: string[];
  featuresHi: string[];
  popular?: boolean;
}

export interface BookingRecord {
  id: string;
  vehicleNumber: string;
  customerName: string;
  customerPhone: string;
  carMakeModel: string;
  fuelType: 'petrol' | 'diesel' | 'cng' | 'ev';
  serviceType: string;
  preferredDate: string;
  preferredTime: string;
  doorstepPickup: boolean;
  address?: string;
  notes?: string;
  status: 'received' | 'inspecting' | 'work_in_progress' | 'quality_check' | 'ready';
  createdAt: string;
  estimatedCost?: number;
}

export interface AppointmentBooking {
  id: string;
  serviceId: string;
  serviceTitle: string;
  serviceCategory: string;
  estimatedPrice: number;
  appointmentDate: string;
  appointmentDateFormatted: string;
  timeSlot: string;
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  vehicleNumber: string;
  vehicleMakeModel: string;
  fuelType: 'petrol' | 'diesel' | 'cng' | 'ev';
  pickupDrop: boolean;
  pickupAddress?: string;
  specialNotes?: string;
  status: 'confirmed' | 'in_progress' | 'completed' | 'cancelled';
  createdAt: string;
  assignedAdvisor: string;
  advisorPhone: string;
  bayNumber: string;
}

export interface JobCardStatus {
  id: string;
  vehicleNumber: string;
  customerName: string;
  carModel: string;
  status: 'received' | 'inspecting' | 'work_in_progress' | 'quality_check' | 'ready';
  stageNumber: number; // 1 to 5
  estimatedDelivery: string;
  advisorName: string;
  advisorPhone: string;
  tasksCompleted: string[];
  tasksPending: string[];
  totalEstimate: number;
  updatedAt: string;
}
