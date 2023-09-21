export interface CertificatesData {
    certificates: {
      data: Certificate[];
    };
}

export interface Certificate {
    id: number;
    name: string;
    date: string;
    email: string;
    active: boolean;
}