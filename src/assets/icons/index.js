import React from "react";

import Logo from "./src/Logo";
import LogoIcon from "./src/LogoIcon";
import Favicon from "./src/Favicon";

import SMS from "./src/SMS";
import Pricing from "./src/Pricing";
import Inbox from "./src/Inbox";
import Security from "./src/Security";
import Report from "./src/Report";
import BI from "./src/BI";

const Icon = props => {
  switch (props.name) {
    case "logo":
      return <Logo {...props} />;
    case "logoIcon":
      return <LogoIcon {...props} />;
    case "favicon":
      return <Favicon {...props} />;
    case "sms":
      return <SMS {...props} />;
    case "pricing":
      return <Pricing {...props} />;
    case "inbox":
      return <Inbox {...props} />;
    case "report":
      return <Report {...props} />;
    case "security":
      return <Security {...props} />;
    case "bi":
      return <BI {...props} />;
    default:
      return;
  }
};

export default Icon;
