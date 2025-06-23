import { Card, CardContent } from "@/components/ui/card";
import { Team } from "@/data/mockData";

interface TeamCardProps {
  team: Team;
}

const FormIndicator = ({ form }: { form: string[] }) => (
  <div className="flex gap-2">
    {form.map((result, index) => (
      <div
        key={index}
        className={`w-8 h-8 text-sm flex items-center justify-center rounded-full font-black shadow-lg transform hover:scale-110 transition-transform ${
          result === "W"
            ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
            : result === "D"
              ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
              : "bg-gradient-to-r from-red-500 to-rose-500 text-white"
        }`}
      >
        {result}
      </div>
    ))}
  </div>
);

const TeamCard = ({ team }: TeamCardProps) => {
  return (
    <Card className="bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl border border-green-500/30 hover:shadow-green-500/20 hover:scale-105 transition-all duration-300 hover:border-green-400/50">
      <CardContent className="p-8">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <img
              src={team.logo}
              alt={team.name}
              className="w-16 h-16 rounded-full object-cover ring-4 ring-green-500/50 shadow-lg"
            />
            <div>
              <h3 className="font-black text-white text-2xl">{team.name} 🏆</h3>
              <p className="text-green-300 text-lg font-bold">
                {team.position} место
              </p>
            </div>
          </div>
          <div className="text-right bg-gradient-to-br from-yellow-500/20 to-orange-500/20 p-4 rounded-xl border border-yellow-500/30">
            <div className="text-4xl font-black text-yellow-400">
              {team.points}
            </div>
            <div className="text-xs text-yellow-300 uppercase tracking-wider font-bold">
              Очки
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="text-center p-4 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl border border-slate-600/50">
            <div className="text-2xl font-black text-white">
              <span className="text-green-400">{team.goalsFor}</span>-
              <span className="text-red-400">{team.goalsAgainst}</span>
            </div>
            <div className="text-xs text-slate-300 uppercase tracking-wider font-bold">
              ⚽ Голы
            </div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl border border-slate-600/50">
            <div
              className={`text-2xl font-black ${
                team.goalDifference > 0
                  ? "text-green-400"
                  : team.goalDifference < 0
                    ? "text-red-400"
                    : "text-yellow-400"
              }`}
            >
              {team.goalDifference > 0 ? "+" : ""}
              {team.goalDifference}
            </div>
            <div className="text-xs text-slate-300 uppercase tracking-wider font-bold">
              📊 Разность
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-slate-400 uppercase tracking-wider mb-2 font-bold">
              🔥 Последние игры
            </div>
            <FormIndicator form={team.form} />
          </div>
          <div className="text-right">
            <div className="text-lg font-black text-slate-300">
              <span className="text-green-400">{team.won}В</span>{" "}
              <span className="text-yellow-400">{team.drawn}Н</span>{" "}
              <span className="text-red-400">{team.lost}П</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamCard;
