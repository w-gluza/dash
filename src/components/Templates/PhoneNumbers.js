import React from "react";
import { withNamespaces } from "react-i18next";
import TagsInput from "react-tagsinput";

class PhoneNumber extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <TagsInput
        value={value
          .split(";")
          .filter(x => x)
          .map(x => " " + x)}
        onChange={numbers =>
          onChange(
            numbers
              .map(number => number.replace(/\D/g, ""))
              .filter(x => x)
              .join(";")
          )
        }
        addKeys={[
          9, // tab
          13, // enter
          32, // space
          186, // semicolon
          188 // coma
        ]}
        inputProps={{
          placeholder: this.props.t("campaigns.newContactsListPlaceholder"),
          maxLength: "20",
          inputMode: "numeric",
          type: "number"
        }}
      />
    );
  }
}

export default withNamespaces("common")(PhoneNumber);
