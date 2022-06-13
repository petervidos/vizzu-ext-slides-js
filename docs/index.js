window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}

import VizzuSlides from './vizzu-slides.js';
import data from './nadal.js';
import style from './style.js';


let myVizzuSlides = new VizzuSlides('#vizzuWrapper',
[
    [   //1. slide - Összes meccs
    chart => chart.animate({
        data: Object.assign(data, {
				filter: record => record.Year != 'Total',
			}),
            config: {
                channels: {
					x: 'Count',
					label: 'Count'
				},
				title: 'Rafa\'s matches at Roland Garros',
				legend: 'color'
			},
			style: {
				fontSize: 20,
				title: { fontWeight: 300, paddingTop: 50, paddingBottom:0},
					plot: {
						paddingLeft: 20, paddingBottom: "1.5em", paddingTop: "2.5em",
					xAxis: {
						title: { color: '#ffffff00' },
						label: { color: '#ffffff00'},
						interlacing: {color: '#ffffff00' }
					}},
					logo: {width: 100},
	
				}
        }),
    ],
	[   //2. slide - stacked bar chart
	chart => chart.animate({
			config: {
				x: ['Count','Result'],
				color: 'Result',
				title: 'He lost 3 matches out of 116, retired once',
			},
			style: {
				plot : { marker: { colorPalette: '#1EB55FFF #AD0000FF #AEAEAEFF',
				colorGradient: "#AEAEAEFF 0.000000, #AD0000FF 0.500000, #1EB55FFF 1.000000"
				}}
			}	
		}),
	],
	[ 	  //3. slide - bubble chart - lost, retired
		chart => chart.animate({
			config: {
				x: ['Count','Result','Opponent','Year','Round2'],
				label: null,
			},
		},{duration:0}),
	

        chart => chart.animate({
			data: {
				filter: record => record.Year != 'Total' && ( record.Result == 'Lost' || record.Result == 'Retired')
			},
			config: {
				channels: {
					x: null,
					size: 'Count',
					label: ['Opponent','Year'],
					noop: ['Round2'],
				},
				title: 'Djokovic beat him twice',
				geometry: 'circle',
			},
			style: {
				plot : { marker: { 
				borderWidth: 3,
				borderOpacity: 0,
				}}
			}
		}),        

    ],
	
    [   //4. slide - matrix
		chart => chart.animate({
			config: {
				label: null,
				color: { set: 'Result_Num', range: { min: -1, max: 1 }},
				noop: ['Year','Round2'],
				legend: 'lightness'
			},
			style: {
					plot: {
						yAxis: {
							label: { fontSize: '120%' },
						},
					xAxis: {
						title: { color: null },
						label: { color: null },
						
					}},
					logo: {width: 0},
				}
		}),
	   
        chart => chart.animate({
			data: {
				filter: record => record.Year != 'Total',
			},
			config: {
				x: 'Year',
				y: 'Round2',
				size: null,
				orientation: 'horizontal',
				geometry: 'rectangle',
				title: 'Nadal\'s matches at Roland Garros',
				legend: 'size'
			}
		}),
    ],
    
	[   //5. slide - 3 setters
        chart => chart.animate({

			config: {
				lightness: '3SetWin',
				title: '90 wins in straight sets', 
			},
			style: { plot: { marker: {
				maxLightness: 0,
				minLightness: 0.8 
			}}}
		})

    ],

	[   //6. slide - 3 setter years
        chart => chart.animate({

			config: {
				lightness: 'Straightwin',
				title: 'In these 4 years he did not drop a set', 
			},
		})

    ],



	[   //7. slide - bagels
	chart => chart.animate({

		config: {
			lightness: null,
			title: '',
		},
		style: { plot: { marker: {
			maxLightness: null,
			minLightness: null 
		}}}
	}),

	chart => chart.animate({

		config: {
			lightness: 'Bagel',
			title: '21 times Rafa won a set 6-0',
		},
		style: { plot: { marker: {
			maxLightness: 0,
			minLightness: 0.8 
		}}}
	})

	],

	[   //8. slide - Djoko
	chart => chart.animate({

		config: {
			lightness: null,
			title: '',
		},
		style: { plot: { marker: {
			maxLightness: null,
			minLightness: null 
		}}}
	}),


	chart => chart.animate({

		config: {
			lightness: 'Novak',
			title: 'His most frequent opponent was Djokovic - they played 10 times',
		},
		style: { plot: { marker: {
			maxLightness: 0,
			minLightness: 0.8 
		}}}
	})

	],

	[   //9. slide - Roger
	chart => chart.animate({

		config: {
			lightness: 'Roger',
			title: 'Second on this list is Federer - with 6 encounters',
		}
	})

	],

	[   //10. slide - Finals
	chart => chart.animate({

		config: {
			lightness: 'Final',
			title: 'Rafa won all of his 14 finals',
		}
	})

	],

	[   //11. slide - Most Grand Slams in a single tournament
	chart => chart.animate({
		data: {
			filter: record => record.Year != 'Total' && record.Round == 'F'
		},
		config: {
			y: {set: 'Round2', range: {max: 1, min: -5}},
			x: "Count",
			lightness: null,
			noop: 'Year',
			label: null,
			title: '',
		},
		style: { plot: { 
			marker: {
			borderWidth: 0,
			colorPalette: '#C6652A #CDA02E #47B0FF #329564 #5C88F2 #91A9B5 #DBC4B1',
			maxLightness: null,
			minLightness: null,
				label:{ position: 'center', format: 'dimensionsFirst'},	

		},
		xAxis: {
			title: { color: '#ffffff00' },
			label: { color: '#ffffff00'},
		},
		yAxis: {
			title: { color: '#ffffff00' },
			label: { color: '#ffffff00',fontSize: null},
		}
		},
		logo: {width: 100},
	}
	}),
 
	chart => chart.animate({
		data: {
			filter: record => record.Year == 'Total' && record.Tournament == 'Roland Garros' && record.Player == 'Nadal'
		},
		config: {
			noop: ['Level','Round2'],
			label: ['Player','Tournament','Count'],
			y: {set: ['Order_GS','Player','Tournament']},
		},		
	},{duration:0}),

	chart => chart.animate({
		config: {
			noop: 'Level',
		},	
	},{duration:0}),
 
	chart => chart.animate({
		data: {
			filter: record => record.Year == 'Total' && record.Round == 'GS'
		},
		config: {
			y: {set: ['Order_GS','Player','Tournament','Level'], range: {max: null, min: null}},
			title: 'Rafa won the same Grand Slam title the most times' ,
			color: 'Level',
			legend: 'color',
			noop: null,
			sort: 'byValue'
		},
		

	}),

	],
	
 	[  //12. slide - Most Titles in a single tournament
	 chart => chart.animate({
		config: {
			x: ['Count','Order_all']
		},
	},{duration:0}),

	 chart => chart.animate({
		data: {
			filter: record => record.Year == 'Total'
		},
		config: {
			y: {set: ['Order_all','Player','Tournament','Level'], range: {max: 19, min: 7}},
			x: ['Count','Order_GS'],
			title: 'Winners of the same ATP titles - Rafa is 1st, 2nd and 3rd!' ,
		},
	}),
	],   
   
]
);

myVizzuSlides.initialized.then(() => {
    console.log("MySlides init");
	myVizzuSlides.playAnim(0,0);
});

