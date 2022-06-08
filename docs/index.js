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
				title: 'Nadal\'s matches at Roland Garros',
				legend: 'color'
			},
			style: {
				title: { fontWeight: 200},
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
				plot : { marker: { colorPalette: '#C6652AFF #AD0000FF #AEAEAEFF',
				colorGradient: "#AEAEAEFF 0.000000, #AD0000FF 0.500000, #C6652AFF 1.000000"
				}}
			}	
		}),
	],
	[ 	  //3. slide - bubble chart - lost, retired
		chart => chart.animate({
			config: {
				x: ['Count','Result','Opponent','Year','Round2'],
				label: null,
			}
		}),
	
	
		chart => chart.animate({
			data: {
				filter: record => record.Year != 'Total' && ( record.Result == 'Lost' || record.Result == 'Retired')
			},
			style: {
				plot : { marker: { 
				borderWidth: 2,
				borderOpacity: 0,
				}}
			}
		}),   
	

        chart => chart.animate({
			config: {
				channels: {
					x: null,
					size: 'Count',
					label: ['Opponent','Year'],
					noop: ['Round2'],
				},
				title: 'Djokovic beat him twice',
				geometry: 'circle',
				sort:'byValue'
			}
		}),        

    ],
	
    [   //4. slide - matrix
		chart => chart.animate({
			config: {
				label: null,
				color: { set: 'Result_Num', range: { min: -1, max: 1 }},
				noop: ['Round2','Year'],
				legend: 'lightness'
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
				legend: null,
				sort:'none'
			}
		}),
    ],
    
	[   //5. slide - 3 setters
        chart => chart.animate({

			config: {
				lightness: '3SetWin',
				title: '87 wins in straight sets', //78%
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
				title: 'In these 3 years he did not drop a set', //78%
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
		style: { plot: { marker: {
			maxLightness: null,
			minLightness: null,
				label:{ position: 'center', format: 'dimensionsFirst'},
		}}}
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
	}),

	chart => chart.animate({
		config: {
			noop: 'Level',
		},	
		style: {
			plot : { marker: { colorPalette: '#CDA02E #C6652A #47B0FF #329564 #5C88F2 #91A9B5 #DBC4B1'
			}}
		}		
	}),
 
	chart => chart.animate({
		data: {
			filter: record => record.Year == 'Total' && record.Round == 'GS'
		},
		config: {
			y: {set: ['Order_GS','Player','Tournament','Level'], range: {max: null, min: null}},
			title: 'He won the same Grand Slam the most times' ,
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
	}),

	 chart => chart.animate({
		data: {
			filter: record => record.Year == 'Total'
		},
		config: {
			y: {set: ['Order_all','Player','Tournament','Level'], range: {max: 19, min: 7}},
			x: ['Count','Order_GS'],
			title: 'He won the same ATP title the most times' ,
		},
	}),

	chart => chart.animate({
		data: {
			filter: record => record.Year == 'Total' && record.Count >6
		},
		config: {
			y: {set: ['Order_all','Player','Tournament','Level'], range: {max: null, min: null}},
		},
	}),  
	],   
    
]
);

myVizzuSlides.initialized.then(() => {
    console.log("MySlides init");
	myVizzuSlides.playAnim(0,0);
});

