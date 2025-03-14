export enum StageTextEnum {
  "Due for Validation" = "Due for Validation",
  "Call Not Connected" = "Call Not Connected",
  "Prospective" = "Prospective",
  "Walkin Expected" = "Walkin Expected",
  "Cold" = "Cold",
  "Converted" = "Converted",
  "Walked In" = "Walked In",
  "Hot" = "Hot",
}

export interface LeadData {
  id: number;
  stage: string;
  stage_text: StageTextEnum | string;
  walkin_date: string;
  create_date: string;
  phone: string;
  email: string | null;
  lead_name: string;
  source: string;
  color_code: string;
  status: string;
  status_text: string;
  lead_owner: string;
  lead_campaign_name: string;
  ageing: string;
  location_name: string;
  location_id: number;
  next_followup: string;
  subject_intrested: string;
  demo_taken: number;
  area: string | null;
}
