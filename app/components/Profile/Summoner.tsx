interface SummonerProps {
    profileIconId: number;
    gameName: string;
    tagLine: string;
    summonerLevel: number;
}

export function SummonerCard({ gameName, tagLine, summonerLevel, profileIconId }: SummonerProps) {
    return (
        <div className="p-4 m-4 bg-container-color shadow-md rounded-lg flex items-center space-x-4">
            <div className="relative flex flex-col items-center">
                <div className="absolute top-0 transform -translate-y-1/2 px-2 py-0.8 bg-gray-700 text-gray-200 text-xs rounded border-2 border-gray-300">
                    {summonerLevel}
                </div>
                <img src={`/datadragon/14.23.1/img/profileicon/${profileIconId}.png`} alt="Profile icon" className="w-16 h-16 rounded-lg border-2 border-gray-300 "/>
            </div>
            <div className="flex flex-row items-center space-x-2 align">
                <div className="text-xl font-semibold text-gray-200">{gameName}</div>
                <div className="text-sm text-gray-500">#{tagLine}</div>
            </div>
        </div>
    );

}