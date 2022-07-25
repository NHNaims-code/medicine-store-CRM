import React from 'react';
import StoreSidebar from '../../sidebars/StoreSidebar/StoreSidebar';


export function StoreLayout({children}) {
  return (
      <div style={{display: 'flex'}}>
        <StoreSidebar/>
        <div style={{backgroundColor: '#f8f9fa', width: '100%'}}>
          {
            children
          }
        </div>
      </div>
  );
}