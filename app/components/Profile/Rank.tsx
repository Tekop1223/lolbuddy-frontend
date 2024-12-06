interface RankProps {
    tier: string;
    rank: string;
    leaguePoints: number;
    wins: number;
    losses: number;
}

export function RankCard ({ tier, rank, leaguePoints, wins, losses }: RankProps) {
    return (
        <div className="p-4">
            <div>
                <h2 className="text-xl">{tier} {rank}</h2>
                <p className="text-sm">{leaguePoints} LP</p>
                <p className="text-sm">{wins}W, {losses}L</p>
            </div>
        </div>
    );
}