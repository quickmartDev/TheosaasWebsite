export interface InsertContactInquiry {
  name: string;
  email: string;
  company?: string | null;
  stage?: string | null;
  description: string;
  budget?: string | null;
} 