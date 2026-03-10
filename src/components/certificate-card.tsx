'use client';

import Image from 'next/image';
import { Certificate } from '@/lib/certificates';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, Eye, Calendar, Award, User } from 'lucide-react';
import { useState } from 'react';
import { CertificateDetails } from '@/components/certificate-details';

interface CertificateCardProps {
  certificate: Certificate;
}

export function CertificateCard({ certificate }: CertificateCardProps) {
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <>
      <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-border/50 bg-card">
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
          <Image
            src={certificate.previewUrl}
            alt={certificate.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            data-ai-hint="certificate preview"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
             <Button 
               variant="secondary" 
               size="sm" 
               className="w-full gap-2"
               onClick={() => setDetailsOpen(true)}
             >
               <Eye className="w-4 h-4" />
               View Details
             </Button>
          </div>
        </div>
        <CardHeader className="p-4 pb-2">
          <Badge variant="outline" className="w-fit mb-2 text-primary border-primary/20 bg-primary/5">
            {certificate.type}
          </Badge>
          <CardTitle className="text-lg font-bold line-clamp-2 min-h-[3.5rem] text-primary">
            {certificate.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0 space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-secondary" />
            <span className="font-medium text-foreground">{certificate.recipient}</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-secondary" />
            <span>{certificate.issuer}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-secondary" />
            <span>{certificate.issueDate}</span>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button 
            className="w-full gap-2 bg-secondary hover:bg-secondary/90 text-white font-semibold"
            onClick={() => window.open(certificate.downloadUrl, '_blank')}
          >
            <Download className="w-4 h-4" />
            Download PDF
          </Button>
        </CardFooter>
      </Card>

      <CertificateDetails 
        certificate={certificate} 
        open={detailsOpen} 
        onOpenChange={setDetailsOpen} 
      />
    </>
  );
}