import { BeyondClassroom } from "./BeyondClassroom";
import { PillarsShowcase } from "./PillarsShowcase";
import { RecognitionStrip } from "./RecognitionStrip";
import { StudentsSpeak } from "./StudentsSpeak";

export function AcademicCommonSections() {
  return (
    <div className="hks-home">
      <PillarsShowcase />
      <BeyondClassroom />
      <RecognitionStrip />
      <StudentsSpeak />
    </div>
  );
}
