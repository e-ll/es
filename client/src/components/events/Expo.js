import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import Lector from '../../canvas/Lector';

import Market from "../../canvas/market";
import Foodtrack from "../../canvas/foodtrack";
import { Tooltip, Button, IconButton, ButtonGroup } from '@material-ui/core';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19];
const useStyles = makeStyles({
	hall: {
		position: 'relative',
		width: '100vw'
	},
	link: {
		position: 'absolute',
		left: 170,
		height: 100,
		'&:hover': {
			textDecoration: 'none !important'
		}
	},
	link1: {
		position: 'absolute',
		'&:hover': {
			textDecoration: 'none !important'
		}
	},
	hall_image: {
		width: '100vw',
		height: '100vh',
		backgroundImage: 'url("assets/images/fair/expohall.jpg")',
		backgroundSize: 'cover'
	}
});

export default function Hall(events) {
	const classes = useStyles();
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		window.addEventListener('resize', () => setWidth(window.innerWidth));
	}, []);
	
	return (
		<div className="body">
			{/* Header */}

			<div>
				<TransformWrapper
					wheel={{
						step: 480
					}}
				>
					{({ zoomIn, zoomOut, resetTransform, positionX, positionY, scale, previousScale }) => (
						<>
							<div className="tools">
								<div className="spacer" />
								<ButtonGroup
									orientation="vertical"
									color="primary"
									aria-label="vertical contained primary button group"
									variant="text"
								>
									<Button onClick={zoomIn}>+</Button>
									<Button onClick={zoomOut}>-</Button>
									<Button onClick={resetTransform}>Reset</Button>
								</ButtonGroup>
							</div>
							<div className="element">
								<TransformComponent>
									<div style={{ width: '100vw', height: '500', border: '1px solid' }}>
										<h1>Выставка</h1>
										<p>Экофест</p>
										<div
											style={{
												display: 'grid',
												gridTemplateColumns: 'repeat(6, 50px)',
												gridGap: '2'
											}}
										>
											{/* <Pole /> */}
											{arr.map((event, index) => (
												<Tooltip title={`Стенд № ${index}`} interactive>
													<Link to={`/event/${event._id}`}>
														<IconButton aria-label="delete">
															<Market />
														</IconButton>
													</Link>
												</Tooltip>
											))}
										</div>
										<div
											style={{
												display: 'grid',
												gridTemplateColumns: 'repeat(4, auto)',
												gridGap: '2'
											}}
										>
											{arr.map((item, index) => (
												<Tooltip title={`Стенд № ${item}`} interactive>
													<Link to="/fair/hall">
														<IconButton aria-label="delete">
															<Foodtrack index={index} />
														</IconButton>
													</Link>
												</Tooltip>
											))}
										</div>

										<Lector />
									</div>
								</TransformComponent>
							</div>
							<div className="info">
								<h3>State</h3>
								<h5>
									<span className="badge badge-secondary">Position x : {positionX}px</span>
									<span className="badge badge-secondary">Position y : {positionY}px</span>
									<span className="badge badge-secondary">Scale : {scale}</span>
									<span className="badge badge-secondary">Previous scale : {previousScale}</span>
								</h5>
							</div>
						</>
					)}
				</TransformWrapper>
			</div>
			<div className="footer">
				
			</div>
		</div>
	);
}
