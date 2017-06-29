export class EntriesService {
	public static readonly SERVICE_NAME = 'entriesService';

	public getData(): any[] {
		return [
			{
				name: "Zeratul",
				race: 'Protoss',
				tribe: 'Nerazim',
				role: 'Intelligence',
				description: 'During the Great War, Zeratul allied with the Khalai Tassadar, despite his hatred for the Conclave that once banished his forbears. The Dark Templar personally slew the cerebrate Zasz, but in turn accidentally gave the Overmind the location of Aiur.',
				dob: '1865',
				dod: '2506',
				photo: 'https://vignette1.wikia.nocookie.net/starcraft/images/2/21/Zeratul_SC2_Story1.jpg/revision/latest/scale-to-width-down/350?cb=20100717001230'
			},
			{
				name: "Tassadar",
				race: 'Protoss',
				tribe: 'Templar',
				role: 'Judge',
				description: 'Tassadar, Savior of the Templar was a protoss high templar and executor in charge of the expeditionary force which made first contact with the zerg. His forces also made first contact with the terrans when they sterilized the surface of Chau Sara in an effort to stem the growth of the zerg. Tassadar was extremely reluctant to sacrifice the terrans in order to destroy the zerg. He eventually lost his position as executor for sparing the terrans',
				dob: '2143',
				dod: '2500',
				photo: 'https://vignette1.wikia.nocookie.net/starcraft/images/0/06/Tassadar_SCR_Head1.jpg/revision/latest/scale-to-width-down/180?cb=20170513024219'
			},
			{
				name: "Jim Raynor",
				race: 'Terran',
				tribe: 'Confederacy',
				role: 'Intelligence',
				description: 'James Eugene "Jim" Raynor is a former terran marshal turned rebel, who has become one of the major figures in the Koprulu sector through his work to bring down the Confederacy and, later, in the struggle against the Confederacy\'s successor, the Dominion. Raynor is one of the few terrans to engage in a long-term alliance with the protoss',
				dob: '2470',
				dod: 'alive',
				photo: 'https://vignette4.wikia.nocookie.net/starcraft/images/a/ad/JimRaynor_SC2_Head2.jpg/revision/latest/scale-to-width-down/328?cb=20151129213613'
			}
		];
	}
}
