import KeywordGapPage from "@/app/components/keyword-gap/KeywordGapPage";
import { mockKeywordGapData } from "../lib/mockdata";


export default function KeywordGapPreviewPage() {
  return <KeywordGapPage asin="" data={mockKeywordGapData} />;
}