import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { teams } from "@/data/mockData";

const FormIndicator = ({ form }: { form: string[] }) => (
  <div className="flex gap-1">
    {form.map((result, index) => (
      <div
        key={index}
        className={`w-4 h-4 text-xs flex items-center justify-center rounded-sm font-medium ${
          result === "W"
            ? "bg-green-100 text-green-700"
            : result === "D"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-red-100 text-red-700"
        }`}
      >
        {result}
      </div>
    ))}
  </div>
);

const TournamentTable = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900">
          Турнирная таблица
        </h2>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead className="w-12 text-center">#</TableHead>
            <TableHead>Команда</TableHead>
            <TableHead className="text-center w-12">И</TableHead>
            <TableHead className="text-center w-12">В</TableHead>
            <TableHead className="text-center w-12">Н</TableHead>
            <TableHead className="text-center w-12">П</TableHead>
            <TableHead className="text-center w-16">З-П</TableHead>
            <TableHead className="text-center w-12">РМ</TableHead>
            <TableHead className="text-center w-12">О</TableHead>
            <TableHead className="w-24">Форма</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teams.map((team) => (
            <TableRow key={team.id} className="hover:bg-gray-50">
              <TableCell className="text-center font-medium text-gray-900">
                {team.position}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <img
                    src={team.logo}
                    alt={team.name}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span className="font-medium text-gray-900">{team.name}</span>
                </div>
              </TableCell>
              <TableCell className="text-center text-gray-600">
                {team.played}
              </TableCell>
              <TableCell className="text-center text-gray-600">
                {team.won}
              </TableCell>
              <TableCell className="text-center text-gray-600">
                {team.drawn}
              </TableCell>
              <TableCell className="text-center text-gray-600">
                {team.lost}
              </TableCell>
              <TableCell className="text-center text-gray-600">
                {team.goalsFor}-{team.goalsAgainst}
              </TableCell>
              <TableCell className="text-center font-medium text-gray-900">
                {team.goalDifference > 0 ? "+" : ""}
                {team.goalDifference}
              </TableCell>
              <TableCell className="text-center font-bold text-gray-900">
                {team.points}
              </TableCell>
              <TableCell>
                <FormIndicator form={team.form} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TournamentTable;
