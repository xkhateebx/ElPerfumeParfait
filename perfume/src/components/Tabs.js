import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
// import Form1 from "./Form1";
// import Form2 from "./Form2";
// import Form3 from "./Form3";
import Box from "@material-ui/core/Box";
// import '../components/TabStyle.css';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

export default function SimpleTabs() {
  const [store, setStore] = React.useState({ test1: "", test2: "", test3: "" });
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const onSubmit = (
    data: Partial<{ test1: string; test2: string; test3: string }>
  ) => {
    setStore({
      ...store,
      ...data
    });
  };

  console.log(store);

  return (
    <div>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Company" />
          <Tab label="Describtion" />
          <Tab label="Content" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Hello
        {/* <Form1 onSubmit={onSubmit} store={store} /> */}
      </TabPanel>
      <TabPanel value={value} index={1}>
        It's 
        {/* <Form2 onSubmit={onSubmit} store={store} /> */}
      </TabPanel>
      <TabPanel value={value} index={2}>
        ME
        {/* <Form3 onSubmit={onSubmit} store={store} /> */}
      </TabPanel>
    </div>
  );
}