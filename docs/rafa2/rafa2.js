
import Vizzu from 'https://cdn.jsdelivr.net/npm/vizzu@latest/dist/vizzu.min.js';

let chart = new Vizzu('vizzuCanvas');

let data = {
	series: [
		{ name: 'Year', type: 'dimension' },
		{ name: 'Result', type: 'dimension' },
		{ name: 'Result_Num', type: 'measure' },
		{ name: 'Round', type: 'dimension' },
		{ name: 'Round2', type: 'dimension' },
		{ name: 'Sets', type: 'measure' },
		{ name: 'Opponent', type: 'dimension' },
		{ name: 'Won', type: 'measure' },
		{ name: 'Lost', type: 'measure' },
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
		{ name: 'Total_GS', type: 'dimension' },
		{ name: 'Top', type: 'dimension' },
],
records: [

		['2005','Won','1','R128','First round','3','Lars Burgsmuller','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2005','Won','1','R64','Second round','3','Xavier Malisse','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2005','Won','1','R32','Third round','3','Richard Gasquet','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2005','Won','1','R16','Fourth round','4','Sebastien Grosjean','1','0','1','0','1','0','0','Roland Garros','Nadal','Roland Garros','0','0','1','1','',''],
		['2005','Won','1','QF','Quarter-final','3','David Ferrer','1','0','1','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2005','Won','1','SF','Semi-final','4','Roger Federer','1','0','0','0','1','0','1','Roland Garros','Nadal','Roland Garros','0','0','1','1','',''],
		['2005','Won','1','F','Final','4','Mariano Puerta','1','0','0','1','1','0','0','Roland Garros','Nadal','Roland Garros','0','0','1','1','',''],
		['2006','Won','1','F','Final','4','Roger Federer','1','0','0','1','1','0','1','Roland Garros','Nadal','Roland Garros','0','0','1','1','',''],
		['2006','Won','1','SF','Semi-final','3','Ivan Ljubicic','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2006','Won','1','QF','Quarter-final','2','Novak Djokovic','1','0','0','0','1','1','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2006','Won','1','R16','Fourth round','4','Lleyton Hewitt','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','0','0','1','1','',''],
		['2006','Won','1','R32','Third round','4','Paul Henri Mathieu','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','0','0','1','1','',''],
		['2006','Won','1','R64','Second round','3','Kevin Kim','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2006','Won','1','R128','First round','3','Robin Soderling','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2007','Won','1','F','Final','4','Roger Federer','1','0','0','1','1','0','1','Roland Garros','Nadal','Roland Garros','0','0','1','1','',''],
		['2007','Won','1','SF','Semi-final','3','Novak Djokovic','1','0','0','0','1','1','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2007','Won','1','QF','Quarter-final','3','Carlos Moya','1','0','1','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2007','Won','1','R16','Fourth round','3','Lleyton Hewitt','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2007','Won','1','R32','Third round','3','Albert Montanes','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2007','Won','1','R64','Second round','3','Flavio Cipolla','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2007','Won','1','R128','First round','3','Juan Martin Del Potro','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2008','Won','1','F','Final','3','Roger Federer','1','0','1','1','1','0','1','Roland Garros','Nadal','Roland Garros','1','1','1','1','',''],
		['2008','Won','1','SF','Semi-final','3','Novak Djokovic','1','0','0','0','1','1','0','Roland Garros','Nadal','Roland Garros','1','1','1','1','',''],
		['2008','Won','1','QF','Quarter-final','3','Nicolas Almagro','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','1','1','1','',''],
		['2008','Won','1','R16','Fourth round','3','Fernando Verdasco','1','0','1','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','1','1','1','',''],
		['2008','Won','1','R32','Third round','3','Jarkko Nieminen','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','1','1','1','',''],
		['2008','Won','1','R64','Second round','3','Nicolas Devilder','1','0','1','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','1','1','1','',''],
		['2008','Won','1','R128','First round','3','Thomaz Bellucci','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','1','1','1','',''],
		['2009','Won','1','R32','Third round','3','Lleyton Hewitt','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2009','Won','1','R64','Second round','3','Teymuraz Gabashvili','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2009','Won','1','R128','First round','3','Marcos Daniel','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2010','Won','1','F','Final','3','Robin Soderling','1','0','0','1','1','0','0','Roland Garros','Nadal','Roland Garros','1','1','1','1','',''],
		['2010','Won','1','SF','Semi-final','3','Jurgen Melzer','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','1','1','1','',''],
		['2010','Won','1','QF','Quarter-final','3','Nicolas Almagro','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','1','1','1','',''],
		['2010','Won','1','R16','Fourth round','3','Thomaz Bellucci','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','1','1','1','',''],
		['2010','Won','1','R32','Third round','3','Lleyton Hewitt','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','1','1','1','',''],
		['2010','Won','1','R64','Second round','3','Horacio Zeballos','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','1','1','1','',''],
		['2010','Won','1','R128','First round','3','Gianni Mina','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','1','1','1','',''],
		['2011','Won','1','F','Final','4','Roger Federer','1','0','0','1','1','0','1','Roland Garros','Nadal','Roland Garros','0','0','1','1','',''],
		['2011','Won','1','SF','Semi-final','3','Andy Murray','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2011','Won','1','QF','Quarter-final','3','Robin Soderling','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2011','Won','1','R16','Fourth round','3','Ivan Ljubicic','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2011','Won','1','R32','Third round','3','Antonio Veic','1','0','1','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2011','Won','1','R64','Second round','3','Pablo Andujar','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2011','Won','1','R128','First round','5','John Isner','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','0','0','1','1','',''],
		['2012','Won','1','F','Final','4','Novak Djokovic','1','0','0','1','1','1','0','Roland Garros','Nadal','Roland Garros','0','0','1','1','',''],
		['2012','Won','1','SF','Semi-final','3','David Ferrer','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2012','Won','1','QF','Quarter-final','3','Nicolas Almagro','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2012','Won','1','R16','Fourth round','3','Juan Monaco','1','0','1','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2012','Won','1','R32','Third round','3','Eduardo Schwank','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2012','Won','1','R64','Second round','3','Denis Istomin','1','0','1','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2012','Won','1','R128','First round','3','Simone Bolelli','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2013','Won','1','F','Final','3','David Ferrer','1','0','0','1','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2013','Won','1','SF','Semi-final','5','Novak Djokovic','1','0','0','0','1','1','0','Roland Garros','Nadal','Roland Garros','0','0','1','1','',''],
		['2013','Won','1','QF','Quarter-final','3','Stan Wawrinka','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2013','Won','1','R16','Fourth round','3','Kei Nishikori','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2013','Won','1','R32','Third round','3','Fabio Fognini','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2013','Won','1','R64','Second round','4','Martin Klizan','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','0','0','1','1','',''],
		['2013','Won','1','R128','First round','4','Daniel Brands','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','0','0','1','1','',''],
		['2014','Won','1','F','Final','4','Novak Djokovic','1','0','0','1','1','1','0','Roland Garros','Nadal','Roland Garros','0','0','1','1','',''],
		['2014','Won','1','SF','Semi-final','3','Andy Murray','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2014','Won','1','QF','Quarter-final','4','David Ferrer','1','0','1','0','1','0','0','Roland Garros','Nadal','Roland Garros','0','0','1','1','',''],
		['2014','Won','1','R16','Fourth round','3','Dusan Lajovic','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2014','Won','1','R32','Third round','3','Leonardo Mayer','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2014','Won','1','R64','Second round','3','Dominic Thiem','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2014','Won','1','R128','First round','3','Robby Ginepri','1','0','1','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2015','Won','1','R16','Fourth round','4','Jack Sock','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','0','0','1','1','',''],
		['2015','Won','1','R32','Third round','3','Andrey Kuznetsov','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2015','Won','1','R64','Second round','3','Nicolas Almagro','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2015','Won','1','R128','First round','3','Quentin Halys','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2016','Won','1','R64','Second round','3','Facundo Bagnis','1','0','1','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2016','Won','1','R128','First round','3','Samuel Groth','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2017','Won','1','F','Final','3','Stan Wawrinka','1','0','0','1','1','0','0','Roland Garros','Nadal','Roland Garros','1','1','1','1','',''],
		['2017','Won','1','SF','Semi-final','3','Dominic Thiem','1','0','1','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','1','1','1','',''],
		['2017','Won','1','QF','Quarter-final','2','Pablo Carreno Busta','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','1','1','1','',''],
		['2017','Won','1','R16','Fourth round','3','Roberto Bautista Agut','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','1','1','1','',''],
		['2017','Won','1','R32','Third round','3','Nikoloz Basilashvili','1','0','1','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','1','1','1','',''],
		['2017','Won','1','R64','Second round','3','Robin Haase','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','1','1','1','',''],
		['2017','Won','1','R128','First round','3','Benoit Paire','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','1','1','1','',''],
		['2018','Won','1','F','Final','3','Dominic Thiem','1','0','0','1','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2018','Won','1','SF','Semi-final','3','Juan Martin Del Potro','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2018','Won','1','QF','Quarter-final','4','Diego Sebastian Schwartzman','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','0','0','1','1','',''],
		['2018','Won','1','R16','Fourth round','3','Maximilian Marterer','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2018','Won','1','R32','Third round','3','Richard Gasquet','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2018','Won','1','R64','Second round','3','Guido Pella','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2018','Won','1','R128','First round','3','Simone Bolelli','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2019','Won','1','F','Final','4','Dominic Thiem','1','0','0','1','1','0','0','Roland Garros','Nadal','Roland Garros','0','0','1','1','',''],
		['2019','Won','1','SF','Semi-final','3','Roger Federer','1','0','0','0','1','0','1','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2019','Won','1','QF','Quarter-final','3','Kei Nishikori','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2019','Won','1','R16','Fourth round','3','Juan Ignacio Londero','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2019','Won','1','R32','Third round','4','David Goffin','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','0','0','1','1','',''],
		['2019','Won','1','R64','Second round','3','Yannick Maden','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2019','Won','1','R128','First round','3','Yannick Hanfmann','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2020','Won','1','F','Final','3','Novak Djokovic','1','0','1','1','1','1','0','Roland Garros','Nadal','Roland Garros','1','1','1','1','',''],
		['2020','Won','1','SF','Semi-final','3','Diego Sebastian Schwartzman','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','1','1','1','',''],
		['2020','Won','1','QF','Quarter-final','3','Jannik Sinner','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','1','1','1','',''],
		['2020','Won','1','R16','Fourth round','3','Sebastian Korda','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','1','1','1','',''],
		['2020','Won','1','R32','Third round','3','Stefano Travaglia','1','0','1','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','1','1','1','',''],
		['2020','Won','1','R64','Second round','3','Mackenzie Mcdonald','1','0','1','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','1','1','1','',''],
		['2020','Won','1','R128','First round','3','Egor Gerasimov','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','1','1','1','',''],
		['2021','Won','1','QF','Quarter-final','4','Diego Sebastian Schwartzman','1','0','1','0','1','0','0','Roland Garros','Nadal','Roland Garros','0','0','1','1','',''],
		['2021','Won','1','R16','Fourth round','3','Jannik Sinner','1','0','1','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2021','Won','1','R32','Third round','3','Cameron Norrie','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2021','Won','1','R64','Second round','3','Richard Gasquet','1','0','1','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2021','Won','1','R128','First round','3','Alexei Popyrin','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2022','Won','1','R128','First round','3','Jordan Thompson','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2022','Won','1','R64','Second round','3','Corentin Moutet','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2022','Won','1','R32','Third round','3','Botic van de Zandschulp','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2022','Won','1','R16','Fourth round','5','Felix Auger-Aliassime','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','0','0','1','1','',''],
		['2022','Won','1','QF','Quarter-final','4','Novak Djokovic','1','0','0','0','1','1','0','Roland Garros','Nadal','Roland Garros','0','0','1','1','',''],
		['2022','Won','1','SF','Semi-final','2','Alexander Zverev','1','0','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2022','Won','1','F','Final','3','Casper Ruud','1','0','1','1','1','0','0','Roland Garros','Nadal','Roland Garros','1','0','1','1','',''],
		['2021','Lost','0','SF','Semi-final','4','Novak Djokovic','0','1','0','0','1','1','0','Roland Garros','Nadal','Roland Garros','0','0','1','1','',''],
		['2015','Lost','0','QF','Quarter-final','3','Novak Djokovic','0','1','0','0','1','1','0','Roland Garros','Nadal','Roland Garros','0','0','1','1','',''],
		['2009','Lost','0','R16','Fourth round','4','Robin Soderling','0','1','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','0','0','1','1','',''],
		['2016','Retired','-1','R32','Third round','0','Marcel Granollers','0','1','0','0','1','0','0','Roland Garros','Nadal','Roland Garros','0','0','1','1','',''],
		['Total','Won','1','GS','Grand Slam','0','Nobody','1','0','0','0','9','0','0','Australian Open','Djokovic','Australian Open','0','0','2','5','','1'],
		['Total','Won','1','GS','Grand Slam','0','Nobody','1','0','0','0','14','0','0','Roland Garros','Nadal','Roland Garros','0','0','1','1','','1'],
		['Total','Won','1','GS','Grand Slam','0','Nobody','1','0','0','0','5','0','0','US Open','Connors','US Open','0','0','6','0','','1'],
		['Total','Won','1','GS','Grand Slam','0','Nobody','1','0','0','0','8','0','0','Wimbledon','Federer','Wimbledon','0','0','3','6','Federer,20','1'],
		['Total','Won','1','F','Final','0','Nobody','1','0','0','1','7','0','0','Cincinnati','Federer','Masters','0','0','0','7','','1'],
		['Total','Won','1','F','Final','0','Nobody','1','0','0','1','10','0','0','Basel','Federer','ATP 500','0','0','0','4','','1'],
		['Total','Won','1','F','Final','0','Nobody','1','0','0','1','7','0','0','Buenos Aires','Vilas','ATP 250','0','0','0','7','','1'],
		['Total','Won','1','F','Final','0','Nobody','1','0','0','1','12','0','0','Barcelona','Nadal','ATP 500','0','0','0','2','','1'],
		['Total','Won','1','F','Final','0','Nobody','1','0','0','1','10','0','0','Halle','Federer','ATP 500','0','0','0','4','','1'],
		['Total','Won','1','F','Final','0','Nobody','1','0','0','1','10','0','0','Rome','Nadal','Masters','0','0','0','4','','1'],
		['Total','Won','1','F','Final','0','Nobody','1','0','0','1','8','0','0','Dubai','Federer','ATP 500','0','0','0','6','','1'],
		['Total','Won','1','GS','Grand Slam','0','Nobody','1','0','0','0','6','0','0','Australian Open','Federer','Australian Open','0','0','5','8','','1'],
		['Total','Won','1','F','Final','0','Nobody','1','0','0','1','11','0','0','Monte Carlo','Nadal','Masters','0','0','0','3','','1'],
		['Total','Won','1','GS','Grand Slam','0','Nobody','1','0','0','0','6','0','0','Roland Garros','Borg','Roland Garros','0','0','5','8','','1'],
		['Total','Won','1','GS','Grand Slam','0','Nobody','1','0','0','0','5','0','0','US Open','Sampras','US Open','0','0','6','0','','1'],
		['Total','Won','1','GS','Grand Slam','0','Nobody','1','0','0','0','5','0','0','US Open','Federer','US Open','0','0','6','0','','1'],
		['Total','Won','1','GS','Grand Slam','0','Nobody','1','0','0','0','7','0','0','Wimbledon','Sampras','Wimbledon','0','0','4','7','Sampras,14','1'],
		['Total','Won','1','GS','Grand Slam','0','Nobody','1','0','0','0','6','0','0','Wimbledon','Djokovic','Wimbledon','0','0','5','8','Djokovic,20','1'],
		['Total','Won','1','GS','Grand Slam','0','Nobody','1','0','0','0','5','0','0','Wimbledon','Borg','Wimbledon','0','0','6','0','Borg,11','1'],
		['Total','Won','1','GS','Grand Slam','0','Nobody','1','0','0','0','4','0','0','Australian Open','Agassi','Australian Open','0','0','0','0','',''],
		['Total','Won','1','GS','Grand Slam','0','Nobody','1','0','0','0','3','0','0','Australian Open','Wilander','Australian Open','0','0','0','0','',''],
		['Total','Won','1','GS','Grand Slam','0','Nobody','1','0','0','0','2','0','0','Australian Open','Sampras','Australian Open','0','0','0','0','',''],
		['Total','Won','1','GS','Grand Slam','0','Nobody','1','0','0','0','2','0','0','Australian Open','Nadal','Australian Open','0','0','0','0','',''],
		['Total','Won','1','GS','Grand Slam','0','Nobody','1','0','0','0','2','0','0','Australian Open','Lendl','Australian Open','0','0','0','0','',''],
		['Total','Won','1','GS','Grand Slam','0','Nobody','1','0','0','0','2','0','0','Australian Open','Edberg','Australian Open','0','0','0','0','',''],
		['Total','Won','1','GS','Grand Slam','0','Nobody','1','0','0','0','2','0','0','Australian Open','Becker','Australian Open','0','0','0','0','',''],
		['Total','Won','1','GS','Grand Slam','0','Nobody','1','0','0','0','1','0','0','Australian Open','Connors','Australian Open','0','0','0','0','',''],
		['Total','Won','1','GS','Grand Slam','0','Nobody','1','0','0','0','3','0','0','Roland Garros','Wilander','Roland Garros','0','0','0','0','',''],
		['Total','Won','1','GS','Grand Slam','0','Nobody','1','0','0','0','3','0','0','Roland Garros','Lendl','Roland Garros','0','0','0','0','',''],
		['Total','Won','1','GS','Grand Slam','0','Nobody','1','0','0','0','2','0','0','Roland Garros','Djokovic','Roland Garros','0','0','0','0','',''],
		['Total','Won','1','GS','Grand Slam','0','Nobody','1','0','0','0','1','0','0','Roland Garros','Federer','Roland Garros','0','0','0','0','',''],
		['Total','Won','1','GS','Grand Slam','0','Nobody','1','0','0','0','1','0','0','Roland Garros','Agassi','Roland Garros','0','0','0','0','',''],
		['Total','Won','1','GS','Grand Slam','0','Nobody','1','0','0','0','4','0','0','US Open','Nadal','US Open','0','0','0','0','',''],
		['Total','Won','1','GS','Grand Slam','0','Nobody','1','0','0','0','4','0','0','US Open','McEnroe','US Open','0','0','0','0','',''],
		['Total','Won','1','GS','Grand Slam','0','Nobody','1','0','0','0','3','0','0','US Open','Lendl','US Open','0','0','0','0','Lendl,8',''],
		['Total','Won','1','GS','Grand Slam','0','Nobody','1','0','0','0','3','0','0','US Open','Djokovic','US Open','0','0','0','0','',''],
		['Total','Won','1','GS','Grand Slam','0','Nobody','1','0','0','0','2','0','0','US Open','Edberg','US Open','0','0','0','0','',''],
		['Total','Won','1','GS','Grand Slam','0','Nobody','1','0','0','0','2','0','0','US Open','Agassi','US Open','0','0','0','0','',''],
		['Total','Won','1','GS','Grand Slam','0','Nobody','1','0','0','0','1','0','0','US Open','Wilander','US Open','0','0','0','0','Wilander,7',''],
		['Total','Won','1','GS','Grand Slam','0','Nobody','1','0','0','0','1','0','0','US Open','Becker','US Open','0','0','0','0','',''],
		['Total','Won','1','GS','Grand Slam','0','Nobody','1','0','0','0','3','0','0','Wimbledon','McEnroe','Wimbledon','0','0','0','0','McEnroe,7',''],
		['Total','Won','1','GS','Grand Slam','0','Nobody','1','0','0','0','3','0','0','Wimbledon','Becker','Wimbledon','0','0','0','0','Becker,6',''],
		['Total','Won','1','GS','Grand Slam','0','Nobody','1','0','0','0','2','0','0','Wimbledon','Nadal','Wimbledon','0','0','0','0','Nadal,22',''],
		['Total','Won','1','GS','Grand Slam','0','Nobody','1','0','0','0','2','0','0','Wimbledon','Edberg','Wimbledon','0','0','0','0','Edberg,6',''],
		['Total','Won','1','GS','Grand Slam','0','Nobody','1','0','0','0','2','0','0','Wimbledon','Connors','Wimbledon','0','0','0','0','Connors,8',''],
		['Total','Won','1','GS','Grand Slam','0','Nobody','1','0','0','0','1','0','0','Wimbledon','Agassi','Wimbledon','0','0','0','0','Agassi,8',''],
	]
};

let slider = document.getElementById("myRange");

slider.oninput = (e)=>
{
  let t = e.target.value;
  chart.animation.pause();
  chart.animation.seek(t/10 + '%');
  
};

chart.animate({
    data: Object.assign(data, { filter: record => record.Year != 'Total'}),
    config: {
        x: 'Year',
        y: 'Round2',
        color: { set: 'Result_Num', range: { min: -1, max: 1 }},
        size: null,
        orientation: 'horizontal',
        geometry: 'rectangle',
        title: 'Rafael Nadal\'s matches at the Roland Garros',
        legend: 'size'
    },
    style: {
        fontSize: 20,
        title: { fontWeight: 300, paddingTop: 50, paddingBottom:0},
            plot: {
                marker: { borderWidth: 3,
                    borderOpacity: 0,
                    colorPalette: '#1EB55FFF #AD0000FF #AEAEAEFF',
				colorGradient: "#AEAEAEFF 0.000000, #AD0000FF 0.500000, #1EB55FFF 1.000000"
				},
                paddingLeft: 20, paddingBottom: "3.5em", paddingTop: "2.5em",
            xAxis: {
                interlacing: {color: '#ffffff00' }
            },
            yAxis: {
                label: { fontSize: '120%' },
            },
        },
            logo: {width: 100},

        }
},{}),

chart.animate({

    config: {
        lightness: 'Won',
        title: 'Won 112 out of 116 ( 96.5% )', 
    },
    style: { plot: { marker: {
        maxLightness: 0,
        minLightness: 0.8 
    }}}
},{delay:4})

chart.animate({

    config: {
        lightness: 'Lost',
        title: 'Lost 3 times, retired once', 
    },
},{delay:4})

chart.animate({

    config: {
        lightness: null,
        title: '',
    },
    style: { plot: { marker: {
        maxLightness: null,
        minLightness: null 
    }}}
},{delay:4}),

chart.animate({

    config: {
        lightness: '3SetWin',
        title: '90 wins (80%) in straight sets', 
    },
    style: { plot: { marker: {
        maxLightness: 0,
        minLightness: 0.8 
    }}}
})

chart.animate({

    config: {
        lightness: 'Straightwin',
        title: 'Won 4 titles without dropping a set', 
    },
},{delay:3})

chart.animate({

    config: {
        lightness: null,
        title: '',
    },
    style: { plot: { marker: {
        maxLightness: null,
        minLightness: null 
    }}}
},{delay:4}),

chart.animate({

    config: {
        lightness: 'Novak',
        title: 'Played the most times against Djokovic - at 10 matches',
    },
    style: { plot: { marker: {
        maxLightness: 0,
        minLightness: 0.8 
    }}}
})

chart.animate({

    config: {
        lightness: 'Roger',
        title: 'Second on this list is Federer - with 6 encounters',
    }
},{delay:4})

chart.animate({

    config: {
        lightness: 'Final',
        title: 'Rafa won all of his 14 finals',
    }
},{delay:4})


chart.animate({
        data: { filter: record => record.Year != 'Total' && record.Round == 'F'},
		config: {
			y: {set: 'Round2', range: {max: 1, min: -5}},
			x: "Count",
			lightness: null,
			noop: 'Year',
			label: null,
			title: '',
		},
		style: {     
    plot: { 
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
      interlacing: {color: '#ffffff00' }
		},
		yAxis: {
			title: { color: '#ffffff00' },
			label: { color: '#ffffff00',fontSize: null},
		}
		},
	}
	},{delay:3}),
 
chart.animate({
		data: {
			filter: record => record.Year == 'Total' && record.Tournament == 'Roland Garros' && record.Player == 'Nadal'
		},
		config: {
			noop: ['Level','Round2'],
			label: ['Player','Tournament','Count'],
			y: {set: ['Player','Tournament']},
		},		
	},{duration:0}),

chart.animate({
		config: {
			noop: 'Level',
		},	
	},{duration:0}),
 
chart.animate({
		data: {
			filter: record => record.Year == 'Total' && record.Round == 'GS' && record.Top == '1'
		},
		config: {
			y: {set: ['Player','Tournament','Level'], range: {max: null, min: null}},
			title: 'Rafa won the same Grand Slam title the most times' ,
			color: 'Level',
			legend: 'color',
			noop: null,
			sort: 'byValue'
		},
		

	}),

chart.animate({
		data: {
			filter: record => record.Year == 'Total' && record.Top == '1'
		},
		config: {
			y: {set: ['Player','Tournament','Level'], range: {max: 19, min: 7}},
			x: ['Count'],
			title: 'Winning the same ATP title - Rafa is 1st, 2nd, 3rd & 4th!' ,
		},
	},{delay:5})

    chart.animate({
		data: {
			filter: record => record.Year == 'Total' && record.Round == 'GS' && record.Top == '1'
		},
		config: {
			y: {set: ['Player','Tournament','Level'], range: {max: null, min: null}},
            x: ['Count'],
			title: '' ,
			color: 'Level',
		},
		

	},{delay:5})

    chart.animate({
		config: {
			x: ['Count','Total_GS'],
            label: 'Player'
		},	
	}),

    chart.animate({
		data: {
			filter: record => record.Year == 'Total' && record.Round == 'GS'
		},
		config: {
			y: {set: ['Player'], range: {max: null, min: null}},
            x: ['Count','Tournament','Level','Total_GS'],
			title: 'Rafa also leads in the number of total Grand Slams won' ,
		},

	})

    chart.animate({
		config: {
			label: ['Total_GS'],
		},	
        style:{plot: {marker: {label: {position: 'right', color: '#999999FF' }}}}
	})
        
   