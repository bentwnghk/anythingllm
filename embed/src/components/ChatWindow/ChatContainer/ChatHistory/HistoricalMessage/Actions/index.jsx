import useCopyText from "@/hooks/useCopyText";
import { Check, ClipboardText } from "@phosphor-icons/react";
import { memo } from "react";
import { Tooltip } from "react-tooltip";

const Actions = ({ message }) => {
  return (
    <div className="allm-flex allm-justify-start allm-items-center allm-gap-x-4">
      <CopyMessage message={message} />
      {/* Other actions to go here later. */}
    </div>
  );
};

function CopyMessage({ message }) {
  const { copied, copyText } = useCopyText();
  return (
    <>
      <div className="allm-mt-3 allm-relative">
        <button
          data-tooltip-id="copy-assistant-text"
          data-tooltip-content="Copy"
          className="allm-border-none allm-text-zinc-300"
          onClick={() => copyText(message)}
        >
          {copied ? (
            <Check size={18} className="allm-mb-1" />
          ) : (
            <ClipboardText size={18} className="allm-mb-1" />
          )}
        </button>
      </div>
      <Tooltip
        id="copy-assistant-text"
        place="bottom"
        delayShow={300}
        className="allm-tooltip !allm-text-xs"
      />
    </>
  );
}

export default memo(Actions);
