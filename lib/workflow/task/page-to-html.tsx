import { TaskParamType, TaskType } from "@/types/task";
import { CodeIcon, GlobeIcon, LucideProps } from "lucide-react";

export const PageToHTMLTask = {
  type: TaskType.PAGE_TO_HTML,
  label: "Get html from page",
  icon: (props: LucideProps) => (
    <CodeIcon className="stroke-pink-400" {...props} />
  ),
  isEntryPoint: false,
  inputs: [
    {
      name: "Website Url",
      type: TaskParamType.BROWSER_INSTANCE,
      required: true,
    },
  ],
};
