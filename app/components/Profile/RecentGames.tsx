interface RecentGamesProps {
    //info.
    gameDuration: number;
    queueId: number;
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
// // queueId = gametype 
// 400 = Normal Draft Pick, 420 = Ranked Solo/Duo, 430 = Normal blind pick, 440 = Ranked Flex, 450 = ARAM,
const getGameType = (queueId: number): string => {
    switch(queueId) {
        case 400:
            return "Normal Draft Pick";
        case 420:
            return "Ranked";
        case 430:
            return "Normal blind pick";
        case 440:
            return "Ranked Flex";
        case 450:
            return "ARAM";
        default:
            return "Unknown";
    }
}
// // teamId = side of the map
// 100 = blue side, 200 = red side


const formatGameDuration = (gameDuration: number): string => {
    const minutes = Math.floor(gameDuration / 60);
    const seconds = gameDuration % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}


export function RecentGamesCard ({gameDuration, queueId, kills, deaths, assists, kda, champLevel, championId, championName, visionScore}: RecentGamesProps) {
    const gameType = getGameType(queueId);
    const formattedGameDuration = formatGameDuration(gameDuration);
    return (
    <div className="p-4 m-4 bg-gray-800 shadow-md rounded-lg flex items-center space-x-4">
        <div>
            <p className="text-m text-bold text-white">{gameType}</p>
            <p className="text-sm text-gray-400 text-center">{formattedGameDuration}</p>
        </div>
        <div className="relative">
            <img src={`/datadragon/14.23.1/img/champion/${championName}.png`} alt="Champion icon" className="w-16 h-16 rounded-lg"/>
            <div className="absolute bottom-0 left-0 bg-gray-700 text-gray-200 text-xs rounded px-1">
                {champLevel}
            </div>
        </div>
        <div>
            <h2 className="text-lg text-gray-200">{championName}</h2>
            
        
            <p className="text-sm text-gray-400">K/D/A: {kills} / {deaths} / {assists}</p>
            <p className="text-sm text-gray-400">KDA: {kda}</p>
            <p className="text-sm text-gray-400">Vision Score: {visionScore}</p>
        </div>
    
    </div>
    );
}