import { useLocalizer } from "src/app/core/Localization";
import { FooterBuilder } from "./footer-builder";

const InSideFooterComponent = () => {

  const commonLocalizer = useLocalizer("Common-ResCommon");
  const footerData: FooterItemData[] = [
    {
      name:  commonLocalizer("MODULE_COMMON_AUTHENTICATION_LAYOUT_TERMS_OF_USE"),
      position: 'left',
      to: "/terms-of-use"
    },
  ]

  var footerElements = FooterBuilder.Create(footerData)
                              .AddPart({ position: 'left' })
                              .Build();
  return footerElements;
};

export default InSideFooterComponent;
