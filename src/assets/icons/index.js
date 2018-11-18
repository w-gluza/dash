import React from "react";

import Logo from "./src/Logo";
import Favicon from "./src/Favicon";
import Facebook from "./src/Facebook";
import YouTube from "./src/YouTube";
import LinkedIn from "./src/LinkedIn";

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
    case "favicon":
      return <Favicon {...props} />;
    case "facebook":
      return <Facebook {...props} />;
    case "youtube":
      return <YouTube {...props} />;
    case "linkedin":
      return <LinkedIn {...props} />;
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
