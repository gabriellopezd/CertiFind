export interface Certificate {
  id: string;
  name: string;
  recipient: string;
  issueDate: string;
  fileName: string;
  description?: string;
  previewImage?: string;
}
