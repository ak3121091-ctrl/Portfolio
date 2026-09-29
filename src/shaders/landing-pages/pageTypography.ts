export type LandingPageCustomization = {
  fontFamily?: string;
  colors?: Record<string, string>;
  style?: string;
};

export type PageTypographyProps = {
  typography?: LandingPageCustomization;
};

export function splitTypographyProps<T extends Record<string, any>>(props: T): [PageTypographyProps, Omit<T, "typography">] {
  const { typography, ...rest } = props;
  return [{ typography }, rest as Omit<T, "typography">];
}

export function usePageTypography(recipe?: any, type?: PageTypographyProps): LandingPageCustomization | undefined {
  return type?.typography;
}

export function applyPageCustomization(
  frame: HTMLIFrameElement | null,
  customization?: LandingPageCustomization
) {
  if (!frame?.contentDocument || !customization) return;
  const doc = frame.contentDocument;
  let customStyle = doc.getElementById("threeui-page-customization");
  if (!customStyle) {
    customStyle = doc.createElement("style");
    customStyle.id = "threeui-page-customization";
    doc.head.appendChild(customStyle);
  }
  if (customization.style) {
    customStyle.textContent = customization.style;
  }
}

export function postPageCustomization(
  frame: HTMLIFrameElement | null,
  customization?: LandingPageCustomization
) {
  if (!frame?.contentWindow || !customization) return;
  frame.contentWindow.postMessage(
    { type: "threeui-page-customization", customization },
    "*"
  );
}
