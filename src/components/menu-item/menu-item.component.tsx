import React from 'react';

type IMenuItemProps = {
	title: string;
};

const MenuItem = ({ title }: IMenuItemProps) => {
	return (
		<div className="directory-menu">
			<div className="menu-item">
				<div className="content">
					<h1 className="title">{title}</h1>
					<span className="subtitle">SHOP NOW</span>
				</div>
			</div>
		</div>
	);
};

export default MenuItem;
