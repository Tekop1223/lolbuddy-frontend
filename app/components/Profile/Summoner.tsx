interface SummonerProps {
    profileIconId: number;
    gameName: string;
    tagLine: string;
    summonerLevel: number;
}

export function SummonerCard({ gameName, tagLine, summonerLevel, profileIconId }: SummonerProps) {
    return (
        <div className="p-4">
            <img src={`/datadragon/14.23.1/img/profileicon/${profileIconId}.png`} alt="Profile icon" className="w-16 h-16 "/>

            <div>
                <h2 className="text-xl">{gameName}</h2>
                <p className="text-sm">{tagLine}</p>
                <p className="text-sm">{summonerLevel}</p>
            </div>
        </div>
    );

}