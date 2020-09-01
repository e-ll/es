import React from "react";
import withRouter from "react"
import { useRef, useEffect } from 'react';


function Store(props) {
	const storeDiv = useRef(null);
	const scriptRef = useRef(null);
const { event, ...other } = props;
const mag = 34300034;
const mySearch = `my-search-${mag}`
const myCat = `my-categories-${mag}`
const myStore = `my-store-${mag}`
	window.localStorage.setItem('show_ecwid_logs', 'true');
	window.ecwid_script_defer = true;
	window.ecwid_dynamic_widgets = true;
	window.ec = window.ec || Object();
	window.ec.storefront = window.ec.storefront || Object();
	window.ec.enable_catalog_on_one_page = true;
	window._xnext_initialization_scripts = [
		{
			widgetType: 'ProductBrowser',
			id: myStore,
			arg: ['id=productBrowser', 'views=grid(20,3)']
		},
		{
			widgetType: 'CategoriesV2',
			id: myCat,
			arg: ['id=categoriesV2']
		},
		{
			widgetType: 'SearchWidget',
			id: mySearch,
			arg: ['id=searchWidget']
		}
	];

	var script = document.createElement('script');
	script.charset = 'utf-8';
	script.type = 'text/javascript';
	script.src = `https://app.ecwid.com/script.js?${mag}`;
	script.defer = true;
	script.ref = scriptRef;

	useEffect(() => {
		if (!scriptRef.current) {
			storeDiv.current.appendChild(script);
		}
	});

	return (
		<div>
			<div id={mySearch}></div>
			<div id={myCat}></div>
			<div id={myStore} ref={storeDiv}></div>
			<div className="ec-cart-widget"></div>
		</div>
	);
}

export default Store;
