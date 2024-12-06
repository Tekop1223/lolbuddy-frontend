interface RankProps {
    tier: string;
    rank: string;
    leaguePoints: number;
    wins: number;
    losses: number;
}

export function RankCard ({ tier, rank, leaguePoints, wins, losses }: RankProps) {
    return (
        <div className="p-4 m-4 bg-gray-800 shadow-md rounded-lg flex items-center space-x-4 max-w-xs">
            <div>
                <img src={`/datadragon/14.23.1/img/ranked-emblems/Rank=${tier}.png`} alt="Rank emblem" className="w-16 h-16"/>
            </div>
            <div className="flex flex-col flex-grow">
                <div className="flex justify-between w-full">
                    <p className="text-sm text-gray-200">{tier} {rank}</p>
                    <p className="text-sm text-gray-200">{leaguePoints} LP</p>
                </div>
                <p className="text-sm text-gray-400">{wins}W - {losses}L</p>
            </div>
        </div>
    );
}