import React from "react";

import { Paper, Tabs, Tab } from "@material-ui/core";

const Footer = ({ selectedGroup, groups, onSelect }) => {
  const index = selectedGroup
    ? groups.findIndex(group => group === selectedGroup) + 1
    : 0;

  const handleSelect = (e, index) => {
    onSelect(index === 0 ? "" : groups[index - 1]);
  };

  return (
    <Paper>
      <Tabs
        value={index}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        onChange={handleSelect}
      >
        <Tab value={0} label="All" />
        {groups.map(group => (
          <Tab key={group} label={group} />
        ))}
      </Tabs>
    </Paper>
  );
};

export default Footer;
