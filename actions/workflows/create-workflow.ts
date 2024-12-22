"use server";

import prisma from "@/lib/prisma";
import {
  CreateWorkflowSchemaType,
  createWorkflowSchema,
} from "@/schema/workflows";
import { WorkflowStatus } from "@/types/workflow";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { AppNode } from "../../types/app-node";
import { Edge } from "@xyflow/react";
import { TaskType } from "@/types/task";
import { createFlowNode } from "@/lib/workflow/create-flow-node";

export async function createWorkflow(form: CreateWorkflowSchemaType) {
  const { success, data } = createWorkflowSchema.safeParse(form);

  if (!success) {
    throw new Error("invalid form data");
  }

  const { userId } = auth();

  if (!userId) {
    throw new Error("unauthenticated");
  }

  const initalWorkflow: { nodes: AppNode[]; edges: Edge[] } = {
    nodes: [],
    edges: [],
  };

  initalWorkflow.nodes.push(createFlowNode(TaskType.LAUNCH_BROWSER));

  const result = await prisma.workflow.create({
    data: {
      userId,
      status: WorkflowStatus.DRAFT,
      definition: JSON.stringify(initalWorkflow),
      ...data,
    },
  });

  if (!result) {
    throw new Error("failed to create workflow");
  }

  redirect(`/workflow/editor/${result.id}`);
}
