import React from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';

type IMenuItemProps = {
	title: string;
};

const MenuItem = ({ title }: IMenuItemProps) => {
	const { name } = useParams();
	return (
		<Link to={title}>
			<div className="directory-menu">
				<div className="menu-item">
					<div className="content">
						<h1 className="title">{title}</h1>
						<span className="subtitle">SHOP NOW {name}</span>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default MenuItem;
