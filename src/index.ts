import "./index.css";

import type {
  HyperFunctionComponent,
  HfcProps,
} from "hyper-function-component";

const HFC: HyperFunctionComponent<HTMLButtonElement> = (
  container,
  initProps
) => {
  container.classList.add("uiv-button-bmd0z");

  function render(props: HfcProps) {
    if (props.events.onClick) {
      container.onclick = props.events.onClick;
    } else {
      if (container.onclick) {
        container.onclick = null;
      }
    }

    if (props.slots.default) {
      props.slots.default(container);
    } else {
      container.innerHTML = props.attrs.text || "";
    }
  }

  render(initProps);
  return {
    changed(props: HfcProps) {
      render(props);
    },
    disconnected() {},
  };
};

HFC.tag = "button";
// @ts-ignore
HFC.hfc = process.env.HFC_NAME;
// @ts-ignore
HFC.ver = process.env.HFC_VERSION;
// @ts-ignore
HFC.names = process.env.HFC_PROP_NAMES;

export default HFC;
