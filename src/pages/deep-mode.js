import React from 'react';
import { Redirect } from '@docusaurus/router';
import { useLatestVersion } from '@theme/hooks/useDocs';

const DeepMode = () => {
  const latestVersion = useLatestVersion();

  return <Redirect to={`${latestVersion.path}/usage/cmd/scan-usage#--deep`} />;
};

export default DeepMode;
