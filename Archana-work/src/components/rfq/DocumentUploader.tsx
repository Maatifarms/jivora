"use client";

import { UploadCloud, FileText, Image, FileCode, X, Check } from "lucide-react";

export interface UploadedFile {
  id: string;
  name: string;
  size: string;
  type: string;
}

interface UploaderProps {
  attachments: UploadedFile[];
  onAddAttachment: (file: UploadedFile) => void;
  onRemoveAttachment: (id: string) => void;
}

export default function DocumentUploader({ attachments, onAddAttachment, onRemoveAttachment }: UploaderProps) {
  const handleSimulatedUpload = () => {
    const mockFiles: UploadedFile[] = [
      { id: Date.now().toString(), name: "Technical_CAD_Drawing.pdf", size: "2.4 MB", type: "PDF Document" },
      { id: (Date.now() + 1).toString(), name: "Custom_Packaging_Specs.xlsx", size: "1.1 MB", type: "Excel Sheet" },
      { id: (Date.now() + 2).toString(), name: "Logo_Vector_Print.ai", size: "4.8 MB", type: "Vector File" }
    ];
    // Add first available mock file not added yet
    const nextFile = mockFiles[attachments.length % mockFiles.length];
    onAddAttachment({ ...nextFile, id: Date.now().toString() });
  };

  return (
    <div className="rounded-2xl border border-grey-border bg-white p-6 sm:p-8 space-y-6 card-shadow-premium">
      <div className="flex items-center justify-between border-b border-grey-border/50 pb-4">
        <div className="flex items-center gap-2">
          <UploadCloud className="h-5 w-5 text-brand-sky" />
          <h3 className="text-lg font-extrabold text-navy">Upload Technical Drawings & Specifications</h3>
        </div>
        <span className="text-xs font-bold text-navy-muted">Optional Attachments</span>
      </div>

      {/* Drag & Drop Upload Zone */}
      <div 
        onClick={handleSimulatedUpload}
        className="rounded-2xl border-2 border-dashed border-grey-border/80 bg-grey-light/50 p-8 text-center space-y-3 hover:border-brand-sky hover:bg-brand-sky-light/20 transition-all cursor-pointer group"
      >
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-sky-light text-brand-sky group-hover:scale-110 transition-transform">
          <UploadCloud className="h-6 w-6" />
        </div>
        <div className="space-y-1">
          <p className="text-xs font-extrabold text-navy">
            Click to upload or drag & drop technical files
          </p>
          <p className="text-[10px] text-navy-muted">
            Supports CAD, PDFs, Excel (.xlsx), Images (.png, .jpg), and Vector files up to 25MB.
          </p>
        </div>
      </div>

      {/* Uploaded File Previews */}
      {attachments.length > 0 && (
        <div className="space-y-2 pt-2">
          <span className="text-xs font-bold text-navy uppercase tracking-wider">Attached Specifications ({attachments.length}):</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {attachments.map((file) => (
              <div key={file.id} className="flex items-center justify-between p-3 rounded-xl bg-grey-light border border-grey-border/60">
                <div className="flex items-center gap-2.5 truncate">
                  <FileText className="h-4 w-4 text-brand-sky flex-shrink-0" />
                  <div className="truncate">
                    <span className="font-bold text-navy block truncate">{file.name}</span>
                    <span className="text-[10px] text-navy-muted">{file.size} • {file.type}</span>
                  </div>
                </div>
                <button
                  onClick={() => onRemoveAttachment(file.id)}
                  className="p-1 rounded-full hover:bg-grey-medium text-navy-muted hover:text-rose-500 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
