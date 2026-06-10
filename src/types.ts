export interface CaseSheet {
  // Metadata & System Info
  id: string; // Internal unique identifier (e.g. uuid or timestamp)
  createdAt: string; // Saved date (YYYY-MM-DD or full timestamp)
  updatedAt: string;

  // PAGE 1: Personal & General Info
  adNo: string; // Admission Number (auto-generated 7-digit number, editable)
  date: string; // Date (default is today, editable)
  name: string;
  address: string;
  residence: string;
  phNo: string;
  age: string;
  ageUnit: "Year" | "Month" | "Day";
  sex: "M" | "F" | "Other" | "";
  bloodGroup: string;
  maritalStatus: "Single" | "Married" | "Divorced" | "Widowed" | "Married" | "";
  mobNo: string;
  medicine: string;
  keyNote: string;

  // PAGE 2: Professional & Structural Complaints
  occupation: string;
  vaccination: string;
  diagnosis: string;
  relatedTo: string;
  presentingCompliant: string; // General text
  sensationP2: string;
  locationP2: string;
  modalitiesP2: string;
  concomitantsP2: string;
  historyOfPresentingComplaints: string;
  
  // History of Previous Ailments (structured)
  prevAilmentsDisease: string;
  prevAilmentsYear: string;
  prevAilmentsMethod: string;
  prevAilmentsResults: string;
  prevAilmentsTreatmentTaken: string;
  prevAilmentsDuration: string;
  prevAilmentsResultOfTreatment: string;
  
  // Life stages (P2)
  infancy: string;
  pubertyP2: string;
  teenAge: string;
  adulthood: string;
  middleAge: string;
  oldAge: string;
  familyHistory: string;

  // PAGE 3: Specific Physical & Mentals
  causation: string;
  diseaseP3: string;
  yearP3: string;
  treatmentHistoryP3: string;
  methodOfTreatmentsP3: string;
  resultsP3: string;
  generalsP3: string;
  mentalP3: string;
  headPhysicalP3: string;
  
  parietal: string;
  vertex: string;
  sensationP3: string;
  sleepP3: string;
  headInjury: string;
  headSkin: string;
  concomitantsP3: string;
  modalityP3: string;
  perspirationP3: string;
  alcoholic: string;
  movementP3: string;
  endocrine: string;
  vertigo: string;
  timeOfVertigo: string;
  vomitingP3: string;
  dropsical: string;

  // PAGE 4: Aggravations, Discharges & Menstrual
  respiratory: string;
  nervous: string;
  cancerous: string;
  convulsive: string;
  obesity: string;
  glands: string;
  sleepP4: string;
  dream: string;
  clothing: string;

  // Aggravation/Amelioration
  positionAndMovement: string;
  meteriological: string;
  stomachAndAppetite: string;
  thirst: string;
  desiresAndAversions: string;

  // Excretions
  stoolConsistency: string;
  stoolColour: string;
  stoolOdour: string;
  urineConsistency: string;
  urineColour: string;
  urineOdour: string;
  perspirationConsistency: string;
  perspirationColour: string;
  perspirationOdour: string;
  abnormalDischarge: string;

  // Menstrual History
  menstrualLmp: string;
  menstrualPuberty: string;
  menstrualMenopause: string;
  menstrualAmenorrhoea: string;

  // PAGE 5: Gynaecological & General History
  // Column 1
  menses: string;
  cycle: string;
  durationP5: string;
  flow: string;
  sexualHistory: string;
  obstetricalHistory: string;
  maternalP5: string;
  sisterP5: string;
  // Column 2
  quantityP5: string;
  colourP5: string;
  clots: string;
  consistencyP5: string;
  mothersOh: string;
  feverP5: string;
  onsetP5: string;
  sweatP5: string;
  husbandP5: string;
  // Column 3
  odourP5: string;
  stain: string;
  beforeP5: string;
  duringP5: string;
  typeP5: string;
  chillP5: string;
  timeP5: string;
  pastHistoryP5: string;
  painP5: string;
  // Column 4
  afterP5: string;
  marriageBefore: string;
  marriageAfter: string;
  pregnancyAfter: string;
  personalP5: string;
  concomitantP5: string;
  paternalP5: string;
  brotherP5: string;
  drugsP5: string;

  // PAGE 6: Family & Psychological profile
  // Column 1 (Relatives & General Emotions)
  aunt: string;
  uncle: string;
  daughter: string;
  wife: string;
  son: string;
  living: string;
  dead: string;
  emotion: string;
  reaction: string;
  intellectual: string;
  addictions: string;
  // Column 2 (Substances & Mental Characteristics)
  tea: string;
  coffee: string;
  alcohol: string;
  beer: string;
  tobacco: string;
  chewing: string;
  mentalActivity: string;
  mentalBehaviour: string;
  // Column 3 (Social Relations & Stressors)
  parentalAttitude: string;
  societyP6: string;
  workPlace: string;
  familyP6: string;
  dissatisfaction: string;
  strainP6: string;
  mentalPhysicalWork: string;
  mentalPhysicalFamily: string;
  mentalPhysicalSociety: string;
  mentalPhysicalFriends: string;
  // Column 4 (Affections & Sensation details)
  love: string;
  hate: string;
  attachment: string;
  anger: string;
  sadness: string;
  anxiety: string;
  ego: string;
  jealous: string;
  suspicious: string;
  envy: string;
  memory: string;

  // PAGE 7: Synthesis, Remedies & Diagnosis
  consciousness: string;
  finalDiagnosis: string;
  constitutionalDiagnosis: string;
  reactionsP7: string;
  analysisOfSymptoms: string;
  diseaseDiagnosisP7: string;
  foodAndDailyRegiments: string;
  evaluationOfSymptoms: string;
  physicalGeneral: string;
  particulars: string;
  commonP7: string;
  ailmentsFroms: string;
  mentalGeneral: string;
  miasmatic: string;
  regionals: string;
  physicalExaminations: string;
  provisionalDiagnosis: string;
  investigations: string;
  mentalPlane: string;
  physicalPlane: string;
}

export function generateAdNo(): string {
  // Generate random 7-digit number to mimic the image format ("8545679")
  return Math.floor(1000000 + Math.random() * 9000000).toString();
}

export function getTodayDateString(): string {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

export function createEmptyCaseSheet(): CaseSheet {
  const defaultAdNo = generateAdNo();
  const defaultDate = getTodayDateString();
  return {
    id: `cs_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
    createdAt: defaultDate,
    updatedAt: defaultDate,

    // Page 1
    adNo: defaultAdNo,
    date: defaultDate,
    name: "",
    address: "",
    residence: "",
    phNo: "",
    age: "",
    ageUnit: "Year",
    sex: "",
    bloodGroup: "",
    maritalStatus: "",
    mobNo: "",
    medicine: "",
    keyNote: "",

    // Page 2
    occupation: "",
    vaccination: "",
    diagnosis: "",
    relatedTo: "",
    presentingCompliant: "",
    sensationP2: "",
    locationP2: "",
    modalitiesP2: "",
    concomitantsP2: "",
    historyOfPresentingComplaints: "",
    prevAilmentsDisease: "",
    prevAilmentsYear: "",
    prevAilmentsMethod: "",
    prevAilmentsResults: "",
    prevAilmentsTreatmentTaken: "",
    prevAilmentsDuration: "",
    prevAilmentsResultOfTreatment: "",
    infancy: "",
    pubertyP2: "",
    teenAge: "",
    adulthood: "",
    middleAge: "",
    oldAge: "",
    familyHistory: "",

    // Page 3
    causation: "",
    diseaseP3: "",
    yearP3: "",
    treatmentHistoryP3: "",
    methodOfTreatmentsP3: "",
    resultsP3: "",
    generalsP3: "",
    mentalP3: "",
    headPhysicalP3: "",
    parietal: "",
    vertex: "",
    sensationP3: "",
    sleepP3: "",
    headInjury: "",
    headSkin: "",
    concomitantsP3: "",
    modalityP3: "",
    perspirationP3: "",
    alcoholic: "",
    movementP3: "",
    endocrine: "",
    vertigo: "",
    timeOfVertigo: "",
    vomitingP3: "",
    dropsical: "",

    // Page 4
    respiratory: "",
    nervous: "",
    cancerous: "",
    convulsive: "",
    obesity: "",
    glands: "",
    sleepP4: "",
    dream: "",
    clothing: "",
    positionAndMovement: "",
    meteriological: "",
    stomachAndAppetite: "",
    thirst: "",
    desiresAndAversions: "",
    stoolConsistency: "",
    stoolColour: "",
    stoolOdour: "",
    urineConsistency: "",
    urineColour: "",
    urineOdour: "",
    perspirationConsistency: "",
    perspirationColour: "",
    perspirationOdour: "",
    abnormalDischarge: "",
    menstrualLmp: "",
    menstrualPuberty: "",
    menstrualMenopause: "",
    menstrualAmenorrhoea: "",

    // Page 5
    menses: "",
    cycle: "",
    durationP5: "",
    flow: "",
    sexualHistory: "",
    obstetricalHistory: "",
    maternalP5: "",
    sisterP5: "",
    quantityP5: "",
    colourP5: "",
    clots: "",
    consistencyP5: "",
    mothersOh: "",
    feverP5: "",
    onsetP5: "",
    sweatP5: "",
    husbandP5: "",
    odourP5: "",
    stain: "",
    beforeP5: "",
    duringP5: "",
    typeP5: "",
    chillP5: "",
    timeP5: "",
    pastHistoryP5: "",
    painP5: "",
    afterP5: "",
    marriageBefore: "",
    marriageAfter: "",
    pregnancyAfter: "",
    personalP5: "",
    concomitantP5: "",
    paternalP5: "",
    brotherP5: "",
    drugsP5: "",

    // Page 6
    aunt: "",
    uncle: "",
    daughter: "",
    wife: "",
    son: "",
    living: "",
    dead: "",
    emotion: "",
    reaction: "",
    intellectual: "",
    addictions: "",
    tea: "",
    coffee: "",
    alcohol: "",
    beer: "",
    tobacco: "",
    chewing: "",
    mentalActivity: "",
    mentalBehaviour: "",
    parentalAttitude: "",
    societyP6: "",
    workPlace: "",
    familyP6: "",
    dissatisfaction: "",
    strainP6: "",
    mentalPhysicalWork: "",
    mentalPhysicalFamily: "",
    mentalPhysicalSociety: "",
    mentalPhysicalFriends: "",
    love: "",
    hate: "",
    attachment: "",
    anger: "",
    sadness: "",
    anxiety: "",
    ego: "",
    jealous: "",
    suspicious: "",
    envy: "",
    memory: "",

    // Page 7
    consciousness: "",
    finalDiagnosis: "",
    constitutionalDiagnosis: "",
    reactionsP7: "",
    analysisOfSymptoms: "",
    diseaseDiagnosisP7: "",
    foodAndDailyRegiments: "",
    evaluationOfSymptoms: "",
    physicalGeneral: "",
    particulars: "",
    commonP7: "",
    ailmentsFroms: "",
    mentalGeneral: "",
    miasmatic: "",
    regionals: "",
    physicalExaminations: "",
    provisionalDiagnosis: "",
    investigations: "",
    mentalPlane: "",
    physicalPlane: "",
  };
}
