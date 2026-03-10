import { PlaceHolderImages } from './placeholder-images';

export interface Certificate {
  id: string;
  name: string;
  recipient: string;
  issueDate: string;
  type: string;
  issuer: string;
  previewUrl: string;
  downloadUrl: string;
  description: string;
}

const MOCK_CERTIFICATES: Certificate[] = [
  {
    id: "CERT-001",
    name: "ISO 9001:2015 Quality Management",
    recipient: "John Doe",
    issueDate: "2023-10-15",
    type: "Professional Certification",
    issuer: "Global Quality Standards",
    previewUrl: PlaceHolderImages.find(img => img.id === 'cert-preview-1')?.imageUrl || "",
    downloadUrl: "#",
    description: "Certification for successful implementation of quality management systems."
  },
  {
    id: "CERT-002",
    name: "Advanced Web Development",
    recipient: "Jane Smith",
    issueDate: "2024-01-20",
    type: "Course Completion",
    issuer: "Tech Academy Pro",
    previewUrl: PlaceHolderImages.find(img => img.id === 'cert-preview-2')?.imageUrl || "",
    downloadUrl: "#",
    description: "Professional certification for mastering modern frontend frameworks and backend integration."
  },
  {
    id: "CERT-003",
    name: "Project Management Professional (PMP)",
    recipient: "Carlos Rodriguez",
    issueDate: "2023-05-12",
    type: "Professional Certification",
    issuer: "Project Management Institute",
    previewUrl: PlaceHolderImages.find(img => img.id === 'cert-preview-3')?.imageUrl || "",
    downloadUrl: "#",
    description: "Industry-recognized certification for project managers."
  },
  {
    id: "CERT-004",
    name: "Cybersecurity Analyst Certificate",
    recipient: "Alice Johnson",
    issueDate: "2023-11-30",
    type: "Skill Certification",
    issuer: "Security Compliance Hub",
    previewUrl: PlaceHolderImages.find(img => img.id === 'cert-preview-1')?.imageUrl || "",
    downloadUrl: "#",
    description: "Verification of advanced skills in network security and threat analysis."
  },
  {
    id: "CERT-005",
    name: "Strategic Leadership Program",
    recipient: "John Doe",
    issueDate: "2024-02-14",
    type: "Leadership Training",
    issuer: "Executive Leadership Forum",
    previewUrl: PlaceHolderImages.find(img => img.id === 'cert-preview-2')?.imageUrl || "",
    downloadUrl: "#",
    description: "Completed the comprehensive strategic leadership development series."
  }
];

export async function searchCertificates(query: string): Promise<Certificate[]> {
  if (!query) return [];
  
  const lowerQuery = query.toLowerCase();
  // Simulate a slight delay for repository search
  await new Promise(resolve => setTimeout(resolve, 600));

  return MOCK_CERTIFICATES.filter(cert => 
    cert.name.toLowerCase().includes(lowerQuery) ||
    cert.recipient.toLowerCase().includes(lowerQuery) ||
    cert.id.toLowerCase().includes(lowerQuery) ||
    cert.issuer.toLowerCase().includes(lowerQuery)
  );
}

export async function getCertificateById(id: string): Promise<Certificate | undefined> {
  return MOCK_CERTIFICATES.find(cert => cert.id === id);
}