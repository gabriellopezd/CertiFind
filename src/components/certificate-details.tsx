'use client';

import { Certificate } from '@/lib/certificates';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Calendar, User, Building, Hash, FileText } from 'lucide-react';
import Image from 'next/image';

interface CertificateDetailsProps {
  certificate: Certificate;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CertificateDetails({ certificate, open, onOpenChange }: CertificateDetailsProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl overflow-hidden p-0 border-none bg-background">
        <div className="relative h-48 sm:h-64 bg-primary flex items-center justify-center overflow-hidden">
          <Image
            src={certificate.previewUrl}
            alt={certificate.name}
            fill
            className="object-cover opacity-40"
            data-ai-hint="certificate detail"
          />
          <div className="relative z-10 text-center px-4">
            <Badge className="mb-2 bg-secondary hover:bg-secondary text-white border-none">
              {certificate.type}
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {certificate.name}
            </h2>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <DialogHeader className="sr-only">
            <DialogTitle>{certificate.name}</DialogTitle>
            <DialogDescription>Details about {certificate.name}</DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-primary/10 p-2 rounded-md">
                  <User className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase text-muted-foreground tracking-wider">Recipient</p>
                  <p className="text-base font-medium text-foreground">{certificate.recipient}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 bg-primary/10 p-2 rounded-md">
                  <Building className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase text-muted-foreground tracking-wider">Issuing Authority</p>
                  <p className="text-base font-medium text-foreground">{certificate.issuer}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 bg-primary/10 p-2 rounded-md">
                  <Calendar className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase text-muted-foreground tracking-wider">Date of Issue</p>
                  <p className="text-base font-medium text-foreground">{certificate.issueDate}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-primary/10 p-2 rounded-md">
                  <Hash className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase text-muted-foreground tracking-wider">Certificate ID</p>
                  <p className="text-base font-medium text-foreground">{certificate.id}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 bg-primary/10 p-2 rounded-md">
                  <FileText className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase text-muted-foreground tracking-wider">Description</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {certificate.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter className="p-6 pt-0 flex flex-col sm:flex-row gap-3">
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={() => onOpenChange(false)}
          >
            Close
          </Button>
          <Button 
            className="flex-1 gap-2 bg-secondary hover:bg-secondary/90 text-white"
            onClick={() => window.open(certificate.downloadUrl, '_blank')}
          >
            <Download className="w-4 h-4" />
            Download Document
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}