import { CarServiceItem, ServicePackage, JobCardStatus } from '../types';

export const P3_CONTACT = {
  name: 'P3 Motors',
  phoneDisplay: '97272 00087',
  phoneRaw: '9727200087',
  phoneFull: '+919727200087',
  whatsappUrl: 'https://wa.me/919727200087',
  email: 'service@p3motors.in',
  addressEn: 'P3 Motors Service Complex, Near Ring Road Circle, Industrial Zone, Ahmedabad, Gujarat 380015',
  addressHi: 'P3 मोटर्स सर्विस कॉम्प्लेक्स, रिंग रोड सर्कल के पास, इंडस्ट्रियल जोन, अहमदाबाद, गुजरात 380015',
  workingHoursEn: 'Mon - Sat: 8:30 AM - 8:30 PM | Sunday: 9:00 AM - 2:00 PM (Emergency breakdown: 24x7)',
  workingHoursHi: 'सोम - शनि: सुबह 8:30 - रात 8:30 | रविवार: सुबह 9:00 - दोपहर 2:00 (आपातकालीन ब्रेकडाउन: 24x7)',
};

export const SERVICES_LIST: CarServiceItem[] = [
  {
    id: 'periodic-maintenance',
    titleEn: 'Periodic Maintenance & Oil Service',
    titleHi: 'आवधिक कार सर्विस व इंजन ऑयल चेंज',
    shortDescEn: 'Comprehensive engine health check, full synthetic engine oil replacement, oil filter, air filter, spark plugs, and 45-point inspection.',
    shortDescHi: 'इंजन की संपूर्ण जांच, सिंथेटिक इंजन ऑयल बदलाव, ऑयल फिल्टर, एयर फिल्टर और 45-पॉइंट विस्तृत कार निरीक्षण।',
    fullDescEn: 'Our periodic service follows manufacturer OE standards. We flush old engine oil, install genuine OEM filters, test battery voltage, inspect drive belts, and top up all crucial fluids (coolant, brake oil, windshield washer).',
    fullDescHi: 'हमारी आवधिक सर्विस कार निर्माता के नियमों के अनुसार होती है। हम पुराना ऑयल ड्रेन कर ओरिजिनल ओईएम फिल्टर लगाते हैं, कूलेंट, ब्रेक ऑयल टॉप-अप करते हैं व पूरी कार की बारीकी से जांच करते हैं।',
    startingPrice: 2499,
    durationEn: '3 - 4 Hours',
    durationHi: '3 - 4 घंटे',
    category: 'maintenance',
    featuresEn: ['100% Genuine Synthetic Engine Oil', 'OEM Oil & Air Filter Replacement', '45-Point Safety & Health Audit', 'Coolant & Brake Fluid Top-up', 'Complimentary Exterior Foam Wash'],
    featuresHi: ['100% ओरिजिनल सिंथेटिक इंजन ऑयल', 'ओईएम ऑयल व एयर फिल्टर बदलाव', '45-पॉइंट संपूर्ण सुरक्षा जांच', 'कूलेंट व ब्रेक ऑयल टॉप-अप', 'मुफ्त एक्सटीरियर फोम वॉश']
  },
  {
    id: 'computerized-diagnostics',
    titleEn: 'Computerized Diagnostics & OBD Scanning',
    titleHi: 'कंप्यूटरीकृत ईसीएम व इंजन डायग्नोस्टिक्स',
    shortDescEn: 'Advanced multi-brand OBD-II scanner tablet diagnosis to detect check engine lights, sensor failures, ABS/Airbag codes, and electrical glitches.',
    shortDescHi: 'आधुनिक ओबीडी-II स्कैनर टैबलेट से चेक इंजन लाइट, सेंसर खराबी, एबीएस/एयरबैग कोड्स व ईसीएम फॉल्ट्स की सटीक जांच।',
    fullDescEn: 'Equipped with professional OE-level multi-brand diagnostic tools. We read live telemetry data, diagnose sensor misfires, test actuator components, reset service interval reminders, and provide a digital diagnostic printout.',
    fullDescHi: 'हमारे पास मल्टी-ब्रांड डायग्नोस्टिक स्कैनर हैं जो इंजन की लाइव टेलीमेट्री, ईसीएम फॉल्ट कोड्स, सेंसर एरर और मिसफायर को तुरंत पकड़ लेते हैं और डिजिटल रिपोर्ट प्रदान करते हैं।',
    image: '/src/assets/images/p3_engine_diagnostic_1790500788415.jpg',
    startingPrice: 999,
    durationEn: '45 - 60 Minutes',
    durationHi: '45 - 60 मिनट',
    category: 'diagnostics',
    featuresEn: ['ECU / ECM Live Data Telemetry', 'Check Engine & ABS Warning Reset', 'Oxygen & MAF Sensor Testing', 'Throttle Body Calibration', 'Comprehensive Digital Scan Report'],
    featuresHi: ['ईसीयू/ईसीएम लाइव डेटा रीडिंग', 'चेक इंजन व एबीएस कोड रीसेट', 'ऑक्सीजन व एमएएफ सेंसर चेकिंग', 'थ्रॉटल बॉडी कैलिब्रेशन', 'संपूर्ण डिजिटल स्कैन रिपोर्ट']
  },
  {
    id: 'brake-suspension',
    titleEn: 'Brakes, Suspension & Steering Repair',
    titleHi: 'ब्रेक, सस्पेंशन व स्टीयरिंग रिपेयर',
    shortDescEn: 'Precision disc rotor skim/replacement, ceramic brake pads, hydraulic bleeding, shock absorber replacement, and power steering repairs.',
    shortDescHi: 'ब्रेक पैड्स व डिस्क रोटर रिप्लेसमेंट, हाइड्रोलिक फ्लशिंग, शॉक एब्जॉर्बर (कमान/सस्पेंशन) व स्टीयरिंग रैप रिपेयर।',
    fullDescEn: 'Never compromise on braking and road handling. We inspect caliper pins, rotor thickness, bushes, lower arms, tie rods, and shock mountings with laser-aligned precision.',
    fullDescHi: 'सड़क पर सुरक्षित ड्राइविंग के लिए ब्रेक और सस्पेंशन का दुरुस्त होना जरूरी है। हम ब्रेक कैलिपर, डिस्क रोटर, लोअर आर्म्स, बुश और शॉकर्स की ओरिजिनल पार्ट्स के साथ सर्विस करते हैं।',
    image: '/src/assets/images/p3_brake_suspension_1790500820371.jpg',
    startingPrice: 1499,
    durationEn: '2 - 3 Hours',
    durationHi: '2 - 3 घंटे',
    category: 'repairs',
    featuresEn: ['Ceramic Low-Dust Brake Pads', 'Disc Rotor Machining / Lathe Polish', 'Hydraulic Brake Line Bleed & Flush', 'Suspension Bush & Linkage Overhaul', 'Road Test & Emergency Stop Audit'],
    featuresHi: ['हाई-क्वालिटी सिरेमिक ब्रेक पैड्स', 'डिस्क रोटर खराद व सरफेसिंग', 'हाइड्रोलिक ब्रेक फ्लूइड रिप्लेसमेंट', 'सस्पेंशन बुश व आर्म ओवरहाल', 'रोड टेस्ट व ब्रेकिंग एफिशिएंसी टेस्ट']
  },
  {
    id: 'car-ac-service',
    titleEn: 'Car AC Servicing & Cooling Overhaul',
    titleHi: 'कार एसी रिपेयर व गैस रीचार्ज सर्विस',
    shortDescEn: 'High-purity R134a/R1234yf refrigerant gas charging, compressor leak test, condenser pressure cleaning, and AC cabin deodorization.',
    shortDescHi: 'प्योर रेफ्रिजरेंट एसी गैस टॉप-अप/रीफिल, कंप्रेसर लीक डिटेक्शन, कंडेनसर हाई-प्रेशर वॉश व एंटीबैक्टीरियल केबिन कूलिंग ट्रीटमेंट।',
    fullDescEn: 'Beat the scorching heat with chilling cooling. We inspect compressor clutch pulleys, test expansion valves, eliminate evaporator bacteria, and replace the cabin dust filter.',
    fullDescHi: 'तेज धूप और गर्मी में भी बर्फ जैसी ठंडक। हम कंप्रेसर ऑयल, कंडेनसर कॉइल, कूलिंग कॉइल लीक और गैस प्रेशर को अत्याधुनिक डिजिटल गेज से जांचते हैं।',
    startingPrice: 1799,
    durationEn: '2 Hours',
    durationHi: '2 घंटे',
    category: 'maintenance',
    featuresEn: ['Automated AC Gas Vacuum & Refill', 'Compressor Lubricant Oil Top-up', 'Condenser High Pressure Cleaning', 'AC Cabin Filter Replacement', 'Ozone Anti-Bacterial Sanitization'],
    featuresHi: ['ऑटोमेटेड एसी गैस वैक्यूम व रीफिल', 'कंप्रेसर ऑयल टॉप-अप', 'कंडेनसर कॉइल प्रेशर वॉश', 'केबिन फिल्टर रिप्लेसमेंट', 'एंटी-बैक्टीरियल जर्म क्लीनिंग']
  },
  {
    id: 'denting-painting',
    titleEn: 'Denting, Painting & Ceramic Coating',
    titleHi: 'डेंटिंग, पेंटिंग व सिरेमिक कोटिंग',
    shortDescEn: 'Dust-free temperature-controlled spray paint booth, computerized spectrophotometer color matching, scratch removal, and 9H shield coating.',
    shortDescHi: 'डस्ट-फ्री बेकिंग पेंट बूथ, कंप्यूटरीकृत कलर मैचिंग, स्क्रैच और डेंट रिपेयर व 9H सिरेमिक/टेफ्लॉन प्रोटेक्शन कोटिंग।',
    fullDescEn: 'Restore showroom shine and factory panel finish. We use premium Dupont/PPG automotive grade paints with a 2-year anti-peel warranty, precision suction dent pullers, and multi-stage rotary buffing.',
    fullDescHi: 'अपनी कार को शोरूम जैसी नई चमक दें। हम बिना स्क्रैच के डेंट निकालते हैं और कंप्यूटराइज्ड कलर मैचिंग द्वारा ओरिजिनल पेंट करते हैं जिसपर 2 साल की वारंटी मिलती है।',
    image: '/src/assets/images/p3_car_detailing_1790500805091.jpg',
    startingPrice: 1999,
    durationEn: '1 - 2 Days',
    durationHi: '1 - 2 दिन',
    category: 'bodywork',
    featuresEn: ['Zero-Dust Heated Paint Booth Finish', 'Computerized Exact Color Match', 'Precision Panel Dent Pulling', '3-Stage Compound Polishing', '2-Year Paint Warranty Against Peeling'],
    featuresHi: ['डस्ट-फ्री बेकिंग पेंट बूथ फिनिश', 'कंप्यूटराइज्ड सटीक कलर मैचिंग', 'पैनल डेंट सुधारात्मक कार्य', '3-स्टेज कटिंग व कंपाउंड पॉलिश', '2 साल की पेंट वारंटी']
  },
  {
    id: 'wheel-alignment-tyres',
    titleEn: '3D Laser Wheel Alignment & Balancing',
    titleHi: '3D लेजर व्हील अलाइनमेंट व बैलेंसिंग',
    shortDescEn: 'Computerized 3D high-definition laser alignment, dynamic alloy wheel balancing with zinc weights, and tread life optimization.',
    shortDescHi: 'हाई-डेफिनिशन 3D लेजर कैमरा अलाइनमेंट, कंप्यूटर व्हील बैलेंसिंग और टायरों की लंबी उम्र के लिए सही कैंबर व टो सेटिंग।',
    fullDescEn: 'Prevent uneven tyre wear and steering vibration at highway speeds. We balance all wheels with dynamic counterweights and inspect tire tread depth.',
    fullDescHi: 'हाईवे पर स्टीयरिंग कंपन और टायरों के एकतरफा घिसने से बचाव। हम सभी पहियों की 3D लेजर कैलिब्रेशन और डायनेमिक बैलेंसिंग करते हैं।',
    startingPrice: 699,
    durationEn: '40 Minutes',
    durationHi: '40 मिनट',
    category: 'maintenance',
    featuresEn: ['3D HD Camera Sensor Calibration', 'Dynamic Computerized Balancing', 'Camber, Caster & Toe Precision Setup', 'Tire Tread Depth & Pressure Check', 'Extended Tyre Life by 30%'],
    featuresHi: ['3D एचडी कैमरा सेंसर कैलिब्रेशन', 'कंप्यूटर डायनामिक बैलेंसिंग', 'कैंबर, कास्टर व टो प्रिसिजन सेटिंग', 'टायर घिसाव व प्रेशर जांच', 'टायरों की 30% अधिक लाइफ']
  },
  {
    id: 'clutch-transmission',
    titleEn: 'Clutch & Gearbox Transmission Service',
    titleHi: 'क्लच प्लेट व गियरबॉक्स ट्रांसमिशन रिपेयर',
    shortDescEn: 'Clutch plate and pressure plate overhaul, release bearing renewal, flywheel surfacing, and manual/automatic transmission fluid flush.',
    shortDescHi: 'क्लच प्लेट, प्रेशर प्लेट, रिलीज बेयरिंग बदलाव, फ्लाईव्हील फेसिंग और ऑटोमैटिक/मैनुअल गियर ऑयल रिप्लेसमेंट।',
    fullDescEn: 'Smooth gear shifts, restored pickup, and better fuel economy. We service dry clutches, dual-mass flywheels, torque converters, and CVT gearboxes.',
    fullDescHi: 'कार का पिकअप बढ़ाएं और स्मूथ गियर शिफ्टिंग पाएं। हम ओरिजिनल क्लच किट लगाते हैं जिससे कार का माइलेज और पिकअप दोनों बेहतर होते हैं।',
    startingPrice: 3499,
    durationEn: '4 - 6 Hours',
    durationHi: '4 - 6 घंटे',
    category: 'repairs',
    featuresEn: ['OEM Clutch Plate & Pressure Plate Kit', 'Release Bearing & Slave Cylinder Check', 'Flywheel Resurfacing & Alignment', 'Synthetic Gearbox Fluid Flush', 'Clutch Pedal Free Play Calibration'],
    featuresHi: ['ओईएम क्लच प्लेट व प्रेशर प्लेट किट', 'रिलीज बेयरिंग व सिलेंडर जांच', 'फ्लाईव्हील रीसरफेसिंग', 'सिंथेटिक ट्रांसमिशन फ्लूइड चेंज', 'क्लच पेडल फ्री-प्ले एडजस्टमेंट']
  },
  {
    id: 'roadside-emergency',
    titleEn: '24/7 Breakdown & Flatbed Towing Support',
    titleHi: '24x7 इमरजेंसी ब्रेकडाउन व टोइंग सहायता',
    shortDescEn: 'Instant breakdown support within 30-45 minutes. Battery jump start, puncture repair, fuel delivery, or safe hydraulic flatbed towing. Call 9727200087.',
    shortDescHi: '30-45 मिनट में सड़क पर तत्काल सहायता। बैटरी जम्प स्टार्ट, टायर पंचर, फ्यूल डिलीवरी या सेफ हाइड्रोलिक टोइंग। तुरंत कॉल करें: 9727200087.',
    fullDescEn: 'Stranded on the highway or stuck with a non-starting car? Our emergency mobile recovery van equipped with technician and hydraulic flatbed truck reaches you promptly.',
    fullDescHi: 'हाईवे पर या घर के बाहर कार अचानक बंद हो गई? हमारा मोबाइल इमरजेंसी वैन और टोइंग ट्रक तुरंत मौके पर पहुंचेगा। सिर्फ एक कॉल पर उपलब्ध: 9727200087.',
    startingPrice: 999,
    durationEn: 'Immediate Dispatch',
    durationHi: 'तुरंत रवानगी',
    category: 'emergency',
    featuresEn: ['Direct Hotline: 97272 00087', 'Rapid 30-45 Min City Response', 'Damage-Free Hydraulic Flatbed Towing', 'Jump Start & Battery Boosting on Spot', 'Minor On-Site Mechanical Troubleshooting'],
    featuresHi: ['डायरेक्ट हेल्पलाइन: 97272 00087', 'शहर में 30-45 मिनट में त्वरित पहुंच', 'सुरक्षित हाइड्रोलिक फ्लैटबेड टोइंग', 'स्पॉट पर बैटरी जंप-स्टार्ट', 'ऑन-साइट तकनीकी सुधार']
  }
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'basic-service',
    nameEn: 'Basic Essential Service',
    nameHi: 'बेसिक सर्विस पैकेज',
    taglineEn: 'Ideal for cars driven under 5,000 km in 6 months.',
    taglineHi: 'कम चली कारों के लिए बेसिक रूटीन चेकअप।',
    priceHatchback: 2499,
    priceSedan: 2999,
    priceSuv: 3499,
    recommendedKm: 'Every 5,000 km / 6 Months',
    featuresEn: [
      'Engine Oil Replacement (Semi-Synthetic)',
      'Engine Oil Filter Change',
      'Air Filter Cleaning & Dusting',
      'Spark Plug & Ignition Check',
      'Coolant & Brake Oil Top-up',
      '20-Point Mechanical Inspection',
      'Standard Exterior Car Wash'
    ],
    featuresHi: [
      'इंजन ऑयल बदलाव (सेमी-सिंथेटिक)',
      'इंजन ऑयल फिल्टर रिप्लेसमेंट',
      'एयर फिल्टर क्लीनिंग',
      'स्पार्क प्लग व इग्निशन चेक',
      'कूलेंट व ब्रेक ऑयल टॉप-अप',
      '20-पॉइंट सामान्य सुरक्षा जांच',
      'एक्सटीरियर कार वॉश'
    ]
  },
  {
    id: 'standard-service',
    nameEn: 'Standard Comprehensive Service',
    nameHi: 'स्टैंडर्ड फुल सर्विस पैकेज',
    taglineEn: 'Our most popular service for peak performance and safety.',
    taglineHi: 'सर्वाधिक लोकप्रिय पैकेज — संपूर्ण सुरक्षा और बेहतरीन पिकअप।',
    priceHatchback: 4499,
    priceSedan: 5199,
    priceSuv: 5999,
    recommendedKm: 'Every 10,000 km / 1 Year',
    popular: true,
    featuresEn: [
      '100% Fully Synthetic Premium Engine Oil',
      'New OEM Oil Filter & Air Filter',
      'AC Cabin Filter Replacement & Cleaning',
      'Front & Rear Brake Caliper Inspection & Pad Cleaning',
      'Throttle Body Cleaning & Throttle Response Calibration',
      'All Fluids Top-up (Coolant, Brake, Wiper Fluid)',
      'Battery Voltage & Alternator Health Report',
      '45-Point Detailed Vehicle Health Check',
      'Interior Vacuuming & Foam Wash with Tire Polish'
    ],
    featuresHi: [
      '100% फुल्ली सिंथेटिक प्रीमियम इंजन ऑयल',
      'नया ओईएम ऑयल फिल्टर व एयर फिल्टर',
      'केबिन एसी फिल्टर रिप्लेसमेंट व सफाई',
      'फ्रंट व रियर ब्रेक कैलिपर्स सफाई व पैड जांच',
      'थ्रॉटल बॉडी क्लीनिंग व पिकअप ट्यूनिंग',
      'सभी फ्लूइड्स टॉप-अप (कूलेंट, ब्रेक, वाइपर)',
      'बैटरी वोल्टेज व अल्टरनेटर हेल्थ रिपोर्ट',
      '45-पॉइंट विस्तृत कार स्वास्थ्य परीक्षण',
      'इंटीरियर वैक्यूमिंग व प्रीमियम फोम वॉश'
    ]
  },
  {
    id: 'major-overhaul',
    nameEn: 'Major Master Service & Overhaul',
    nameHi: 'मास्टर ओवरहाल पैकेज',
    taglineEn: 'Factory-level deep rejuvenation for long highway journeys.',
    taglineHi: 'लॉन्ग ड्राइव और पुरानी कारों के लिए फैक्ट्री लेवल कायाकल्प।',
    priceHatchback: 7999,
    priceSedan: 8999,
    priceSuv: 10499,
    recommendedKm: 'Every 20,000 km / 2 Years',
    featuresEn: [
      'All items from Standard Service included',
      'Complete Engine Coolant Flush & Replacement',
      'DOT-4 Brake Fluid Complete Flush & Bleeding',
      'Manual / Automatic Transmission Gear Oil Flush',
      'Fuel Filter Replacement (Diesel/Petrol)',
      'Full Computerized OBD-II Diagnostic Scan & Reset',
      '3D Laser Wheel Alignment & Dynamic Wheel Balancing',
      'Underbody Anti-Corrosion Inspection',
      'Complete Engine Bay Steam Detailing',
      '6 Months / 10,000 km Service Assurance Guarantee'
    ],
    featuresHi: [
      'स्टैंडर्ड सर्विस की सभी सुविधाएं शामिल',
      'पूरा इंजन कूलेंट फ्लश व नया कूलेंट',
      'DOT-4 ब्रेक फ्लूइड पूरा बदलाव व ब्लीडिंग',
      'मैनुअल/ऑटोमैटिक ट्रांसमिशन गियर ऑयल फ्लश',
      'फ्यूल फिल्टर रिप्लेसमेंट',
      'फुल कंप्यूटरीकृत ओबीडी-II डायग्नोस्टिक स्कैन',
      '3D लेजर व्हील अलाइनमेंट व व्हील बैलेंसिंग',
      'अंडरबॉडी रस्ट व डैमेज निरीक्षण',
      'इंजन बे स्टीम डिटेलिंग व पॉलिश',
      '6 महीने / 10,000 किमी सर्विस वारंटी'
    ]
  }
];

export const INITIAL_JOB_CARDS: JobCardStatus[] = [
  {
    id: 'P3M-9102',
    vehicleNumber: 'GJ-01-AB-1234',
    customerName: 'Rajesh Sharma',
    carModel: 'Hyundai Creta 1.5 SX',
    status: 'work_in_progress',
    stageNumber: 3,
    estimatedDelivery: 'Today, 5:30 PM',
    advisorName: 'Vikram Patel',
    advisorPhone: '9727200087',
    tasksCompleted: ['Initial 45-point health inspection', 'Engine oil flush & synthetic refill', 'New oil & air filters installed'],
    tasksPending: ['Front brake pad replacement', '3D wheel alignment', 'Final foam wash & interior vacuum'],
    totalEstimate: 5850,
    updatedAt: '35 minutes ago'
  },
  {
    id: 'P3M-8841',
    vehicleNumber: 'GJ-27-CD-5678',
    customerName: 'Amit Verma',
    carModel: 'Honda City i-VTEC',
    status: 'quality_check',
    stageNumber: 4,
    estimatedDelivery: 'Today, 4:00 PM',
    advisorName: 'Sunil Rao',
    advisorPhone: '9727200087',
    tasksCompleted: ['AC gas charging & condenser wash', 'Cabin antibacterial treatment', 'Spark plug change', 'Suspension bush replacement'],
    tasksPending: ['Road testing and final inspection checklist signoff'],
    totalEstimate: 7200,
    updatedAt: '12 minutes ago'
  },
  {
    id: 'P3M-7633',
    vehicleNumber: 'GJ-06-EF-9012',
    customerName: 'Pooja Mehta',
    carModel: 'Maruti Suzuki Swift ZXi',
    status: 'ready',
    stageNumber: 5,
    estimatedDelivery: 'Ready for Pickup / Doorstep Delivery',
    advisorName: 'Vikram Patel',
    advisorPhone: '9727200087',
    tasksCompleted: ['Periodic general service', 'Brake drum cleaning', 'Foam wash & interior polish', 'Quality audit passed'],
    tasksPending: [],
    totalEstimate: 3499,
    updatedAt: 'Just now'
  }
];

export const REVIEWS = [
  {
    name: 'Hardik Mehta',
    vehicle: 'Tata Safari XZA+ Dark Edition',
    city: 'Ahmedabad',
    service: 'Suspension & Periodic Service',
    rating: 5,
    date: '3 days ago',
    commentEn: 'P3 Motors did an outstanding job on my Safari. The squeaking noise in the front suspension is completely gone, and the car drives like brand new. Fair pricing and transparent billing. Highly recommend calling 9727200087.',
    commentHi: 'P3 मोटर्स ने मेरी सफारी पर बेहतरीन काम किया। फ्रंट सस्पेंशन की आवाज बिल्कुल बंद हो गई है और गाड़ी नई जैसी चल रही है। एकदम पारदर्शी बिलिंग और सही सलाह। 9727200087 पर संपर्क करने की सलाह दूंगा।'
  },
  {
    name: 'Dharmesh Joshi',
    vehicle: 'Hyundai Verna Turbo',
    city: 'Gandhinagar',
    service: 'AC Cooling Overhaul & OBD Scan',
    rating: 5,
    date: '1 week ago',
    commentEn: 'My AC was not cooling in heavy traffic. Other garages told me to replace the expensive compressor. P3 Motors diagnosed it with their digital scanner and fixed it by servicing the valve and refilling gas at a fraction of the cost!',
    commentHi: 'ट्रैफिक में मेरी कार का एसी ठंडा नहीं कर रहा था। दूसरे गैराज वाले महंगा कंप्रेसर बदलने को कह रहे थे। P3 Motors ने स्कैनर से सही फॉल्ट पकड़ा और सिर्फ वॉल्व रिपेयर व गैस रीचार्ज में काम कर दिया।'
  },
  {
    name: 'Suresh Trivedi',
    vehicle: 'Toyota Innova Crysta',
    city: 'Sanand / SG Highway',
    service: 'Emergency Breakdown Assistance',
    rating: 5,
    date: '2 weeks ago',
    commentEn: 'Car battery died and alternator failed on the highway at 9 PM. Called 9727200087, their recovery vehicle reached me in 35 minutes with a replacement battery and towed safely. Lifesavers!',
    commentHi: 'रात 9 बजे हाईवे पर अचानक कार बंद हो गई थी। मैंने 9727200087 पर कॉल किया, 35 मिनट में उनकी टीम मौके पर पहुंची और गाड़ी को सुरक्षित गैराज पहुंचाया। बहुत ही भरोसेमंद सेवा!'
  }
];
