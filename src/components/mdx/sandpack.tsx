import { Sandpack } from '@codesandbox/sandpack-react';

export const MdxSandPack = () => {
  return (
    <Sandpack
      theme={'dark'}
      options={{
        closableTabs: false,
        layout: 'console',
        resizablePanels: false,
      }}
    />
  );
};
