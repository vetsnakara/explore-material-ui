import React from "react";

import { Paper, Tabs, Tab } from "@material-ui/core";

const Footer = ({ groups }) => {
  return (
    <Paper>
      <Tabs value={0} indicatorColor="primary" textColor="primary" centered>
        <Tab value={0} label="All" />
        {groups.map(group => (
          <Tab key={group} label={group} />
        ))}
      </Tabs>
    </Paper>
  );
};

export default Footer;
