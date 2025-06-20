import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { File } from "lucide-react";

function ResumeUploadDialog({ openResumeUpload, setOpenResumeDialog }: any) {
  return (
    <Dialog open={openResumeUpload} onOpenChange={setOpenResumeDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload resume pdf file</DialogTitle>
          <DialogDescription>
            <div>
              <label
                htmlFor="resumeUpload"
                className="flex items-center flex-col justify-center p-7 border border-dashed rounded-xl hover:bg-slate-100 cursor-pointer"
              >
                <File className="h-10 w-10" />
                <h2 className="mt-3">Click here to Upload PDF file</h2>
              </label>
              <input type="file" id="resumeUpload" className="opacity-0" />
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default ResumeUploadDialog;
