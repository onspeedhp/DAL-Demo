import React, { useEffect } from 'react';
import './App.css';
import { useGetDataHook } from './DAL/getData';
import { Button } from 'antd';
import { ConfigTypes, config } from './DAL/config';
const App: React.FC = () => {
  const { data: orgs, error } = useGetDataHook<ConfigTypes['orgInfo']>({
    params: {
      userId: '8ce1c0ae-77f8-4f58-9cfd-8d863971e4c6',
    },
    configInfo: config.orgInfo,
    cacheOption: false,
  });

  if (!error) {
    console.log(orgs);
  } else {
    console.log(error);
  }

  return (
    <div className='App'>
      <Button></Button>
    </div>
  );
};

export default React.memo(App);
