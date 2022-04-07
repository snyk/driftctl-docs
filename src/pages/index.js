import React from 'react';
import { Redirect } from '@docusaurus/router';
import { useLatestVersion } from '@docusaurus/plugin-content-docs/client';

const Home = () => {
  const latestVersion = useLatestVersion();

  return <Redirect to={latestVersion.path} />;
};

export default Home;
