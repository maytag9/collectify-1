import { Breadcrumb, Layout, Switch } from 'antd';
import { BulbFilled, BulbOutlined} from '@ant-design/icons'
import '../../global_styles.less';
import React, {useState} from 'react';
import NavBar from '../NavBar';
import ItemGallery from '../ItemGallery';
import MovieGallery from '../MovieGallery';
import ListBanner from '../ListBanner';

const { Content, Footer } = Layout;

const MainWrapper = () => {
  // const [collapsed, setCollapsed] = useState(true);
  const [themeMode, setThemeMode] = useState('light');

	const themePrimary = themeMode != 'dark' ? 'lightPrimary' : 'darkPrimary';
	const themeSecondary = themeMode != 'dark' ? 'lightSecondary' : 'darkSecondary';

  const changeTheme = (value) => {
    setThemeMode(value ? 'dark' : 'light');
  };

  return (
    <Layout style={{minHeight: '100vh'}}>
			<div
				style={{
					position: "absolute",
					right: '0',
					padding: '20px',
					width: '100',
			}}>
				<Switch
					className='themeSwitch'
					checked={themeMode === 'dark'}
					onChange={changeTheme}
					checkedChildren={<BulbOutlined />}
					unCheckedChildren={<BulbFilled />}
				/>
			</div>
			<NavBar 
				themeMode={themeMode} 
				themeSecondary={themeSecondary}
			/>
			<Layout>
				{/*<SideMenu 
					theme={themeMode} 
					collapsed={collapsed} 
					setCollapsed={setCollapsed}
				/>*/}
				<ListBanner/>
				<Layout style={{padding: '0 24px 24px'}}>
					<Breadcrumb
						style={{
							margin: '16px 0',
						}}
					>
						<Breadcrumb.Item>Home</Breadcrumb.Item>
						<Breadcrumb.Item>List</Breadcrumb.Item>
						<Breadcrumb.Item>App</Breadcrumb.Item>
					</Breadcrumb>
					<Content
						style={{
							padding: 24,
							margin: 0,
							minHeight: 280,
						}}
					>
						<ItemGallery />
						<br/>
						<MovieGallery/>
						<br/>
						<MovieGallery/>
					</Content>
					<Footer style={{textAlign: 'center'}}>
						Collectify ©2023 Created by Maytag @insert-company-name-here?
					</Footer>
				</Layout>
			</Layout>
    </Layout>
  );
};
export default MainWrapper;