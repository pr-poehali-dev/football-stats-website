import { Card, CardContent } from "@/components/ui/card";
import { Player } from "@/data/mockData";

interface PlayerCardProps {
  player: Player;
}

const PlayerCard = ({ player }: PlayerCardProps) => {
  return (
    <Card className="bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl border border-blue-500/30 hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300 hover:border-blue-400/50">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <img
            src={player.photo}
            alt={player.name}
            className="w-20 h-20 rounded-full object-cover flex-shrink-0 ring-4 ring-blue-500/50 shadow-lg"
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-black text-white text-xl truncate">
              {player.name}⚽
            </h3>
            <p className="text-blue-300 text-lg font-bold">{player.team}</p>
            <p className="text-slate-400 text-sm font-medium">
              {player.position}
            </p>
          </div>
          <div
            className={`px-3 py-2 rounded-full text-sm font-black shadow-lg ${
              player.rating >= 9
                ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                : player.rating >= 8.5
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                  : "bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
            }`}
          >
            ⭐ {player.rating}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-blue-500/30">
          <div className="text-center bg-gradient-to-br from-green-900/40 to-emerald-900/40 p-4 rounded-xl border border-green-500/30">
            <div className="text-3xl font-black text-green-400">
              {player.goals}
            </div>
            <div className="text-xs text-green-300 uppercase tracking-wider font-bold">
              ⚽ Голы
            </div>
          </div>
          <div className="text-center bg-gradient-to-br from-blue-900/40 to-cyan-900/40 p-4 rounded-xl border border-blue-500/30">
            <div className="text-3xl font-black text-blue-400">
              {player.assists}
            </div>
            <div className="text-xs text-blue-300 uppercase tracking-wider font-bold">
              🎯 Пасы
            </div>
          </div>
          <div className="text-center bg-gradient-to-br from-purple-900/40 to-indigo-900/40 p-4 rounded-xl border border-purple-500/30">
            <div className="text-3xl font-black text-purple-400">
              {player.appearances}
            </div>
            <div className="text-xs text-purple-300 uppercase tracking-wider font-bold">
              🏃 Игры
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlayerCard;
