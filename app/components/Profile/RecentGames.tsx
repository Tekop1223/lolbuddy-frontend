interface RecentGamesProps {
    //info.
    gameDuration: number;
    //info.participants.
    kills: number;
    deaths: number;
    assists: number;
    kda: number;
    champLevel: number;
    championId: number;
    championName: string;
    visionScore: number;
}

export function RecentGamesCard ({gameDuration, kills, deaths, assists, kda, champLevel, championId, championName, visionScore}: RecentGamesProps) {
    return (
    <div className="p-4">
        <div>
            <img src={`/datadragon/14.23.1/img/champion/${championId}.png`} alt="Champion icon" className="w-12 h-12"/>
            <h2>lv.{champLevel}, {championName}</h2>
            <p>{gameDuration}</p>
            <p>{kills}/{deaths}/{assists}</p>
            <p>{kda}</p>
            <p>{visionScore}</p>
        </div>
    
    </div>
    );
}