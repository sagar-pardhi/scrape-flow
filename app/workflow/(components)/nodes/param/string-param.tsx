import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ParamProps } from "@/types/app-node";
import { TaskParam } from "@/types/task";
import { useId, useState } from "react";

export const StringParam = ({
  param,
  value,
  updateNodeParamValue,
}: ParamProps) => {
  const [internalValue, setInternalValue] = useState(value);
  const id = useId();

  return (
    <div className="space-y-1 p-1 w-full">
      <Label htmlFor={id} className="text-xs flex">
        {param.name}
        {param.required && <p className="text-red-400 px-2">*</p>}
      </Label>
      <Input
        id={id}
        placeholder="Enter value here"
        className="text-xs"
        value={internalValue}
        onChange={(e) => setInternalValue(e.target.value)}
        onBlur={(e) => updateNodeParamValue(e.target.value)}
      />
      {param.helperText && (
        <p className="px-2 text-muted-foreground">{param.helperText}</p>
      )}
    </div>
  );
};
