import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TournamentTable from "@/components/TournamentTable";
import PlayersTable from "@/components/PlayersTable";
import PlayerCard from "@/components/PlayerCard";
import TeamCard from "@/components/TeamCard";
import { players, teams } from "@/data/mockData";

const Index = () => {
  const featuredPlayers = players.slice(0, 3);
  const featuredTeams = teams.slice(0, 2);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Футбольная статистика
          </h1>
          <p className="text-gray-600 mt-2">
            Турнирные таблицы и статистика лучших игроков
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="tournament" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="tournament">Статистика турнира</TabsTrigger>
            <TabsTrigger value="players">Статистика игроков</TabsTrigger>
          </TabsList>

          <TabsContent value="tournament" className="space-y-8">
            {/* Featured Teams Section */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Топ команды
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredTeams.map((team) => (
                  <TeamCard key={team.id} team={team} />
                ))}
              </div>
            </section>

            {/* Tournament Table */}
            <section>
              <TournamentTable />
            </section>
          </TabsContent>

          <TabsContent value="players" className="space-y-8">
            {/* Featured Players Section */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Лучшие игроки
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {featuredPlayers.map((player) => (
                  <PlayerCard key={player.id} player={player} />
                ))}
              </div>
            </section>

            {/* Players Table */}
            <section>
              <PlayersTable />
            </section>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
