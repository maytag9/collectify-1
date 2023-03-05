// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BulbFilled, BulbOutlined} from '@ant-design/icons';
import { Layout, Switch } from 'antd';
import ListView from './pages/ListView'

const App = () => {
  // const [collapsed, setCollapsed] = useState(true);
  // const [themeMode, setThemeMode] = useState('light');

	// const themePrimary = themeMode !== 'dark' ? 'lightPrimary' : 'darkPrimary';
	// const themeSecondary = themeMode !== 'dark' ? 'lightSecondary' : 'darkSecondary';

  /*const changeTheme = (value) => {
    setThemeMode(value ? 'dark' : 'light');
  };*/

  return (
    <Layout className="App" style={{minHeight: '100vh'}}>
			<div
				style={{
					position: "absolute",
					right: '0',
					padding: '20px',
					width: '100',
			}}>
				<Switch
					className='themeSwitch'
					// checked={themeMode === 'dark'}
					// onChange={changeTheme}
					checkedChildren={<BulbOutlined />}
					unCheckedChildren={<BulbFilled />}
				/>
			</div>
      <ListView />
    </Layout>
  );
}

export default App;
