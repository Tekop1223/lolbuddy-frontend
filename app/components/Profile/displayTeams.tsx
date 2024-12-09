import gameData from './game_example.json';
import { RecentGamesCard } from './RecentGames';
import { OtherSummonersCard } from './otherSummoners';

interface Participant {
    teamId: number;
    teamPosition: string;
    riotIdGameName: string;
    championName: string;
}

const sortByRole = (team: Participant[]): Participant[] => {
    const roleOrder = ['TOP', 'JUNGLE', 'MIDDLE', 'BOTTOM', 'SUPPORT'];
    return team.sort((a, b) => roleOrder.indexOf(a.teamPosition) - roleOrder.indexOf(b.teamPosition));
};

const blueTeam = gameData.info.participants.filter(participant => participant.teamId === 100);
const redTeam = gameData.info.participants.filter(participant => participant.teamId === 200);

const sortedBlueTeam = sortByRole(blueTeam);
const sortedRedTeam =sortByRole(redTeam);

const displayTeams = () => {
    return (
        <div className="flex justify-between">
            <div>
                {sortedBlueTeam.map((participant: Participant, index: number) => (
                    <OtherSummonersCard
                        key={index}
                        gameName={participant.riotIdGameName}
                        championName={participant.championName}
                    />
                ))}
            </div>
            <div>
                {sortedRedTeam.map((participant: Participant, index: number) => (
                    <OtherSummonersCard
                        key={index}
                        gameName={participant.riotIdGameName}
                        championName={participant.championName}
                    />
                ))}
            </div>
        </div>
    )
}