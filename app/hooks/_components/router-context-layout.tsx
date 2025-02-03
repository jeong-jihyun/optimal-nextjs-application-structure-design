"use client";
import {
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from "next/navigation";
import { Boundary } from "../../../ui/boundary";

export function LayoutHooks() {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const selectedLayoutSegments = useSelectedLayoutSegments();

  return selectedLayoutSegment ? (
    <Boundary label={["Client Component Hooks"]} size="small">
      <div className="overflow-x-auto text-sm text-black [color-scheme:dark]">
        <pre>
          {JSON.stringify(
            {
              useSelectedLayoutSegment: selectedLayoutSegment,
              useSelectedLayoutSegments: selectedLayoutSegments,
            },
            null,
            2
          )}
        </pre>
      </div>
    </Boundary>
  ) : null;
}
