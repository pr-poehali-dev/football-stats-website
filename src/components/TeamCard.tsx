import { Card, CardContent } from "@/components/ui/card";
import { Team } from "@/data/mockData";

interface TeamCardProps {
  team: Team;
}

const FormIndicator = ({ form }: { form: string[] }) => (
  <div className="flex gap-1">
    {form.map((result, index) => (
      <div
        key={index}
        className={`w-6 h-6 text-xs flex items-center justify-center rounded-full font-medium ${
          result === "W"
            ? "bg-green-500 text-white"
            : result === "D"
              ? "bg-yellow-500 text-white"
              : "bg-red-500 text-white"
        }`}
      >
        {result}
      </div>
    ))}
  </div>
);

const TeamCard = ({ team }: TeamCardProps) => {
  return (
    <Card className="bg-white shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <img
              src={team.logo}
              alt={team.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-gray-900 text-lg">
                {team.name}
              </h3>
              <p className="text-gray-600 text-sm">{team.position} место</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-gray-900">
              {team.points}
            </div>
            <div className="text-xs text-gray-500 uppercase tracking-wide">
              Очки
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <div className="text-lg font-semibold text-gray-900">
              {team.goalsFor}-{team.goalsAgainst}
            </div>
            <div className="text-xs text-gray-500 uppercase tracking-wide">
              Голы
            </div>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <div className="text-lg font-semibold text-gray-900">
              {team.goalDifference > 0 ? "+" : ""}
              {team.goalDifference}
            </div>
            <div className="text-xs text-gray-500 uppercase tracking-wide">
              Разность
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
              Последние игры
            </div>
            <FormIndicator form={team.form} />
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-600">
              {team.won}В {team.drawn}Н {team.lost}П
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamCard;
