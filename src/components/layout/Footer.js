import React from "react";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";

import { withContext } from "../../context";

const Footer = ({ selectedGroup, groups, onGroupSelect }) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  const index = selectedGroup
    ? groups.findIndex(group => group === selectedGroup) + 1
    : 0;

  const handleSelect = (e, index) => {
    onGroupSelect(index === 0 ? "" : groups[index - 1]);
  };

  return (
    <AppBar position="static">
      <Tabs
        value={index}
        indicatorColor="secondary"
        textColor="secondary"
        scrollButtons="on"
        onChange={handleSelect}
        centered={!mobile}
        variant={mobile ? "scrollable" : "standard"}
      >
        <Tab value={0} label="All" />
        {groups.map(group => (
          <Tab key={group} label={group} />
        ))}
      </Tabs>
    </AppBar>
  );
};

export default withContext(Footer);
