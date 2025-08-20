import { query } from '$app/server';

export const getMusics = query(async () => {
	const tracks = [
		{
			name: 'I tried to act your age',
			album: 'I tried to act your age',
			artist: 'Chrissy Costanza',
			duration: '3:56',
			lyrics: null
		},
		{
			name: 'If Looks Could Kill',
			album: 'If Looks Could Kill',
			artist: 'Chrissy Costanza',
			duration: '3:08',
			lyrics: 'synced'
		},
		{
			name: 'Perfect Crime',
			album: 'Perfect Crime',
			artist: 'Chrissy Costanza',
			duration: '2:41',
			lyrics: 'unsynced'
		},
		{
			name: 'But, What If I Fly?',
			album: 'VII',
			artist: 'Chrissy Costanza',
			duration: '3:20',
			lyrics: null
		},
		{
			name: 'Pick Your Poison',
			album: 'VII',
			artist: 'Chrissy Costanza',
			duration: '3:15',
			lyrics: 'synced'
		},
		{
			name: 'If Looks Could Kill',
			album: 'VII',
			artist: 'Chrissy Costanza',
			duration: '3:08',
			lyrics: null
		},
		{
			name: 'Nasty',
			album: 'Detox',
			artist: 'ONE OK ROCK',
			duration: '3:45',
			lyrics: 'synced'
		},
		{
			name: 'Dystopia',
			album: 'Detox',
			artist: 'ONE OK ROCK',
			duration: '3:30',
			lyrics: 'unsynced'
		},
		{
			name: 'Tropical Therapy',
			album: 'Detox',
			artist: 'ONE OK ROCK',
			duration: '3:50',
			lyrics: null
		},
		{
			name: 'Make It Out Alive',
			album: 'Make It Out Alive',
			artist: 'ONE OK ROCK',
			duration: '4:00',
			lyrics: 'synced'
		},
		{
			name: 'Vandalize',
			album: 'Vandalize',
			artist: 'ONE OK ROCK',
			duration: '3:30',
			lyrics: null
		},
		{
			name: 'Casulties Of Your Dreams',
			album: 'SUCKERPUNCH',
			artist: 'Maggie Lindemann',
			duration: '3:20',
			lyrics: null
		},
		{
			name: "I'm So Lonely With You",
			album: 'SUCKERPUNCH',
			artist: 'Maggie Lindemann',
			duration: '3:20',
			lyrics: null
		},
		{
			name: 'Binary Data I',
			album: 'Binary Data Vol. 1',
			artist: 'Alphonso Peduto',
			duration: '7:46',
			lyrics: null
		},
		{
			name: 'Binary Data II',
			album: 'Binary Data Vol. 1',
			artist: 'Alphonso Peduto',
			duration: '6:30',
			lyrics: null
		},
		{
			name: 'Binary Data III',
			album: 'Binary Data Vol. 1',
			artist: 'Alphonso Peduto',
			duration: '5:15',
			lyrics: null
		},
		{
			name: 'Binary Data IV',
			album: 'Binary Data Vol. 1',
			artist: 'Alphonso Peduto',
			duration: '4:50',
			lyrics: null
		}
	];

	return tracks;
});
