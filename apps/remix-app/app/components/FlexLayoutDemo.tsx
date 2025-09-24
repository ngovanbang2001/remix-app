'use client';
import React from 'react';
import { Layout, Model } from 'flexlayout-react';
import 'flexlayout-react/style/light.css';
import DataGridDemo from './DataGridDemo';

export default function FlexLayoutDemo() {
  const model = Model.fromJson({
    global: {
      tabEnableClose: false,
      tabSetEnableMaximize: false,
    },
    borders: [],
    layout: {
      type: "row",
      weight: 100,
      children: [
        {
          type: "tabset",
          weight: 50,
          selected: 0,
          children: [
            {
              type: "tab",
              name: "Data Grid",
              component: "datagrid",
            }
          ]
        },
        {
          type: "tabset",
          weight: 50,
          selected: 0,
          children: [
            {
              type: "tab",
              name: "Form",
              component: "form",
            }
          ]
        }
      ]
    }
  });

  const factory = (node: any) => {
    const component = node.getComponent();

    if (component === "datagrid") {
      return <DataGridDemo />;
    }

    if (component === "form") {
      return (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-4">Workspace Form</h3>
          <p className="text-gray-600">This is where your form content goes.</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="h-screen border rounded-lg relative">
      <Layout model={model} factory={factory} />
    </div>
  );
}