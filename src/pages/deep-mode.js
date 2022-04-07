import React from 'react';
import { Redirect } from '@docusaurus/router';
import { useLatestVersion } from '@docusaurus/plugin-content-docs/client';

const DeepMode = () => {
  const latestVersion = useLatestVersion();

  return <Redirect to={`${latestVersion.path}/usage/cmd/scan-usage#--deep`} />;
};

export default DeepMode;
