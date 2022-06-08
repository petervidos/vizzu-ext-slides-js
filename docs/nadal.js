let data = {
	series: [
		{ name: 'Year', type: 'dimension' },
		{ name: 'Result', type: 'dimension' },
		{ name: 'Result_Num', type: 'measure' },
		{ name: 'Round', type: 'dimension' },
		{ name: 'Round2', type: 'dimension' },
		{ name: 'Sets', type: 'measure' },
		{ name: 'Opponent', type: 'dimension' },
		{ name: 'Bagel', type: 'measure' },
		{ name: 'Final', type: 'measure' },
		{ name: 'Count', type: 'measure' },
		{ name: 'Novak', type: 'measure' },
		{ name: 'Roger', type: 'measure' },
		{ name: 'Tournament', type: 'dimension' },
		{ name: 'Player', type: 'dimension' },
		{ name: 'Level', type: 'dimension' },
		{ name: '3SetWin', type: 'measure' },
		{ name: 'Straightwin', type: 'measure' },
		{ name: 'Order_GS', type: 'dimension' },
		{ name: 'Order_all', type: 'dimension' },
],
records: [

		['2005','Won','1','R128','First round','3','Lars Burgsmuller','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2005','Won','1','R64','Second round','3','Xavier Malisse','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2005','Won','1','R32','Third round','3','Richard Gasquet','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2005','Won','1','R16','Fourth round','4','Sebastien Grosjean','1','0','1','0','0','Roland Garros','Nadal','Roland Garros','0','0','1','1'],
		['2005','Won','1','QF','Quarter-final','3','David Ferrer','1','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2005','Won','1','SF','Semi-final','4','Roger Federer','0','0','1','0','1','Roland Garros','Nadal','Roland Garros','0','0','1','1'],
		['2005','Won','1','F','Final','4','Mariano Puerta','0','1','1','0','0','Roland Garros','Nadal','Roland Garros','0','0','1','1'],
		['2006','Won','1','F','Final','4','Roger Federer','0','1','1','0','1','Roland Garros','Nadal','Roland Garros','0','0','1','1'],
		['2006','Won','1','SF','Semi-final','3','Ivan Ljubicic','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2006','Won','1','QF','Quarter-final','2','Novak Djokovic','0','0','1','1','0','Roland Garros','Nadal','Roland Garros','0','0','1','1'],
		['2006','Won','1','R16','Fourth round','4','Lleyton Hewitt','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','0','0','1','1'],
		['2006','Won','1','R32','Third round','4','Paul Henri Mathieu','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','0','0','1','1'],
		['2006','Won','1','R64','Second round','3','Kevin Kim','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2006','Won','1','R128','First round','3','Robin Soderling','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2007','Won','1','F','Final','4','Roger Federer','0','1','1','0','1','Roland Garros','Nadal','Roland Garros','0','0','1','1'],
		['2007','Won','1','SF','Semi-final','3','Novak Djokovic','0','0','1','1','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2007','Won','1','QF','Quarter-final','3','Carlos Moya','1','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2007','Won','1','R16','Fourth round','3','Lleyton Hewitt','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2007','Won','1','R32','Third round','3','Albert Montanes','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2007','Won','1','R64','Second round','3','Flavio Cipolla','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2007','Won','1','R128','First round','3','Juan Martin Del Potro','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2008','Won','1','F','Final','3','Roger Federer','1','1','1','0','1','Roland Garros','Nadal','Roland Garros','1','1','1','1'],
		['2008','Won','1','SF','Semi-final','3','Novak Djokovic','0','0','1','1','0','Roland Garros','Nadal','Roland Garros','1','1','1','1'],
		['2008','Won','1','QF','Quarter-final','3','Nicolas Almagro','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','1','1','1'],
		['2008','Won','1','R16','Fourth round','3','Fernando Verdasco','1','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','1','1','1'],
		['2008','Won','1','R32','Third round','3','Jarkko Nieminen','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','1','1','1'],
		['2008','Won','1','R64','Second round','3','Nicolas Devilder','1','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','1','1','1'],
		['2008','Won','1','R128','First round','3','Thomaz Bellucci','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','1','1','1'],
		['2009','Lost','0','R16','Fourth round','4','Robin Soderling','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','0','0','1','1'],
		['2009','Won','1','R32','Third round','3','Lleyton Hewitt','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2009','Won','1','R64','Second round','3','Teymuraz Gabashvili','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2009','Won','1','R128','First round','3','Marcos Daniel','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2010','Won','1','F','Final','3','Robin Soderling','0','1','1','0','0','Roland Garros','Nadal','Roland Garros','1','1','1','1'],
		['2010','Won','1','SF','Semi-final','3','Jurgen Melzer','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','1','1','1'],
		['2010','Won','1','QF','Quarter-final','3','Nicolas Almagro','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','1','1','1'],
		['2010','Won','1','R16','Fourth round','3','Thomaz Bellucci','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','1','1','1'],
		['2010','Won','1','R32','Third round','3','Lleyton Hewitt','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','1','1','1'],
		['2010','Won','1','R64','Second round','3','Horacio Zeballos','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','1','1','1'],
		['2010','Won','1','R128','First round','3','Gianni Mina','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','1','1','1'],
		['2011','Won','1','F','Final','4','Roger Federer','0','1','1','0','1','Roland Garros','Nadal','Roland Garros','0','0','1','1'],
		['2011','Won','1','SF','Semi-final','3','Andy Murray','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2011','Won','1','QF','Quarter-final','3','Robin Soderling','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2011','Won','1','R16','Fourth round','3','Ivan Ljubicic','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2011','Won','1','R32','Third round','3','Antonio Veic','1','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2011','Won','1','R64','Second round','3','Pablo Andujar','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2011','Won','1','R128','First round','5','John Isner','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','0','0','1','1'],
		['2012','Won','1','F','Final','4','Novak Djokovic','0','1','1','1','0','Roland Garros','Nadal','Roland Garros','0','0','1','1'],
		['2012','Won','1','SF','Semi-final','3','David Ferrer','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2012','Won','1','QF','Quarter-final','3','Nicolas Almagro','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2012','Won','1','R16','Fourth round','3','Juan Monaco','1','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2012','Won','1','R32','Third round','3','Eduardo Schwank','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2012','Won','1','R64','Second round','3','Denis Istomin','1','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2012','Won','1','R128','First round','3','Simone Bolelli','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2013','Won','1','F','Final','3','David Ferrer','0','1','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2013','Won','1','SF','Semi-final','5','Novak Djokovic','0','0','1','1','0','Roland Garros','Nadal','Roland Garros','0','0','1','1'],
		['2013','Won','1','QF','Quarter-final','3','Stan Wawrinka','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2013','Won','1','R16','Fourth round','3','Kei Nishikori','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2013','Won','1','R32','Third round','3','Fabio Fognini','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2013','Won','1','R64','Second round','4','Martin Klizan','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','0','0','1','1'],
		['2013','Won','1','R128','First round','4','Daniel Brands','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','0','0','1','1'],
		['2014','Won','1','F','Final','4','Novak Djokovic','0','1','1','1','0','Roland Garros','Nadal','Roland Garros','0','0','1','1'],
		['2014','Won','1','SF','Semi-final','3','Andy Murray','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2014','Won','1','QF','Quarter-final','4','David Ferrer','1','0','1','0','0','Roland Garros','Nadal','Roland Garros','0','0','1','1'],
		['2014','Won','1','R16','Fourth round','3','Dusan Lajovic','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2014','Won','1','R32','Third round','3','Leonardo Mayer','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2014','Won','1','R64','Second round','3','Dominic Thiem','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2014','Won','1','R128','First round','3','Robby Ginepri','1','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2015','Lost','0','QF','Quarter-final','3','Novak Djokovic','0','0','1','1','0','Roland Garros','Nadal','Roland Garros','0','0','1','1'],
		['2015','Won','1','R16','Fourth round','4','Jack Sock','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','0','0','1','1'],
		['2015','Won','1','R32','Third round','3','Andrey Kuznetsov','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2015','Won','1','R64','Second round','3','Nicolas Almagro','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2015','Won','1','R128','First round','3','Quentin Halys','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2016','Retired','-1','R32','Third round','0','Marcel Granollers','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','0','0','1','1'],
		['2016','Won','1','R64','Second round','3','Facundo Bagnis','1','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2016','Won','1','R128','First round','3','Samuel Groth','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2017','Won','1','F','Final','3','Stan Wawrinka','0','1','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2017','Won','1','SF','Semi-final','3','Dominic Thiem','1','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2017','Won','1','QF','Quarter-final','2','Pablo Carreno Busta','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','0','0','1','1'],
		['2017','Won','1','R16','Fourth round','3','Roberto Bautista Agut','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2017','Won','1','R32','Third round','3','Nikoloz Basilashvili','1','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2017','Won','1','R64','Second round','3','Robin Haase','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2017','Won','1','R128','First round','3','Benoit Paire','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2018','Won','1','F','Final','3','Dominic Thiem','0','1','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2018','Won','1','SF','Semi-final','3','Juan Martin Del Potro','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2018','Won','1','QF','Quarter-final','4','Diego Sebastian Schwartzman','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','0','0','1','1'],
		['2018','Won','1','R16','Fourth round','3','Maximilian Marterer','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2018','Won','1','R32','Third round','3','Richard Gasquet','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2018','Won','1','R64','Second round','3','Guido Pella','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2018','Won','1','R128','First round','3','Simone Bolelli','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2019','Won','1','F','Final','4','Dominic Thiem','0','1','1','0','0','Roland Garros','Nadal','Roland Garros','0','0','1','1'],
		['2019','Won','1','SF','Semi-final','3','Roger Federer','0','0','1','0','1','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2019','Won','1','QF','Quarter-final','3','Kei Nishikori','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2019','Won','1','R16','Fourth round','3','Juan Ignacio Londero','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2019','Won','1','R32','Third round','4','David Goffin','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','0','0','1','1'],
		['2019','Won','1','R64','Second round','3','Yannick Maden','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2019','Won','1','R128','First round','3','Yannick Hanfmann','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2020','Won','1','F','Final','3','Novak Djokovic','1','1','1','1','0','Roland Garros','Nadal','Roland Garros','1','1','1','1'],
		['2020','Won','1','SF','Semi-final','3','Diego Sebastian Schwartzman','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','1','1','1'],
		['2020','Won','1','QF','Quarter-final','3','Jannik Sinner','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','1','1','1'],
		['2020','Won','1','R16','Fourth round','3','Sebastian Korda','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','1','1','1'],
		['2020','Won','1','R32','Third round','3','Stefano Travaglia','1','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','1','1','1'],
		['2020','Won','1','R64','Second round','3','Mackenzie Mcdonald','1','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','1','1','1'],
		['2020','Won','1','R128','First round','3','Egor Gerasimov','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','1','1','1'],
		['2021','Lost','0','SF','Semi-final','4','Novak Djokovic','0','0','1','1','0','Roland Garros','Nadal','Roland Garros','0','0','1','1'],
		['2021','Won','1','QF','Quarter-final','4','Diego Sebastian Schwartzman','1','0','1','0','0','Roland Garros','Nadal','Roland Garros','0','0','1','1'],
		['2021','Won','1','R16','Fourth round','3','Jannik Sinner','1','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2021','Won','1','R32','Third round','3','Cameron Norrie','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2021','Won','1','R64','Second round','3','Richard Gasquet','1','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2021','Won','1','R128','First round','3','Alexei Popyrin','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2022','Won','1','R128','First round','3','Jordan Thompson','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2022','Won','1','R64','Second round','3','Corentin Moutet','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2022','Won','1','R32','Third round','3','Botic van de Zandschulp','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['2022','Won','1','R16','Fourth round','5','Felix Auger-Aliassime','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','0','0','1','1'],
		['2022','Won','1','QF','Quarter-final','4','Novak Djokovic','0','0','1','1','0','Roland Garros','Nadal','Roland Garros','0','0','1','1'],
		['2022','Won','1','SF','Semi-final','2','Alexander Zverev','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','0','0','1','1'],
		['2022','Won','1','F','Final','3','Casper Ruud','1','1','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1'],
		['Total','Won','1','GS','Grand Slam','0','Nobody','0','0','14','0','0','Roland Garros','Nadal','Roland Garros','0','0','1','1'],
		['Total','Won','1','F','Final','0','Nobody','0','1','12','0','0','Barcelona','Nadal','ATP 500','0','0','0','2'],
		['Total','Won','1','F','Final','0','Nobody','0','1','11','0','0','Monte Carlo','Nadal','Masters','0','0','0','3'],
		['Total','Won','1','F','Final','0','Nobody','0','1','10','0','0','Halle','Federer','ATP 500','0','0','0','4'],
		['Total','Won','1','F','Final','0','Nobody','0','1','10','0','0','Basel','Federer','ATP 500','0','0','0','4'],
		['Total','Won','1','F','Final','0','Nobody','0','1','10','0','0','Rome','Nadal','Masters','0','0','0','4'],
		['Total','Won','1','GS','Grand Slam','0','Nobody','0','0','9','0','0','Australian Open','Djokovic','Australian Open','0','0','2','5'],
		['Total','Won','1','GS','Grand Slam','0','Nobody','0','0','8','0','0','Wimbledon','Federer','Wimbledon','0','0','3','6'],
		['Total','Won','1','F','Final','0','Nobody','0','1','8','0','0','Dubai','Federer','ATP 500','0','0','0','6'],
		['Total','Won','1','GS','Grand Slam','0','Nobody','0','0','7','0','0','Wimbledon','Sampras','Wimbledon','0','0','4','7'],
		['Total','Won','1','F','Final','0','Nobody','0','1','7','0','0','Buenos Aires','Vilas','ATP 250','0','0','0','7'],
		['Total','Won','1','F','Final','0','Nobody','0','1','7','0','0','Cincinnati','Federer','Masters','0','0','0','7'],
		['Total','Won','1','GS','Grand Slam','0','Nobody','0','0','6','0','0','Australian Open','Federer','Australian Open','0','0','5','0'],
		['Total','Won','1','GS','Grand Slam','0','Nobody','0','0','6','0','0','Roland Garros','Borg','Roland Garros','0','0','5','0'],
		['Total','Won','1','GS','Grand Slam','0','Nobody','0','0','6','0','0','Wimbledon','Djokovic','Wimbledon','0','0','5','0'],
		['Total','Won','1','GS','Grand Slam','0','Nobody','0','0','5','0','0','US Open','Connors','US Open','0','0','6','0'],
		['Total','Won','1','GS','Grand Slam','0','Nobody','0','0','5','0','0','US Open','Sampras','US Open','0','0','6','0'],
		['Total','Won','1','GS','Grand Slam','0','Nobody','0','0','5','0','0','US Open','Federer','US Open','0','0','6','0'],
		['Total','Won','1','GS','Grand Slam','0','Nobody','0','0','5','0','0','Wimbledon','Borg','Wimbledon','0','0','6','0'],
	]
};

export default data;