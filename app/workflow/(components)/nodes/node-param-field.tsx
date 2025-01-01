"use client";

import { TaskParam, TaskParamType } from "@/types/task";
import { StringParam } from "./param/string-param";
import { useReactFlow } from "@xyflow/react";
import { AppNode } from "@/types/app-node";
import { useCallback } from "react";
import { BrowserInstanceParam } from "./browser-instance-param";

export const NodeParamField = ({
  param,
  nodeId,
}: {
  param: TaskParam;
  nodeId: string;
}) => {
  const { updateNodeData, getNode } = useReactFlow();
  const node = getNode(nodeId) as AppNode;
  const value = node?.data?.inputs?.[param.name];

  const updateNodeParamValue = useCallback(
    (newValue: string) => {
      updateNodeData(nodeId, {
        inputs: {
          ...node?.data.inputs,
          [param.name]: newValue,
        },
      });
    },
    [updateNodeData, param?.name, node?.data?.inputs, nodeId]
  );

  switch (param.type) {
    case TaskParamType.STRING:
      return (
        <StringParam
          param={param}
          value={value}
          updateNodeParamValue={updateNodeParamValue}
        />
      );
    case TaskParamType.BROWSER_INSTANCE:
      <BrowserInstanceParam
        param={param}
        value=""
        updateNodeParamValue={updateNodeParamValue}
      />;
    default:
      return (
        <div className="w-full">
          <p className="text-xs text-muted-foreground">Not implemented</p>
        </div>
      );
  }
};
